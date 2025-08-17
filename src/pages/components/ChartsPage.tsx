import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Legend,
  RadialBarChart,
  RadialBar,
  ReferenceLine,
  Brush,
  ScatterChart,
  Scatter
} from "recharts";
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Activity, Target } from "lucide-react";

const ChartsPage = () => {
  // Dados para gráficos temporais
  const timeSeriesData = [
    { name: "Jan", vendas: 4000, usuarios: 2400, receita: 2400, meta: 3500 },
    { name: "Fev", vendas: 3000, usuarios: 1398, receita: 2210, meta: 3200 },
    { name: "Mar", vendas: 2000, usuarios: 9800, receita: 2290, meta: 3800 },
    { name: "Abr", vendas: 2780, usuarios: 3908, receita: 2000, meta: 3400 },
    { name: "Mai", vendas: 1890, usuarios: 4800, receita: 2181, meta: 3600 },
    { name: "Jun", vendas: 2390, usuarios: 3800, receita: 2500, meta: 3700 },
    { name: "Jul", vendas: 3490, usuarios: 4300, receita: 2100, meta: 3900 },
    { name: "Ago", vendas: 2000, usuarios: 2400, receita: 2400, meta: 3500 },
    { name: "Set", vendas: 3000, usuarios: 1398, receita: 2210, meta: 3200 },
    { name: "Out", vendas: 2000, usuarios: 9800, receita: 2290, meta: 3800 },
    { name: "Nov", vendas: 2780, usuarios: 3908, receita: 2000, meta: 3400 },
    { name: "Dez", vendas: 1890, usuarios: 4800, receita: 2181, meta: 3600 },
  ];

  // Dados para gráfico de pizza
  const pieData = [
    { name: "Desktop", value: 45, color: "#0088FE" },
    { name: "Mobile", value: 35, color: "#00C49F" },
    { name: "Tablet", value: 15, color: "#FFBB28" },
    { name: "Outros", value: 5, color: "#FF8042" },
  ];

  // Dados para donut
  const donutData = [
    { name: "Orgânico", value: 40, color: "#8884d8" },
    { name: "Pago", value: 30, color: "#82ca9d" },
    { name: "Social", value: 20, color: "#ffc658" },
    { name: "Email", value: 10, color: "#ff7300" },
  ];

  // Dados para semi-donut (gauge)
  const gaugeData = [
    { name: "Concluído", value: 75, color: "#00C49F" },
    { name: "Restante", value: 25, color: "#f0f0f0" },
  ];

  // Dados para gráfico radial
  const radialData = [
    { name: "Q1", value: 85, fill: "#8884d8" },
    { name: "Q2", value: 70, fill: "#82ca9d" },
    { name: "Q3", value: 90, fill: "#ffc658" },
    { name: "Q4", value: 65, fill: "#ff7300" },
  ];

  // Dados para scatter
  const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  // Cores personalizadas
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Gráficos</h1>
          <p className="text-muted-foreground">
            Componentes avançados de visualização de dados com Recharts
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Gráficos</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Tipos diferentes disponíveis
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Responsivos</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100%</div>
              <p className="text-xs text-muted-foreground">
                Adaptam-se a qualquer tela
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interativos</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Sim</div>
              <p className="text-xs text-muted-foreground">
                Tooltips e animações
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customizáveis</CardTitle>
              <PieChartIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Total</div>
              <p className="text-xs text-muted-foreground">
                Cores, estilos e dados
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="line" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="line">Linha</TabsTrigger>
          <TabsTrigger value="bar">Barras</TabsTrigger>
          <TabsTrigger value="area">Área</TabsTrigger>
          <TabsTrigger value="pie">Pizza</TabsTrigger>
          <TabsTrigger value="donut">Donuts</TabsTrigger>
          <TabsTrigger value="advanced">Avançados</TabsTrigger>
        </TabsList>

        {/* Gráficos de Linha */}
        <TabsContent value="line" className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Gráficos de Linha</h2>
            <p className="text-muted-foreground">Ideais para mostrar tendências e evolução temporal</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Linha Simples</CardTitle>
                <CardDescription>Evolução de vendas ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="vendas"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Múltiplas Linhas</CardTitle>
                <CardDescription>Comparação entre vendas, usuários e receita</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="vendas"
                      stroke="#8884d8"
                      strokeWidth={2}
                      name="Vendas"
                    />
                    <Line
                      type="monotone"
                      dataKey="usuarios"
                      stroke="#82ca9d"
                      strokeWidth={2}
                      name="Usuários"
                    />
                    <Line
                      type="monotone"
                      dataKey="receita"
                      stroke="#ffc658"
                      strokeWidth={2}
                      name="Receita"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Linha com Área de Referência</CardTitle>
                <CardDescription>Vendas vs Meta com linha de referência</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <ReferenceLine y={3500} stroke="red" strokeDasharray="5 5" label="Meta" />
                    <Line
                      type="monotone"
                      dataKey="vendas"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      name="Vendas Reais"
                    />
                    <Line
                      type="monotone"
                      dataKey="meta"
                      stroke="#ff7300"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Meta"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Linha com Brush (Zoom)</CardTitle>
                <CardDescription>Gráfico interativo com controle de zoom</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="vendas"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                    <Brush dataKey="name" height={30} stroke="hsl(var(--primary))" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Gráficos de Barras */}
        <TabsContent value="bar" className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Gráficos de Barras</h2>
            <p className="text-muted-foreground">Perfeitos para comparar categorias e valores</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Barras Verticais</CardTitle>
                <CardDescription>Comparação simples de vendas por mês</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={timeSeriesData.slice(0, 6)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="vendas"
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Barras Agrupadas</CardTitle>
                <CardDescription>Comparação múltipla entre vendas e usuários</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={timeSeriesData.slice(0, 6)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="vendas" fill="#8884d8" name="Vendas" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="usuarios" fill="#82ca9d" name="Usuários" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Barras Empilhadas</CardTitle>
                <CardDescription>Composição total com partes empilhadas</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={timeSeriesData.slice(0, 6)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="vendas" stackId="a" fill="#8884d8" name="Vendas" />
                    <Bar dataKey="receita" stackId="a" fill="#82ca9d" name="Receita" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Barras com Gradiente</CardTitle>
                <CardDescription>Barras estilizadas com efeito gradiente</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={timeSeriesData.slice(0, 6)}>
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="vendas"
                      fill="url(#colorGradient)"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Gráficos de Área */}
        <TabsContent value="area" className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Gráficos de Área</h2>
            <p className="text-muted-foreground">Mostram volume e tendências com preenchimento</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Área Simples</CardTitle>
                <CardDescription>Evolução de vendas com área preenchida</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={timeSeriesData}>
                    <defs>
                      <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="vendas"
                      stroke="hsl(var(--primary))"
                      fillOpacity={1}
                      fill="url(#colorArea)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Múltiplas Áreas</CardTitle>
                <CardDescription>Comparação entre diferentes métricas</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={timeSeriesData}>
                    <defs>
                      <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient id="colorUsuarios" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="vendas"
                      stackId="1"
                      stroke="#8884d8"
                      fill="url(#colorVendas)"
                      name="Vendas"
                    />
                    <Area
                      type="monotone"
                      dataKey="usuarios"
                      stackId="2"
                      stroke="#82ca9d"
                      fill="url(#colorUsuarios)"
                      name="Usuários"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Área Empilhada</CardTitle>
                <CardDescription>Composição total com áreas empilhadas</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="vendas"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                      name="Vendas"
                    />
                    <Area
                      type="monotone"
                      dataKey="receita"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      name="Receita"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Área Percentual</CardTitle>
                <CardDescription>Mostra proporções em 100%</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="vendas"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                      name="Vendas"
                    />
                    <Area
                      type="monotone"
                      dataKey="usuarios"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      name="Usuários"
                    />
                    <Area
                      type="monotone"
                      dataKey="receita"
                      stackId="1"
                      stroke="#ffc658"
                      fill="#ffc658"
                      name="Receita"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Gráficos de Pizza */}
        <TabsContent value="pie" className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Gráficos de Pizza</h2>
            <p className="text-muted-foreground">Ideais para mostrar proporções e distribuições</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Pizza Simples</CardTitle>
                <CardDescription>Distribuição de tráfego por dispositivo</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pizza com Legenda</CardTitle>
                <CardDescription>Canais de aquisição de usuários</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={donutData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {donutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pizza 3D</CardTitle>
                <CardDescription>Efeito visual tridimensional</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pizza Customizada</CardTitle>
                <CardDescription>Com cores e estilos personalizados</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name) => [`${value}%`, name]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Gráficos Donut */}
        <TabsContent value="donut" className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Gráficos Donut</h2>
            <p className="text-muted-foreground">Versões com centro vazio para informações adicionais</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Donut Básico</CardTitle>
                <CardDescription>Distribuição de canais de marketing</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={donutData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {donutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Donut com Texto Central</CardTitle>
                <CardDescription>Total de vendas no centro</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={donutData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {donutData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm text-muted-foreground">Total</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Semi-Donut (Gauge)</CardTitle>
                <CardDescription>Indicador de progresso tipo velocímetro</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Concluído", value: 75, color: "#00C49F" },
                          { name: "Restante", value: 25, color: "#e5e7eb" }
                        ]}
                        cx="50%"
                        cy="85%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={50}
                        outerRadius={90}
                        paddingAngle={0}
                        dataKey="value"
                      >
                        <Cell fill="#00C49F" />
                        <Cell fill="#e5e7eb" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-3xl font-bold text-primary">75%</div>
                    <div className="text-sm text-muted-foreground">Progresso</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gauge Colorido</CardTitle>
                <CardDescription>Indicador com diferentes níveis de status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Excelente", value: 45, color: "#10b981" },
                          { name: "Bom", value: 25, color: "#f59e0b" },
                          { name: "Ruim", value: 15, color: "#ef4444" },
                          { name: "Restante", value: 15, color: "#e5e7eb" }
                        ]}
                        cx="50%"
                        cy="85%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={50}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        <Cell fill="#10b981" />
                        <Cell fill="#f59e0b" />
                        <Cell fill="#ef4444" />
                        <Cell fill="#e5e7eb" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-3xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-muted-foreground">Performance</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Donut Múltiplo</CardTitle>
                <CardDescription>Comparação entre períodos - Interno vs Externo</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    {/* Anel interno - Período anterior */}
                    <Pie
                      data={[
                        { name: "Q1 Anterior", value: 30, fill: "#94a3b8" },
                        { name: "Q2 Anterior", value: 25, fill: "#64748b" },
                        { name: "Q3 Anterior", value: 25, fill: "#475569" },
                        { name: "Q4 Anterior", value: 20, fill: "#334155" },
                      ]}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                    />
                    {/* Anel externo - Período atual */}
                    <Pie
                      data={[
                        { name: "Q1 Atual", value: 35, fill: "#3b82f6" },
                        { name: "Q2 Atual", value: 30, fill: "#06b6d4" },
                        { name: "Q3 Atual", value: 20, fill: "#10b981" },
                        { name: "Q4 Atual", value: 15, fill: "#8b5cf6" },
                      ]}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={110}
                      label={({ value }) => `${value}%`}
                      labelLine={false}
                    />
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Gráficos Avançados */}
        <TabsContent value="advanced" className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Gráficos Avançados</h2>
            <p className="text-muted-foreground">Visualizações complexas e especializadas</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Gráfico Composto</CardTitle>
                <CardDescription>Combinação de barras e linhas</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={timeSeriesData.slice(0, 8)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="vendas" fill="#8884d8" name="Vendas" />
                    <Line type="monotone" dataKey="meta" stroke="#ff7300" name="Meta" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gráfico Radial</CardTitle>
                <CardDescription>Barras em formato circular</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" data={radialData}>
                    <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                    <Legend iconSize={18} layout="vertical" verticalAlign="middle" />
                    <Tooltip />
                  </RadialBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gráfico de Dispersão</CardTitle>
                <CardDescription>Correlação entre variáveis</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={scatterData}>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="Variável X" />
                    <YAxis type="number" dataKey="y" name="Variável Y" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Dados" data={scatterData} fill="hsl(var(--primary))" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gráfico de Funil</CardTitle>
                <CardDescription>Processo de conversão por etapas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Visitantes", value: 10000, percent: 100 },
                    { name: "Interessados", value: 5000, percent: 50 },
                    { name: "Leads", value: 2000, percent: 20 },
                    { name: "Oportunidades", value: 800, percent: 8 },
                    { name: "Clientes", value: 200, percent: 2 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-24 text-sm font-medium">{item.name}</div>
                      <div className="flex-1">
                        <div className="bg-muted rounded-full h-8 flex items-center">
                          <div
                            className="bg-primary h-full rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium transition-all duration-500"
                            style={{ width: `${item.percent}%` }}
                          >
                            {item.percent > 15 && `${item.value.toLocaleString()}`}
                          </div>
                        </div>
                      </div>
                      <div className="w-16 text-sm text-muted-foreground text-right">
                        {item.percent}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Guidelines */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Diretrizes de Uso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span>Quando Usar</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <Badge variant="secondary" className="mt-0.5">Linha</Badge>
                  <span>Tendências temporais</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="secondary" className="mt-0.5">Barra</Badge>
                  <span>Comparações entre categorias</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="secondary" className="mt-0.5">Área</Badge>
                  <span>Volume e magnitude</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="secondary" className="mt-0.5">Pizza</Badge>
                  <span>Proporções do total</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Badge variant="secondary" className="mt-0.5">Donut</Badge>
                  <span>Comparações com foco central</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                <span>Boas Práticas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Use cores consistentes e acessíveis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Inclua tooltips informativos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Mantenha legendas claras</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Torne os gráficos responsivos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Evite sobrecarga de informações</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChartIcon className="h-5 w-5 text-orange-600" />
                <span>Considerações</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Teste em diferentes dispositivos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Considere acessibilidade visual</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Valide dados antes da exibição</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Otimize performance com muitos dados</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Forneça contexto adequado</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ChartsPage;