import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AuthLayout from "@/components/auth/AuthLayout";
import { AuthField } from "@/components/auth/AuthField";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { LoadingButton } from "@/components/auth/LoadingButton";
import { Mail, Lock, LogIn, AlertCircle } from "lucide-react";

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
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Alert */}
                {errors.general && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.general}</AlertDescription>
                    </Alert>
                )}

                {/* Email Field */}
                <AuthField
                    label="Email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(value) => handleInputChange("email", value)}
                    icon={<Mail className="h-4 w-4" />}
                    error={errors.email}
                    disabled={isLoading}
                    required
                />

                {/* Password Field */}
                <AuthField
                    label="Senha"
                    type="password"
                    placeholder="Sua senha"
                    value={formData.password}
                    onChange={(value) => handleInputChange("password", value)}
                    icon={<Lock className="h-4 w-4" />}
                    error={errors.password}
                    disabled={isLoading}
                    required
                    showPasswordToggle
                    onTogglePassword={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                />

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between pt-1">
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
                <LoadingButton
                    type="submit"
                    className="w-full"
                    loading={isLoading}
                    loadingText="Entrando..."
                >
                    <div className="flex items-center gap-2">
                        <LogIn className="h-4 w-4" />
                        Entrar
                    </div>
                </LoadingButton>

                {/* Social Login */}
                <SocialLogin
                    onSocialLogin={handleSocialLogin}
                    disabled={isLoading}
                />

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
