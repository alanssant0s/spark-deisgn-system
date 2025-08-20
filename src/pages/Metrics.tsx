import { MetricCard } from "@/components/saas/MetricCard";
import { StatCard } from "@/components/saas/StatCard";
import { SaasStatusBadge } from "@/components/saas/StatusBadge";
import {
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Target,
  Eye,
  ShoppingCart,
  Clock,
  Mail,
  Globe
} from "lucide-react";

const Metrics = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Métricas & Analytics</h1>
        <p className="text-muted-foreground">
          Dashboard completo com métricas de performance e indicadores
        </p>
      </div>

      {/* Key Metrics */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Métricas Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Receita Total"
            value="R$ 127.543"
            change="+18.2% vs último mês"
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard
            title="Usuários Ativos"
            value="8,421"
            change="+12.8% vs último mês"
            changeType="positive"
            icon={Users}
          />
          <MetricCard
            title="Taxa de Conversão"
            value="4.32%"
            change="+0.8% vs último mês"
            changeType="positive"
            icon={Target}
          />
          <MetricCard
            title="Tempo Médio"
            value="3m 24s"
            change="-15s vs último mês"
            changeType="positive"
            icon={Clock}
          />
        </div>
      </section>

      {/* Performance Stats */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Indicadores de Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard label="Visualizações" value="47.2k" icon={Eye} variant="default" />
          <StatCard label="Vendas" value="1,234" icon={ShoppingCart} variant="success" />
          <StatCard label="Emails" value="89.3%" icon={Mail} variant="accent" />
          <StatCard label="Tráfego" value="12.4k" icon={Globe} variant="default" />
          <StatCard label="Engajamento" value="67%" icon={Activity} variant="success" />
        </div>
      </section>

      {/* Detailed Analytics */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Analytics Detalhadas</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-card border border-card-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Crescimento Mensal</h3>
              <div className="space-y-4">
                <MetricCard
                  title="Janeiro"
                  value="R$ 45.231"
                  change="+15.2%"
                  changeType="positive"
                  icon={TrendingUp}
                  className="border-0 shadow-none bg-muted/50 p-4"
                />
                <MetricCard
                  title="Fevereiro"
                  value="R$ 52.847"
                  change="+16.8%"
                  changeType="positive"
                  icon={TrendingUp}
                  className="border-0 shadow-none bg-muted/50 p-4"
                />
                <MetricCard
                  title="Março"
                  value="R$ 61.394"
                  change="+16.2%"
                  changeType="positive"
                  icon={TrendingUp}
                  className="border-0 shadow-none bg-muted/50 p-4"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-card border border-card-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Status dos Sistemas</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">API Principal</span>
                  <SaasStatusBadge status="active" text="Operacional" />
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Base de Dados</span>
                  <SaasStatusBadge status="active" text="Saudável" />
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">CDN</span>
                  <SaasStatusBadge status="success" text="Otimizado" />
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Processamento</span>
                  <SaasStatusBadge status="pending" text="Atualizando" />
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Backup</span>
                  <SaasStatusBadge status="success" text="Concluído" />
                </div>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Métricas Rápidas</h3>
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="CPU" value="23%" icon={Activity} variant="success" />
                <StatCard label="RAM" value="67%" icon={Activity} variant="warning" />
                <StatCard label="Storage" value="45%" icon={Activity} variant="default" />
                <StatCard label="Network" value="12MB/s" icon={Activity} variant="accent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Metrics;