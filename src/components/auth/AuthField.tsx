import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface AuthFieldProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    icon?: ReactNode;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    showPasswordToggle?: boolean;
    onTogglePassword?: () => void;
    showPassword?: boolean;
}

export const AuthField = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    icon,
    error,
    disabled = false,
    required = false,
    className,
    showPasswordToggle = false,
    onTogglePassword,
    showPassword = false
}: AuthFieldProps) => {
    const inputType = showPasswordToggle && type === "password"
        ? (showPassword ? "text" : "password")
        : type;

    return (
        <div className={cn("space-y-1.5", className)}>
            <Label htmlFor={label.toLowerCase()} className="flex items-center gap-2 text-sm font-medium">
                {label}
                {required && <span className="text-destructive">*</span>}
            </Label>

            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        {icon}
                    </div>
                )}

                <Input
                    id={label.toLowerCase()}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={cn(
                        "h-10",
                        icon && "pl-10",
                        showPasswordToggle && "pr-10",
                        error && "border-red-500 focus:border-red-500"
                    )}
                    disabled={disabled}
                />

                {showPasswordToggle && (
                    <button
                        type="button"
                        onClick={onTogglePassword}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
                        disabled={disabled}
                    >
                        {showPassword ? (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            </svg>
                        ) : (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        )}
                    </button>
                )}
            </div>

            {error && (
                <p className="text-sm text-red-500 mt-1">{error}</p>
            )}
        </div>
    );
};
