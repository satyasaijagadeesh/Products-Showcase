import type { Metadata } from "next";
import { CartContent } from "./cart-content";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review your shopping cart and proceed to checkout.",
};

export default function CartPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-8">Shopping Cart</h1>
        <CartContent />
      </div>
    </div>
  );
}
