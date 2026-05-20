import type { Metadata } from "next";
import { AccountContent } from "./account-content";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your account settings and view your order history.",
};

export default function AccountPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-8">My Account</h1>
        <AccountContent />
      </div>
    </div>
  );
}
