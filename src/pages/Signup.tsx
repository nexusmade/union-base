import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    school: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic with Supabase
    console.log("Signup attempt:", formData);
  };

  return (
    <>
      <SEO title="Sign Up" description="Create your Clubroom account and start organizing your student club today." />
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
                Join Clubroom
              </CardTitle>
              <CardDescription className="text-zinc-600 dark:text-zinc-400">
                Create your account and start organizing your club
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black dark:text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-black/[0.08] dark:border-white/[0.08]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black dark:text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-black/[0.08] dark:border-white/[0.08]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school" className="text-black dark:text-white">
                    School
                  </Label>
                  <Input
                    id="school"
                    name="school"
                    type="text"
                    placeholder="Enter your school name"
                    value={formData.school}
                    onChange={handleChange}
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
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="border-black/[0.08] dark:border-white/[0.08]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-black dark:text-white">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="border-black/[0.08] dark:border-white/[0.08]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
                >
                  Create Account
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Already have an account?{" "}
                  <Link 
                    to="/login" 
                    className="text-black dark:text-white font-medium hover:underline"
                  >
                    Log in
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