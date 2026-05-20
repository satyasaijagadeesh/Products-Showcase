"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { User, ShoppingBag, LogOut } from "lucide-react";
import Link from "next/link";

export function AccountContent() {
  const router = useRouter();
  const { user, isAuthenticated, isGuest, logout } = useAuth();
  const { totalItems } = useCart();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!isAuthenticated && !isGuest) {
    return (
      <div className="text-center py-16">
        <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Please sign in</h2>
        <p className="text-muted-foreground mb-6">
          Sign in to access your account and view your orders.
        </p>
        <Button asChild>
          <Link href="/login?redirect=/account">Sign In</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* User Info */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
            <User className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              {isGuest ? "Guest User" : user?.name}
            </h2>
            <p className="text-muted-foreground">
              {isGuest ? "Shopping as guest" : user?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          href="/cart"
          className="bg-card rounded-lg border border-border p-6 hover:bg-secondary/50 transition-colors"
        >
          <ShoppingBag className="h-8 w-8 text-muted-foreground mb-3" />
          <h3 className="font-semibold">Shopping Cart</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {totalItems > 0
              ? `${totalItems} item${totalItems > 1 ? "s" : ""} in your cart`
              : "Your cart is empty"}
          </p>
        </Link>

        <Link
          href="/products"
          className="bg-card rounded-lg border border-border p-6 hover:bg-secondary/50 transition-colors"
        >
          <ShoppingBag className="h-8 w-8 text-muted-foreground mb-3" />
          <h3 className="font-semibold">Continue Shopping</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Browse our latest products
          </p>
        </Link>
      </div>

      {/* Account Actions */}
      <div className="pt-4 border-t border-border">
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          {isGuest ? "Exit Guest Mode" : "Sign Out"}
        </Button>
      </div>
    </div>
  );
}
