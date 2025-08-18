import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RadioOption {
    value: string;
    id: string;
    label: string;
    badge?: {
        text: string;
        variant?: "default" | "secondary" | "outline";
    };
}

interface RadioGroupFieldProps {
    title: string;
    options: RadioOption[];
    defaultValue?: string;
    className?: string;
    titleClassName?: string;
}

export const RadioGroupField = ({
    title,
    options,
    defaultValue,
    className,
    titleClassName
}: RadioGroupFieldProps) => {
    return (
        <div className={cn("space-y-4", className)}>
            <Label className={cn("text-base font-medium", titleClassName)}>{title}</Label>
            <RadioGroup defaultValue={defaultValue}>
                {options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={option.id} />
                        <Label htmlFor={option.id} className="flex items-center gap-2">
                            {option.label}
                            {option.badge && (
                                <Badge variant={option.badge.variant || "secondary"}>
                                    {option.badge.text}
                                </Badge>
                            )}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};
