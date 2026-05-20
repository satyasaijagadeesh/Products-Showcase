"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Plus } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className={cn(
        "group block",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Quick add button */}
        <button
          className="absolute bottom-4 right-4 w-10 h-10 bg-foreground text-background flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          onClick={handleAddToCart}
          aria-label="Add to cart"
        >
          <Plus className="h-5 w-5" />
        </button>

        {/* Category tag */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 text-foreground text-xs font-medium uppercase tracking-wider">
          {product.category}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-foreground group-hover:text-accent transition-colors line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span>{product.rating}</span>
          </div>
        </div>
        <p className="text-lg font-bold text-foreground">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
