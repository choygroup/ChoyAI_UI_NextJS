import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: { email: string; password: string }) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (credentials: { email: string; password: string }) => {
    console.log("Login attempt:", { email: credentials.email, password: credentials.password });
    // For demo purposes, accept demo credentials
    if (credentials.email === "demo@choyai.com" && credentials.password === "demochoyai") {
      console.log("Login successful!");
      setUser({
        email: credentials.email,
        name: "Shanchoy Noor"
      });
    } else {
      console.log("Login failed - invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 