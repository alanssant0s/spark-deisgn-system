import { SaasLayout } from "@/components/saas/SaasLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Activity } from "lucide-react";

const ChartsPage = () => {
  // Sample data for charts
  const salesData = [
    { month: 'Jan', vendas: 4000, lucro: 2400, gastos: 1600 },
    { month: 'Fev', vendas: 3000, lucro: 1398, gastos: 1602 },
    { month: 'Mar', vendas: 2000, lucro: 9800, gastos: 800 },
    { month: 'Abr', vendas: 2780, lucro: 3908, gastos: 1200 },
    { month: 'Mai', vendas: 1890, lucro: 4800, gastos: 900 },
    { month: 'Jun', vendas: 2390, lucro: 3800, gastos: 1100 },
  ];

  const pieData = [
    { name: 'Desktop', value: 400, color: 'hsl(var(--primary))' },
    { name: 'Mobile', value: 300, color: 'hsl(var(--secondary))' },
    { name: 'Tablet', value: 200, color: 'hsl(var(--accent))' },
    { name: 'Outros', value: 100, color: 'hsl(var(--muted))' },
  ];

  const performanceData = [
    { subject: 'Performance', A: 120, B: 110, fullMark: 150 },
    { subject: 'Usabilidade', A: 98, B: 130, fullMark: 150 },
    { subject: 'Segurança', A: 86, B: 130, fullMark: 150 },
    { subject: 'Qualidade', A: 99, B: 100, fullMark: 150 },
    { subject: 'Satisfação', A: 85, B: 90, fullMark: 150 },
    { subject: 'Velocidade', A: 65, B: 85, fullMark: 150 },
  ];

  const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  return (
    <SaasLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Charts</h1>
          <p className="text-muted-foreground">
            Componentes de gráficos responsivos para visualização de dados
          </p>
        </div>

        <Tabs defaultValue="examples" className="space-y-6">
          <TabsList>
            <TabsTrigger value="examples">Exemplos</TabsTrigger>
            <TabsTrigger value="variants">Variações</TabsTrigger>
            <TabsTrigger value="usage">Como Usar</TabsTrigger>
          </TabsList>

          <TabsContent value="examples" className="space-y-6">
            {/* Basic Charts */}
            <Card>
              <CardHeader>
                <CardTitle>Gráficos de Barras e Linhas</CardTitle>
                <CardDescription>Visualização de dados de vendas e performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium">Gráfico de Barras</h4>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="vendas" fill="hsl(var(--primary))" />
                          <Bar dataKey="lucro" fill="hsl(var(--secondary))" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Gráfico de Linhas</h4>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="vendas" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={2}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="lucro" 
                            stroke="hsl(var(--secondary))" 
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pie and Area Charts */}
            <Card>
              <CardHeader>
                <CardTitle>Gráficos de Pizza e Área</CardTitle>
                <CardDescription>Distribuição e tendências ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium">Gráfico de Pizza</h4>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
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
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Gráfico de Área</h4>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Area 
                            type="monotone" 
                            dataKey="vendas" 
                            stackId="1"
                            stroke="hsl(var(--primary))" 
                            fill="hsl(var(--primary))" 
                            fillOpacity={0.6}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="lucro" 
                            stackId="1"
                            stroke="hsl(var(--secondary))" 
                            fill="hsl(var(--secondary))" 
                            fillOpacity={0.6}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dashboard Style Charts */}
            <Card>
              <CardHeader>
                <CardTitle>Dashboard com Métricas</CardTitle>
                <CardDescription>Combinação de KPIs e gráficos para dashboards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total de Vendas</p>
                          <h3 className="text-2xl font-bold">R$ 45.231</h3>
                          <p className="text-xs text-green-600 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            +20.1% em relação ao mês anterior
                          </p>
                        </div>
                        <DollarSign className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Usuários Ativos</p>
                          <h3 className="text-2xl font-bold">2.350</h3>
                          <p className="text-xs text-green-600 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            +180.1% em relação ao mês anterior
                          </p>
                        </div>
                        <Users className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Pedidos</p>
                          <h3 className="text-2xl font-bold">12.234</h3>
                          <p className="text-xs text-red-600 flex items-center">
                            <TrendingDown className="h-3 w-3 mr-1" />
                            -19% em relação ao mês anterior
                          </p>
                        </div>
                        <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Taxa de Conversão</p>
                          <h3 className="text-2xl font-bold">3.2%</h3>
                          <p className="text-xs text-green-600 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            +5.4% em relação ao mês anterior
                          </p>
                        </div>
                        <Activity className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Complex Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium">Análise de Performance</h4>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={performanceData}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="subject" />
                          <PolarRadiusAxis />
                          <Radar 
                            name="Atual" 
                            dataKey="A" 
                            stroke="hsl(var(--primary))" 
                            fill="hsl(var(--primary))" 
                            fillOpacity={0.6} 
                          />
                          <Radar 
                            name="Meta" 
                            dataKey="B" 
                            stroke="hsl(var(--secondary))" 
                            fill="hsl(var(--secondary))" 
                            fillOpacity={0.6} 
                          />
                          <Legend />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Correlação de Dados</h4>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart data={scatterData}>
                          <CartesianGrid />
                          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                          <Scatter name="A school" dataKey="z" fill="hsl(var(--primary))" />
                        </ScatterChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="variants" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Variações de Estilo</CardTitle>
                <CardDescription>Diferentes estilos visuais para gráficos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium">Gráfico Minimalista</h4>
                    <div className="h-[200px] p-4 border rounded-lg">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData.slice(0, 4)}>
                          <Line 
                            type="monotone" 
                            dataKey="vendas" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={3}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Gráfico com Gradiente</h4>
                    <div className="h-[200px] p-4 border rounded-lg">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={salesData.slice(0, 4)}>
                          <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                            </linearGradient>
                          </defs>
                          <Area 
                            type="monotone" 
                            dataKey="vendas" 
                            stroke="hsl(var(--primary))" 
                            fillOpacity={1} 
                            fill="url(#colorGradient)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Como Usar</CardTitle>
                <CardDescription>Guia de implementação dos gráficos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Instalação</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      npm install recharts
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Importação</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Uso Básico</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value" fill="hsl(var(--primary))" />
  </BarChart>
</ResponsiveContainer>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Boas Práticas</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Use ResponsiveContainer para gráficos responsivos</li>
                    <li>Mantenha consistência nas cores usando tokens do design system</li>
                    <li>Inclua tooltips para melhor experiência do usuário</li>
                    <li>Use legendas quando necessário para clareza</li>
                    <li>Considere acessibilidade com cores contrastantes</li>
                    <li>Otimize performance com lazy loading para gráficos complexos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SaasLayout>
  );
};

export default ChartsPage;