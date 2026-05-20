"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products, categories, searchProducts, getProductsByCategory } from "@/lib/products";
import { cn } from "@/lib/utils";

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = searchQuery
      ? searchProducts(searchQuery)
      : getProductsByCategory(selectedCategory);

    if (searchQuery && selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("featured");
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "All" || sortBy !== "featured";

  return (
    <div className="grid lg:grid-cols-4 gap-12">
      {/* Sidebar Filters - Desktop */}
      <aside className="hidden lg:block lg:col-span-1">
        <div className="sticky top-28 space-y-8">
          {/* Search */}
          <div>
            <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3 block">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-0 focus-visible:ring-accent"
              />
            </div>
          </div>

          {/* Categories */}
          <div>
            <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              Category
            </label>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "w-full text-left px-4 py-3 text-sm transition-all border-l-2",
                    selectedCategory === category
                      ? "border-accent text-foreground bg-secondary/50"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                  )}
                >
                  {category}
                  <span className="float-right text-xs opacity-50">
                    {category === "All"
                      ? products.length
                      : products.filter((p) => p.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full px-4 py-3 bg-secondary border-0 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {hasActiveFilters && (
            <Button variant="outline" className="w-full border-foreground/20 hover:bg-foreground/10" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:col-span-3">
        {/* Mobile Search & Filter Toggle */}
        <div className="lg:hidden space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary border-0"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1 border-foreground/20"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            {hasActiveFilters && (
              <Button variant="outline" className="border-foreground/20" onClick={clearFilters}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Mobile Filters Panel */}
          {showFilters && (
            <div className="p-6 bg-secondary space-y-6">
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3 block">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "px-4 py-2 text-sm transition-colors",
                        selectedCategory === category
                          ? "bg-foreground text-background"
                          : "bg-background text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3 block">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full px-4 py-3 bg-background border-0 text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-8">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          {searchQuery && ` for "${searchQuery}"`}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-border">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
            <Button variant="outline" className="mt-6 border-foreground/20" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
