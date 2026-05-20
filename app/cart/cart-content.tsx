"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";

export function CartContent() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { isAuthenticated, isGuest } = useAuth();

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">
          Looks like you haven&apos;t added any items to your cart yet.
        </p>
        <Button asChild>
          <Link href="/products">
            Start Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    );
  }

  const shipping = totalPrice >= 100 ? 0 : 9.99;
  const finalTotal = totalPrice + shipping;

  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex gap-4 p-4 bg-card rounded-lg border border-border"
          >
            {/* Product Image */}
            <Link
              href={`/products/${item.product.id}`}
              className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-secondary"
            >
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </Link>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Link
                    href={`/products/${item.product.id}`}
                    className="font-medium hover:text-muted-foreground transition-colors line-clamp-1"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {item.product.category}
                  </p>
                </div>
                <p className="font-semibold whitespace-nowrap">
                  ${(item.product.price * item.quantity).toLocaleString()}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                    className="h-8 w-8 rounded-md border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                    className="h-8 w-8 rounded-md border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Clear Cart */}
        <div className="pt-4">
          <Button variant="outline" size="sm" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>
                {shipping === 0 ? (
                  <span className="text-green-600">Free</span>
                ) : (
                  `$${shipping.toFixed(2)}`
                )}
              </span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-muted-foreground">
                Add ${(100 - totalPrice).toFixed(2)} more for free shipping
              </p>
            )}
            <div className="border-t border-border pt-3 mt-3">
              <div className="flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>${finalTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {!isAuthenticated && !isGuest ? (
              <>
                <Button asChild className="w-full">
                  <Link href="/login?redirect=/cart">
                    Login to Checkout
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login?guest=true&redirect=/cart">
                    Continue as Guest
                  </Link>
                </Button>
              </>
            ) : (
              <Button className="w-full" onClick={() => alert("Checkout functionality would be implemented here!")}>
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Security Note */}
          <p className="text-xs text-muted-foreground text-center mt-4">
            Secure checkout with SSL encryption
          </p>
        </div>
      </div>
    </div>
  );
}
