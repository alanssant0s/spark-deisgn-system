import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { NotificationCenter } from "@/components/notifications/NotificationCenter";
import { LayoutSettings } from "@/components/LayoutSettings";
import { useLayout } from "@/contexts/LayoutContext";
import {
  Menu, X, Home, BarChart3, Users, FileText, Package, Bell, Settings,
  ChevronDown, User, LogOut, Zap, PieChart, TrendingUp, MousePointer2,
  CreditCard, FileInput, Calendar, Table, Database, AlertTriangle,
  MessageSquare, CheckCircle, Palette, ShoppingBag, ShoppingCart, Bug
} from "lucide-react";
import userAvatar from "@/assets/user-avatar.jpg";

interface VerticalLayoutProps {
  children: ReactNode;
}

const mainNavItems = [
  { name: "Dashboard", path: "/", icon: Home },
];

const saasPages = [
  { name: "Analytics", path: "/saas/analytics", icon: BarChart3 },
  { name: "Clientes", path: "/saas/customers", icon: Users },
  { name: "Pedidos", path: "/saas/orders", icon: ShoppingCart },
  { name: "Produtos", path: "/saas/products", icon: ShoppingBag },
  { name: "Métricas", path: "/metrics", icon: TrendingUp },
  { name: "Usuários", path: "/users", icon: Users },
  { name: "Confirmação", path: "/confirmation", icon: CheckCircle },
  { name: "Sistema", path: "/design-system", icon: Palette },
  { name: "Páginas de Erro", path: "/error-pages", icon: Bug },
];

const componentPages = [
  { name: "Botões", path: "/components/buttons", icon: MousePointer2 },
  { name: "Cards", path: "/components/cards", icon: CreditCard },
  { name: "Formulários", path: "/components/forms", icon: FileInput },
  { name: "Date Picker", path: "/components/datepicker", icon: Calendar },
  { name: "Tabelas", path: "/components/tables", icon: Table },
  { name: "DataTable", path: "/components/datatable", icon: Database },
  { name: "Alertas", path: "/components/alerts", icon: AlertTriangle },
  { name: "Diálogos", path: "/components/dialogs", icon: MessageSquare },
  { name: "Gráficos", path: "/components/charts", icon: PieChart },
  { name: "Processador Logo", path: "/logo-processor", icon: Zap },
];

export function VerticalLayout({ children }: VerticalLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toggleLayout, sidebarTheme } = useLayout();

  // Abrir seções por padrão se a rota atual estiver nelas
  const [isComponentsOpen, setIsComponentsOpen] = useState<boolean>(true);
  const [isSaasOpen, setIsSaasOpen] = useState<boolean>(
    saasPages.some(page => location.pathname === page.path)
  );

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? "w-64" : "w-16"
          } ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } ${sidebarTheme === 'dark'
            ? "bg-slate-900 border-slate-800 text-slate-100"
            : "bg-card border-border"
          } fixed lg:relative z-50 lg:z-auto transition-all duration-300 flex flex-col shadow-sm h-full`}
      >
        {/* Logo/Header */}
        <div className={`p-4 border-b ${sidebarTheme === 'dark' ? 'border-slate-800' : 'border-border'}`}>
          <div className="flex items-center justify-center">
            {isSidebarOpen ? (
              <div className="flex items-center justify-center space-x-3">
                <img
                  src="/lovable-uploads/6c8cd236-d552-4a9b-8b41-7493ef7a762a.png"
                  alt="Spark Logo"
                  className="h-8 object-contain"
                />
                <img
                  src="/logo.png"
                  alt="Spark"
                  className="w-20 h-8 object-contain"
                />
              </div>
            ) : (
              <img
                src="/lovable-uploads/6c8cd236-d552-4a9b-8b41-7493ef7a762a.png"
                alt="Spark"
                className="w-8 h-8 object-contain"
              />
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          <ul className="space-y-2">
            {/* Main Navigation */}
            {mainNavItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors group ${isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : sidebarTheme === 'dark'
                      ? "text-slate-300 hover:bg-slate-700 hover:text-slate-50"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {isSidebarOpen && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            ))}

            {/* SaaS Section */}
            <li>
              <Collapsible open={isSaasOpen} onOpenChange={setIsSaasOpen}>
                <CollapsibleTrigger asChild>
                  <button
                    className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors group ${saasPages.some(page => isActive(page.path))
                      ? "bg-primary text-primary-foreground"
                      : sidebarTheme === 'dark'
                        ? "text-slate-300 hover:bg-slate-700 hover:text-slate-50"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                  >
                    <Zap className="w-5 h-5 flex-shrink-0" />
                    {isSidebarOpen && (
                      <>
                        <span className="ml-3">Pages</span>
                        <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isSaasOpen ? "rotate-180" : ""}`} />
                      </>
                    )}
                  </button>
                </CollapsibleTrigger>
                {isSidebarOpen && (
                  <CollapsibleContent className="ml-4 mt-1 space-y-1">
                    {saasPages.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center px-3 py-2 rounded-lg transition-colors text-sm ${isActive(item.path)
                          ? "bg-primary text-primary-foreground"
                          : sidebarTheme === 'dark'
                            ? "text-slate-400 hover:bg-slate-700 hover:text-slate-100"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          }`}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="ml-3">{item.name}</span>
                      </Link>
                    ))}
                  </CollapsibleContent>
                )}
              </Collapsible>
            </li>

            {/* Components Section */}
            <li>
              <Collapsible open={isComponentsOpen} onOpenChange={setIsComponentsOpen}>
                <CollapsibleTrigger asChild>
                  <button
                    className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors group ${isActive("/components")
                      ? "bg-primary text-primary-foreground"
                      : sidebarTheme === 'dark'
                        ? "text-slate-300 hover:bg-slate-700 hover:text-slate-50"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                  >
                    <Package className="w-5 h-5 flex-shrink-0" />
                    {isSidebarOpen && (
                      <>
                        <span className="ml-3">Componentes</span>
                        <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isComponentsOpen ? "rotate-180" : ""}`} />
                      </>
                    )}
                  </button>
                </CollapsibleTrigger>
                {isSidebarOpen && (
                  <CollapsibleContent className="ml-4 mt-1 space-y-1">
                    {componentPages.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center px-3 py-2 rounded-lg transition-colors text-sm ${isActive(item.path)
                          ? "bg-primary text-primary-foreground"
                          : sidebarTheme === 'dark'
                            ? "text-slate-400 hover:bg-slate-700 hover:text-slate-100"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          }`}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="ml-3">{item.name}</span>
                      </Link>
                    ))}
                  </CollapsibleContent>
                )}
              </Collapsible>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted hover:text-foreground transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Desktop sidebar toggle */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden lg:block p-2 rounded-lg hover:bg-muted hover:text-foreground transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>

            <h2 className="text-lg font-semibold text-foreground">
              {(() => {
                const currentPage = [...mainNavItems, ...saasPages, ...componentPages].find(
                  (item) => item.path === location.pathname
                );
                return currentPage?.name || "Dashboard";
              })()}
            </h2>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <LayoutSettings />

            <NotificationCenter />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={userAvatar} alt="João Silva" />
                    <AvatarFallback className="bg-primary text-primary-foreground">JS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">João Silva</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      joao@exemplo.com
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}