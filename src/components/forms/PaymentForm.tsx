import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormSection } from "./FormSection";
import { FormField } from "./FormField";
import { FormActions } from "./FormActions";
import { MaskedInput } from "./MaskedInput";
import { toast } from "@/hooks/use-toast";
import { CreditCard, Lock, Shield } from "lucide-react";

interface PaymentData {
    cardNumber: string;
    cardHolder: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    installments: string;
}

const monthOptions = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1).padStart(2, '0'),
    label: String(i + 1).padStart(2, '0')
}));

const yearOptions = Array.from({ length: 10 }, (_, i) => {
    const year = new Date().getFullYear() + i;
    return {
        value: String(year),
        label: String(year)
    };
});

const installmentOptions = [
    { value: "1", label: "1x sem juros" },
    { value: "2", label: "2x sem juros" },
    { value: "3", label: "3x sem juros" },
    { value: "4", label: "4x sem juros" },
    { value: "5", label: "5x sem juros" },
    { value: "6", label: "6x sem juros" },
    { value: "7", label: "7x com juros" },
    { value: "8", label: "8x com juros" },
    { value: "9", label: "9x com juros" },
    { value: "10", label: "10x com juros" },
    { value: "11", label: "11x com juros" },
    { value: "12", label: "12x com juros" }
];

export const PaymentForm = () => {
    const [paymentData, setPaymentData] = useState<PaymentData>({
        cardNumber: "",
        cardHolder: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        installments: "1"
    });

    const updateField = (field: keyof PaymentData, value: string) => {
        setPaymentData(prev => ({ ...prev, [field]: value }));
    };

    const validateCardNumber = (cardNumber: string): boolean => {
        // Algoritmo de Luhn para validação de cartão
        const digits = cardNumber.replace(/\D/g, '');
        if (digits.length < 13 || digits.length > 19) return false;

        let sum = 0;
        let isEven = false;

        for (let i = digits.length - 1; i >= 0; i--) {
            let digit = parseInt(digits[i]);

            if (isEven) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            isEven = !isEven;
        }

        return sum % 10 === 0;
    };

    const validateForm = (): boolean => {
        if (!paymentData.cardNumber.replace(/\D/g, '')) {
            toast({
                title: "Erro",
                description: "Número do cartão é obrigatório",
                variant: "destructive",
            });
            return false;
        }

        if (!validateCardNumber(paymentData.cardNumber)) {
            toast({
                title: "Erro",
                description: "Número do cartão inválido",
                variant: "destructive",
            });
            return false;
        }

        if (!paymentData.cardHolder.trim()) {
            toast({
                title: "Erro",
                description: "Nome do titular é obrigatório",
                variant: "destructive",
            });
            return false;
        }

        if (!paymentData.expiryMonth || !paymentData.expiryYear) {
            toast({
                title: "Erro",
                description: "Data de validade é obrigatória",
                variant: "destructive",
            });
            return false;
        }

        if (!paymentData.cvv || paymentData.cvv.length < 3) {
            toast({
                title: "Erro",
                description: "CVV é obrigatório",
                variant: "destructive",
            });
            return false;
        }

        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Pagamento processado:", paymentData);
            toast({
                title: "Pagamento processado!",
                description: "Seu pagamento foi processado com sucesso.",
            });
        }
    };

    const handleCancel = () => {
        setPaymentData({
            cardNumber: "",
            cardHolder: "",
            expiryMonth: "",
            expiryYear: "",
            cvv: "",
            installments: "1"
        });
        toast({
            title: "Formulário limpo",
            description: "Dados do cartão foram removidos.",
        });
    };

    const actions = [
        { label: "Cancelar", variant: "outline" as const, onClick: handleCancel },
        { label: "Processar Pagamento", variant: "default" as const, onClick: handleSubmit, type: "submit" as const }
    ];

    return (
        <FormSection
            title="Formulário de Pagamento"
            description="Exemplo de formulário de pagamento com validação de cartão de crédito"
        >
            <div className="space-y-6">
                {/* Informações do Cartão */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                        <CreditCard className="h-5 w-5" />
                        Informações do Cartão
                    </div>

                    <MaskedInput
                        label="Número do Cartão"
                        value={paymentData.cardNumber}
                        onChange={(value) => updateField("cardNumber", value)}
                        mask="#### #### #### ####"
                        placeholder="1234 5678 9012 3456"
                        required
                    />

                    <FormField label="Nome do Titular" required>
                        <Input
                            value={paymentData.cardHolder}
                            onChange={(e) => updateField("cardHolder", e.target.value.toUpperCase())}
                            placeholder="NOME COMO ESTÁ NO CARTÃO"
                        />
                    </FormField>

                    <div className="grid grid-cols-3 gap-4">
                        <FormField label="Mês" required>
                            <Select value={paymentData.expiryMonth} onValueChange={(value) => updateField("expiryMonth", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="MM" />
                                </SelectTrigger>
                                <SelectContent>
                                    {monthOptions.map((month) => (
                                        <SelectItem key={month.value} value={month.value}>
                                            {month.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormField>

                        <FormField label="Ano" required>
                            <Select value={paymentData.expiryYear} onValueChange={(value) => updateField("expiryYear", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="AAAA" />
                                </SelectTrigger>
                                <SelectContent>
                                    {yearOptions.map((year) => (
                                        <SelectItem key={year.value} value={year.value}>
                                            {year.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormField>

                        <MaskedInput
                            label="CVV"
                            value={paymentData.cvv}
                            onChange={(value) => updateField("cvv", value)}
                            mask="###"
                            placeholder="123"
                            required
                        />
                    </div>
                </div>

                {/* Parcelamento */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                        <Shield className="h-5 w-5" />
                        Parcelamento
                    </div>

                    <FormField label="Número de Parcelas">
                        <Select value={paymentData.installments} onValueChange={(value) => updateField("installments", value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione o parcelamento" />
                            </SelectTrigger>
                            <SelectContent>
                                {installmentOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormField>
                </div>

                {/* Informações de Segurança */}
                <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                        <Lock className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div className="space-y-2">
                            <h4 className="font-medium text-foreground">Pagamento Seguro</h4>
                            <p className="text-sm text-muted-foreground">
                                Seus dados são protegidos com criptografia SSL de 256 bits.
                                Não armazenamos informações do seu cartão de crédito.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <FormActions actions={actions} />
        </FormSection>
    );
};
