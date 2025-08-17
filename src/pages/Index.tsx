import { MetricCard } from "@/components/saas/MetricCard";
import { GradientButton } from "@/components/saas/GradientButton";
import { FeatureCard } from "@/components/saas/FeatureCard";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  Rocket,
  Shield,
  Zap,
  Sparkles
} from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              Spark Design System
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Design system profissional com componentes React, Tailwind CSS e tokens semânticos para aplicações SaaS modernas
            </p>
          </div>
          
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in">
            <GradientButton 
              variant="primary" 
              size="lg" 
              icon={Rocket}
              className="w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explorar Componentes
            </GradientButton>
            <GradientButton 
              variant="secondary" 
              size="lg" 
              icon={Sparkles}
              className="w-full sm:w-auto border-2 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              Ver Design System
            </GradientButton>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Componentes"
            value="25+"
            change="Prontos para uso"
            changeType="positive"
            icon={Activity}
          />
          <MetricCard
            title="Tokens de Design"
            value="50+"
            change="Cores e gradientes"
            changeType="positive"
            icon={Sparkles}
          />
          <MetricCard
            title="Variantes"
            value="100+"
            change="Configurações disponíveis"
            changeType="positive"
            icon={TrendingUp}
          />
          <MetricCard
            title="Performance"
            value="100%"
            change="Otimizado para produção"
            changeType="positive"
            icon={Zap}
          />
        </section>

        {/* Features */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Recursos Principais</h2>
            <p className="text-muted-foreground">
              Tudo que você precisa para criar interfaces SaaS profissionais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Componentes Modulares"
              description="Biblioteca completa de componentes reutilizáveis, otimizados para performance e acessibilidade."
              icon={Activity}
              variant="highlighted"
            />
            <FeatureCard
              title="Design Tokens"
              description="Sistema de tokens semânticos para cores, espaçamentos, tipografia e animações consistentes."
              icon={Sparkles}
            />
            <FeatureCard
              title="Totalmente Customizável"
              description="Adapte facilmente o design system às necessidades da sua marca e aplicação."
              icon={Zap}
            />
          </div>
        </section>

        {/* SaaS Examples */}
        <section className="mt-16 text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Exemplos SaaS</h2>
          <p className="text-muted-foreground">Explore páginas de exemplo completas</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/saas/analytics" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Analytics
            </a>
            <a href="/saas/customers" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Clientes
            </a>
            <a href="/saas/orders" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Pedidos
            </a>
            <a href="/saas/products" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Produtos
            </a>
          </div>
        </section>
      </div>
  );
};

export default Index;
