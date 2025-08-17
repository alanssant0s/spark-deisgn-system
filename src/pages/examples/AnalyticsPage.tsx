import { MetricCard } from "@/components/saas/MetricCard";
import { StatCard } from "@/components/saas/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  Eye,
  MousePointer,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Download,
  Calendar,
  Filter
} from "lucide-react";

const trafficData = [
  { date: "01/12", usuarios: 2400, sessoes: 3200, pageviews: 8900, bounceRate: 42 },
  { date: "02/12", usuarios: 1398, sessoes: 1890, pageviews: 5200, bounceRate: 38 },
  { date: "03/12", usuarios: 9800, sessoes: 12400, pageviews: 28500, bounceRate: 35 },
  { date: "04/12", usuarios: 3908, sessoes: 5200, pageviews: 14200, bounceRate: 44 },
  { date: "05/12", usuarios: 4800, sessoes: 6400, pageviews: 17800, bounceRate: 41 },
  { date: "06/12", usuarios: 3800, sessoes: 5100, pageviews: 15200, bounceRate: 39 },
  { date: "07/12", usuarios: 4300, sessoes: 5800, pageviews: 16700, bounceRate: 37 },
];

const deviceData = [
  { name: "Desktop", value: 54.2, color: "hsl(var(--primary))" },
  { name: "Mobile", value: 32.8, color: "hsl(var(--secondary))" },
  { name: "Tablet", value: 13.0, color: "hsl(var(--accent))" },
];

const countryData = [
  { country: "Brasil", sessions: 12500, percentage: 45.2 },
  { country: "Estados Unidos", sessions: 8900, percentage: 32.1 },
  { country: "Argentina", sessions: 3200, percentage: 11.5 },
  { country: "México", sessions: 1800, percentage: 6.5 },
  { country: "Outros", sessions: 1300, percentage: 4.7 },
];

const pageData = [
  { page: "/", views: 15420, bounceRate: 32.4, avgTime: "2:45" },
  { page: "/produtos", views: 12300, bounceRate: 28.1, avgTime: "3:12" },
  { page: "/sobre", views: 8900, bounceRate: 45.2, avgTime: "1:56" },
  { page: "/contato", views: 6700, bounceRate: 52.8, avgTime: "1:23" },
  { page: "/blog", views: 5400, bounceRate: 38.9, avgTime: "4:18" },
];

const conversionData = [
  { step: "Visita", visitors: 10000, conversion: 100 },
  { step: "Produto", visitors: 7500, conversion: 75 },
  { step: "Carrinho", visitors: 3200, conversion: 32 },
  { step: "Checkout", visitors: 1800, conversion: 18 },
  { step: "Compra", visitors: 950, conversion: 9.5 },
];

const performanceData = [
  { metric: "Velocidade", score: 85, fullMark: 100 },
  { metric: "SEO", score: 92, fullMark: 100 },
  { metric: "Acessibilidade", score: 78, fullMark: 100 },
  { metric: "Melhores Práticas", score: 88, fullMark: 100 },
  { metric: "PWA", score: 65, fullMark: 100 },
];

const AnalyticsPage = () => {
  return (
    <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground">
              Análise completa do desempenho do seu site e aplicação
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="30d">
              <SelectTrigger className="w-[150px]">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Últimos 7 dias</SelectItem>
                <SelectItem value="30d">Últimos 30 dias</SelectItem>
                <SelectItem value="90d">Últimos 90 dias</SelectItem>
                <SelectItem value="1y">Último ano</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>

        {/* KPIs Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Usuários Únicos"
            value="24.5k"
            change="+12.5% vs período anterior"
            changeType="positive"
            icon={Users}
          />
          <MetricCard
            title="Visualizações"
            value="156.2k"
            change="+8.2% vs período anterior"
            changeType="positive"
            icon={Eye}
          />
          <MetricCard
            title="Taxa de Rejeição"
            value="38.4%"
            change="-2.1% vs período anterior"
            changeType="positive"
            icon={MousePointer}
          />
          <MetricCard
            title="Tempo Médio"
            value="3m 24s"
            change="+15.8% vs período anterior"
            changeType="positive"
            icon={Clock}
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <StatCard label="Sessões" value="42.8k" icon={Globe} variant="default" />
          <StatCard label="CTR" value="3.2%" icon={MousePointer} variant="success" />
          <StatCard label="Conversões" value="1.2k" icon={TrendingUp} variant="accent" />
          <StatCard label="ROI" value="245%" icon={TrendingUp} variant="success" />
          <StatCard label="CPC" value="R$ 1.85" icon={MousePointer} variant="default" />
          <StatCard label="ROAS" value="4.2x" icon={TrendingUp} variant="accent" />
        </div>

        {/* Main Analytics */}
        <Tabs defaultValue="traffic" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="traffic">Tráfego</TabsTrigger>
            <TabsTrigger value="audience">Audiência</TabsTrigger>
            <TabsTrigger value="behavior">Comportamento</TabsTrigger>
            <TabsTrigger value="conversion">Conversão</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="traffic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Tráfego ao Longo do Tempo</CardTitle>
                  <CardDescription>
                    Usuários, sessões e visualizações de página
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={trafficData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="usuarios" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        name="Usuários"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="sessoes" 
                        stroke="hsl(var(--secondary))" 
                        strokeWidth={2}
                        name="Sessões"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="pageviews" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth={2}
                        name="Page Views"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dispositivos</CardTitle>
                  <CardDescription>
                    Distribuição por tipo de dispositivo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  
                  <div className="space-y-2 mt-4">
                    {deviceData.map((device, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2" 
                            style={{ backgroundColor: device.color }}
                          />
                          {device.name === "Desktop" && <Monitor className="mr-2 h-4 w-4" />}
                          {device.name === "Mobile" && <Smartphone className="mr-2 h-4 w-4" />}
                          {device.name === "Tablet" && <Tablet className="mr-2 h-4 w-4" />}
                          <span>{device.name}</span>
                        </div>
                        <span className="font-medium">{device.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audience" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Países e Regiões</CardTitle>
                  <CardDescription>
                    Sessões por localização geográfica
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {countryData.map((country, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{country.country}</span>
                          <div className="text-right">
                            <div className="font-medium text-sm">{country.sessions.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">{country.percentage}%</div>
                          </div>
                        </div>
                        <Progress value={country.percentage} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Demografia</CardTitle>
                  <CardDescription>
                    Distribuição de idade e gênero
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Faixa Etária</h4>
                      {[
                        { age: "18-24", percentage: 22.5 },
                        { age: "25-34", percentage: 35.8 },
                        { age: "35-44", percentage: 28.2 },
                        { age: "45-54", percentage: 10.1 },
                        { age: "55+", percentage: 3.4 },
                      ].map((item, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{item.age} anos</span>
                            <span className="font-medium">{item.percentage}%</span>
                          </div>
                          <Progress value={item.percentage} />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Gênero</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 border rounded-lg">
                          <div className="text-2xl font-bold text-primary">52.4%</div>
                          <div className="text-sm text-muted-foreground">Feminino</div>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                          <div className="text-2xl font-bold text-secondary">47.6%</div>
                          <div className="text-sm text-muted-foreground">Masculino</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="behavior" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Páginas Mais Visitadas</CardTitle>
                <CardDescription>
                  Performance das principais páginas do site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pageData.map((page, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 items-center py-3 border-b last:border-b-0">
                      <div>
                        <div className="font-medium text-sm">{page.page}</div>
                        <div className="text-xs text-muted-foreground">
                          {page.views.toLocaleString()} visualizações
                        </div>
                      </div>
                      <div className="text-center">
                        <Badge variant={page.bounceRate < 40 ? "default" : page.bounceRate < 50 ? "secondary" : "destructive"}>
                          {page.bounceRate}%
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">Taxa de rejeição</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-sm">{page.avgTime}</div>
                        <div className="text-xs text-muted-foreground">Tempo médio</div>
                      </div>
                      <div className="text-right">
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${(page.views / Math.max(...pageData.map(p => p.views))) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversion" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Funil de Conversão</CardTitle>
                <CardDescription>
                  Jornada do usuário desde a visita até a compra
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={conversionData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="step" type="category" width={100} />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === "visitors" ? `${value} usuários` : `${value}%`,
                        name === "visitors" ? "Usuários" : "Taxa de Conversão"
                      ]}
                    />
                    <Bar dataKey="visitors" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
                
                <div className="grid grid-cols-5 gap-4 mt-6">
                  {conversionData.map((step, index) => (
                    <div key={index} className="text-center p-4 border rounded-lg">
                      <div className="text-lg font-bold text-primary">
                        {step.visitors.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">{step.step}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {step.conversion}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scores de Performance</CardTitle>
                  <CardDescription>
                    Métricas do Lighthouse
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={performanceData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="metric" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar
                        name="Score"
                        dataKey="score"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Métricas Core Web Vitals</CardTitle>
                  <CardDescription>
                    Indicadores de experiência do usuário
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { metric: "LCP", value: "1.2s", status: "good", description: "Largest Contentful Paint" },
                    { metric: "FID", value: "85ms", status: "good", description: "First Input Delay" },
                    { metric: "CLS", value: "0.05", status: "good", description: "Cumulative Layout Shift" },
                    { metric: "TTFB", value: "320ms", status: "needs-improvement", description: "Time to First Byte" },
                  ].map((vital, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-sm">{vital.metric}</div>
                          <div className="text-xs text-muted-foreground">{vital.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">{vital.value}</div>
                          <Badge 
                            variant={
                              vital.status === "good" ? "default" : 
                              vital.status === "needs-improvement" ? "secondary" : "destructive"
                            }
                            className="text-xs"
                          >
                            {vital.status === "good" ? "Bom" : 
                             vital.status === "needs-improvement" ? "Melhorar" : "Ruim"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnalyticsPage;