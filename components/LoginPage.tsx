import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Eye, EyeOff, Bot, Sparkles } from "lucide-react";

interface LoginPageProps {
  onLogin: (credentials: { email: string; password: string }) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    console.log("LoginPage - Form submitted:", { email, password, mode: isRegisterMode ? "register" : "login" });
    
    // Validate email format
    if (!validateEmail(email)) {
      setError("Excuse me sir! Please provide a valid email address format.");
      setIsLoading(false);
      return;
    }
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (isRegisterMode) {
      // Handle registration
      console.log("Registration mode");
      setError("Registration is coming soon! Please use the demo login.");
    } else {
      // Demo credentials check for login
      if (email === "demo@choyai.com" && password === "demochoyai") {
        console.log("LoginPage - Credentials match, calling onLogin");
        onLogin({ email, password });
      } else {
        console.log("LoginPage - Credentials don't match");
        setError("Excuse me sir! You are trying with the wrong credentials.");
      }
    }
    
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    setError(`${provider} login is coming soon! Please use the email/password form.`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    setError("Password reset is coming soon! Please use the demo credentials.");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-sm space-y-6 relative z-20">
        {/* Animated Logo/Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative group">
              {/* Main Bot Icon Container */}
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105 relative z-10">
                <Bot size={32} className="text-white group-hover:text-white/90 transition-colors duration-500" />
              </div>
              
              {/* Floating Sparkles Animation */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce pointer-events-none">
                <Sparkles size={8} className="text-white animate-pulse" />
              </div>
              
              {/* Rotating Ring Effect */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-700 group-hover:rotate-12 pointer-events-none"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 blur-xl group-hover:bg-white/10 transition-all duration-500 pointer-events-none"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Choy AI</h1>
            <p className="text-gray-300 text-sm max-w-xs mx-auto">
              Let your AI instantly answer questions and turn browsers into buyers while you sleep.
            </p>
          </div>
        </div>

        {/* Main Card with Karigor AI Style Glass Effect */}
        <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl relative z-10">
          {/* Animated Glowing Outline */}
          <div 
            style={{
              '--border-width': '1px',
              '--duration': '4s',
              backgroundImage: 'linear-gradient(90deg, transparent, #E5E7EB, #FFFFFF, #E5E7EB, transparent)',
              backgroundSize: '200% 100%',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: 'var(--border-width)'
            } as React.CSSProperties}
            className="pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] motion-safe:animate-shine"
          ></div>
          
          {/* Mode Toggle */}
          <div className="flex mb-6 bg-black/20 backdrop-blur-sm rounded-xl p-1 border border-white/10">
            <button
              onClick={() => setIsRegisterMode(false)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 relative z-10 ${
                !isRegisterMode 
                  ? 'bg-white/15 text-white shadow-sm border border-white/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsRegisterMode(true)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 relative z-10 ${
                isRegisterMode 
                  ? 'bg-white/15 text-white shadow-sm border border-white/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Register
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-3">
              <p className="text-red-300 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder-gray-400 focus:border-gray-500 focus:bg-black/60 transition-all duration-300 rounded-xl text-sm relative z-10 [&:-webkit-autofill]:bg-black/40 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_30px_rgba(0,0,0,0.4)_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]"
                required
              />
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder-gray-400 focus:border-gray-500 focus:bg-black/60 pr-10 transition-all duration-300 rounded-xl text-sm relative z-10 [&:-webkit-autofill]:bg-black/40 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_30px_rgba(0,0,0,0.4)_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors z-20"
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password - Repositioned */}
            {!isRegisterMode && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-gray-400 hover:text-white text-xs transition-colors relative z-10"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 bg-white/15 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-medium shadow-lg transition-all duration-300 rounded-xl text-sm relative z-10"
            >
              {isLoading ? "Processing..." : (isRegisterMode ? "Create Account" : "Sign In")}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-400 font-medium text-xs">or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <Button
              onClick={() => handleSocialLogin("Google")}
              className="h-10 bg-white/8 hover:bg-white/12 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white transition-all duration-300 rounded-xl p-0 relative z-10"
              variant="outline"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </Button>

            <Button
              onClick={() => handleSocialLogin("Microsoft")}
              className="h-10 bg-white/8 hover:bg-white/12 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white transition-all duration-300 rounded-xl p-0 relative z-10"
              variant="outline"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#f25022" d="M1 1h10v10H1z"/>
                <path fill="#7fba00" d="M13 1h10v10H13z"/>
                <path fill="#00a4ef" d="M1 13h10v10H1z"/>
                <path fill="#ffb900" d="M13 13h10v10H13z"/>
              </svg>
            </Button>

            <Button
              onClick={() => handleSocialLogin("Apple")}
              className="h-10 bg-white/8 hover:bg-white/12 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white transition-all duration-300 rounded-xl p-0 relative z-10"
              variant="outline"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400">
          {isRegisterMode ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsRegisterMode(false)}
                className="text-white hover:text-white/80 underline transition-colors relative z-10"
              >
                Sign in here
              </button>
            </>
          ) : (
            <>
              Don't have an account yet?{" "}
              <button
                onClick={() => setIsRegisterMode(true)}
                className="text-white hover:text-white/80 underline transition-colors relative z-10"
              >
                Register for free
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 