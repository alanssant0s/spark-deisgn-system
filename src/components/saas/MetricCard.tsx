import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon, 
  className 
}: MetricCardProps) => {
  const changeColors = {
    positive: "text-success",
    negative: "text-destructive", 
    neutral: "text-muted-foreground"
  };

  return (
    <div className={cn(
      "bg-card border border-card-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300",
      "hover:scale-[1.02] animate-fade-in",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-bold text-card-foreground">{value}</p>
          {change && (
            <p className={cn("text-sm font-medium", changeColors[changeType])}>
              {change}
            </p>
          )}
        </div>
        <div className="p-3 bg-primary-light rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
};