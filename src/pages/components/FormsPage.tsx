import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FormSection } from "@/components/forms/FormSection";
import { FormField } from "@/components/forms/FormField";
import { CheckboxGroup } from "@/components/forms/CheckboxGroup";
import { SwitchGroup } from "@/components/forms/SwitchGroup";
import { RadioGroupField } from "@/components/forms/RadioGroupField";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { AdvancedRegistrationForm } from "@/components/forms/AdvancedRegistrationForm";
import { PaymentForm } from "@/components/forms/PaymentForm";
import { Home, Package, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const FormsPage = () => {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/components" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Componentes
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Formulários
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Formulários</h1>
        <p className="text-muted-foreground">
          Componentes de formulário para entrada e validação de dados
        </p>
      </div>

      {/* Basic Form Elements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Elementos Básicos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FormSection
            title="Campos de Texto"
            description="Inputs para diferentes tipos de dados"
          >
            <FormField label="Nome completo">
              <Input placeholder="Digite seu nome" />
            </FormField>

            <FormField label="Email">
              <Input type="email" placeholder="usuario@email.com" />
            </FormField>

            <FormField label="Senha">
              <Input type="password" placeholder="••••••••" />
            </FormField>

            <FormField label="Idade">
              <Input type="number" placeholder="25" />
            </FormField>
          </FormSection>

          <FormSection
            title="Textarea e Select"
            description="Componentes para textos longos e seleção"
          >
            <FormField label="Descrição">
              <Textarea
                placeholder="Conte-nos mais sobre você..."
                rows={3}
              />
            </FormField>

            <FormField label="País">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um país" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="br">Brasil</SelectItem>
                  <SelectItem value="us">Estados Unidos</SelectItem>
                  <SelectItem value="ca">Canadá</SelectItem>
                  <SelectItem value="mx">México</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
          </FormSection>
        </div>
      </section>

      {/* Choice Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Componentes de Escolha</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FormSection
            title="Checkboxes e Switches"
            description="Opções de seleção múltipla e alternadores"
          >
            <CheckboxGroup
              title="Interesses"
              options={[
                { id: "tech", label: "Tecnologia" },
                { id: "design", label: "Design" },
                { id: "business", label: "Negócios" }
              ]}
            />

            <SwitchGroup
              title="Configurações"
              options={[
                { id: "notifications", label: "Notificações" },
                { id: "marketing", label: "Marketing" }
              ]}
            />
          </FormSection>

          <FormSection
            title="Radio Groups"
            description="Seleção única entre múltiplas opções"
          >
            <RadioGroupField
              title="Plano de assinatura"
              defaultValue="pro"
              options={[
                { value: "free", id: "free", label: "Free", badge: { text: "Grátis", variant: "secondary" } },
                { value: "pro", id: "pro", label: "Pro", badge: { text: "R$ 29/mês" } },
                { value: "enterprise", id: "enterprise", label: "Enterprise", badge: { text: "Customizado", variant: "outline" } }
              ]}
            />

            <RadioGroupField
              title="Método de pagamento"
              defaultValue="card"
              options={[
                { value: "card", id: "card", label: "Cartão de crédito" },
                { value: "pix", id: "pix", label: "PIX" },
                { value: "boleto", id: "boleto", label: "Boleto bancário" }
              ]}
            />
          </FormSection>
        </div>
      </section>

      {/* Advanced Forms Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Formulários Avançados</h2>

        {/* Registration Form */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Formulário Básico de Cadastro</h3>
          <RegistrationForm />
        </div>

        {/* Advanced Registration Form */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Formulário Avançado com Validação e Máscaras</h3>
          <AdvancedRegistrationForm />
        </div>

        {/* Payment Form */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Formulário de Pagamento</h3>
          <PaymentForm />
        </div>
      </section>
    </div>
  );
};

export default FormsPage;