import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface LoadingButtonProps {
    children: ReactNode;
    loading?: boolean;
    loadingText?: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export const LoadingButton = ({
    children,
    loading = false,
    loadingText,
    disabled = false,
    className,
    onClick,
    type = "button",
    variant = "default"
}: LoadingButtonProps) => {
    return (
        <Button
            type={type}
            variant={variant}
            className={className}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {loading ? (
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    {loadingText || children}
                </div>
            ) : (
                children
            )}
        </Button>
    );
};
