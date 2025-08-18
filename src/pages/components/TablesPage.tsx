import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TableCard } from "@/components/ui/table-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, Filter, Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

const TablesPage = () => {
  const users = [
    { id: "1", name: "João Silva", email: "joao@email.com", status: "Ativo", role: "Admin", department: "TI", phone: "+55 11 99999-9999" },
    { id: "2", name: "Maria Santos", email: "maria@email.com", status: "Ativo", role: "User", department: "Vendas", phone: "+55 11 88888-8888" },
    { id: "3", name: "Pedro Oliveira", email: "pedro@email.com", status: "Inativo", role: "Editor", department: "Marketing", phone: "+55 11 77777-7777" },
    { id: "4", name: "Ana Costa", email: "ana.costa@email.com", status: "Ativo", role: "User", department: "RH", phone: "+55 11 66666-6666" },
    { id: "5", name: "Carlos Ferreira", email: "carlos@email.com", status: "Pendente", role: "Editor", department: "TI", phone: "+55 11 55555-5555" },
  ];

  const products = [
    { id: "1", name: "Produto A", price: "R$ 199,99", stock: 45, category: "Eletrônicos", status: "Disponível" },
    { id: "2", name: "Produto B", price: "R$ 89,99", stock: 12, category: "Casa", status: "Baixo Estoque" },
    { id: "3", name: "Produto C", price: "R$ 299,99", stock: 0, category: "Eletrônicos", status: "Esgotado" },
    { id: "4", name: "Produto D", price: "R$ 49,99", stock: 156, category: "Livros", status: "Disponível" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Tabelas</h1>
        <p className="text-muted-foreground">
          Componentes de tabela para exibição de dados estruturados
        </p>
      </div>

      {/* Basic Table Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tabela Básica</h2>
        <TableCard
          title="Lista de Usuários"
          description="Exemplo de tabela básica com dados de usuários"
          actions={
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar
              </Button>
            </div>
          }
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuário</TableHead>
                <TableHead>Departamento</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{user.department}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === "Admin" ? "default" : "secondary"}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "Ativo" ? "default" :
                          user.status === "Inativo" ? "secondary" : "outline"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{user.phone}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                        Editar
                      </Button>
                      <Button size="sm" variant="destructive" className="h-7 px-2 text-xs">
                        Excluir
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableCard>
      </section>

      {/* Advanced Table Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tabela com Filtros</h2>
        <TableCard
          title="Gestão de Produtos"
          description="Tabela avançada com funcionalidades de busca e filtros"
          actions={
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-3 w-3" />
                <Input
                  placeholder="Buscar produtos..."
                  className="pl-7 h-8 w-48 text-sm"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          }
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Estoque</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-muted-foreground">ID: {product.id}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{product.category}</TableCell>
                  <TableCell className="font-medium text-sm">{product.price}</TableCell>
                  <TableCell>
                    <span className={`text-sm ${product.stock === 0 ? 'text-red-600' :
                        product.stock < 20 ? 'text-orange-600' : 'text-green-600'
                      }`}>
                      {product.stock} unidades
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        product.status === "Disponível" ? "default" :
                          product.status === "Baixo Estoque" ? "outline" : "secondary"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                        Ver
                      </Button>
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                        Editar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableCard>
      </section>

      {/* Compact Table Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tabelas Compactas</h2>
        <div className="space-y-6">
          <TableCard
            title="Últimas Atividades"
            description="Lista compacta de atividades recentes"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Ação</TableHead>
                  <TableHead>Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-sm">João Silva</TableCell>
                  <TableCell className="text-sm">Login realizado</TableCell>
                  <TableCell className="text-sm text-muted-foreground">Há 2 min</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm">Maria Santos</TableCell>
                  <TableCell className="text-sm">Produto criado</TableCell>
                  <TableCell className="text-sm text-muted-foreground">Há 5 min</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm">Pedro Oliveira</TableCell>
                  <TableCell className="text-sm">Perfil atualizado</TableCell>
                  <TableCell className="text-sm text-muted-foreground">Há 10 min</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableCard>

          <TableCard
            title="Resumo de Vendas"
            description="Métricas principais de vendas do mês"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Métrica</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Variação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-sm">Receita Total</TableCell>
                  <TableCell className="font-medium text-sm">R$ 45.230</TableCell>
                  <TableCell className="text-sm text-green-600">+12%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm">Produtos Vendidos</TableCell>
                  <TableCell className="font-medium text-sm">1.247</TableCell>
                  <TableCell className="text-sm text-green-600">+8%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm">Novos Clientes</TableCell>
                  <TableCell className="font-medium text-sm">89</TableCell>
                  <TableCell className="text-sm text-red-600">-3%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableCard>
        </div>
      </section>

      {/* Guidelines */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Diretrizes de Uso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quando Usar TableCard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Para dados tabulares que precisam de mais largura</li>
                <li>• Quando há muitas colunas na tabela</li>
                <li>• Para tabelas com ações e filtros</li>
                <li>• Quando o scroll horizontal é necessário</li>
                <li>• Para interfaces de gestão e administração</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Boas Práticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Use cabeçalhos descritivos e claros</li>
                <li>• Implemente ordenação quando relevante</li>
                <li>• Mantenha ações consistentes entre linhas</li>
                <li>• Use badges para status e categorias</li>
                <li>• Considere paginação para muitos dados</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TablesPage;