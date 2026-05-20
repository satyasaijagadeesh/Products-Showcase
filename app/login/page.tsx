import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your account or continue as a guest.",
};

export default function LoginPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-md px-4 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Welcome Back</h1>
          <p className="mt-2 text-muted-foreground">
            Sign in to your account or continue as a guest
          </p>
        </div>
        <Suspense fallback={<div className="flex items-center justify-center py-8">Loading…</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
