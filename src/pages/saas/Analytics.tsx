import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/saas/MetricCard";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";
import { TrendingUp, Users, Eye, Clock } from "lucide-react";

export default function Analytics() {
  const metrics = [
    {
      title: "Visualizações",
      value: "125.4K",
      change: "+15.3%",
      changeType: "positive" as const,
      icon: Eye
    },
    {
      title: "Usuários Únicos",
      value: "8.5K",
      change: "+8.7%",
      changeType: "positive" as const,
      icon: Users
    },
    {
      title: "Taxa de Crescimento",
      value: "23.1%",
      change: "+5.2%",
      changeType: "positive" as const,
      icon: TrendingUp
    },
    {
      title: "Tempo Médio",
      value: "4m 32s",
      change: "+12s",
      changeType: "positive" as const,
      icon: Clock
    }
  ];

  const visitorsData = [
    { month: 'Jan', visitors: 4000, revenue: 2400 },
    { month: 'Fev', visitors: 3000, revenue: 1398 },
    { month: 'Mar', visitors: 2000, revenue: 9800 },
    { month: 'Abr', visitors: 2780, revenue: 3908 },
    { month: 'Mai', visitors: 1890, revenue: 4800 },
    { month: 'Jun', visitors: 2390, revenue: 3800 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 65, color: 'hsl(var(--primary))' },
    { name: 'Mobile', value: 25, color: 'hsl(var(--secondary))' },
    { name: 'Tablet', value: 10, color: 'hsl(var(--accent))' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-muted-foreground">
          Análise detalhada do desempenho da plataforma
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
            <CardTitle>Visitantes por Mês</CardTitle>
            <CardDescription>Evolução do número de visitantes</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visitorsData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="fill-muted-foreground" />
                <YAxis className="fill-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dispositivos</CardTitle>
            <CardDescription>Distribuição por tipo de dispositivo</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
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
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Receita Mensal</CardTitle>
          <CardDescription>Evolução da receita ao longo do ano</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={visitorsData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="fill-muted-foreground" />
              <YAxis className="fill-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar 
                dataKey="revenue" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}