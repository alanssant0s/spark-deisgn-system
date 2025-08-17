import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { 
  User, Mail, Phone, Lock, Eye, EyeOff, Upload, Calendar,
  MapPin, CreditCard, Shield, Check, AlertCircle, Info
} from "lucide-react";
import { useState } from "react";

const FormsPage = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    newsletter: false,
    notifications: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulário enviado!",
      description: "Os dados foram processados com sucesso.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Forms</h1>
          <p className="text-muted-foreground">
            Componentes de formulário para coleta e validação de dados
          </p>
        </div>

        <Tabs defaultValue="examples" className="space-y-6">
          <TabsList>
            <TabsTrigger value="examples">Exemplos</TabsTrigger>
            <TabsTrigger value="validation">Validação</TabsTrigger>
            <TabsTrigger value="layouts">Layouts</TabsTrigger>
            <TabsTrigger value="usage">Como Usar</TabsTrigger>
          </TabsList>

          <TabsContent value="examples" className="space-y-6">
            {/* Basic Form */}
            <Card>
              <CardHeader>
                <CardTitle>Formulário Básico</CardTitle>
                <CardDescription>Campos de entrada básicos com diferentes tipos</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="name" 
                          type="text" 
                          placeholder="Digite seu nome"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="seuemail@exemplo.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="(11) 99999-9999"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">País</Label>
                      <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu país" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="br">Brasil</SelectItem>
                          <SelectItem value="us">Estados Unidos</SelectItem>
                          <SelectItem value="ca">Canadá</SelectItem>
                          <SelectItem value="mx">México</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Digite sua mensagem aqui..."
                      className="resize-none"
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="newsletter" 
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Quero receber newsletter com novidades e promoções
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar formulário
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Advanced Form */}
            <Card>
              <CardHeader>
                <CardTitle>Formulário Avançado</CardTitle>
                <CardDescription>Campos especializados e componentes complexos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        className="pl-10 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Upload de arquivo</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">
                            Clique para fazer upload ou arraste arquivos aqui
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PNG, JPG, PDF até 10MB
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Selecionar arquivo
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Radio Group */}
                  <div className="space-y-3">
                    <Label>Plano de assinatura</Label>
                    <RadioGroup defaultValue="pro" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="basic" id="basic" />
                        <div className="space-y-1">
                          <Label htmlFor="basic" className="text-sm font-medium">Básico</Label>
                          <p className="text-xs text-muted-foreground">R$ 29/mês</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 border-primary">
                        <RadioGroupItem value="pro" id="pro" />
                        <div className="space-y-1">
                          <Label htmlFor="pro" className="text-sm font-medium">Pro</Label>
                          <p className="text-xs text-muted-foreground">R$ 59/mês</p>
                          <Badge variant="secondary" className="text-xs">Mais popular</Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="enterprise" id="enterprise" />
                        <div className="space-y-1">
                          <Label htmlFor="enterprise" className="text-sm font-medium">Enterprise</Label>
                          <p className="text-xs text-muted-foreground">R$ 99/mês</p>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Switches */}
                  <div className="space-y-4">
                    <Label>Preferências de notificação</Label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-sm">E-mail de marketing</Label>
                          <p className="text-xs text-muted-foreground">
                            Receba ofertas especiais e novidades
                          </p>
                        </div>
                        <Switch 
                          checked={formData.notifications}
                          onCheckedChange={(checked) => setFormData({...formData, notifications: checked})}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-sm">Notificações push</Label>
                          <p className="text-xs text-muted-foreground">
                            Alertas em tempo real no navegador
                          </p>
                        </div>
                        <Switch />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-sm">SMS</Label>
                          <p className="text-xs text-muted-foreground">
                            Mensagens importantes via SMS
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" className="flex-1">
                      Salvar configurações
                    </Button>
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="validation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Validação de Formulários</CardTitle>
                <CardDescription>Estados de erro, sucesso e validação em tempo real</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  {/* Error State */}
                  <div className="space-y-2">
                    <Label htmlFor="email-error">E-mail (com erro)</Label>
                    <Input 
                      id="email-error" 
                      type="email" 
                      placeholder="email@exemplo.com"
                      className="border-destructive focus-visible:ring-destructive"
                      defaultValue="email-invalido"
                    />
                    <p className="text-sm text-destructive flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Por favor, insira um e-mail válido
                    </p>
                  </div>

                  {/* Success State */}
                  <div className="space-y-2">
                    <Label htmlFor="email-success">E-mail (validado)</Label>
                    <Input 
                      id="email-success" 
                      type="email" 
                      placeholder="email@exemplo.com"
                      className="border-green-500 focus-visible:ring-green-500"
                      defaultValue="user@exemplo.com"
                    />
                    <p className="text-sm text-green-600 flex items-center">
                      <Check className="h-4 w-4 mr-1" />
                      E-mail válido
                    </p>
                  </div>

                  {/* Warning State */}
                  <div className="space-y-2">
                    <Label htmlFor="password-warning">Senha (aviso)</Label>
                    <Input 
                      id="password-warning" 
                      type="password" 
                      placeholder="Digite sua senha"
                      className="border-yellow-500 focus-visible:ring-yellow-500"
                      defaultValue="123"
                    />
                    <p className="text-sm text-yellow-600 flex items-center">
                      <Info className="h-4 w-4 mr-1" />
                      Senha muito fraca. Use pelo menos 8 caracteres
                    </p>
                  </div>

                  {/* Validation Alerts */}
                  <Alert className="border-destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Por favor, corrija os erros acima antes de continuar.
                    </AlertDescription>
                  </Alert>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="layouts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Layouts de Formulário</CardTitle>
                <CardDescription>Diferentes organizações e estruturas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Horizontal Layout */}
                <div className="space-y-4">
                  <h4 className="font-medium">Layout Horizontal</h4>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Nome</Label>
                        <Input id="first-name" placeholder="João" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Sobrenome</Label>
                        <Input id="last-name" placeholder="Silva" />
                      </div>
                      <Button>Buscar</Button>
                    </div>
                  </form>
                </div>

                <Separator />

                {/* Multi-step Layout */}
                <div className="space-y-4">
                  <h4 className="font-medium">Layout Multi-etapas</h4>
                  <div className="space-y-6">
                    {/* Step Indicator */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          1
                        </div>
                        <span className="text-sm font-medium">Dados pessoais</span>
                      </div>
                      <div className="flex-1 h-px bg-muted" />
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">
                          2
                        </div>
                        <span className="text-sm text-muted-foreground">Endereço</span>
                      </div>
                      <div className="flex-1 h-px bg-muted" />
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-medium">
                          3
                        </div>
                        <span className="text-sm text-muted-foreground">Pagamento</span>
                      </div>
                    </div>

                    {/* Step Content */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Etapa 1: Dados Pessoais</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Nome completo</Label>
                            <Input placeholder="Digite seu nome" />
                          </div>
                          <div className="space-y-2">
                            <Label>Data de nascimento</Label>
                            <Input type="date" />
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <Button variant="outline" disabled>Anterior</Button>
                          <Button>Próximo</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Como Usar</CardTitle>
                <CardDescription>Guia de implementação de formulários</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Importação Básica</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Formulário com React Hook Form</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("email", { required: true })} />
      {errors.email && <span>Campo obrigatório</span>}
      <Button type="submit">Enviar</Button>
    </form>
  );
};`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Boas Práticas</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Use labels descritivos para acessibilidade</li>
                    <li>Implemente validação em tempo real quando apropriado</li>
                    <li>Forneça feedback claro sobre erros e sucessos</li>
                    <li>Use placeholders informativos mas não substitua labels</li>
                    <li>Agrupe campos relacionados logicamente</li>
                    <li>Considere a experiência mobile com inputs apropriados</li>
                    <li>Implemente salvamento automático para formulários longos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FormsPage;