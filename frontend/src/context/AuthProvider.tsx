import { createContext, useState, ReactNode } from "react";

// Define the shape of the context state
interface AuthContextType {
    user: any; // Replace 'any' with a specific user type if you have one
    setUser: (user: any) => void; // Replace 'any' with a specific user type if you have one
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(null); // Replace 'any' with a specific user type if you have one

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
};

// Export the context
export default AuthContext;
