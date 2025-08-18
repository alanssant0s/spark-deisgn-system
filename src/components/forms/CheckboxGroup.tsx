import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface CheckboxOption {
    id: string;
    label: string;
    defaultChecked?: boolean;
}

interface CheckboxGroupProps {
    title: string;
    options: CheckboxOption[];
    className?: string;
    titleClassName?: string;
}

export const CheckboxGroup = ({ title, options, className, titleClassName }: CheckboxGroupProps) => {
    return (
        <div className={cn("space-y-4", className)}>
            <Label className={cn("text-base font-medium", titleClassName)}>{title}</Label>
            <div className="space-y-3">
                {options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox id={option.id} defaultChecked={option.defaultChecked} />
                        <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                ))}
            </div>
        </div>
    );
};
