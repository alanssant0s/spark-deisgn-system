import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormSection } from "./FormSection";
import { FormField } from "./FormField";
import { FormActions } from "./FormActions";

const roleOptions = [
    { value: "developer", label: "Desenvolvedor" },
    { value: "designer", label: "Designer" },
    { value: "manager", label: "Gerente" },
    { value: "ceo", label: "CEO" },
    { value: "other", label: "Outro" }
];

export const RegistrationForm = () => {
    const handleSubmit = () => {
        // Lógica de submissão do formulário
        console.log("Formulário enviado");
    };

    const handleCancel = () => {
        // Lógica de cancelamento
        console.log("Formulário cancelado");
    };

    const actions = [
        { label: "Cancelar", variant: "outline" as const, onClick: handleCancel },
        { label: "Criar Conta", variant: "default" as const, onClick: handleSubmit, type: "submit" as const }
    ];

    return (
        <FormSection
            title="Formulário de Cadastro"
            description="Exemplo de formulário completo com validação"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Nome" required>
                    <Input placeholder="João" />
                </FormField>
                <FormField label="Sobrenome" required>
                    <Input placeholder="Silva" />
                </FormField>
            </div>

            <FormField label="Email" required>
                <Input type="email" placeholder="joao@email.com" />
            </FormField>

            <FormField label="Telefone">
                <Input placeholder="(11) 99999-9999" />
            </FormField>

            <FormField label="Empresa">
                <Input placeholder="Nome da empresa" />
            </FormField>

            <FormField label="Cargo">
                <Select>
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

            <FormField label="Sobre você">
                <Textarea
                    placeholder="Conte um pouco sobre sua experiência..."
                    rows={4}
                />
            </FormField>

            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                        Eu concordo com os <a href="#" className="text-primary underline">termos de uso</a> e <a href="#" className="text-primary underline">política de privacidade</a>
                    </Label>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                        Quero receber newsletters e atualizações por email
                    </Label>
                </div>
            </div>

            <FormActions actions={actions} />
        </FormSection>
    );
};
