import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

interface LoginPageProps {
  onLogin: (credentials: { email: string; password: string }) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("LoginPage - Form submitted:", { email, password });
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo credentials check
    if (email === "demo@choyai.com" && password === "demochoyai") {
      console.log("LoginPage - Credentials match, calling onLogin");
      onLogin({ email, password });
    } else {
      console.log("LoginPage - Credentials don't match");
      alert("Demo credentials:\nEmail: demo@choyai.com\nPassword: demochoyai");
    }
    
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    // Show coming soon message for social login
    alert(`${provider} login is coming soon! Please use the email/password form with demo credentials.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Try Choy AI for free!</h1>
          <p className="text-gray-400 text-lg">Log in with Google, Microsoft, or Apple.</p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => handleSocialLogin("google")}
            className="w-full h-12 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 flex items-center justify-center space-x-3"
            variant="outline"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500"></div>
            <span>Continue with Google</span>
          </Button>

          <Button
            onClick={() => handleSocialLogin("microsoft")}
            className="w-full h-12 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 flex items-center justify-center space-x-3"
            variant="outline"
          >
            <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-sm"></div>
            <span>Continue with Microsoft</span>
          </Button>

          <Button
            onClick={() => handleSocialLogin("apple")}
            className="w-full h-12 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 flex items-center justify-center space-x-3"
            variant="outline"
          >
            <div className="w-5 h-5 bg-gradient-to-r from-gray-400 to-gray-200 rounded-sm"></div>
            <span>Continue with Apple</span>
          </Button>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-transparent text-gray-400 font-medium">OR</span>
          </div>
        </div>

        {/* Email Login Form */}
        <Card className="bg-gray-900/50 border-gray-700 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-white text-black hover:bg-gray-100 font-medium"
            >
              {isLoading ? "Signing in..." : "Continue"}
            </Button>
          </form>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500">
          By signing up, you agree to our{" "}
          <a href="#" className="text-gray-400 hover:text-white underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-gray-400 hover:text-white underline">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
} 