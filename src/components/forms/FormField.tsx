import { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
    label: string;
    children: ReactNode;
    required?: boolean;
    className?: string;
    labelClassName?: string;
}

export const FormField = ({
    label,
    children,
    required = false,
    className,
    labelClassName
}: FormFieldProps) => {
    return (
        <div className={cn("space-y-2", className)}>
            <Label className={labelClassName}>
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
            </Label>
            {children}
        </div>
    );
};
