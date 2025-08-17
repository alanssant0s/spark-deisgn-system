import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useLayout } from "@/contexts/LayoutContext";
import { LayoutSettings } from "@/components/LayoutSettings";
import { NotificationCenter } from "@/components/notifications/NotificationCenter";
import { 
  Menu, X, Home, BarChart3, Users, FileText, Package, Bell, Settings, 
  ChevronDown, User, LogOut, Zap, TrendingUp, Monitor
} from "lucide-react";
import userAvatar from "@/assets/user-avatar.jpg";

interface HorizontalLayoutProps {
  children: ReactNode;
}

const mainNavItems = [
  { name: "Dashboard", path: "/", icon: Home },
  { name: "Notificações", path: "/notifications", icon: Bell },
];

const saasPages = [
  { name: "Analytics", path: "/saas/analytics", icon: BarChart3 },
  { name: "Clientes", path: "/saas/customers", icon: Users },
  { name: "Pedidos", path: "/saas/orders", icon: FileText },
  { name: "Produtos", path: "/saas/products", icon: Package },
  { name: "Métricas", path: "/metrics", icon: TrendingUp },
  { name: "Usuários", path: "/users", icon: Users },
  { name: "Confirmação", path: "/confirmation", icon: FileText },
  { name: "Sistema", path: "/design-system", icon: Settings },
];

const componentPages = [
  { name: "Botões", path: "/components/buttons", icon: Package },
  { name: "Cards", path: "/components/cards", icon: Package },
  { name: "Formulários", path: "/components/forms", icon: Package },
  { name: "Date Picker", path: "/components/datepicker", icon: Package },
  { name: "Tabelas", path: "/components/tables", icon: Package },
  { name: "Alertas", path: "/components/alerts", icon: Package },
  { name: "Diálogos", path: "/components/dialogs", icon: Package },
  { name: "Gráficos", path: "/components/charts", icon: Package },
];

export function HorizontalLayout({ children }: HorizontalLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toggleLayout } = useLayout();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getCurrentPageName = () => {
    const allPages = [...mainNavItems, ...saasPages, ...componentPages];
    const currentPage = allPages.find((page) => page.path === location.pathname);
    return currentPage?.name || "Dashboard";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">SaaS App</h1>
            </div>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              {/* SaaS Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  saasPages.some(page => isActive(page.path)) ? "text-primary" : "text-muted-foreground"
                )}>
                  <Zap className="h-4 w-4" />
                  <span>SaaS</span>
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {saasPages.map((page) => (
                    <DropdownMenuItem key={page.path} asChild>
                      <Link to={page.path} className="flex items-center gap-2">
                        <page.icon className="h-4 w-4" />
                        {page.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Components Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  componentPages.some(page => isActive(page.path)) ? "text-primary" : "text-muted-foreground"
                )}>
                  <Package className="h-4 w-4" />
                  <span>Componentes</span>
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {componentPages.map((page) => (
                    <DropdownMenuItem key={page.path} asChild>
                      <Link to={page.path} className="flex items-center gap-2">
                        <page.icon className="h-4 w-4" />
                        {page.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <LayoutSettings />
              <NotificationCenter />

              {/* User Menu */}
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

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card shadow-lg fixed left-0 right-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
                
                {/* SaaS Pages */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    SaaS
                  </div>
                  {saasPages.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-6 py-2 rounded-lg transition-colors text-sm",
                        isActive(item.path)
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Components */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Componentes
                  </div>
                  {componentPages.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-6 py-2 rounded-lg transition-colors text-sm",
                        isActive(item.path)
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Layout Toggle */}
                <div className="pt-4 border-t border-border/50">
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      toggleLayout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center w-full justify-start px-3 py-2 text-sm font-medium hover:bg-accent"
                  >
                    <Monitor className="w-4 h-4 mr-3" />
                    Layout Vertical
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
}