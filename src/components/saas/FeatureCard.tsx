import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: "default" | "highlighted";
  className?: string;
}

export const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  variant = "default",
  className 
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-card border border-card-border rounded-lg p-6 shadow-sm",
      "hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
      "animate-fade-in-up group",
      variant === "highlighted" && "bg-gradient-secondary border-primary/30 shadow-glow",
      className
    )}>
      <div className="space-y-4">
        <div className={cn(
          "inline-flex p-3 rounded-lg transition-all duration-300 group-hover:scale-110",
          variant === "highlighted" ? "bg-primary text-primary-foreground" : "bg-primary-light"
        )}>
          <Icon className={cn(
            "h-6 w-6",
            variant === "highlighted" ? "text-primary-foreground" : "text-primary"
          )} />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};