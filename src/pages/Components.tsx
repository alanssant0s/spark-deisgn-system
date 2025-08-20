import { MetricCard } from "@/components/saas/MetricCard";
import { StatCard } from "@/components/saas/StatCard";

import { FeatureCard } from "@/components/saas/FeatureCard";
import { SaasStatusBadge } from "@/components/saas/StatusBadge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { toast } from "@/hooks/use-toast";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Download,
  Plus,
  Zap,
  Shield,
  Rocket,
  Star,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Settings,
  Bell,
  Calendar,
  Search,
  Filter,
  Edit,
  Trash
} from "lucide-react";

// Sample data for charts
const chartData = [
  { name: "Jan", vendas: 4000, usuarios: 2400 },
  { name: "Fev", vendas: 3000, usuarios: 1398 },
  { name: "Mar", vendas: 2000, usuarios: 9800 },
  { name: "Abr", vendas: 2780, usuarios: 3908 },
  { name: "Mai", vendas: 1890, usuarios: 4800 },
  { name: "Jun", vendas: 2390, usuarios: 3800 },
];

const pieData = [
  { name: "Desktop", value: 400, color: "hsl(var(--primary))" },
  { name: "Mobile", value: 300, color: "hsl(var(--secondary))" },
  { name: "Tablet", value: 200, color: "hsl(var(--accent))" },
];

const tableData = [
  { id: "1", name: "João Silva", email: "joao@email.com", status: "Ativo", role: "Admin" },
  { id: "2", name: "Maria Santos", email: "maria@email.com", status: "Inativo", role: "User" },
  { id: "3", name: "Pedro Oliveira", email: "pedro@email.com", status: "Ativo", role: "Editor" },
];

const Components = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Componentes SaaS</h1>
        <p className="text-muted-foreground">
          Biblioteca completa de componentes para aplicações SaaS
        </p>
      </div>

      {/* Metric Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Metric Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total de Usuários"
            value="2,543"
            change="+12% vs último mês"
            changeType="positive"
            icon={Users}
          />
          <MetricCard
            title="Receita Mensal"
            value="R$ 45.231"
            change="+8.5% vs último mês"
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard
            title="Taxa de Conversão"
            value="3.24%"
            change="-2.1% vs último mês"
            changeType="negative"
            icon={TrendingUp}
          />
          <MetricCard
            title="Atividade Diária"
            value="1,247"
            change="Sem alterações"
            changeType="neutral"
            icon={Activity}
          />
        </div>
      </section>

      {/* Stat Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Stat Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard label="Usuários Ativos" value="1,234" icon={Users} variant="default" />
          <StatCard label="Vendas" value="R$ 12.5k" icon={DollarSign} variant="success" />
          <StatCard label="Alertas" value="23" icon={Activity} variant="warning" />
          <StatCard label="Erros" value="5" icon={Activity} variant="destructive" />
          <StatCard label="Premium" value="456" icon={Star} variant="accent" />
        </div>
      </section>



      {/* Feature Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Feature Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Segurança Avançada"
            description="Proteção de dados com criptografia de ponta a ponta e autenticação multi-fator."
            icon={Shield}
            variant="highlighted"
          />
          <FeatureCard
            title="Performance Ultra-Rápida"
            description="Otimização avançada para carregamento instantâneo e experiência fluida."
            icon={Zap}
          />
          <FeatureCard
            title="Escalabilidade Automática"
            description="Infraestrutura que cresce com seu negócio, sem preocupações técnicas."
            icon={Rocket}
          />
        </div>
      </section>

      {/* Status Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Status Badges</h2>
        <div className="flex flex-wrap gap-4">
          <SaasStatusBadge status="active" />
          <SaasStatusBadge status="inactive" />
          <SaasStatusBadge status="pending" />
          <SaasStatusBadge status="error" />
          <SaasStatusBadge status="success" />
          <SaasStatusBadge status="active" text="Online" />
          <SaasStatusBadge status="pending" text="Processando" />
        </div>
      </section>

      {/* UI Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">UI Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">UI Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Settings /></Button>
        </div>
      </section>

      {/* Alerts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Alerts</h2>
        <div className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Informação!</AlertTitle>
            <AlertDescription>
              Esta é uma mensagem informativa importante para o usuário.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Erro!</AlertTitle>
            <AlertDescription>
              Ocorreu um erro durante o processamento da sua solicitação.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Progress */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Progress</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Progresso da instalação: 33%</Label>
            <Progress value={33} />
          </div>
          <div className="space-y-2">
            <Label>Upload completo: 75%</Label>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <Label>Processamento: 100%</Label>
            <Progress value={100} />
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Gráficos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Vendas e Usuários</CardTitle>
              <CardDescription>Evolução mensal dos dados</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="vendas" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line type="monotone" dataKey="usuarios" stroke="hsl(var(--secondary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Área de Vendas</CardTitle>
              <CardDescription>Crescimento acumulado</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="vendas" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Barras Comparativas</CardTitle>
              <CardDescription>Vendas vs Usuários</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="vendas" fill="hsl(var(--primary))" />
                  <Bar dataKey="usuarios" fill="hsl(var(--secondary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribuição de Dispositivos</CardTitle>
              <CardDescription>Acesso por tipo de dispositivo</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>



      {/* Toast Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Toasts</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Sucesso!",
                description: "Operação realizada com sucesso.",
              });
            }}
          >
            Toast de Sucesso
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Erro!",
                description: "Algo deu errado. Tente novamente.",
                variant: "destructive",
              });
            }}
          >
            Toast de Erro
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Informação",
                description: "Esta é uma mensagem informativa.",
              });
            }}
          >
            Toast Informativo
          </Button>
        </div>
      </section>

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tabs</h2>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Conta</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Informações da Conta</CardTitle>
                <CardDescription>Gerencie suas informações pessoais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Nome de usuário</Label>
                  <Input id="username" defaultValue="joaosilva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Conte-nos sobre você" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Configurações</CardTitle>
                <CardDescription>Personalize sua experiência</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Receber notificações</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="marketing" />
                  <Label htmlFor="marketing">Emails de marketing</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notificações</CardTitle>
                <CardDescription>Escolha como quer ser notificado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup defaultValue="all">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">Todas as notificações</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="important" id="important" />
                    <Label htmlFor="important">Apenas importantes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">Nenhuma notificação</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Form Elements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Elementos de Formulário</h2>
        <Card>
          <CardHeader>
            <CardTitle>Formulário de Exemplo</CardTitle>
            <CardDescription>Diversos componentes de entrada</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="input1">Input de Texto</Label>
                <Input id="input1" placeholder="Digite algo..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="select1">Select</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Opção 1</SelectItem>
                    <SelectItem value="option2">Opção 2</SelectItem>
                    <SelectItem value="option3">Opção 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="textarea1">Textarea</Label>
              <Textarea id="textarea1" placeholder="Digite uma mensagem longa..." />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Aceito os termos e condições</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="subscribe" />
                <Label htmlFor="subscribe">Receber newsletter</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tabela</h2>
        <Card>
          <CardHeader>
            <CardTitle>Usuários do Sistema</CardTitle>
            <CardDescription>Lista de usuários cadastrados</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Função</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === "Ativo" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Components;