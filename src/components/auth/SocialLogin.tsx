import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Chrome, Apple } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLoginProps {
    onSocialLogin: (provider: string) => void;
    disabled?: boolean;
    text?: string;
    className?: string;
}

const socialProviders = [
    { name: "Google", icon: Chrome, provider: "google" },
    { name: "GitHub", icon: Github, provider: "github" },
    { name: "Apple", icon: Apple, provider: "apple" }
];

export const SocialLogin = ({
    onSocialLogin,
    disabled = false,
    text = "ou continue com",
    className
}: SocialLoginProps) => {
    return (
        <div className={cn("space-y-4", className)}>
            {/* Divider */}
            <div className="relative">
                <Separator />
                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-muted-foreground font-medium">
                    {text}
                </span>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-3 gap-3">
                {socialProviders.map(({ name, icon: Icon, provider }) => (
                    <Button
                        key={provider}
                        type="button"
                        variant="outline"
                        onClick={() => onSocialLogin(provider)}
                        disabled={disabled}
                        className="flex items-center justify-center h-10"
                        title={`Continuar com ${name}`}
                    >
                        <Icon className="h-4 w-4" />
                    </Button>
                ))}
            </div>
        </div>
    );
};
