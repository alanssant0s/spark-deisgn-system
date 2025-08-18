import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface MaskedInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    mask: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    disabled?: boolean;
}

export const MaskedInput = ({
    label,
    value,
    onChange,
    mask,
    placeholder,
    required = false,
    className,
    disabled = false
}: MaskedInputProps) => {
    const [displayValue, setDisplayValue] = useState("");

    const applyMask = (input: string, maskPattern: string): string => {
        let result = "";
        let inputIndex = 0;

        for (let i = 0; i < maskPattern.length && inputIndex < input.length; i++) {
            const maskChar = maskPattern[i];
            const inputChar = input[inputIndex];

            if (maskChar === "#") {
                // Aceita apenas números
                if (/\d/.test(inputChar)) {
                    result += inputChar;
                    inputIndex++;
                }
            } else if (maskChar === "A") {
                // Aceita apenas letras
                if (/[a-zA-Z]/.test(inputChar)) {
                    result += inputChar;
                    inputIndex++;
                }
            } else if (maskChar === "*") {
                // Aceita qualquer caractere
                result += inputChar;
                inputIndex++;
            } else {
                // Caractere fixo da máscara
                result += maskChar;
                if (inputChar === maskChar) {
                    inputIndex++;
                }
            }
        }

        return result;
    };

    const removeMask = (maskedValue: string, maskPattern: string): string => {
        let result = "";
        let maskIndex = 0;

        for (let i = 0; i < maskedValue.length && maskIndex < maskPattern.length; i++) {
            const char = maskedValue[i];
            const maskChar = maskPattern[maskIndex];

            if (maskChar === "#" && /\d/.test(char)) {
                result += char;
                maskIndex++;
            } else if (maskChar === "A" && /[a-zA-Z]/.test(char)) {
                result += char;
                maskIndex++;
            } else if (maskChar === "*") {
                result += char;
                maskIndex++;
            } else if (char === maskChar) {
                maskIndex++;
            }
        }

        return result;
    };

    useEffect(() => {
        const masked = applyMask(value, mask);
        setDisplayValue(masked);
    }, [value, mask]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const unmasked = removeMask(inputValue, mask);
        onChange(unmasked);
    };

    return (
        <div className={cn("space-y-2", className)}>
            <Label className="flex items-center gap-2">
                {label}
                {required && <span className="text-destructive">*</span>}
            </Label>
            <Input
                value={displayValue}
                onChange={handleChange}
                placeholder={placeholder || mask}
                disabled={disabled}
            />
        </div>
    );
};
