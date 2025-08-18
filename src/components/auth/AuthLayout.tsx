import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface AuthLayoutProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img
                            src="/favicon.png"
                            alt="Logo"
                            className="h-10 w-10"
                        />
                        <img
                            src="/logo.png"
                            alt="Spark"
                            className="h-8"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-foreground">{title}</h1>
                    {subtitle && (
                        <p className="text-muted-foreground mt-2">{subtitle}</p>
                    )}
                </div>

                {/* Auth Card */}
                <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                    {children}
                </Card>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-xs text-muted-foreground">
                        © 2024 Spark Design System. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
