import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface SwitchOption {
    id: string;
    label: string;
    defaultChecked?: boolean;
}

interface SwitchGroupProps {
    title: string;
    options: SwitchOption[];
    className?: string;
    titleClassName?: string;
}

export const SwitchGroup = ({ title, options, className, titleClassName }: SwitchGroupProps) => {
    return (
        <div className={cn("space-y-4", className)}>
            <Label className={cn("text-base font-medium", titleClassName)}>{title}</Label>
            <div className="space-y-3">
                {options.map((option) => (
                    <div key={option.id} className="flex items-center justify-between">
                        <Label htmlFor={option.id}>{option.label}</Label>
                        <Switch id={option.id} defaultChecked={option.defaultChecked} />
                    </div>
                ))}
            </div>
        </div>
    );
};
