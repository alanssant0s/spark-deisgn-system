import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import PageHeader, { PageHeaderBreadcrumbItem } from "@/components/ui/page-header";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

// Importando os novos componentes de tabela
import { AdvancedTable, AdvancedTableColumn } from "@/components/ui/advanced-table";
import {
  StatusBadge,
  UserCell,
  DateCell,
  ActionsMenu,
  ActionButtons
} from "@/components/ui/table-components";

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
  Filter as FilterIcon,
  ChevronRight,
  Building2,
  UserCheck,
  UserX,
  UserCog
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Ativo" | "Inativo" | "Pendente";
  lastLogin: string;
  avatar?: string;
  phone: string;
  createdAt: string;
  notes: string;
  department?: string;
  permissions?: string[];
}

// ============================================================================
// BREADCRUMB COMPONENT
// ============================================================================

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  isCurrent?: boolean;
}

interface DynamicBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

function DynamicBreadcrumb({ items, className }: DynamicBreadcrumbProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.isCurrent ? (
                <BreadcrumbPage className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href} className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

// ============================================================================
// STATS CARDS COMPONENT
// ============================================================================

interface StatsCardProps {
  title: string;
  value: number;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "success" | "warning" | "danger";
}

function StatsCard({ title, value, description, icon, trend, variant = "default" }: StatsCardProps) {
  const variantClasses = {
    default: "bg-card",
    success: "bg-green-50 border-green-200",
    warning: "bg-yellow-50 border-yellow-200",
    danger: "bg-red-50 border-red-200",
  };

  return (
    <Card className={variantClasses[variant]}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {description}
          {trend && (
            <span className={`ml-2 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '+' : ''}{trend.value}%
            </span>
          )}
        </p>
      </CardContent>
    </Card>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const UserManagement = () => {
  // Mock users data - em um app real, isso viria do Supabase
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "João Silva",
      email: "joao.silva@email.com",
      role: "Admin",
      status: "Ativo",
      lastLogin: "2024-08-17T10:30:00Z",
      avatar: "",
      phone: "+55 11 99999-9999",
      createdAt: "2023-01-15T00:00:00Z",
      notes: "Administrador principal do sistema",
      department: "TI",
      permissions: ["read", "write", "delete", "admin"]
    },
    {
      id: "2",
      name: "Maria Santos",
      email: "maria.santos@email.com",
      role: "Editor",
      status: "Ativo",
      lastLogin: "2024-08-16T14:22:00Z",
      avatar: "",
      phone: "+55 11 88888-8888",
      createdAt: "2023-03-22T00:00:00Z",
      notes: "Editora de conteúdo",
      department: "Marketing",
      permissions: ["read", "write"]
    },
    {
      id: "3",
      name: "Pedro Oliveira",
      email: "pedro.oliveira@email.com",
      role: "User",
      status: "Inativo",
      lastLogin: "2024-08-10T08:15:00Z",
      avatar: "",
      phone: "+55 11 77777-7777",
      createdAt: "2023-06-10T00:00:00Z",
      notes: "Usuário inativo há mais de 30 dias",
      department: "Vendas",
      permissions: ["read"]
    },
    {
      id: "4",
      name: "Ana Costa",
      email: "ana.costa@email.com",
      role: "Editor",
      status: "Ativo",
      lastLogin: "2024-08-17T16:45:00Z",
      avatar: "",
      phone: "+55 11 66666-6666",
      createdAt: "2023-09-05T00:00:00Z",
      notes: "Editora de conteúdo",
      department: "RH",
      permissions: ["read", "write"]
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
      createdAt: "2024-08-15T00:00:00Z",
      notes: "Aguardando aprovação",
      department: "Financeiro",
      permissions: []
    }
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // Breadcrumb items
  const breadcrumbItems: PageHeaderBreadcrumbItem[] = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-4 w-4" />
    },
    {
      label: "Administração",
      href: "/admin",
      icon: <Building2 className="h-4 w-4" />
    },
    {
      label: "Gestão de Usuários",
      icon: <Users className="h-4 w-4" />,
      isCurrent: true
    }
  ];

  // Stats
  const stats = {
    total: users.length,
    active: users.filter(u => u.status === "Ativo").length,
    inactive: users.filter(u => u.status === "Inativo").length,
    pending: users.filter(u => u.status === "Pendente").length
  };

  // Table columns
  const columns: AdvancedTableColumn<User>[] = [
    {
      key: "user",
      title: "Usuário",
      dataIndex: "name",
      sortable: true,
      render: (_, record) => (
        <UserCell
          name={record.name}
          email={record.email}
          avatar={record.avatar}
          size="md"
        />
      ),
    },
    {
      key: "role",
      title: "Função",
      dataIndex: "role",
      sortable: true,
      filterable: true,
      filterOptions: [
        { label: "Admin", value: "Admin" },
        { label: "Editor", value: "Editor" },
        { label: "User", value: "User" },
      ],
      render: (value) => {
        const roleConfig = {
          Admin: { icon: <Shield className="w-3 h-3" />, className: "bg-purple-600" },
          Editor: { icon: <Edit className="w-3 h-3" />, className: "bg-blue-600" },
          User: { icon: <User className="w-3 h-3" />, className: "bg-gray-600" },
        };
        const config = roleConfig[value as keyof typeof roleConfig] || roleConfig.User;

        return (
          <Badge className={`${config.className} flex items-center gap-1`}>
            {config.icon}
            {value}
          </Badge>
        );
      },
    },
    {
      key: "department",
      title: "Departamento",
      dataIndex: "department",
      sortable: true,
      filterable: true,
      filterOptions: [
        { label: "TI", value: "TI" },
        { label: "Marketing", value: "Marketing" },
        { label: "Vendas", value: "Vendas" },
        { label: "RH", value: "RH" },
        { label: "Financeiro", value: "Financeiro" },
      ],
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
      sortable: true,
      align: "center",
      render: (value) => <StatusBadge status={value} type="user" />,
    },
    {
      key: "lastLogin",
      title: "Último Acesso",
      dataIndex: "lastLogin",
      sortable: true,
      render: (value) => (
        <DateCell
          date={value === "Nunca" ? new Date(0) : value}
          format="dd/MM/yyyy HH:mm"
          showTime={true}
        />
      ),
    },
    {
      key: "createdAt",
      title: "Criado em",
      dataIndex: "createdAt",
      sortable: true,
      render: (value) => <DateCell date={value} format="dd/MM/yyyy" />,
    },
    {
      key: "actions",
      title: "Ações",
      align: "center",
      render: (_, record) => (
        <ActionsMenu
          record={record}
          type="usuário"
          onView={() => handleViewUser(record)}
          onEdit={() => handleEditUser(record)}
          onDelete={() => handleDeleteUser(record)}
        />
      ),
    },
  ];

  // Handlers
  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user);
  };

  const confirmDeleteUser = () => {
    if (userToDelete) {
      setUsers(users.filter(user => user.id !== userToDelete.id));
      setUserToDelete(null);
      toast({
        title: "Usuário removido",
        description: "O usuário foi removido com sucesso.",
      });
    }
  };

  const handleAddUser = (data: Record<string, any>) => {
    const newUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
      status: data.status as "Ativo" | "Inativo" | "Pendente",
      notes: data.notes || "",
      lastLogin: "Nunca",
      avatar: "",
      createdAt: new Date().toISOString(),
      department: data.department,
      permissions: data.permissions || [],
    };

    setUsers([...users, newUser]);
    setIsAddModalOpen(false);
    toast({
      title: "Usuário criado",
      description: "O usuário foi criado com sucesso.",
    });
  };

  const handleUpdateUser = (data: Record<string, any>) => {
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

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Dados atualizados",
        description: "A lista de usuários foi atualizada.",
      });
    }, 1000);
  };

  const handleExport = () => {
    toast({
      title: "Exportando dados",
      description: "Os dados dos usuários serão exportados em breve.",
    });
  };

  const handleBulkAction = (action: string, selectedUsers: User[]) => {
    switch (action) {
      case "activate":
        setUsers(users.map(user =>
          selectedUsers.some(selected => selected.id === user.id)
            ? { ...user, status: "Ativo" as const }
            : user
        ));
        toast({
          title: "Usuários ativados",
          description: `${selectedUsers.length} usuário(s) foram ativado(s).`,
        });
        break;
      case "deactivate":
        setUsers(users.map(user =>
          selectedUsers.some(selected => selected.id === user.id)
            ? { ...user, status: "Inativo" as const }
            : user
        ));
        toast({
          title: "Usuários desativados",
          description: `${selectedUsers.length} usuário(s) foram desativado(s).`,
        });
        break;
      case "delete":
        setUsers(users.filter(user =>
          !selectedUsers.some(selected => selected.id === user.id)
        ));
        toast({
          title: "Usuários removidos",
          description: `${selectedUsers.length} usuário(s) foram removido(s).`,
        });
        break;
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        items={breadcrumbItems}
        title="Gestão de Usuários"
        subtitle="Gerencie usuários, permissões e acessos do sistema"
        actions={(
          <Button className="flex items-center gap-2" onClick={() => setIsAddModalOpen(true)}>
            <UserPlus className="w-4 h-4" />
            <span>Adicionar Usuário</span>
          </Button>
        )}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total de Usuários"
          value={stats.total}
          description="Usuários cadastrados"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Usuários Ativos"
          value={stats.active}
          description="Usuários ativos"
          icon={<UserCheck className="h-4 w-4 text-green-600" />}
          variant="success"
        />
        <StatsCard
          title="Usuários Inativos"
          value={stats.inactive}
          description="Usuários inativos"
          icon={<UserX className="h-4 w-4 text-red-600" />}
          variant="danger"
        />
        <StatsCard
          title="Pendentes"
          value={stats.pending}
          description="Aguardando aprovação"
          icon={<UserCog className="h-4 w-4 text-yellow-600" />}
          variant="warning"
        />
      </div>

      {/* Advanced Table */}
      <AdvancedTable
        data={users}
        columns={columns}
        title="Lista de Usuários"
        description="Gerencie todos os usuários do sistema"
        loading={loading}
        selectable={true}
        searchable={true}
        filterable={true}
        sortable={true}
        pagination={{
          enabled: true,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20, 50],
          showSizeChanger: true,
        }}
        actions={{
          add: {
            label: "Adicionar Usuário",
            onClick: () => setIsAddModalOpen(true),
          },
          export: {
            label: "Exportar",
            onClick: handleExport,
          },
          refresh: {
            label: "Atualizar",
            onClick: handleRefresh,
          },
          bulk: {
            enabled: true,
            actions: [
              {
                key: "activate",
                label: "Ativar Selecionados",
                onClick: (selectedUsers) => handleBulkAction("activate", selectedUsers),
              },
              {
                key: "deactivate",
                label: "Desativar Selecionados",
                onClick: (selectedUsers) => handleBulkAction("deactivate", selectedUsers),
              },
              {
                key: "delete",
                label: "Excluir Selecionados",
                onClick: (selectedUsers) => handleBulkAction("delete", selectedUsers),
                variant: "destructive",
              },
            ],
          },
        }}
        onRowClick={(record) => handleViewUser(record)}
      />

      {/* Add User Modal */}
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
                  placeholder="Digite o nome completo"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
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
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Departamento</Label>
                <Select name="department">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TI">TI</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Vendas">Vendas</SelectItem>
                    <SelectItem value="RH">RH</SelectItem>
                    <SelectItem value="Financeiro">Financeiro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role">Função</Label>
                <Select name="role" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a função" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Editor">Editor</SelectItem>
                    <SelectItem value="User">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select name="status" required>
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

          <TabsContent value="advanced" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notes">Observações</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Observações sobre o usuário..."
                rows={3}
              />
            </div>
          </TabsContent>
        </Tabs>
      </FormModal>

      {/* Edit User Modal */}
      <FormModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedUser(null);
        }}
        onSubmit={handleUpdateUser}
        title="Editar Usuário"
        description="Atualize as informações do usuário"
        submitText="Salvar Alterações"
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
                  placeholder="Digite o nome completo"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
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
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Departamento</Label>
                <Select name="department">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TI">TI</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Vendas">Vendas</SelectItem>
                    <SelectItem value="RH">RH</SelectItem>
                    <SelectItem value="Financeiro">Financeiro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role">Função</Label>
                <Select name="role" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a função" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Editor">Editor</SelectItem>
                    <SelectItem value="User">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select name="status" required>
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

          <TabsContent value="advanced" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notes">Observações</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Observações sobre o usuário..."
                rows={3}
              />
            </div>
          </TabsContent>
        </Tabs>
      </FormModal>


    </div>
  );
};

// Helper functions
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

export default UserManagement;