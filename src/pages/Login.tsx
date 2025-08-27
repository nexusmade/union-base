import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic with Supabase
    console.log("Login attempt:", { email, password });
  };

  return (
    <>
      <SEO title="Log In" description="Log in to your Clubroom account and manage your student clubs." />
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border border-black/[0.08] dark:border-white/[0.08]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-black dark:text-white">
                Welcome back
              </CardTitle>
              <CardDescription className="text-zinc-600 dark:text-zinc-400">
                Log in to your Clubroom account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black dark:text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-black/[0.08] dark:border-white/[0.08]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-black dark:text-white">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-black/[0.08] dark:border-white/[0.08]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
                >
                  Log In
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Don't have an account?{" "}
                  <Link 
                    to="/signup" 
                    className="text-black dark:text-white font-medium hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
}