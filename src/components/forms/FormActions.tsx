import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormAction {
    label: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

interface FormActionsProps {
    actions: FormAction[];
    className?: string;
    align?: "left" | "center" | "right";
}

export const FormActions = ({ actions, className, align = "left" }: FormActionsProps) => {
    const alignClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end"
    };

    return (
        <div className={cn("flex space-x-2 pt-4", alignClasses[align], className)}>
            {actions.map((action, index) => (
                <Button
                    key={index}
                    variant={action.variant || "outline"}
                    onClick={action.onClick}
                    type={action.type || "button"}
                    disabled={action.disabled}
                >
                    {action.label}
                </Button>
            ))}
        </div>
    );
};
