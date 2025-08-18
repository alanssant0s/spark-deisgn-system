import { Alert, AlertDescription } from "@/components/ui/alert";
import { ReactNode } from "react";

interface ErrorAlertProps {
    icon: ReactNode;
    title: string;
    description: string;
    variant?: "default" | "destructive" | "warning" | "info";
    className?: string;
}

const ErrorAlert = ({
    icon,
    title,
    description,
    variant = "default",
    className = ""
}: ErrorAlertProps) => {
    const getVariantClasses = () => {
        switch (variant) {
            case "destructive":
                return "border-red-200 bg-red-50";
            case "warning":
                return "border-amber-200 bg-amber-50";
            case "info":
                return "border-blue-200 bg-blue-50";
            default:
                return "border-muted bg-muted/50";
        }
    };

    const getTextColor = () => {
        switch (variant) {
            case "destructive":
                return "text-red-700";
            case "warning":
                return "text-amber-700";
            case "info":
                return "text-blue-700";
            default:
                return "text-foreground";
        }
    };

    const getIconColor = () => {
        switch (variant) {
            case "destructive":
                return "text-red-600";
            case "warning":
                return "text-amber-600";
            case "info":
                return "text-blue-600";
            default:
                return "text-muted-foreground";
        }
    };

    return (
        <Alert className={`${getVariantClasses()} ${className}`}>
            <div className={getIconColor()}>
                {icon}
            </div>
            <AlertDescription className={getTextColor()}>
                <strong>{title}</strong> {description}
            </AlertDescription>
        </Alert>
    );
};

export default ErrorAlert;
