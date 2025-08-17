import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MetricCard } from "@/components/saas/MetricCard";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Search, Users, UserPlus, Crown, Star, Mail, Phone, MapPin, Plus 
} from "lucide-react";

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");

  const metrics = [
    {
      title: "Total de Clientes",
      value: "1,234",
      change: "+5.2%",
      changeType: "positive" as const,
      icon: Users
    },
    {
      title: "Novos este Mês",
      value: "89",
      change: "+12.3%",
      changeType: "positive" as const,
      icon: UserPlus
    },
    {
      title: "Clientes Premium",
      value: "156",
      change: "+8.1%",
      changeType: "positive" as const,
      icon: Crown
    },
    {
      title: "Satisfação Média",
      value: "4.8",
      change: "+0.2",
      changeType: "positive" as const,
      icon: Star
    }
  ];

  const customers = [
    {
      id: 1,
      name: "Ana Silva",
      email: "ana.silva@email.com",
      phone: "+55 11 99999-9999",
      location: "São Paulo, SP",
      plan: "Premium",
      status: "Ativo",
      joinDate: "2024-01-15",
      avatar: "/api/placeholder/32/32"
    },
    {
      id: 2,
      name: "Carlos Santos",
      email: "carlos.santos@email.com",
      phone: "+55 21 88888-8888",
      location: "Rio de Janeiro, RJ",
      plan: "Básico",
      status: "Ativo",
      joinDate: "2024-02-20",
      avatar: "/api/placeholder/32/32"
    },
    {
      id: 3,
      name: "Mariana Costa",
      email: "mariana.costa@email.com",
      phone: "+55 31 77777-7777",
      location: "Belo Horizonte, MG",
      plan: "Enterprise",
      status: "Inativo",
      joinDate: "2023-12-10",
      avatar: "/api/placeholder/32/32"
    },
    {
      id: 4,
      name: "Pedro Oliveira",
      email: "pedro.oliveira@email.com",
      phone: "+55 85 66666-6666",
      location: "Fortaleza, CE",
      plan: "Premium",
      status: "Ativo",
      joinDate: "2024-03-05",
      avatar: "/api/placeholder/32/32"
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    return status === "Ativo" ? 
      <Badge variant="default" className="bg-success/20 text-success border-success/30">Ativo</Badge> :
      <Badge variant="secondary" className="bg-destructive/20 text-destructive border-destructive/30">Inativo</Badge>;
  };

  const getPlanBadge = (plan: string) => {
    const variants: Record<string, "secondary" | "default" | "outline" | "destructive"> = {
      "Básico": "secondary",
      "Premium": "default", 
      "Enterprise": "outline"
    };
    return <Badge variant={variants[plan] || "secondary"}>{plan}</Badge>;
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie e acompanhe seus clientes
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Cliente
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes</CardTitle>
          <CardDescription>
            Todos os clientes cadastrados na plataforma
          </CardDescription>
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar clientes..."
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
                <TableHead>Cliente</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Plano</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data de Cadastro</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={customer.avatar} />
                        <AvatarFallback>
                          {customer.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {customer.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Phone className="h-3 w-3" />
                      {customer.phone}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-3 w-3" />
                      {customer.location}
                    </div>
                  </TableCell>
                  <TableCell>{getPlanBadge(customer.plan)}</TableCell>
                  <TableCell>{getStatusBadge(customer.status)}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(customer.joinDate).toLocaleDateString('pt-BR')}
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