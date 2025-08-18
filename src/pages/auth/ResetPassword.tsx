import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import AuthLayout from "@/components/auth/AuthLayout";
import {
    Mail,
    ArrowLeft,
    Send,
    AlertCircle,
    CheckCircle,
    Lock,
    Eye,
    EyeOff,
    Check,
    X,
    RotateCcw
} from "lucide-react";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    // Se há token na URL, mostra formulário de nova senha
    const isResetForm = Boolean(token);

    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
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

    const validateEmailForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.email) {
            newErrors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validatePasswordForm = () => {
        const newErrors: { [key: string]: string } = {};

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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmailForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Simula envio de email
            await new Promise(resolve => setTimeout(resolve, 1500));
            setEmailSent(true);
        } catch (error) {
            setErrors({ general: "Erro ao enviar email. Tente novamente." });
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validatePasswordForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Simula redefinição de senha
            await new Promise(resolve => setTimeout(resolve, 2000));
            navigate("/auth/login", {
                state: { message: "Senha redefinida com sucesso! Faça login com sua nova senha." }
            });
        } catch (error) {
            setErrors({ general: "Erro ao redefinir senha. Tente novamente." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendEmail = async () => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Simula reenvio
        } catch (error) {
            setErrors({ general: "Erro ao reenviar email." });
        } finally {
            setIsLoading(false);
        }
    };

    // Formulário de nova senha (quando há token)
    if (isResetForm) {
        return (
            <AuthLayout
                title="Redefinir senha"
                subtitle="Digite sua nova senha"
            >
                <form onSubmit={handlePasswordSubmit} className="space-y-6">
                    {/* Error Alert */}
                    {errors.general && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{errors.general}</AlertDescription>
                        </Alert>
                    )}

                    {/* Password Field */}
                    <div className="space-y-2">
                        <Label htmlFor="password">Nova senha</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Digite sua nova senha"
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
                        <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirme sua nova senha"
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

                    {/* Reset Button */}
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Redefinindo...
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Lock className="h-4 w-4" />
                                Redefinir senha
                            </div>
                        )}
                    </Button>

                    {/* Back to Login */}
                    <div className="text-center">
                        <Link
                            to="/auth/login"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Voltar ao login
                        </Link>
                    </div>
                </form>
            </AuthLayout>
        );
    }

    // Formulário de solicitação de reset (estado padrão)
    if (emailSent) {
        return (
            <AuthLayout
                title="Email enviado!"
                subtitle="Verifique sua caixa de entrada"
            >
                <div className="space-y-6 text-center">
                    {/* Success Icon */}
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>

                    {/* Success Message */}
                    <div className="space-y-2">
                        <p className="text-muted-foreground">
                            Enviamos um link de redefinição de senha para:
                        </p>
                        <p className="font-medium text-foreground">
                            {formData.email}
                        </p>
                    </div>

                    {/* Instructions */}
                    <Alert>
                        <Mail className="h-4 w-4" />
                        <AlertDescription>
                            <div className="space-y-2">
                                <p>Siga estas etapas:</p>
                                <ol className="list-decimal list-inside text-sm space-y-1">
                                    <li>Verifique sua caixa de entrada</li>
                                    <li>Clique no link do email</li>
                                    <li>Defina sua nova senha</li>
                                </ol>
                            </div>
                        </AlertDescription>
                    </Alert>

                    {/* Resend Email */}
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Não recebeu o email?
                        </p>
                        <Button
                            variant="outline"
                            onClick={handleResendEmail}
                            disabled={isLoading}
                            className="flex items-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    Reenviando...
                                </>
                            ) : (
                                <>
                                    <RotateCcw className="h-4 w-4" />
                                    Reenviar email
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Back to Login */}
                    <div className="text-center pt-4 border-t">
                        <Link
                            to="/auth/login"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Voltar ao login
                        </Link>
                    </div>
                </div>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout
            title="Esqueceu a senha?"
            subtitle="Digite seu email para redefinir sua senha"
        >
            <form onSubmit={handleEmailSubmit} className="space-y-6">
                {/* Error Alert */}
                {errors.general && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.general}</AlertDescription>
                    </Alert>
                )}

                {/* Instructions */}
                <Alert>
                    <Mail className="h-4 w-4" />
                    <AlertDescription>
                        Digite o email associado à sua conta e enviaremos um link para redefinir sua senha.
                    </AlertDescription>
                </Alert>

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

                {/* Send Button */}
                <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Enviando...
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Enviar link de redefinição
                        </div>
                    )}
                </Button>

                {/* Back to Login */}
                <div className="text-center">
                    <Link
                        to="/auth/login"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Voltar ao login
                    </Link>
                </div>

                {/* Sign Up Link */}
                <div className="text-center pt-4 border-t">
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

export default ResetPassword;
