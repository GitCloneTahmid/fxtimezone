import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("type") === "factory" ? "factory" : "client";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");

  const title = userType === "client" ? "Client Portal" : "Factory Portal";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration will be added later
    console.log({ email, password, mode, userType });
  };

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      <header className="py-8 px-12 border-b border-border bg-background">
        <Link to="/" className="text-[15px] font-medium tracking-[3px] text-primary hover:opacity-70 transition-opacity">
          THM LIMITED
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-[400px]">
          <div className="bg-background border border-border p-10">
            <div className="mb-8">
              <h2 className="text-xs uppercase tracking-[2.5px] font-medium text-muted-foreground mb-3">{title}</h2>
              <h3 className="text-2xl font-light text-primary">
                {mode === "login" ? "Sign in to your account" : "Create your account"}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="h-12 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="h-12 border-border"
                />
              </div>

              <Button type="submit" className="w-full h-12 text-sm font-medium tracking-wide">
                {mode === "login" ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {mode === "login" ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            <Link to="/" className="hover:text-foreground transition-colors">← Back to homepage</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
