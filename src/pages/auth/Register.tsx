import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import AuthLayout from "@/components/auth/AuthLayout";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    UserPlus,
    AlertCircle,
    Github,
    Chrome,
    Apple,
    Check,
    X
} from "lucide-react";

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
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

    const getPasswordStrength = (password: string) => {
        let strength = 0;
        const checks = {
            length: password.length >= 8,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /\d/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };

        strength = Object.values(checks).filter(Boolean).length;

        return {
            score: strength,
            percentage: (strength / 5) * 100,
            checks,
            label: strength === 0 ? "" :
                strength <= 2 ? "Fraca" :
                    strength <= 3 ? "Média" :
                        strength <= 4 ? "Forte" : "Muito Forte"
        };
    };

    const passwordStrength = getPasswordStrength(formData.password);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = "Nome é obrigatório";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Nome deve ter pelo menos 2 caracteres";
        }

        if (!formData.email) {
            newErrors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }

        if (!formData.password) {
            newErrors.password = "Senha é obrigatória";
        } else if (formData.password.length < 8) {
            newErrors.password = "Senha deve ter pelo menos 8 caracteres";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirmação de senha é obrigatória";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Senhas não coincidem";
        }

        if (!acceptTerms) {
            newErrors.terms = "Você deve aceitar os termos de uso";
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
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simula registro bem-sucedido
            console.log("Registro realizado:", formData);
            navigate("/auth/login", {
                state: { message: "Conta criada com sucesso! Faça login para continuar." }
            });
        } catch (error) {
            setErrors({ general: "Erro ao criar conta. Tente novamente." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSocialRegister = (provider: string) => {
        console.log(`Registro com ${provider}`);
        // Aqui implementaria a lógica de registro social
    };

    return (
        <AuthLayout
            title="Criar nova conta"
            subtitle="Junte-se a nós e comece sua jornada"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Alert */}
                {errors.general && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.general}</AlertDescription>
                    </Alert>
                )}

                {/* Name Field */}
                <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="name"
                            type="text"
                            placeholder="Seu nome completo"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className={`pl-10 ${errors.name ? "border-red-500" : ""}`}
                            disabled={isLoading}
                        />
                    </div>
                    {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                </div>

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
                            placeholder="Crie uma senha forte"
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

                    {/* Password Strength */}
                    {formData.password && (
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground">Força da senha</span>
                                <span className={`font-medium ${passwordStrength.score <= 2 ? "text-red-500" :
                                        passwordStrength.score <= 3 ? "text-yellow-500" :
                                            passwordStrength.score <= 4 ? "text-blue-500" : "text-green-500"
                                    }`}>
                                    {passwordStrength.label}
                                </span>
                            </div>
                            <Progress
                                value={passwordStrength.percentage}
                                className={`h-2 ${passwordStrength.score <= 2 ? "[&>div]:bg-red-500" :
                                        passwordStrength.score <= 3 ? "[&>div]:bg-yellow-500" :
                                            passwordStrength.score <= 4 ? "[&>div]:bg-blue-500" : "[&>div]:bg-green-500"
                                    }`}
                            />
                            <div className="grid grid-cols-2 gap-1 text-xs">
                                <div className={`flex items-center gap-1 ${passwordStrength.checks.length ? "text-green-600" : "text-gray-400"}`}>
                                    {passwordStrength.checks.length ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                                    8+ caracteres
                                </div>
                                <div className={`flex items-center gap-1 ${passwordStrength.checks.uppercase ? "text-green-600" : "text-gray-400"}`}>
                                    {passwordStrength.checks.uppercase ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                                    Maiúscula
                                </div>
                                <div className={`flex items-center gap-1 ${passwordStrength.checks.lowercase ? "text-green-600" : "text-gray-400"}`}>
                                    {passwordStrength.checks.lowercase ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                                    Minúscula
                                </div>
                                <div className={`flex items-center gap-1 ${passwordStrength.checks.number ? "text-green-600" : "text-gray-400"}`}>
                                    {passwordStrength.checks.number ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                                    Número
                                </div>
                            </div>
                        </div>
                    )}

                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password}</p>
                    )}
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar senha</Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirme sua senha"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className={`pl-10 pr-10 ${errors.confirmPassword ? "border-red-500" : ""}`}
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            disabled={isLoading}
                        >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                    )}
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                        <Checkbox
                            id="terms"
                            checked={acceptTerms}
                            onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                            disabled={isLoading}
                            className="mt-1"
                        />
                        <Label
                            htmlFor="terms"
                            className="text-sm font-normal cursor-pointer leading-5"
                        >
                            Eu aceito os{" "}
                            <Link to="/terms" className="text-primary hover:text-primary/80 font-medium">
                                Termos de Uso
                            </Link>{" "}
                            e a{" "}
                            <Link to="/privacy" className="text-primary hover:text-primary/80 font-medium">
                                Política de Privacidade
                            </Link>
                        </Label>
                    </div>
                    {errors.terms && (
                        <p className="text-sm text-red-500">{errors.terms}</p>
                    )}
                </div>

                {/* Register Button */}
                <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Criando conta...
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <UserPlus className="h-4 w-4" />
                            Criar conta
                        </div>
                    )}
                </Button>

                {/* Divider */}
                <div className="relative">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-muted-foreground">
                        ou registre-se com
                    </span>
                </div>

                {/* Social Register */}
                <div className="grid grid-cols-3 gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialRegister("Google")}
                        disabled={isLoading}
                        className="flex items-center justify-center"
                    >
                        <Chrome className="h-4 w-4" />
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialRegister("GitHub")}
                        disabled={isLoading}
                        className="flex items-center justify-center"
                    >
                        <Github className="h-4 w-4" />
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSocialRegister("Apple")}
                        disabled={isLoading}
                        className="flex items-center justify-center"
                    >
                        <Apple className="h-4 w-4" />
                    </Button>
                </div>

                {/* Login Link */}
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                        Já tem uma conta?{" "}
                        <Link
                            to="/auth/login"
                            className="text-primary hover:text-primary/80 font-medium"
                        >
                            Fazer login
                        </Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Register;
