import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(({
  className,
  variant = "primary",
  size = "md", 
  icon: Icon,
  iconPosition = "left",
  isLoading = false,
  children,
  disabled,
  ...props
}, ref) => {
  const variants = {
    primary: "bg-gradient-primary text-primary-foreground hover:shadow-glow",
    secondary: "bg-gradient-secondary text-foreground border border-border",
    accent: "bg-gradient-primary text-accent-foreground hover:shadow-glow"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold",
        "transition-all duration-300 hover:scale-105 active:scale-95",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        variants[variant],
        sizes[size],
        isLoading && "animate-pulse",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className={cn("h-4 w-4", children && "mr-2")} />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className={cn("h-4 w-4", children && "ml-2")} />
      )}
    </button>
  );
});

GradientButton.displayName = "GradientButton";