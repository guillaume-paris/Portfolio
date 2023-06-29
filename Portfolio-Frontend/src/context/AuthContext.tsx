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
        const token = localStorage.getItem('token');
        const expireIn = localStorage.getItem('token_expiration');

        const expireInNum = expireIn ? Number(expireIn) : null;

        if (token && expireInNum && Date.now() / 1000 < expireInNum) {
            setIsAuthenticated(true);
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('token_expiration');
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
