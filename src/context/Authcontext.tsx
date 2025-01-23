"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  currentUser: string | null;
  login: (email: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const Authcontext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const storedemail = localStorage.getItem("email");
    if (storedemail) {
      setCurrentUser(storedemail);
    }
    setIsloading(false);
  }, []);

  const login = (email: string): boolean => {
    if (email) {
      setCurrentUser(email);
      localStorage.setItem("email", email);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("email");
  };

  const value = {
    currentUser,
    login,
    logout,
    isLoading,
  };

  if (isLoading) {
    return null;
  }

  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
};

export const useAuth = () => {
  const context = useContext(Authcontext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an authprovidr");
  }
  return context;
};
