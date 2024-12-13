"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-navy py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-navy/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy dark:text-white">Welcome back</h2>
          <p className="mt-2 text-navy/70 dark:text-white/70">Sign in to your account</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy dark:text-white mb-2">
              Email address
            </label>
            <div className="mt-1 relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white dark:bg-navy/50 border-2 border-navy/20 dark:border-white/20 focus:border-gold focus:ring-gold text-navy dark:text-white placeholder:text-navy/40 dark:placeholder:text-white/40"
                placeholder="Enter your email"
              />
              <Mail className="h-5 w-5 text-navy/40 dark:text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-navy dark:text-white mb-2">
              Password
            </label>
            <div className="mt-1 relative">
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-white dark:bg-navy/50 border-2 border-navy/20 dark:border-white/20 focus:border-gold focus:ring-gold text-navy dark:text-white placeholder:text-navy/40 dark:placeholder:text-white/40"
                placeholder="Enter your password"
              />
              <Lock className="h-5 w-5 text-navy/40 dark:text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href="/auth/forgot-password" className="text-gold hover:text-gold/80">
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button className="w-full bg-navy hover:bg-navy/90 dark:bg-gold dark:hover:bg-gold/90 text-white dark:text-navy">
            Sign in
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-navy/70 dark:text-white/70">
            Don&apos;t have an account?{" "}
            <Link href="/auth/get-started" className="text-gold hover:text-gold/80 font-medium">
              Get started
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
