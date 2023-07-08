import { createContext, useState, useEffect, ReactNode } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

const defaultValue: AuthContextType = {
  isAuthenticated: false,
  setIsAuthenticated: () => {}
};

export const AuthContext = createContext(defaultValue);

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {

        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
            const token = userInfo?.token;
        
            if (token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        }, []);

        return (
                <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
                        {children}
                </AuthContext.Provider>
        );
};
