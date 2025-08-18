import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import AuthLayout from "@/components/auth/AuthLayout";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    LogIn,
    AlertCircle,
    Github,
    Chrome,
    Apple
} from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.email) {
            newErrors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }

        if (!formData.password) {
            newErrors.password = "Senha é obrigatória";
        } else if (formData.password.length < 6) {
            newErrors.password = "Senha deve ter pelo menos 6 caracteres";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        // Simula chamada de API
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simula login bem-sucedido
            console.log("Login realizado:", { ...formData, rememberMe });
            navigate("/");
        } catch (error) {
            setErrors({ general: "Erro ao fazer login. Tente novamente." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Login com ${provider}`);
        // Aqui implementaria a lógica de login social
    };

    return (
        <AuthLayout
            title="Bem-vindo de volta!"
            subtitle="Faça login para acessar sua conta"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Alert */}
                {errors.general && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.general}</AlertDescription>
                    </Alert>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                            disabled={isLoading}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Sua senha"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            disabled={isLoading}
                        >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password}</p>
                    )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="remember"
                            checked={rememberMe}
                            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                            disabled={isLoading}
                        />
                        <Label
                            htmlFor="remember"
                            className="text-sm font-normal cursor-pointer"
                        >
                            Lembrar de mim
                        </Label>
                    </div>
                    <Link
                        to="/auth/reset-password"
                        className="text-sm text-primary hover:text-primary/80 font-medium"
                    >
                        Esqueceu a senha?
                    </Link>
                </div>

                {/* Login Button */}
                <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Entrando...
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <LogIn className="h-4 w-4" />
                            Entrar
                        </div>
                    )}
                </Button>

                {/* Divider */}
                <div className="relative">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-muted-foreground">
                        ou continue com
                    </span>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-3 gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin("Google")}
                        disabled={isLoading}
                        className="flex items-center justify-center"
                    >
                        <Chrome className="h-4 w-4" />
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin("GitHub")}
                        disabled={isLoading}
                        className="flex items-center justify-center"
                    >
                        <Github className="h-4 w-4" />
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialLogin("Apple")}
                        disabled={isLoading}
                        className="flex items-center justify-center"
                    >
                        <Apple className="h-4 w-4" />
                    </Button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                        Não tem uma conta?{" "}
                        <Link
                            to="/auth/register"
                            className="text-primary hover:text-primary/80 font-medium"
                        >
                            Criar conta
                        </Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Login;
