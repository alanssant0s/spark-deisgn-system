import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle } from "lucide-react";

interface ValidationRule {
    test: (value: string) => boolean;
    message: string;
}

interface ValidatedFormFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
    required?: boolean;
    validationRules?: ValidationRule[];
    className?: string;
    disabled?: boolean;
}

export const ValidatedFormField = ({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    required = false,
    validationRules = [],
    className,
    disabled = false
}: ValidatedFormFieldProps) => {
    const [touched, setTouched] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const validate = (value: string) => {
        if (!required && !value) return [];

        const newErrors: string[] = [];

        if (required && !value) {
            newErrors.push("Este campo é obrigatório");
        }

        validationRules.forEach(rule => {
            if (!rule.test(value)) {
                newErrors.push(rule.message);
            }
        });

        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange(newValue);

        if (touched) {
            const newErrors = validate(newValue);
            setErrors(newErrors);
        }
    };

    const handleBlur = () => {
        setTouched(true);
        const newErrors = validate(value);
        setErrors(newErrors);
    };

    const isValid = errors.length === 0;
    const showValidation = touched && value;

    return (
        <div className={cn("space-y-2", className)}>
            <Label className="flex items-center gap-2">
                {label}
                {required && <span className="text-destructive">*</span>}
            </Label>

            <div className="relative">
                <Input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={cn(
                        showValidation && isValid && "border-green-500 focus:border-green-500",
                        showValidation && !isValid && "border-red-500 focus:border-red-500"
                    )}
                />

                {showValidation && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {isValid ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                            <AlertCircle className="h-4 w-4 text-red-500" />
                        )}
                    </div>
                )}
            </div>

            {showValidation && errors.length > 0 && (
                <div className="space-y-1">
                    {errors.map((error, index) => (
                        <p key={index} className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {error}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};
