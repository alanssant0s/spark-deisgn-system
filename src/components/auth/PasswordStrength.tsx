import { Progress } from "@/components/ui/progress";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
    password: string;
    className?: string;
}

export const PasswordStrength = ({ password, className }: PasswordStrengthProps) => {
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

    const passwordStrength = getPasswordStrength(password);

    if (!password) return null;

    return (
        <div className={cn("mt-2", className)}>
            <div className="space-y-1.5">
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
                    className={`h-1.5 ${passwordStrength.score <= 2 ? "[&>div]:bg-red-500" :
                        passwordStrength.score <= 3 ? "[&>div]:bg-yellow-500" :
                            passwordStrength.score <= 4 ? "[&>div]:bg-blue-500" : "[&>div]:bg-green-500"
                        }`}
                />

                <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className={`flex items-center gap-1 ${passwordStrength.checks.length ? "text-green-600" : "text-gray-400"
                        }`}>
                        {passwordStrength.checks.length ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        8+ caracteres
                    </div>
                    <div className={`flex items-center gap-1 ${passwordStrength.checks.uppercase ? "text-green-600" : "text-gray-400"
                        }`}>
                        {passwordStrength.checks.uppercase ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        Maiúscula
                    </div>
                    <div className={`flex items-center gap-1 ${passwordStrength.checks.lowercase ? "text-green-600" : "text-gray-400"
                        }`}>
                        {passwordStrength.checks.lowercase ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        Minúscula
                    </div>
                    <div className={`flex items-center gap-1 ${passwordStrength.checks.number ? "text-green-600" : "text-gray-400"
                        }`}>
                        {passwordStrength.checks.number ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        Número
                    </div>
                </div>
            </div>
        </div>
    );
};
