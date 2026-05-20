import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts, categories } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=80"
            alt="Premium headphones"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-6">
              New Collection 2026
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-balance">
              Sound that
              <br />
              <span className="text-accent">moves</span> you
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Premium audio equipment and accessories designed for those who demand excellence in every detail.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base">
                <Link href="/products">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="h-14 px-8 text-base border-foreground/20 hover:bg-foreground/10">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-3">Categories</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Shop by Category</h2>
            </div>
            <Link 
              href="/products" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4">
            {categories.slice(1).map((category, index) => (
              <Link
                key={category}
                href={`/products?category=${category}`}
                className="group relative aspect-[3/4] overflow-hidden bg-secondary"
              >
                <Image
                  src={
                    category === "Audio"
                      ? "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"
                      : category === "Wearables"
                      ? "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
                      : "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80"
                  }
                  alt={category}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">0{index + 1}</span>
                  <h3 className="mt-2 text-2xl lg:text-3xl font-bold text-white tracking-tight">{category}</h3>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/80 group-hover:text-white transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-3">Featured</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Best Sellers</h2>
            </div>
            <Link 
              href="/products" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Button variant="outline" asChild className="border-foreground/20">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Marquee / Brand Statement */}
      <section className="py-16 border-y border-border overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-6xl lg:text-8xl font-bold tracking-tighter text-foreground/10 mx-8">
              PREMIUM AUDIO &bull; INNOVATIVE DESIGN &bull; EXCEPTIONAL QUALITY &bull;
            </span>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Our workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">Our Philosophy</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Crafted for those who
                <br />
                <span className="text-muted-foreground">listen differently</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We believe great sound should be accessible to everyone. Our team of engineers and designers work tirelessly to create products that deliver exceptional audio quality without compromise.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-8 py-8 border-y border-border">
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-accent">50K+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Happy customers</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-accent">2yr</p>
                  <p className="mt-1 text-sm text-muted-foreground">Warranty</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-accent">24/7</p>
                  <p className="mt-1 text-sm text-muted-foreground">Support</p>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="outline" asChild className="border-foreground/20 hover:bg-foreground/10">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance">
            Ready to experience
            <br />
            premium sound?
          </h2>
          <p className="mt-6 text-lg text-background/60 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have elevated their audio experience with Volt.
          </p>
          <div className="mt-10">
            <Button size="lg" variant="secondary" asChild className="h-14 px-10 text-base bg-background text-foreground hover:bg-background/90">
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
