import {
    Home, BarChart3, Users, FileText, Package, Bell, Settings,
    ChevronDown, User, LogOut, Zap, PieChart, TrendingUp, MousePointer2,
    CreditCard, FileInput, Calendar, Table, Database, AlertTriangle,
    MessageSquare, Square, CheckCircle, Palette, ShoppingBag, ShoppingCart, Bug, Shield,
    LayoutDashboard, Component, FolderKanban, PlayCircle, Navigation
} from "lucide-react";

export interface NavigationItem {
    name: string;
    path: string;
    icon: any;
}

export interface NavigationSection {
    name: string;
    icon: any;
    items: NavigationItem[];
}

// Navegação principal
export const mainNavItems: NavigationItem[] = [
    { name: "Dashboard", path: "/", icon: Home },
];

// Páginas SaaS
export const saasPages: NavigationItem[] = [
    { name: "Analytics", path: "/saas/analytics", icon: BarChart3 },
    { name: "Clientes", path: "/saas/customers", icon: Users },
    { name: "Pedidos", path: "/saas/orders", icon: ShoppingCart },
    { name: "Produtos", path: "/saas/products", icon: ShoppingBag },
    { name: "Métricas", path: "/metrics", icon: TrendingUp },
    { name: "Usuários", path: "/users", icon: Users },
    { name: "Confirmação", path: "/confirmation", icon: CheckCircle },
    { name: "Sistema", path: "/design-system", icon: Palette },
    { name: "Páginas de Erro", path: "/error-pages", icon: Bug },
    { name: "Autenticação", path: "/auth-pages", icon: Shield },
];

// Páginas de componentes
export const componentPages: NavigationItem[] = [
    { name: "Playground", path: "/playground", icon: PlayCircle },
    { name: "Botões", path: "/components/buttons", icon: MousePointer2 },
    { name: "Cards", path: "/components/cards", icon: CreditCard },
    { name: "Formulários", path: "/components/forms", icon: FileInput },
    { name: "Date Picker", path: "/components/datepicker", icon: Calendar },
    { name: "Tabelas", path: "/components/tables", icon: Table },
    { name: "DataTable", path: "/components/datatable", icon: Database },
    { name: "Alertas", path: "/components/alerts", icon: AlertTriangle },
    { name: "Diálogos", path: "/components/dialogs", icon: MessageSquare },
    { name: "Modais", path: "/components/modals", icon: Square },
    { name: "Gráficos", path: "/components/charts", icon: PieChart },
    { name: "Breadcrumb", path: "/components/breadcrumb", icon: Navigation },
    { name: "Processador Logo", path: "/logo-processor", icon: Zap },
];

// Seções de navegação organizadas
export const navigationSections: NavigationSection[] = [
    {
        name: "Pages",
        icon: Zap,
        items: saasPages,
    },
    {
        name: "Componentes",
        icon: Package,
        items: componentPages,
    },
];

// Função para encontrar o nome da página atual
export const getCurrentPageName = (pathname: string): string => {
    const allPages = [...mainNavItems, ...saasPages, ...componentPages];
    const currentPage = allPages.find((page) => page.path === pathname);
    return currentPage?.name || "Dashboard";
};

// Função para verificar se uma rota está ativa
export const isActive = (path: string, currentPath: string): boolean => {
    if (path === "/") {
        return currentPath === "/";
    }
    return currentPath.startsWith(path);
};

// Verificar se algum item de uma seção está ativo
export const isSectionActive = (items: NavigationItem[], currentPath: string): boolean => {
    return items.some(item => isActive(item.path, currentPath));
};
