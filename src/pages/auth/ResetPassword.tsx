import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AuthLayout from "@/components/auth/AuthLayout";
import { AuthField } from "@/components/auth/AuthField";
import { PasswordStrength } from "@/components/auth/PasswordStrength";
import { LoadingButton } from "@/components/auth/LoadingButton";
import { Mail, ArrowLeft, Send, AlertCircle, CheckCircle, Lock, RotateCcw } from "lucide-react";

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
                <form onSubmit={handlePasswordSubmit} className="space-y-5">
                    {/* Error Alert */}
                    {errors.general && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{errors.general}</AlertDescription>
                        </Alert>
                    )}

                    {/* Password Field */}
                    <div className="space-y-1">
                        <AuthField
                            label="Nova senha"
                            type="password"
                            placeholder="Digite sua nova senha"
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

                        {/* Password Strength */}
                        <PasswordStrength password={formData.password} />
                    </div>

                    {/* Confirm Password Field */}
                    <AuthField
                        label="Confirmar nova senha"
                        type="password"
                        placeholder="Confirme sua nova senha"
                        value={formData.confirmPassword}
                        onChange={(value) => handleInputChange("confirmPassword", value)}
                        icon={<Lock className="h-4 w-4" />}
                        error={errors.confirmPassword}
                        disabled={isLoading}
                        required
                        showPasswordToggle
                        onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
                        showPassword={showConfirmPassword}
                    />

                    {/* Reset Button */}
                    <LoadingButton
                        type="submit"
                        className="w-full"
                        loading={isLoading}
                        loadingText="Redefinindo..."
                    >
                        <div className="flex items-center gap-2">
                            <Lock className="h-4 w-4" />
                            Redefinir senha
                        </div>
                    </LoadingButton>

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
                        <LoadingButton
                            variant="outline"
                            onClick={handleResendEmail}
                            loading={isLoading}
                            loadingText="Reenviando..."
                            className="flex items-center gap-2"
                        >
                            <RotateCcw className="h-4 w-4" />
                            Reenviar email
                        </LoadingButton>
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
            <form onSubmit={handleEmailSubmit} className="space-y-5">
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

                {/* Send Button */}
                <LoadingButton
                    type="submit"
                    className="w-full"
                    loading={isLoading}
                    loadingText="Enviando..."
                >
                    <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Enviar link de redefinição
                    </div>
                </LoadingButton>

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
