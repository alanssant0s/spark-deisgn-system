import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TableCardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
}

export function TableCard({
  title,
  description,
  children,
  actions,
  className,
  headerClassName,
  contentClassName,
}: TableCardProps) {
  return (
    <div
      className={cn(
        "w-full bg-card border border-border rounded-lg shadow-sm overflow-hidden",
        className
      )}
    >
      {(title || description || actions) && (
        <div
          className={cn(
            "px-6 py-4 border-b border-border bg-card",
            headerClassName
          )}
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              {title && (
                <h3 className="text-lg font-semibold leading-none tracking-tight text-foreground">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
            {actions && (
              <div className="flex items-center space-x-2">
                {actions}
              </div>
            )}
          </div>
        </div>
      )}
      
      <div
        className={cn(
          "overflow-x-auto",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

TableCard.displayName = "TableCard";