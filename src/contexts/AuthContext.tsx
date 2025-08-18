import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: "admin" | "user" | "moderator";
    createdAt: string;
    lastLogin?: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    resetPassword: (email: string) => Promise<void>;
    updatePassword: (token: string, password: string) => Promise<void>;
    updateProfile: (data: Partial<User>) => Promise<void>;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const isAuthenticated = !!user;

    // Simula verificação de token ao inicializar
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem("auth_token");
                if (token) {
                    // Simula verificação do token
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    // Simula dados do usuário
                    const mockUser: User = {
                        id: "1",
                        name: "João Silva",
                        email: "joao@exemplo.com",
                        avatar: "/placeholder.svg",
                        role: "admin",
                        createdAt: "2024-01-01T00:00:00.000Z",
                        lastLogin: new Date().toISOString()
                    };

                    setUser(mockUser);
                }
            } catch (error) {
                console.error("Erro ao verificar autenticação:", error);
                localStorage.removeItem("auth_token");
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (email: string, password: string, rememberMe = false) => {
        setIsLoading(true);

        try {
            // Simula chamada de API
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simula validação
            if (email === "admin@exemplo.com" && password === "123456") {
                const mockUser: User = {
                    id: "1",
                    name: "Administrador",
                    email: email,
                    avatar: "/placeholder.svg",
                    role: "admin",
                    createdAt: "2024-01-01T00:00:00.000Z",
                    lastLogin: new Date().toISOString()
                };

                setUser(mockUser);

                // Simula token
                const token = "mock_jwt_token_" + Date.now();
                localStorage.setItem("auth_token", token);

                if (rememberMe) {
                    localStorage.setItem("remember_me", "true");
                }
            } else {
                throw new Error("Credenciais inválidas");
            }
        } catch (error) {
            throw new Error(error instanceof Error ? error.message : "Erro ao fazer login");
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (name: string, email: string, password: string) => {
        setIsLoading(true);

        try {
            // Simula chamada de API
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simula criação de usuário
            const mockUser: User = {
                id: Date.now().toString(),
                name,
                email,
                role: "user",
                createdAt: new Date().toISOString()
            };

            setUser(mockUser);

            // Simula token
            const token = "mock_jwt_token_" + Date.now();
            localStorage.setItem("auth_token", token);
        } catch (error) {
            throw new Error("Erro ao criar conta");
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("auth_token");
        localStorage.removeItem("remember_me");
    };

    const resetPassword = async (email: string) => {
        try {
            // Simula envio de email
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Email de reset enviado para:", email);
        } catch (error) {
            throw new Error("Erro ao enviar email de reset");
        }
    };

    const updatePassword = async (token: string, password: string) => {
        try {
            // Simula atualização de senha
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log("Senha atualizada com token:", token);
        } catch (error) {
            throw new Error("Erro ao atualizar senha");
        }
    };

    const updateProfile = async (data: Partial<User>) => {
        if (!user) return;

        setIsLoading(true);

        try {
            // Simula atualização do perfil
            await new Promise(resolve => setTimeout(resolve, 1000));

            const updatedUser = { ...user, ...data };
            setUser(updatedUser);
        } catch (error) {
            throw new Error("Erro ao atualizar perfil");
        } finally {
            setIsLoading(false);
        }
    };

    const refreshUser = async () => {
        if (!user) return;

        try {
            // Simula refresh dos dados do usuário
            await new Promise(resolve => setTimeout(resolve, 500));

            const refreshedUser: User = {
                ...user,
                lastLogin: new Date().toISOString()
            };

            setUser(refreshedUser);
        } catch (error) {
            console.error("Erro ao atualizar dados do usuário:", error);
        }
    };

    const value: AuthContextType = {
        user,
        isLoading,
        isAuthenticated,
        login,
        register,
        logout,
        resetPassword,
        updatePassword,
        updateProfile,
        refreshUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};

export default AuthContext;
