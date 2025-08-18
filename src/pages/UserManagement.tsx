import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TableCard } from "@/components/ui/table-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FormModal, InfoModal } from "@/components/ui/modal-examples";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash,
  Shield,
  Mail,
  Phone,
  Calendar,
  Activity,
  Download,
  Home,
  Settings,
  User,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Plus,
  FileText,
  BarChart3,
  Filter as FilterIcon
} from "lucide-react";


const UserManagement = () => {
  // Mock users data - em um app real, isso viria do Supabase
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "João Silva",
      email: "joao.silva@email.com",
      role: "Admin",
      status: "Ativo",
      lastLogin: "2024-08-17",
      avatar: "",
      phone: "+55 11 99999-9999",
      createdAt: "2023-01-15",
      notes: "Administrador principal do sistema"
    },
    {
      id: "2",
      name: "Maria Santos",
      email: "maria.santos@email.com",
      role: "Editor",
      status: "Ativo",
      lastLogin: "2024-08-16",
      avatar: "",
      phone: "+55 11 88888-8888",
      createdAt: "2023-03-22",
      notes: "Editora de conteúdo"
    },
    {
      id: "3",
      name: "Pedro Oliveira",
      email: "pedro.oliveira@email.com",
      role: "User",
      status: "Inativo",
      lastLogin: "2024-08-10",
      avatar: "",
      phone: "+55 11 77777-7777",
      createdAt: "2023-06-10",
      notes: "Usuário inativo há mais de 30 dias"
    },
    {
      id: "4",
      name: "Ana Costa",
      email: "ana.costa@email.com",
      role: "Editor",
      status: "Ativo",
      lastLogin: "2024-08-17",
      avatar: "",
      phone: "+55 11 66666-6666",
      createdAt: "2023-09-05",
      notes: "Editora de conteúdo"
    },
    {
      id: "5",
      name: "Carlos Ferreira",
      email: "carlos.ferreira@email.com",
      role: "User",
      status: "Pendente",
      lastLogin: "Nunca",
      avatar: "",
      phone: "+55 11 55555-5555",
      createdAt: "2024-08-15",
      notes: "Aguardando aprovação"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [userToDelete, setUserToDelete] = useState<any>(null);



  // Filtrar usuários
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    setUserToDelete(null); // Fecha o dialog
    setOpenDropdownId(null); // Fecha o dropdown
    toast({
      title: "Usuário removido",
      description: "O usuário foi removido com sucesso.",
    });
  };

  const handleAddUser = (data: Record<string, any>) => {
    const newUser = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
      status: data.status,
      notes: data.notes || "",
      lastLogin: "Nunca",
      avatar: "",
      createdAt: new Date().toISOString().split('T')[0],
    };

    setUsers([...users, newUser]);
    setIsAddModalOpen(false);
    toast({
      title: "Usuário criado",
      description: "O usuário foi criado com sucesso.",
    });
  };

  const handleEditUser = (data: Record<string, any>) => {
    if (selectedUser) {
      setUsers(users.map(user =>
        user.id === selectedUser.id
          ? { ...user, ...data }
          : user
      ));
      setIsEditModalOpen(false);
      setSelectedUser(null);
      toast({
        title: "Usuário atualizado",
        description: "O usuário foi atualizado com sucesso.",
      });
    }
  };

  const openEditModal = (user: any) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const openViewModal = (user: any) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Ativo":
        return <Badge variant="default" className="flex items-center gap-1"><CheckCircle className="w-3 h-3" />Ativo</Badge>;
      case "Inativo":
        return <Badge variant="secondary" className="flex items-center gap-1"><XCircle className="w-3 h-3" />Inativo</Badge>;
      case "Pendente":
        return <Badge variant="outline" className="flex items-center gap-1"><Clock className="w-3 h-3" />Pendente</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Admin":
        return <Badge className="bg-purple-600 flex items-center gap-1"><Shield className="w-3 h-3" />Admin</Badge>;
      case "Editor":
        return <Badge className="bg-blue-600 flex items-center gap-1"><Edit className="w-3 h-3" />Editor</Badge>;
      case "User":
        return <Badge variant="outline" className="flex items-center gap-1"><User className="w-3 h-3" />User</Badge>;
      default:
        return <Badge variant="outline">{role}</Badge>;
    }
  };

  const stats = {
    total: users.length,
    active: users.filter(u => u.status === "Ativo").length,
    inactive: users.filter(u => u.status === "Inativo").length,
    pending: users.filter(u => u.status === "Pendente").length
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Configurações
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Gestão de Usuários
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestão de Usuários</h1>
          <p className="text-muted-foreground">
            Gerencie usuários, permissões e acessos do sistema
          </p>
        </div>
        <Button className="flex items-center space-x-2" onClick={openAddModal}>
          <UserPlus className="w-4 h-4" />
          <span>Adicionar Usuário</span>
        </Button>

        <FormModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddUser}
          title="Adicionar Novo Usuário"
          description="Preencha as informações para criar um novo usuário no sistema"
          submitText="Criar Usuário"
          cancelText="Cancelar"
          size="2xl"
        >
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
              <TabsTrigger value="permissions">Permissões</TabsTrigger>
              <TabsTrigger value="advanced">Avançado</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Digite o nome completo..."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="usuario@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+55 11 99999-9999"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select name="status" defaultValue="Ativo">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ativo">Ativo</SelectItem>
                      <SelectItem value="Inativo">Inativo</SelectItem>
                      <SelectItem value="Pendente">Pendente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="permissions" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Função</Label>
                <Select name="role" defaultValue="User">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma função" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="User">User - Acesso básico</SelectItem>
                    <SelectItem value="Editor">Editor - Pode editar conteúdo</SelectItem>
                    <SelectItem value="Admin">Admin - Acesso completo</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Defina o nível de acesso do usuário no sistema
                </p>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notes">Observações</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Adicione observações sobre o usuário..."
                  className="resize-none"
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Enviar email de boas-vindas</Label>
                    <p className="text-sm text-muted-foreground">
                      Envia um email automático com credenciais de acesso
                    </p>
                  </div>
                  <Switch name="sendWelcomeEmail" defaultChecked />
                </div>

                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Exigir troca de senha</Label>
                    <p className="text-sm text-muted-foreground">
                      O usuário será obrigado a trocar a senha no primeiro login
                    </p>
                  </div>
                  <Switch name="requirePasswordChange" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </FormModal>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Total de Usuários</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.active}</p>
                <p className="text-sm text-muted-foreground">Usuários Ativos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{users.filter(u => u.role === "Admin").length}</p>
                <p className="text-sm text-muted-foreground">Administradores</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.pending}</p>
                <p className="text-sm text-muted-foreground">Pendentes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <TableCard
        title="Lista de Usuários"
        description="Gerencie todos os usuários do sistema"
        actions={
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar por nome ou email..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as funções</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Editor">Editor</SelectItem>
                <SelectItem value="User">User</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="Ativo">Ativo</SelectItem>
                <SelectItem value="Inativo">Inativo</SelectItem>
                <SelectItem value="Pendente">Pendente</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Exportar</span>
            </Button>
          </div>
        }
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuário</TableHead>
              <TableHead>Função</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Último Login</TableHead>
              <TableHead>Criado em</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{getRoleBadge(user.role)}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell className="text-sm">{user.lastLogin}</TableCell>
                <TableCell className="text-sm">{new Date(user.createdAt).toLocaleDateString('pt-BR')}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu
                    open={openDropdownId === user.id}
                    onOpenChange={(open) => setOpenDropdownId(open ? user.id : null)}
                  >
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        className="flex items-center space-x-2"
                        onClick={() => {
                          openViewModal(user);
                          setOpenDropdownId(null);
                        }}
                      >
                        <Eye className="w-4 h-4" />
                        <span>Visualizar</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex items-center space-x-2"
                        onClick={() => {
                          openEditModal(user);
                          setOpenDropdownId(null);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                        <span>Editar</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Enviar Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center space-x-2">
                        <Lock className="w-4 h-4" />
                        <span>Resetar Senha</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex items-center space-x-2 text-red-600"
                        onClick={() => {
                          setUserToDelete(user);
                          setOpenDropdownId(null);
                        }}
                      >
                        <Trash className="w-4 h-4" />
                        <span>Remover</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredUsers.length === 0 && (
          <div className="text-center py-8">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Nenhum usuário encontrado com os filtros aplicados.</p>
          </div>
        )}
      </TableCard>

      {/* Modal de Visualização de Usuário */}
      <InfoModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Detalhes do Usuário"
        description="Informações completas do usuário selecionado"
        size="2xl"
        actions={
          <Button onClick={() => {
            setIsViewModalOpen(false);
            openEditModal(selectedUser);
          }}>
            <Edit className="w-4 h-4 mr-2" />
            Editar Usuário
          </Button>
        }
      >
        {selectedUser && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={selectedUser.avatar} />
                <AvatarFallback className="text-lg">
                  {selectedUser.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{selectedUser.name}</h3>
                <p className="text-muted-foreground">{selectedUser.email}</p>
                <div className="flex items-center space-x-2 mt-2">
                  {getRoleBadge(selectedUser.role)}
                  {getStatusBadge(selectedUser.status)}
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground">Telefone</Label>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {selectedUser.phone}
                </p>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground">Último Login</Label>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedUser.lastLogin}
                </p>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground">Data de Criação</Label>
                <p>{new Date(selectedUser.createdAt).toLocaleDateString('pt-BR')}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground">ID do Usuário</Label>
                <p className="font-mono text-sm">{selectedUser.id}</p>
              </div>
            </div>

            {selectedUser.notes && (
              <>
                <Separator />
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">Observações</Label>
                  <p className="text-sm">{selectedUser.notes}</p>
                </div>
              </>
            )}
          </div>
        )}
      </InfoModal>

      {/* Modal de Edição de Usuário */}
      <FormModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditUser}
        title="Editar Usuário"
        description="Atualize as informações do usuário selecionado"
        submitText="Atualizar Usuário"
        cancelText="Cancelar"
        size="2xl"
      >
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
            <TabsTrigger value="permissions">Permissões</TabsTrigger>
            <TabsTrigger value="advanced">Avançado</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Nome Completo</Label>
                <Input
                  id="edit-name"
                  name="name"
                  placeholder="Digite o nome completo..."
                  defaultValue={selectedUser?.name}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  name="email"
                  type="email"
                  placeholder="usuario@email.com"
                  defaultValue={selectedUser?.email}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-phone">Telefone</Label>
                <Input
                  id="edit-phone"
                  name="phone"
                  placeholder="+55 11 99999-9999"
                  defaultValue={selectedUser?.phone}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-status">Status</Label>
                <Select name="status" defaultValue={selectedUser?.status}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Inativo">Inativo</SelectItem>
                    <SelectItem value="Pendente">Pendente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="edit-role">Função</Label>
              <Select name="role" defaultValue={selectedUser?.role}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma função" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="User">User - Acesso básico</SelectItem>
                  <SelectItem value="Editor">Editor - Pode editar conteúdo</SelectItem>
                  <SelectItem value="Admin">Admin - Acesso completo</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Defina o nível de acesso do usuário no sistema
              </p>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="edit-notes">Observações</Label>
              <Textarea
                id="edit-notes"
                name="notes"
                placeholder="Adicione observações sobre o usuário..."
                className="resize-none"
                defaultValue={selectedUser?.notes}
              />
            </div>
          </TabsContent>
        </Tabs>
      </FormModal>

      {/* Dialog de Confirmação de Remoção */}
      <AlertDialog
        open={userToDelete !== null}
        onOpenChange={(open) => {
          if (!open) {
            setUserToDelete(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remover usuário?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. O usuário "{userToDelete?.name}" será removido permanentemente do sistema.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleDeleteUser(userToDelete?.id)}
              className="bg-red-600 hover:bg-red-700"
            >
              Remover
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default UserManagement;