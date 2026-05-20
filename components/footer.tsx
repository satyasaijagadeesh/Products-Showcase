import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "All Products", href: "/products" },
    { name: "Audio", href: "/products?category=Audio" },
    { name: "Wearables", href: "/products?category=Wearables" },
    { name: "Accessories", href: "/products?category=Accessories" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "FAQ", href: "/contact" },
    { name: "Shipping", href: "/contact" },
    { name: "Returns", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter uppercase">Volt</span>
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Premium electronics and accessories for the modern lifestyle. Quality you can trust, design you&apos;ll love.
            </p>
            <div className="mt-8">
              <Link 
                href="/products" 
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground hover:text-accent transition-colors"
              >
                Explore Products
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Shop</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Company</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Support</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Volt. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
