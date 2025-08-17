import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { 
  Search, Filter, Download, MoreHorizontal, Eye, Edit, Trash2,
  ArrowUpDown, ChevronLeft, ChevronRight, Users, Calendar, DollarSign
} from "lucide-react";
import { useState } from "react";

const TablesPage = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Sample data
  const users = [
    {
      id: "1",
      name: "Ana Silva",
      email: "ana.silva@exemplo.com",
      role: "Admin",
      status: "Ativo",
      lastLogin: "2024-01-15",
      avatar: "/placeholder.svg"
    },
    {
      id: "2",
      name: "João Santos",
      email: "joao.santos@exemplo.com",
      role: "Editor",
      status: "Ativo",
      lastLogin: "2024-01-14",
      avatar: "/placeholder.svg"
    },
    {
      id: "3",
      name: "Maria Costa",
      email: "maria.costa@exemplo.com",
      role: "Viewer",
      status: "Inativo",
      lastLogin: "2024-01-10",
      avatar: "/placeholder.svg"
    },
    {
      id: "4",
      name: "Pedro Oliveira",
      email: "pedro.oliveira@exemplo.com",
      role: "Editor",
      status: "Ativo",
      lastLogin: "2024-01-15",
      avatar: "/placeholder.svg"
    },
    {
      id: "5",
      name: "Carla Ferreira",
      email: "carla.ferreira@exemplo.com",
      role: "Admin",
      status: "Ativo",
      lastLogin: "2024-01-13",
      avatar: "/placeholder.svg"
    }
  ];

  const orders = [
    {
      id: "ORD-001",
      customer: "João Silva",
      product: "Smartphone Pro",
      amount: "R$ 1.299,00",
      status: "Enviado",
      date: "2024-01-15"
    },
    {
      id: "ORD-002",
      customer: "Ana Costa",
      product: "Notebook Ultra",
      amount: "R$ 2.499,00",
      status: "Processando",
      date: "2024-01-14"
    },
    {
      id: "ORD-003",
      customer: "Pedro Santos",
      product: "Tablet Max",
      amount: "R$ 899,00",
      status: "Entregue",
      date: "2024-01-13"
    },
    {
      id: "ORD-004",
      customer: "Maria Oliveira",
      product: "Smartwatch",
      amount: "R$ 599,00",
      status: "Cancelado",
      date: "2024-01-12"
    }
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(users.map(user => user.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      "Ativo": "default",
      "Inativo": "secondary",
      "Enviado": "default",
      "Processando": "secondary",
      "Entregue": "outline",
      "Cancelado": "destructive"
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Tables</h1>
          <p className="text-muted-foreground">
            Componentes de tabela para exibição e manipulação de dados
          </p>
        </div>

        <Tabs defaultValue="examples" className="space-y-6">
          <TabsList>
            <TabsTrigger value="examples">Exemplos</TabsTrigger>
            <TabsTrigger value="interactive">Interativas</TabsTrigger>
            <TabsTrigger value="responsive">Responsivas</TabsTrigger>
            <TabsTrigger value="usage">Como Usar</TabsTrigger>
          </TabsList>

          <TabsContent value="examples" className="space-y-6">
            {/* Basic Table */}
            <Card>
              <CardHeader>
                <CardTitle>Tabela Básica</CardTitle>
                <CardDescription>Estrutura simples para exibição de dados</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>E-mail</TableHead>
                      <TableHead>Função</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Último acesso</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.slice(0, 3).map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Enhanced Table */}
            <Card>
              <CardHeader>
                <CardTitle>Tabela com Avatares e Ações</CardTitle>
                <CardDescription>Tabela enriquecida com elementos visuais e interações</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox 
                          checked={selectedRows.length === users.length}
                          onCheckedChange={handleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Usuário</TableHead>
                      <TableHead>Função</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Último acesso</TableHead>
                      <TableHead className="w-[70px]">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Checkbox 
                            checked={selectedRows.includes(user.id)}
                            onCheckedChange={(checked) => handleSelectRow(user.id, checked as boolean)}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Ações</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                Visualizar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Excluir
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Orders Table */}
            <Card>
              <CardHeader>
                <CardTitle>Tabela de Pedidos</CardTitle>
                <CardDescription>Exemplo com dados de e-commerce</CardDescription>
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
                      <TableHead>Data</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-mono text-sm">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.product}</TableCell>
                        <TableCell className="font-semibold">{order.amount}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell>{order.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interactive" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tabela Interativa</CardTitle>
                <CardDescription>Com filtros, busca e paginação</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex flex-col sm:flex-row gap-2 flex-1">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Buscar usuários..." 
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filtrar por status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os status</SelectItem>
                        <SelectItem value="active">Ativo</SelectItem>
                        <SelectItem value="inactive">Inativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filtros
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Exportar
                    </Button>
                  </div>
                </div>

                {/* Selected Items Bar */}
                {selectedRows.length > 0 && (
                  <div className="bg-muted/50 border rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {selectedRows.length} item(s) selecionado(s)
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Editar em lote
                      </Button>
                      <Button variant="outline" size="sm">
                        Excluir selecionados
                      </Button>
                    </div>
                  </div>
                )}

                {/* Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">
                          <Checkbox 
                            checked={selectedRows.length === users.length}
                            onCheckedChange={handleSelectAll}
                          />
                        </TableHead>
                        <TableHead>
                          <Button variant="ghost" className="h-auto p-0 font-medium">
                            Nome
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </Button>
                        </TableHead>
                        <TableHead>Função</TableHead>
                        <TableHead>
                          <Button variant="ghost" className="h-auto p-0 font-medium">
                            Status
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </Button>
                        </TableHead>
                        <TableHead>Último acesso</TableHead>
                        <TableHead className="w-[70px]">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <Checkbox 
                              checked={selectedRows.includes(user.id)}
                              onCheckedChange={(checked) => handleSelectRow(user.id, checked as boolean)}
                            />
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-sm text-muted-foreground">{user.email}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>{getStatusBadge(user.status)}</TableCell>
                          <TableCell>{user.lastLogin}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  Visualizar
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Editar
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Excluir
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Mostrando 1 a {users.length} de {users.length} resultados
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      <ChevronLeft className="h-4 w-4" />
                      Anterior
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      Próximo
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="responsive" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tabelas Responsivas</CardTitle>
                <CardDescription>Adaptação para diferentes tamanhos de tela</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Mobile Cards View */}
                <div className="space-y-4">
                  <h4 className="font-medium">Visualização em Cards (Mobile)</h4>
                  <div className="grid gap-4 md:hidden">
                    {users.slice(0, 3).map((user) => (
                      <Card key={user.id}>
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-sm text-muted-foreground">{user.email}</div>
                                <div className="text-sm text-muted-foreground mt-1">
                                  {user.role} • {user.lastLogin}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getStatusBadge(user.status)}
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Visualizar</DropdownMenuItem>
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive">Excluir</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden md:block">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Usuário</TableHead>
                          <TableHead>Função</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Último acesso</TableHead>
                          <TableHead>Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.slice(0, 3).map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={user.avatar} alt={user.name} />
                                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{user.name}</div>
                                  <div className="text-sm text-muted-foreground">{user.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{getStatusBadge(user.status)}</TableCell>
                            <TableCell>{user.lastLogin}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Horizontal Scroll Table */}
                <div className="space-y-4">
                  <h4 className="font-medium">Scroll Horizontal</h4>
                  <div className="overflow-x-auto">
                    <Table className="min-w-[600px]">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="min-w-[200px]">Nome do Produto</TableHead>
                          <TableHead className="min-w-[120px]">Categoria</TableHead>
                          <TableHead className="min-w-[100px]">Preço</TableHead>
                          <TableHead className="min-w-[100px]">Estoque</TableHead>
                          <TableHead className="min-w-[120px]">Status</TableHead>
                          <TableHead className="min-w-[150px]">Data de Criação</TableHead>
                          <TableHead className="min-w-[100px]">Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Smartphone Pro Max 256GB</TableCell>
                          <TableCell>Eletrônicos</TableCell>
                          <TableCell>R$ 1.299,00</TableCell>
                          <TableCell>45</TableCell>
                          <TableCell><Badge>Ativo</Badge></TableCell>
                          <TableCell>15/01/2024</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Notebook Gaming Ultra</TableCell>
                          <TableCell>Computadores</TableCell>
                          <TableCell>R$ 3.999,00</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell><Badge variant="secondary">Inativo</Badge></TableCell>
                          <TableCell>14/01/2024</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Como Usar</CardTitle>
                <CardDescription>Guia de implementação de tabelas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Importação</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Uso Básico</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm whitespace-pre-wrap">
{`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Nome</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>João Silva</TableCell>
      <TableCell>joao@exemplo.com</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Boas Práticas</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Use cabeçalhos descritivos e claros</li>
                    <li>Implemente paginação para grandes datasets</li>
                    <li>Adicione funcionalidades de ordenação quando útil</li>
                    <li>Considere alternativas responsivas como cards para mobile</li>
                    <li>Use loading states durante carregamento de dados</li>
                    <li>Implemente estados vazios informativos</li>
                    <li>Adicione tooltips para dados truncados</li>
                    <li>Mantenha consistência visual com o design system</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TablesPage;