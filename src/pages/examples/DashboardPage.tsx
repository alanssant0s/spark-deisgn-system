import { SaasLayout } from "@/components/saas/SaasLayout";
import { MetricCard } from "@/components/saas/MetricCard";
import { StatCard } from "@/components/saas/StatCard";
import { StatusBadge } from "@/components/saas/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  ShoppingCart,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Calendar,
  Settings
} from "lucide-react";

const revenueData = [
  { month: "Jan", receita: 4500, pedidos: 245 },
  { month: "Fev", receita: 5200, pedidos: 312 },
  { month: "Mar", receita: 4800, pedidos: 278 },
  { month: "Abr", receita: 6100, pedidos: 389 },
  { month: "Mai", receita: 7300, pedidos: 445 },
  { month: "Jun", receita: 8200, pedidos: 512 },
];

const trafficData = [
  { name: "Seg", visitantes: 2400 },
  { name: "Ter", visitantes: 1398 },
  { name: "Qua", visitantes: 9800 },
  { name: "Qui", visitantes: 3908 },
  { name: "Sex", visitantes: 4800 },
  { name: "Sáb", visitantes: 3800 },
  { name: "Dom", visitantes: 4300 },
];

const recentOrders = [
  { id: "#3847", customer: "Ana Silva", value: "R$ 250,00", status: "completed", avatar: "/avatars/01.png" },
  { id: "#3848", customer: "João Santos", value: "R$ 125,00", status: "pending", avatar: "/avatars/02.png" },
  { id: "#3849", customer: "Maria Oliveira", value: "R$ 340,00", status: "processing", avatar: "/avatars/03.png" },
  { id: "#3850", customer: "Pedro Costa", value: "R$ 180,00", status: "completed", avatar: "/avatars/04.png" },
];

const DashboardPage = () => {
  return (
    <SaasLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
              Bem-vindo de volta! Aqui está o resumo do seu negócio hoje.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Últimos 30 dias
            </Button>
            <Button size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Configurar
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Receita Total"
            value="R$ 45.231"
            change="+20.1% vs mês anterior"
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard
            title="Pedidos"
            value="1,234"
            change="+12% vs mês anterior"
            changeType="positive"
            icon={ShoppingCart}
          />
          <MetricCard
            title="Novos Clientes"
            value="573"
            change="+8.5% vs mês anterior"
            changeType="positive"
            icon={Users}
          />
          <MetricCard
            title="Taxa de Conversão"
            value="3.24%"
            change="-2.1% vs mês anterior"
            changeType="negative"
            icon={TrendingUp}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <StatCard label="Visitantes Hoje" value="1,247" icon={Eye} variant="default" />
          <StatCard label="Vendas Online" value="R$ 12.5k" icon={DollarSign} variant="success" />
          <StatCard label="Produtos Ativos" value="456" icon={Activity} variant="accent" />
          <StatCard label="Notificações" value="23" icon={Bell} variant="warning" />
          <StatCard label="Relatórios" value="8" icon={TrendingUp} variant="default" />
          <StatCard label="Suporte" value="3" icon={Users} variant="destructive" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Receita e Pedidos</CardTitle>
              <CardDescription>
                Evolução mensal da receita e número de pedidos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="receita" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3} 
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="pedidos" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tráfego Semanal</CardTitle>
              <CardDescription>
                Visitantes únicos por dia da semana
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="visitantes" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))" 
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Pedidos Recentes</CardTitle>
              <CardDescription>
                Últimas transações realizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={order.avatar} alt={order.customer} />
                        <AvatarFallback>{order.customer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">{order.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">{order.value}</p>
                      <StatusBadge 
                        status={order.status as "active" | "inactive" | "pending" | "error" | "success"} 
                        text={
                          order.status === "completed" ? "Concluído" :
                          order.status === "pending" ? "Pendente" :
                          order.status === "processing" ? "Processando" : order.status
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resumo Rápido</CardTitle>
              <CardDescription>
                Métricas importantes do dia
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Meta de Vendas</span>
                  <span>72%</span>
                </div>
                <Progress value={72} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Satisfação do Cliente</span>
                  <span>94%</span>
                </div>
                <Progress value={94} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processos Automáticos</span>
                  <span>88%</span>
                </div>
                <Progress value={88} />
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Top Produto</span>
                  <Badge variant="secondary">MacBook Pro</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Melhor Vendedor</span>
                  <Badge variant="outline">Ana Silva</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Região Líder</span>
                  <Badge>São Paulo</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SaasLayout>
  );
};

export default DashboardPage;