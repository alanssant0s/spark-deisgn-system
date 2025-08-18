import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { FeatureCard } from "@/components/saas/FeatureCard";
import { MetricCard } from "@/components/saas/MetricCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Star, Users, TrendingUp, DollarSign, Activity, Bell, Calendar, Mail, ArrowUpRight, ArrowDownRight, Eye, ShoppingCart, Target, Clock, BarChart3, PieChart, LineChart, Zap, Award, AlertCircle, Home, Package, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const CardsPage = () => {
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
              <CreditCard className="h-4 w-4" />
              Cards
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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

      {/* Analytics Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Cards Analíticos</h2>
        <p className="text-muted-foreground">Cards especializados para exibir métricas, KPIs e dados analíticos</p>

        {/* KPI Cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">KPI Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Receita Total</p>
                  <p className="text-2xl font-bold">R$ 45.231</p>
                  <div className="flex items-center mt-1">
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-green-500 font-medium">+20.1%</span>
                    <span className="text-xs text-muted-foreground ml-1">vs mês anterior</span>
                  </div>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Novos Clientes</p>
                  <p className="text-2xl font-bold">1,234</p>
                  <div className="flex items-center mt-1">
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-green-500 font-medium">+12.5%</span>
                    <span className="text-xs text-muted-foreground ml-1">este mês</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Taxa de Conversão</p>
                  <p className="text-2xl font-bold">3.24%</p>
                  <div className="flex items-center mt-1">
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                    <span className="text-xs text-red-500 font-medium">-2.4%</span>
                    <span className="text-xs text-muted-foreground ml-1">vs semana anterior</span>
                  </div>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Tempo Médio</p>
                  <p className="text-2xl font-bold">2m 34s</p>
                  <div className="flex items-center mt-1">
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-green-500 font-medium">+15.3%</span>
                    <span className="text-xs text-muted-foreground ml-1">engajamento</span>
                  </div>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Dashboard Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vendas Hoje</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% em relação a ontem
                </p>
                <div className="mt-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Online: R$ 8,234</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Loja: R$ 4,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Visitantes Únicos</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24,567</div>
                <p className="text-xs text-muted-foreground">
                  +7.2% vs semana passada
                </p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Taxa de Rejeição</span>
                    <span className="font-medium">32.4%</span>
                  </div>
                  <Progress value={32.4} className="mt-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Performance</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.2%</div>
                <p className="text-xs text-muted-foreground">
                  Uptime nos últimos 30 dias
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Tempo de Resposta</span>
                    <Badge variant="secondary" className="text-xs">142ms</Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Status</span>
                    <Badge variant="default" className="text-xs bg-green-500">Online</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Cards de Comparação</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Comparativo Mensal
                </CardTitle>
                <CardDescription>Análise dos últimos 3 meses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Janeiro</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">R$ 32k</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Fevereiro</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">R$ 41k</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Março</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-full h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">R$ 48k</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span>Crescimento médio</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                      <span className="font-medium text-green-500">+25%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Distribuição de Canais
                </CardTitle>
                <CardDescription>Origem do tráfego este mês</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Busca Orgânica</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">45.2%</div>
                      <div className="text-xs text-muted-foreground">12,345 visitas</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Redes Sociais</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">28.7%</div>
                      <div className="text-xs text-muted-foreground">7,834 visitas</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Email Marketing</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">16.4%</div>
                      <div className="text-xs text-muted-foreground">4,472 visitas</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Direto</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">9.7%</div>
                      <div className="text-xs text-muted-foreground">2,641 visitas</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advanced Analytics Cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Analytics Avançados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Performance Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-500">94</div>
                    <div className="text-sm text-muted-foreground">de 100 pontos</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Velocidade</span>
                      <span className="font-medium">98</span>
                    </div>
                    <Progress value={98} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>SEO</span>
                      <span className="font-medium">92</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Acessibilidade</span>
                      <span className="font-medium">89</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-500" />
                  Top Produtos
                </CardTitle>
                <CardDescription>Mais vendidos este mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">1</div>
                      <div>
                        <div className="font-medium text-sm">Produto Premium</div>
                        <div className="text-xs text-muted-foreground">234 vendas</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">R$ 12,450</div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold">2</div>
                      <div>
                        <div className="font-medium text-sm">Produto Standard</div>
                        <div className="text-xs text-muted-foreground">189 vendas</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">R$ 8,920</div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">3</div>
                      <div>
                        <div className="font-medium text-sm">Produto Basic</div>
                        <div className="text-xs text-muted-foreground">156 vendas</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">R$ 4,680</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  Alertas e Monitoramento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Estoque Baixo</div>
                      <div className="text-xs text-muted-foreground">3 produtos com menos de 10 unidades</div>
                    </div>
                    <Badge variant="destructive" className="text-xs">Crítico</Badge>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Meta de Vendas</div>
                      <div className="text-xs text-muted-foreground">Faltam R$ 12k para atingir a meta mensal</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">Atenção</Badge>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Sistema Online</div>
                      <div className="text-xs text-muted-foreground">Todos os serviços funcionando normalmente</div>
                    </div>
                    <Badge variant="default" className="text-xs bg-green-500">OK</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsPage;