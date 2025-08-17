import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { FeatureCard } from "@/components/saas/FeatureCard";
import { MetricCard } from "@/components/saas/MetricCard";
import { Star, Users, TrendingUp, DollarSign, Activity, Bell, Calendar, Mail } from "lucide-react";

const CardsPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Cards</h1>
        <p className="text-muted-foreground">
          Componentes de cards para organizar e exibir informações
        </p>
      </div>

      {/* Basic Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Cards Básicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Simples</CardTitle>
              <CardDescription>Descrição do card</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Conteúdo do card com informações relevantes para o usuário.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Com Ícone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Card com ícone no título para melhor identificação visual.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Com Badge</CardTitle>
              <CardDescription>
                <Badge variant="secondary">Novo</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Card destacado com badge para chamar atenção.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

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

      {/* Feature Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Feature Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Análise Avançada"
            description="Obtenha insights profundos sobre seus dados com análises em tempo real e relatórios detalhados."
            icon={TrendingUp}
            variant="highlighted"
          />
          <FeatureCard
            title="Colaboração em Equipe"
            description="Trabalhe junto com sua equipe em projetos compartilhados e mantenha todos sincronizados."
            icon={Users}
          />
          <FeatureCard
            title="Notificações Inteligentes"
            description="Receba alertas personalizados e nunca perca uma oportunidade importante."
            icon={Bell}
          />
        </div>
      </section>

      {/* Profile Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Profile Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">João Silva</h3>
                  <p className="text-sm text-muted-foreground">Desenvolvedor</p>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Ver Perfil
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Avatar className="mx-auto mb-4">
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">Maria Santos</h3>
                <p className="text-sm text-muted-foreground mb-4">Designer UI/UX</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Mensagem</Button>
                  <Button size="sm">Seguir</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback>PO</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">Pedro Oliveira</h3>
                  <p className="text-sm text-muted-foreground mb-2">Product Manager</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      Email
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Reunião
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Progress Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Progress Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Progresso do Projeto</CardTitle>
              <CardDescription>Desenvolvimento da nova feature</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Frontend</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Backend</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Testes</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Metas Mensais</CardTitle>
              <CardDescription>Acompanhe seu progresso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Vendas</span>
                  <Badge variant="secondary">85% completo</Badge>
                </div>
                <Progress value={85} />
                <div className="text-xs text-muted-foreground">
                  R$ 42.500 de R$ 50.000
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CardsPage;