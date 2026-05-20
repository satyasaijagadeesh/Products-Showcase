"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Shop", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter uppercase">Volt</span>
            <span className="text-accent">.</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
          <Link
            href={isAuthenticated ? "/account" : "/login"}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">
              {isAuthenticated ? `Account (${user?.name})` : "Login"}
            </span>
          </Link>

          <Link href="/cart" className="relative group">
            <ShoppingBag className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
            <span className="sr-only">Shopping cart</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-background" />
          <div className="fixed inset-0 z-50 flex flex-col bg-background px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-2xl font-bold tracking-tighter uppercase">Volt</span>
                <span className="text-accent">.</span>
              </Link>
              <button
                type="button"
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-16 flex-1">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block py-4 text-4xl font-bold tracking-tight transition-colors border-b border-border",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="border-t border-border pt-6 space-y-4">
              <Link
                href={isAuthenticated ? "/account" : "/login"}
                className="flex items-center justify-between py-3 text-lg font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <User className="h-5 w-5" />
                  {isAuthenticated ? user?.name : "Login"}
                </span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/cart"
                className="flex items-center justify-between py-3 text-lg font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5" />
                  Cart {totalItems > 0 && `(${totalItems})`}
                </span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
