import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/saas/MetricCard";
import { FeatureCard } from "@/components/saas/FeatureCard";
import { Users, DollarSign, TrendingUp, Activity, Eye, UserPlus, Download, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  const metrics = [
    {
      title: "Usuários Ativos",
      value: "2,543",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: Users
    },
    {
      title: "Receita Mensal",
      value: "R$ 45.231",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: DollarSign
    },
    {
      title: "Taxa de Conversão",
      value: "3.4%",
      change: "-2.1%",
      changeType: "negative" as const,
      icon: TrendingUp
    },
    {
      title: "Uptime",
      value: "99.9%",
      change: "Estável",
      changeType: "neutral" as const,
      icon: Activity
    }
  ];

  const features = [
    {
      title: "Analytics Avançados",
      description: "Acompanhe métricas detalhadas do seu negócio em tempo real",
      icon: Eye
    },
    {
      title: "Gestão de Usuários",
      description: "Sistema completo de gerenciamento de usuários e permissões",
      icon: UserPlus
    },
    {
      title: "Relatórios Personalizados",
      description: "Gere relatórios customizados para diferentes necessidades",
      icon: Download
    },
    {
      title: "E-commerce Integrado",
      description: "Plataforma completa para vendas online",
      icon: ShoppingCart
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Visão geral do seu negócio e métricas principais
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Últimas ações na plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Novo usuário registrado</p>
                  <p className="text-xs text-muted-foreground">Há 5 minutos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Pedido processado</p>
                  <p className="text-xs text-muted-foreground">Há 12 minutos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Sistema atualizado</p>
                  <p className="text-xs text-muted-foreground">Há 1 hora</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Principais Recursos</CardTitle>
            <CardDescription>Explore as funcionalidades da plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              {features.slice(0, 2).map((feature, index) => (
                <FeatureCard
                  key={index}
                  {...feature}
                  variant="default"
                  className="p-4"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}