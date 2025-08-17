import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "destructive" | "accent";
  className?: string;
}

export const StatCard = ({ 
  label, 
  value, 
  icon: Icon, 
  variant = "default",
  className 
}: StatCardProps) => {
  const variants = {
    default: {
      bg: "bg-primary-light",
      icon: "text-primary",
      border: "border-primary/20"
    },
    success: {
      bg: "bg-success-light", 
      icon: "text-success",
      border: "border-success/20"
    },
    warning: {
      bg: "bg-warning-light",
      icon: "text-warning", 
      border: "border-warning/20"
    },
    destructive: {
      bg: "bg-destructive-light",
      icon: "text-destructive",
      border: "border-destructive/20"
    },
    accent: {
      bg: "bg-accent-light",
      icon: "text-accent",
      border: "border-accent/20"
    }
  };

  const variantStyles = variants[variant];

  return (
    <div className={cn(
      "bg-card border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300",
      "hover:scale-[1.02] animate-fade-in group",
      variantStyles.border,
      className
    )}>
      <div className="flex items-center space-x-3">
        <div className={cn(
          "p-2 rounded-lg transition-transform duration-300 group-hover:scale-110",
          variantStyles.bg
        )}>
          <Icon className={cn("h-4 w-4", variantStyles.icon)} />
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            {label}
          </p>
          <p className="text-lg font-bold text-card-foreground">{value}</p>
        </div>
      </div>
    </div>
  );
};