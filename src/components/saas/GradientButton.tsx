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
    primary: "bg-gradient-primary text-primary-foreground hover:shadow-glow border-0",
    secondary: "bg-white text-foreground border-2 border-border hover:border-primary/30 hover:bg-primary/5 shadow-sm",
    accent: "bg-gradient-hero text-accent-foreground hover:shadow-glow border-0"
  };

  const sizes = {
    sm: "px-4 py-2.5 text-sm min-h-[36px]",
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[52px] font-medium"
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold",
        "transition-all duration-300 hover:scale-[1.02] active:scale-95",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        "relative overflow-hidden group",
        variants[variant],
        sizes[size],
        isLoading && "animate-pulse",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Hover effect overlay for primary variant */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
      )}
      
      {Icon && iconPosition === "left" && (
        <Icon className={cn("h-5 w-5", children && "mr-2.5")} />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={cn("h-5 w-5", children && "ml-2.5")} />
      )}
    </button>
  );
});

GradientButton.displayName = "GradientButton";