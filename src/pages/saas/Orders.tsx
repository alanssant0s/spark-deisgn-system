import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/saas/MetricCard";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Search, ShoppingCart, DollarSign, TrendingUp, Package, 
  Filter, Download, Eye
} from "lucide-react";

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");

  const metrics = [
    {
      title: "Total de Pedidos",
      value: "2,847",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: ShoppingCart
    },
    {
      title: "Receita Total",
      value: "R$ 125.430",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: DollarSign
    },
    {
      title: "Ticket Médio",
      value: "R$ 178",
      change: "+3.1%",
      changeType: "positive" as const,
      icon: TrendingUp
    },
    {
      title: "Pendentes",
      value: "23",
      change: "-15%",
      changeType: "negative" as const,
      icon: Package
    }
  ];

  const orders = [
    {
      id: "#ORD-001",
      customer: "Ana Silva",
      product: "Plano Premium - 1 ano",
      amount: "R$ 599,00",
      status: "Concluído",
      date: "2024-01-15T10:30:00",
      paymentMethod: "Cartão de Crédito"
    },
    {
      id: "#ORD-002",
      customer: "Carlos Santos",
      product: "Plano Básico - 6 meses",
      amount: "R$ 199,00",
      status: "Processando",
      date: "2024-01-14T16:45:00",
      paymentMethod: "PIX"
    },
    {
      id: "#ORD-003",
      customer: "Mariana Costa",
      product: "Plano Enterprise - 1 ano",
      amount: "R$ 1.299,00",
      status: "Pendente",
      date: "2024-01-14T09:15:00",
      paymentMethod: "Boleto"
    },
    {
      id: "#ORD-004",
      customer: "Pedro Oliveira",
      product: "Plano Premium - 3 meses",
      amount: "R$ 299,00",
      status: "Concluído",
      date: "2024-01-13T14:20:00",
      paymentMethod: "Cartão de Débito"
    },
    {
      id: "#ORD-005",
      customer: "Julia Ferreira",
      product: "Plano Básico - 1 mês",
      amount: "R$ 39,00",
      status: "Cancelado",
      date: "2024-01-12T11:00:00",
      paymentMethod: "PIX"
    }
  ];

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "Concluído": { variant: "default", className: "bg-success/20 text-success border-success/30" },
      "Processando": { variant: "secondary", className: "bg-warning/20 text-warning border-warning/30" },
      "Pendente": { variant: "outline", className: "bg-warning/10 text-warning border-warning/50" },
      "Cancelado": { variant: "destructive", className: "bg-destructive/20 text-destructive border-destructive/30" }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["Pendente"];
    
    return (
      <Badge variant={config.variant as any} className={config.className}>
        {status}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pedidos</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie todos os pedidos e vendas
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Pedidos</CardTitle>
          <CardDescription>
            Todos os pedidos realizados na plataforma
          </CardDescription>
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar pedidos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID do Pedido</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Pagamento</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-sm">
                    {order.id}
                  </TableCell>
                  <TableCell className="font-medium">
                    {order.customer}
                  </TableCell>
                  <TableCell>
                    <div className="max-w-[200px] truncate">
                      {order.product}
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold text-success">
                    {order.amount}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(order.status)}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {order.paymentMethod}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(order.date)}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Eye className="h-3 w-3" />
                      Ver
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}