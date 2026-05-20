"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Star, ShoppingBag, ChevronLeft, Truck, Shield, Check } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart, items } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const itemInCart = items.find((item) => item.product.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Product Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="flex-1">
            {/* Category */}
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-500 text-yellow-500"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-3xl font-semibold mt-6">
              ${product.price.toLocaleString()}
            </p>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mt-6">
              <div
                className={`h-2 w-2 rounded-full ${
                  product.inStock ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <span className="text-sm">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Add to Cart */}
            <div className="mt-8 space-y-4">
              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {isAdded ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>

              {itemInCart && (
                <p className="text-sm text-center text-muted-foreground">
                  {itemInCart.quantity} already in your cart
                </p>
              )}
            </div>

            {/* Features */}
            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">2 year warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
