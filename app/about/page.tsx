import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Volt - our mission to deliver premium electronics and exceptional customer service since 2020.",
};

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "100+", label: "Products" },
  { value: "4.8", label: "Average Rating" },
  { value: "24/7", label: "Customer Support" },
];

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Emily Park",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
];

const values = [
  {
    title: "Quality First",
    description: "Every product meets our rigorous standards for performance and reliability.",
  },
  {
    title: "Customer Obsessed",
    description: "Your satisfaction drives everything we do, from selection to support.",
  },
  {
    title: "Innovation Driven",
    description: "We constantly seek the latest advancements in audio and tech.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-6">Our Story</p>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
                Crafting the future
                <br />
                <span className="text-muted-foreground">of sound</span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                At Volt, we believe that technology should enhance your life, not complicate it. 
                Since 2020, we&apos;ve been curating the finest electronics and accessories, 
                focusing on quality, design, and customer satisfaction.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our team of experts carefully selects each product to ensure it meets our 
                high standards for performance and reliability.
              </p>
              <div className="mt-10">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground hover:text-accent transition-colors"
                >
                  Get in Touch
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="Modern tech workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">Our Values</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                What drives us
                <br />
                <span className="text-muted-foreground">every day</span>
              </h2>
            </div>
            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={value.title} className="flex gap-6 pb-8 border-b border-border last:border-0">
                  <span className="text-4xl font-bold text-accent/30">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-6">Our Mission</p>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance max-w-4xl mx-auto leading-tight">
            To make premium technology accessible to everyone
          </h2>
          <p className="mt-8 text-lg text-background/60 max-w-2xl mx-auto leading-relaxed">
            We believe that great products shouldn&apos;t come with complexity. That&apos;s why we focus on 
            simplicity, quality, and an exceptional customer experience at every step.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">The Team</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Meet the people</h2>
            <p className="mt-4 text-muted-foreground">
              Behind every great product is an even greater team
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to Explore?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Discover our carefully curated collection of premium electronics and accessories.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="h-14 px-10 text-base">
              <Link href="/products">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
