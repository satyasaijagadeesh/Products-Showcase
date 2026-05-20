import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsContent } from "./products-content";

export const metadata: Metadata = {
  title: "Shop All Products",
  description: "Browse our complete collection of premium electronics and accessories. Find headphones, smart watches, speakers, keyboards, and more.",
};

export default function ProductsPage() {
  return (
    <div className="pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-3">Collection</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">All Products</h1>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Browse our complete collection of premium electronics and accessories
          </p>
        </div>

        <Suspense fallback={<ProductsLoadingSkeleton />}>
          <ProductsContent />
        </Suspense>
      </div>
    </div>
  );
}

function ProductsLoadingSkeleton() {
  return (
    <div className="grid lg:grid-cols-4 gap-12">
      <div className="lg:col-span-1">
        <div className="h-64 bg-secondary animate-pulse" />
      </div>
      <div className="lg:col-span-3">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square bg-secondary animate-pulse" />
              <div className="h-4 bg-secondary animate-pulse" />
              <div className="h-4 bg-secondary w-2/3 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
