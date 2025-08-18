import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormSection } from "./FormSection";
import { FormField } from "./FormField";
import { FormActions } from "./FormActions";
import { ValidatedFormField } from "./ValidatedFormField";
import { MaskedInput } from "./MaskedInput";
import { toast } from "@/hooks/use-toast";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cpf: string;
    cep: string;
    address: string;
    city: string;
    state: string;
    company: string;
    role: string;
    bio: string;
    terms: boolean;
    newsletter: boolean;
}

const roleOptions = [
    { value: "developer", label: "Desenvolvedor" },
    { value: "designer", label: "Designer" },
    { value: "manager", label: "Gerente" },
    { value: "ceo", label: "CEO" },
    { value: "other", label: "Outro" }
];

const stateOptions = [
    { value: "SP", label: "São Paulo" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "MG", label: "Minas Gerais" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "PR", label: "Paraná" },
    { value: "SC", label: "Santa Catarina" },
    { value: "BA", label: "Bahia" },
    { value: "GO", label: "Goiás" },
    { value: "PE", label: "Pernambuco" },
    { value: "CE", label: "Ceará" }
];

export const AdvancedRegistrationForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        cpf: "",
        cep: "",
        address: "",
        city: "",
        state: "",
        company: "",
        role: "",
        bio: "",
        terms: false,
        newsletter: false
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const updateField = (field: keyof FormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Limpar erro do campo quando o usuário começa a digitar
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        // Validações básicas
        if (!formData.firstName.trim()) newErrors.firstName = "Nome é obrigatório";
        if (!formData.lastName.trim()) newErrors.lastName = "Sobrenome é obrigatório";
        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }
        if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";
        if (!formData.cpf.trim()) newErrors.cpf = "CPF é obrigatório";
        if (!formData.cep.trim()) newErrors.cep = "CEP é obrigatório";
        if (!formData.address.trim()) newErrors.address = "Endereço é obrigatório";
        if (!formData.city.trim()) newErrors.city = "Cidade é obrigatória";
        if (!formData.state) newErrors.state = "Estado é obrigatório";
        if (!formData.terms) newErrors.terms = "Você deve aceitar os termos";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Formulário enviado:", formData);
            toast({
                title: "Sucesso!",
                description: "Formulário enviado com sucesso.",
            });
        } else {
            toast({
                title: "Erro de validação",
                description: "Por favor, corrija os campos destacados.",
                variant: "destructive",
            });
        }
    };

    const handleCancel = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            cpf: "",
            cep: "",
            address: "",
            city: "",
            state: "",
            company: "",
            role: "",
            bio: "",
            terms: false,
            newsletter: false
        });
        setErrors({});
        toast({
            title: "Formulário limpo",
            description: "Todos os campos foram resetados.",
        });
    };

    const actions = [
        { label: "Limpar", variant: "outline" as const, onClick: handleCancel },
        { label: "Enviar Formulário", variant: "default" as const, onClick: handleSubmit, type: "submit" as const }
    ];

    return (
        <FormSection
            title="Formulário Avançado de Cadastro"
            description="Exemplo completo com validação, máscaras e diferentes tipos de campos"
        >
            {/* Informações Pessoais */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Informações Pessoais</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ValidatedFormField
                        label="Nome"
                        value={formData.firstName}
                        onChange={(value) => updateField("firstName", value)}
                        placeholder="João"
                        required
                        validationRules={[
                            { test: (value) => value.length >= 2, message: "Nome deve ter pelo menos 2 caracteres" }
                        ]}
                    />

                    <ValidatedFormField
                        label="Sobrenome"
                        value={formData.lastName}
                        onChange={(value) => updateField("lastName", value)}
                        placeholder="Silva"
                        required
                        validationRules={[
                            { test: (value) => value.length >= 2, message: "Sobrenome deve ter pelo menos 2 caracteres" }
                        ]}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ValidatedFormField
                        label="Email"
                        value={formData.email}
                        onChange={(value) => updateField("email", value)}
                        placeholder="joao@email.com"
                        type="email"
                        required
                        validationRules={[
                            { test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), message: "Email inválido" }
                        ]}
                    />

                    <MaskedInput
                        label="Telefone"
                        value={formData.phone}
                        onChange={(value) => updateField("phone", value)}
                        mask="(##) #####-####"
                        placeholder="(11) 99999-9999"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MaskedInput
                        label="CPF"
                        value={formData.cpf}
                        onChange={(value) => updateField("cpf", value)}
                        mask="###.###.###-##"
                        placeholder="123.456.789-00"
                        required
                    />

                    <MaskedInput
                        label="CEP"
                        value={formData.cep}
                        onChange={(value) => updateField("cep", value)}
                        mask="#####-###"
                        placeholder="12345-678"
                        required
                    />
                </div>
            </div>

            {/* Endereço */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Endereço</h3>

                <FormField label="Endereço" required>
                    <Input
                        value={formData.address}
                        onChange={(e) => updateField("address", e.target.value)}
                        placeholder="Rua das Flores, 123"
                    />
                </FormField>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Cidade" required>
                        <Input
                            value={formData.city}
                            onChange={(e) => updateField("city", e.target.value)}
                            placeholder="São Paulo"
                        />
                    </FormField>

                    <FormField label="Estado" required>
                        <Select value={formData.state} onValueChange={(value) => updateField("state", value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione o estado" />
                            </SelectTrigger>
                            <SelectContent>
                                {stateOptions.map((state) => (
                                    <SelectItem key={state.value} value={state.value}>
                                        {state.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormField>
                </div>
            </div>

            {/* Informações Profissionais */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Informações Profissionais</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Empresa">
                        <Input
                            value={formData.company}
                            onChange={(e) => updateField("company", e.target.value)}
                            placeholder="Nome da empresa"
                        />
                    </FormField>

                    <FormField label="Cargo">
                        <Select value={formData.role} onValueChange={(value) => updateField("role", value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione seu cargo" />
                            </SelectTrigger>
                            <SelectContent>
                                {roleOptions.map((role) => (
                                    <SelectItem key={role.value} value={role.value}>
                                        {role.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormField>
                </div>

                <FormField label="Sobre você">
                    <Textarea
                        value={formData.bio}
                        onChange={(e) => updateField("bio", e.target.value)}
                        placeholder="Conte um pouco sobre sua experiência profissional..."
                        rows={4}
                    />
                </FormField>
            </div>

            {/* Termos e Condições */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Termos e Condições</h3>

                <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                        <Checkbox
                            id="terms"
                            checked={formData.terms}
                            onCheckedChange={(checked) => updateField("terms", checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                            Eu concordo com os <a href="#" className="text-primary underline">termos de uso</a> e <a href="#" className="text-primary underline">política de privacidade</a>
                        </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                        <Checkbox
                            id="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) => updateField("newsletter", checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                            Quero receber newsletters e atualizações por email
                        </Label>
                    </div>
                </div>
            </div>

            <FormActions actions={actions} />
        </FormSection>
    );
};
