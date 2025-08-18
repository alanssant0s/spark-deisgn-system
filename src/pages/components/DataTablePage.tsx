import React, { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
    MoreHorizontal,
    Eye,
    Edit,
    Trash2,
    Star,
    Download,
    RefreshCw,
    Users,
    TrendingUp,
    Package,
    DollarSign,
    Home,
    Settings,
    Database
} from "lucide-react";

import { DataTable, DataTableColumn } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useToast } from "@/hooks/use-toast";

// Importando os novos componentes
import {
    StatusBadge,
    UserCell,
    PriceCell,
    StockCell,
    RatingCell,
    OrderIdCell,
    DateCell,
    ActionsMenu,
    MetricCell
} from "@/components/ui/table-components";

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
// STATS CARD COMPONENT
// ============================================================================

interface StatsCardProps {
    title: string;
    value: string | number;
    description: string;
    icon: React.ReactNode;
    trend?: {
        value: number;
        isPositive: boolean;
    };
}

function StatsCard({ title, value, description, icon, trend }: StatsCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
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
// TYPES
// ============================================================================

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: "active" | "inactive" | "pending";
    avatar?: string;
    createdAt: string;
    lastLogin?: string;
    department: string;
}

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: "available" | "out_of_stock" | "discontinued";
    rating: number;
    sales: number;
    createdAt: string;
}

interface Order {
    id: string;
    customer: string;
    total: number;
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    date: string;
    items: number;
    paymentMethod: string;
}

// ============================================================================
// SAMPLE DATA
// ============================================================================

const sampleUsers: User[] = [
    {
        id: "1",
        name: "João Silva",
        email: "joao.silva@email.com",
        role: "Admin",
        status: "active",
        avatar: "/api/placeholder/32/32",
        createdAt: "2024-01-15T10:30:00Z",
        lastLogin: "2024-01-20T14:22:00Z",
        department: "TI",
    },
    {
        id: "2",
        name: "Maria Santos",
        email: "maria.santos@email.com",
        role: "Editor",
        status: "active",
        createdAt: "2024-01-10T09:15:00Z",
        lastLogin: "2024-01-19T16:45:00Z",
        department: "Marketing",
    },
    {
        id: "3",
        name: "Pedro Costa",
        email: "pedro.costa@email.com",
        role: "Viewer",
        status: "inactive",
        createdAt: "2024-01-05T11:20:00Z",
        lastLogin: "2024-01-18T08:30:00Z",
        department: "Vendas",
    },
    {
        id: "4",
        name: "Ana Oliveira",
        email: "ana.oliveira@email.com",
        role: "Editor",
        status: "pending",
        createdAt: "2024-01-20T13:45:00Z",
        department: "RH",
    },
    {
        id: "5",
        name: "Carlos Ferreira",
        email: "carlos.ferreira@email.com",
        role: "Admin",
        status: "active",
        createdAt: "2024-01-12T15:10:00Z",
        lastLogin: "2024-01-20T12:15:00Z",
        department: "TI",
    },
];

const sampleProducts: Product[] = [
    {
        id: "1",
        name: "Smartphone Pro Max",
        category: "Eletrônicos",
        price: 2999.99,
        stock: 45,
        status: "available",
        rating: 4.8,
        sales: 1250,
        createdAt: "2024-01-01T00:00:00Z",
    },
    {
        id: "2",
        name: "Notebook Gamer",
        category: "Computadores",
        price: 4599.99,
        stock: 0,
        status: "out_of_stock",
        rating: 4.6,
        sales: 890,
        createdAt: "2024-01-05T00:00:00Z",
    },
    {
        id: "3",
        name: "Fones Bluetooth",
        category: "Acessórios",
        price: 299.99,
        stock: 120,
        status: "available",
        rating: 4.4,
        sales: 2340,
        createdAt: "2024-01-10T00:00:00Z",
    },
    {
        id: "4",
        name: "Tablet 10 polegadas",
        category: "Eletrônicos",
        price: 899.99,
        stock: 25,
        status: "available",
        rating: 4.2,
        sales: 567,
        createdAt: "2024-01-15T00:00:00Z",
    },
    {
        id: "5",
        name: "Monitor 4K",
        category: "Computadores",
        price: 1299.99,
        stock: 0,
        status: "discontinued",
        rating: 4.7,
        sales: 445,
        createdAt: "2024-01-20T00:00:00Z",
    },
];

const sampleOrders: Order[] = [
    {
        id: "ORD-001",
        customer: "João Silva",
        total: 2999.99,
        status: "delivered",
        date: "2024-01-20T10:30:00Z",
        items: 1,
        paymentMethod: "Cartão de Crédito",
    },
    {
        id: "ORD-002",
        customer: "Maria Santos",
        total: 599.98,
        status: "processing",
        date: "2024-01-19T14:22:00Z",
        items: 2,
        paymentMethod: "PIX",
    },
    {
        id: "ORD-003",
        customer: "Pedro Costa",
        total: 4599.99,
        status: "shipped",
        date: "2024-01-18T16:45:00Z",
        items: 1,
        paymentMethod: "Boleto",
    },
    {
        id: "ORD-004",
        customer: "Ana Oliveira",
        total: 1799.97,
        status: "pending",
        date: "2024-01-17T09:15:00Z",
        items: 3,
        paymentMethod: "Cartão de Débito",
    },
    {
        id: "ORD-005",
        customer: "Carlos Ferreira",
        total: 299.99,
        status: "cancelled",
        date: "2024-01-16T11:20:00Z",
        items: 1,
        paymentMethod: "PIX",
    },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function DataTablePage() {
    const { toast } = useToast();
    const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<React.Key[]>([]);
    const [selectedOrders, setSelectedOrders] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    // Breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        {
            label: "Home",
            href: "/",
            icon: <Home className="h-4 w-4" />
        },
        {
            label: "Componentes",
            href: "/components",
            icon: <Settings className="h-4 w-4" />
        },
        {
            label: "DataTable",
            icon: <Database className="h-4 w-4" />,
            isCurrent: true
        }
    ];

    // Users table columns
    const userColumns: DataTableColumn<User>[] = [
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
                { label: "Viewer", value: "Viewer" },
            ],
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
            key: "createdAt",
            title: "Criado em",
            dataIndex: "createdAt",
            sortable: true,
            render: (value) => <DateCell date={value} format="dd/MM/yyyy" />,
        },
        {
            key: "lastLogin",
            title: "Último Acesso",
            dataIndex: "lastLogin",
            sortable: true,
            render: (value) => value ? <DateCell date={value} format="dd/MM/yyyy HH:mm" showTime={true} /> : "Nunca",
        },
        {
            key: "actions",
            title: "Ações",
            align: "center",
            render: (_, record) => (
                <ActionsMenu
                    record={record}
                    type="usuário"
                    onView={() => toast({ title: `Visualizar usuário`, description: `ID: ${record.id}` })}
                    onEdit={() => toast({ title: `Editar usuário`, description: `ID: ${record.id}` })}
                    onDelete={() => toast({ title: `Excluir usuário`, description: `ID: ${record.id}`, variant: "destructive" })}
                />
            ),
        },
    ];

    // Products table columns
    const productColumns: DataTableColumn<Product>[] = [
        {
            key: "name",
            title: "Produto",
            dataIndex: "name",
            sortable: true,
        },
        {
            key: "category",
            title: "Categoria",
            dataIndex: "category",
            sortable: true,
            filterable: true,
            filterOptions: [
                { label: "Eletrônicos", value: "Eletrônicos" },
                { label: "Computadores", value: "Computadores" },
                { label: "Acessórios", value: "Acessórios" },
            ],
        },
        {
            key: "price",
            title: "Preço",
            dataIndex: "price",
            sortable: true,
            align: "right",
            render: (value) => <PriceCell price={value} />,
        },
        {
            key: "stock",
            title: "Estoque",
            dataIndex: "stock",
            sortable: true,
            align: "center",
            render: (value) => <StockCell stock={value} />,
        },
        {
            key: "rating",
            title: "Avaliação",
            dataIndex: "rating",
            sortable: true,
            align: "center",
            render: (value) => <RatingCell rating={value} />,
        },
        {
            key: "sales",
            title: "Vendas",
            dataIndex: "sales",
            sortable: true,
            align: "right",
            render: (value) => <MetricCell value={value} format="number" />,
        },
        {
            key: "status",
            title: "Status",
            dataIndex: "status",
            sortable: true,
            align: "center",
            render: (value) => <StatusBadge status={value} type="product" />,
        },
        {
            key: "actions",
            title: "Ações",
            align: "center",
            render: (_, record) => (
                <ActionsMenu
                    record={record}
                    type="produto"
                    onView={() => toast({ title: `Visualizar produto`, description: `ID: ${record.id}` })}
                    onEdit={() => toast({ title: `Editar produto`, description: `ID: ${record.id}` })}
                    onDelete={() => toast({ title: `Excluir produto`, description: `ID: ${record.id}`, variant: "destructive" })}
                />
            ),
        },
    ];

    // Orders table columns
    const orderColumns: DataTableColumn<Order>[] = [
        {
            key: "id",
            title: "ID do Pedido",
            dataIndex: "id",
            sortable: true,
            render: (value) => <OrderIdCell id={value} />,
        },
        {
            key: "customer",
            title: "Cliente",
            dataIndex: "customer",
            sortable: true,
        },
        {
            key: "total",
            title: "Total",
            dataIndex: "total",
            sortable: true,
            align: "right",
            render: (value) => <PriceCell price={value} />,
        },
        {
            key: "items",
            title: "Itens",
            dataIndex: "items",
            sortable: true,
            align: "center",
        },
        {
            key: "paymentMethod",
            title: "Pagamento",
            dataIndex: "paymentMethod",
            sortable: true,
            filterable: true,
            filterOptions: [
                { label: "Cartão de Crédito", value: "Cartão de Crédito" },
                { label: "Cartão de Débito", value: "Cartão de Débito" },
                { label: "PIX", value: "PIX" },
                { label: "Boleto", value: "Boleto" },
            ],
        },
        {
            key: "status",
            title: "Status",
            dataIndex: "status",
            sortable: true,
            align: "center",
            render: (value) => <StatusBadge status={value} type="order" />,
        },
        {
            key: "date",
            title: "Data",
            dataIndex: "date",
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
                    type="pedido"
                    onView={() => toast({ title: `Visualizar pedido`, description: `ID: ${record.id}` })}
                    onEdit={() => toast({ title: `Editar pedido`, description: `ID: ${record.id}` })}
                    onDelete={() => toast({ title: `Excluir pedido`, description: `ID: ${record.id}`, variant: "destructive" })}
                />
            ),
        },
    ];

    const handleRefresh = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast({ title: "Dados atualizados", description: "A tabela foi recarregada com sucesso." });
        }, 1000);
    };

    const handleExport = () => {
        toast({ title: "Exportar dados", description: "Os dados serão exportados em breve." });
    };

    return (
        <div className="space-y-8">
            {/* Breadcrumb */}
            <DynamicBreadcrumb items={breadcrumbItems} />

            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-foreground">DataTable</h1>
                <p className="text-muted-foreground">
                    Componente de tabela avançada com paginação, ordenação, filtros e seleção
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                    title="Total de Usuários"
                    value={sampleUsers.length}
                    description="+2 novos este mês"
                    icon={<Users className="h-4 w-4 text-muted-foreground" />}
                    trend={{ value: 12, isPositive: true }}
                />

                <StatsCard
                    title="Produtos"
                    value={sampleProducts.length}
                    description={`${sampleProducts.filter(p => p.status === 'available').length} disponíveis`}
                    icon={<Package className="h-4 w-4 text-muted-foreground" />}
                />

                <StatsCard
                    title="Pedidos"
                    value={sampleOrders.length}
                    description={`${sampleOrders.filter(o => o.status === 'delivered').length} entregues`}
                    icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
                />

                <StatsCard
                    title="Receita Total"
                    value={new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(sampleOrders.reduce((acc, order) => acc + order.total, 0))}
                    description="+15% desde o último mês"
                    icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
                    trend={{ value: 15, isPositive: true }}
                />
            </div>

            {/* Users Table */}
            <section className="space-y-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">Tabela de Usuários</h2>
                    <p className="text-muted-foreground">
                        Exemplo com seleção múltipla, avatares e ações personalizadas
                    </p>
                </div>

                <DataTable
                    columns={userColumns}
                    data={sampleUsers}
                    loading={loading}
                    rowSelection={{
                        selectedRowKeys: selectedUsers,
                        onChange: setSelectedUsers,
                    }}
                    pagination={{
                        current: 1,
                        pageSize: 5,
                        total: sampleUsers.length,
                        showSizeChanger: true,
                        showQuickJumper: true,
                    }}
                    actions={{
                        search: true,
                        filters: true,
                        refresh: handleRefresh,
                        export: handleExport,
                    }}
                    title={
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Usuários do Sistema</h3>
                            {selectedUsers.length > 0 && (
                                <Badge variant="secondary">
                                    {selectedUsers.length} selecionado(s)
                                </Badge>
                            )}
                        </div>
                    }
                />
            </section>

            {/* Products Table */}
            <section className="space-y-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">Tabela de Produtos</h2>
                    <p className="text-muted-foreground">
                        Exemplo com formatação de moeda, badges de estoque e avaliações
                    </p>
                </div>

                <DataTable
                    columns={productColumns}
                    data={sampleProducts}
                    loading={loading}
                    rowSelection={{
                        selectedRowKeys: selectedProducts,
                        onChange: setSelectedProducts,
                    }}
                    pagination={{
                        current: 1,
                        pageSize: 10,
                        total: sampleProducts.length,
                        showSizeChanger: true,
                    }}
                    actions={{
                        search: true,
                        filters: true,
                        refresh: handleRefresh,
                        export: handleExport,
                    }}
                    size="middle"
                    bordered
                />
            </section>

            {/* Orders Table */}
            <section className="space-y-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">Tabela de Pedidos</h2>
                    <p className="text-muted-foreground">
                        Exemplo com códigos de pedido, status coloridos e métodos de pagamento
                    </p>
                </div>

                <DataTable
                    columns={orderColumns}
                    data={sampleOrders}
                    loading={loading}
                    rowSelection={{
                        selectedRowKeys: selectedOrders,
                        onChange: setSelectedOrders,
                    }}
                    pagination={{
                        current: 1,
                        pageSize: 10,
                        total: sampleOrders.length,
                        showSizeChanger: true,
                        pageSizeOptions: ["5", "10", "20", "50"],
                    }}
                    actions={{
                        search: true,
                        filters: true,
                        refresh: handleRefresh,
                        export: handleExport,
                    }}
                    size="small"
                    onRow={(record) => ({
                        className: "cursor-pointer hover:bg-muted/50",
                        onClick: () => {
                            toast({
                                title: "Pedido selecionado",
                                description: `Pedido ${record.id} - ${record.customer}`,
                            });
                        },
                    })}
                />
            </section>

            {/* Usage Guidelines */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Diretrizes de Uso</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Package className="h-5 w-5 text-green-600" />
                                <span>Funcionalidades</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>Paginação automática com controles de tamanho</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>Ordenação por colunas com indicadores visuais</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>Filtros por coluna com opções personalizáveis</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>Seleção múltipla com checkboxes</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>Busca global em todas as colunas</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>Renderização customizada de células</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>Estados de loading e dados vazios</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <TrendingUp className="h-5 w-5 text-blue-600" />
                                <span>Boas Práticas</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Use paginação para grandes conjuntos de dados</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Implemente loading states para melhor UX</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Forneça ações contextuais relevantes</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Use formatação adequada para diferentes tipos de dados</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Mantenha consistência visual entre tabelas</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>Implemente feedback para ações do usuário</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
