import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/saas/MetricCard";
import { FeatureCard } from "@/components/saas/FeatureCard";
import { 
  Package, Plus, Search, DollarSign, TrendingUp, Star,
  Edit3, Trash2, Eye, Copy
} from "lucide-react";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const metrics = [
    {
      title: "Total de Produtos",
      value: "45",
      change: "+3",
      changeType: "positive" as const,
      icon: Package
    },
    {
      title: "Receita por Produto",
      value: "R$ 2.789",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: DollarSign
    },
    {
      title: "Produto Top",
      value: "Premium",
      change: "68% vendas",
      changeType: "positive" as const,
      icon: TrendingUp
    },
    {
      title: "Avaliação Média",
      value: "4.8",
      change: "+0.3",
      changeType: "positive" as const,
      icon: Star
    }
  ];

  const products = [
    {
      id: 1,
      name: "Plano Básico",
      description: "Ideal para pequenos negócios e startups",
      price: "R$ 39/mês",
      category: "Assinatura",
      status: "Ativo",
      sales: 234,
      rating: 4.5,
      features: ["5 usuários", "10GB storage", "Suporte básico"]
    },
    {
      id: 2,
      name: "Plano Premium",
      description: "Para empresas em crescimento",
      price: "R$ 99/mês",
      category: "Assinatura",
      status: "Ativo",
      sales: 567,
      rating: 4.8,
      features: ["25 usuários", "100GB storage", "Suporte prioritário", "Analytics avançado"]
    },
    {
      id: 3,
      name: "Plano Enterprise",
      description: "Solução completa para grandes empresas",
      price: "R$ 299/mês",
      category: "Assinatura",
      status: "Ativo",
      sales: 123,
      rating: 4.9,
      features: ["Usuários ilimitados", "1TB storage", "Suporte 24/7", "Customização", "API acesso"]
    },
    {
      id: 4,
      name: "Consultoria Personalizada",
      description: "Serviço de consultoria especializada",
      price: "R$ 500/hora",
      category: "Serviço",
      status: "Ativo",
      sales: 45,
      rating: 5.0,
      features: ["Consultoria 1:1", "Relatório personalizado", "Follow-up"]
    },
    {
      id: 5,
      name: "Curso Online",
      description: "Treinamento completo da plataforma",
      price: "R$ 197",
      category: "Educação",
      status: "Inativo",
      sales: 89,
      rating: 4.3,
      features: ["10 módulos", "Certificado", "Acesso vitalício"]
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    return status === "Ativo" ? 
      <Badge variant="default" className="bg-success/20 text-success border-success/30">Ativo</Badge> :
      <Badge variant="secondary" className="bg-muted text-muted-foreground">Inativo</Badge>;
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      "Assinatura": "bg-primary/20 text-primary border-primary/30",
      "Serviço": "bg-secondary/20 text-secondary-foreground border-secondary/30",
      "Educação": "bg-accent/20 text-accent-foreground border-accent/30"
    };
    
    return (
      <Badge 
        variant="outline" 
        className={colors[category as keyof typeof colors] || "bg-muted"}
      >
        {category}
      </Badge>
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-muted-foreground">
            Gerencie seu catálogo de produtos e serviços
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Produto
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="flex gap-2">
                    {getStatusBadge(product.status)}
                    {getCategoryBadge(product.category)}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                  <p className="text-sm text-muted-foreground">{product.sales} vendas</p>
                </div>
              </div>
              <CardDescription className="text-sm">
                {product.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">avaliação</span>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Recursos:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" size="sm" className="gap-1 flex-1">
                    <Eye className="h-3 w-3" />
                    Ver
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1 flex-1">
                    <Edit3 className="h-3 w-3" />
                    Editar
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1 text-destructive hover:text-destructive">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}