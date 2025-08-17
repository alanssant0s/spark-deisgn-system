import { SaasLayout } from "@/components/saas/SaasLayout";
import { MetricCard } from "@/components/saas/MetricCard";
import { StatCard } from "@/components/saas/StatCard";
import { GradientButton } from "@/components/saas/GradientButton";
import { FeatureCard } from "@/components/saas/FeatureCard";
import { StatusBadge } from "@/components/saas/StatusBadge";
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
  Star
} from "lucide-react";

const Components = () => {
  return (
    <SaasLayout>
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

        {/* Gradient Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Gradient Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <GradientButton variant="primary" size="sm" icon={Plus}>
              Adicionar
            </GradientButton>
            <GradientButton variant="primary" size="md" icon={Download}>
              Download
            </GradientButton>
            <GradientButton variant="primary" size="lg" icon={Rocket}>
              Começar Agora
            </GradientButton>
            <GradientButton variant="secondary" size="md">
              Cancelar
            </GradientButton>
            <GradientButton variant="accent" size="md" icon={Zap}>
              Upgrade
            </GradientButton>
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
            <StatusBadge status="active" />
            <StatusBadge status="inactive" />
            <StatusBadge status="pending" />
            <StatusBadge status="error" />
            <StatusBadge status="success" />
            <StatusBadge status="active" text="Online" />
            <StatusBadge status="pending" text="Processando" />
          </div>
        </section>
      </div>
    </SaasLayout>
  );
};

export default Components;