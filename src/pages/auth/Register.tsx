import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AuthLayout from "@/components/auth/AuthLayout";
import { AuthField } from "@/components/auth/AuthField";
import { PasswordStrength } from "@/components/auth/PasswordStrength";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { LoadingButton } from "@/components/auth/LoadingButton";
import { Mail, Lock, User, UserPlus, AlertCircle } from "lucide-react";

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
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Alert */}
                {errors.general && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.general}</AlertDescription>
                    </Alert>
                )}

                {/* Name Field */}
                <AuthField
                    label="Nome completo"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(value) => handleInputChange("name", value)}
                    icon={<User className="h-4 w-4" />}
                    error={errors.name}
                    disabled={isLoading}
                    required
                />

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
                <div className="space-y-1">
                    <AuthField
                        label="Senha"
                        type="password"
                        placeholder="Crie uma senha forte"
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
                    label="Confirmar senha"
                    type="password"
                    placeholder="Confirme sua senha"
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

                {/* Terms and Conditions */}
                <div className="space-y-2 pt-1">
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
                <LoadingButton
                    type="submit"
                    className="w-full"
                    loading={isLoading}
                    loadingText="Criando conta..."
                >
                    <div className="flex items-center gap-2">
                        <UserPlus className="h-4 w-4" />
                        Criar conta
                    </div>
                </LoadingButton>

                {/* Social Register */}
                <SocialLogin
                    onSocialLogin={handleSocialRegister}
                    disabled={isLoading}
                    text="ou registre-se com"
                />

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
