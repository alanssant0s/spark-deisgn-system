import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  Settings,
  User,
  BarChart3,
  FileText,
  Users,
  Package,
  FolderKanban,
  TrendingUp,
  UserCheck,
  LogOut,
  Bell,
  Monitor,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLayout } from "@/contexts/LayoutContext";
import userAvatar from "@/assets/user-avatar.jpg";

interface HorizontalLayoutProps {
  children: ReactNode;
}

const mainNavItems = [
  { name: "Dashboard", path: "/", icon: Home },
  { name: "Métricas", path: "/metrics", icon: BarChart3 },
  { name: "Usuários", path: "/users", icon: Users },
  { name: "Confirmação", path: "/confirmation", icon: FileText },
  { name: "Perfil", path: "/profile", icon: User },
  { name: "Sistema", path: "/design-system", icon: Settings },
];

const componentPages = [
  { name: "Botões", path: "/components/buttons", icon: Package },
  { name: "Cards", path: "/components/cards", icon: Package },
  { name: "Formulários", path: "/components/forms", icon: Package },
  { name: "Tabelas", path: "/components/tables", icon: Package },
  { name: "Alertas", path: "/components/alerts", icon: Package },
  { name: "Diálogos", path: "/components/dialogs", icon: Package },
  { name: "Gráficos", path: "/components/charts", icon: Package },
];

const examplePages = [
  { name: "Em breve", path: "#", icon: Home },
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
    const currentPage = [...mainNavItems, ...componentPages, ...examplePages].find(
      (item) => item.path === location.pathname
    );
    return currentPage?.name || "Dashboard";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">SaaS App</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              ))}

              {/* Components Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className={`flex items-center px-3 py-2 text-sm font-medium ${
                      isActive("/components")
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <Package className="w-4 h-4 mr-2" />
                    Componentes
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 bg-card border border-border shadow-lg z-50">
                  {componentPages.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.path} className="flex items-center">
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Examples Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className={`flex items-center px-3 py-2 text-sm font-medium ${
                      isActive("/examples")
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Exemplos
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 bg-card border border-border shadow-lg z-50">
                  {examplePages.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.path} className="flex items-center">
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Layout Toggle */}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleLayout}
                className="hidden lg:flex items-center space-x-2"
              >
                <Monitor className="h-4 w-4" />
                <span>Layout Vertical</span>
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative hidden sm:flex">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full"></span>
              </Button>

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
                <DropdownMenuContent className="w-56 bg-card border border-border shadow-lg z-50" align="end" forceMount>
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
                className="lg:hidden"
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
          <div className="lg:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Components */}
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-muted-foreground mb-2">Componentes</p>
                <div className="space-y-1 ml-4">
                  {componentPages.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive(item.path)
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Examples */}
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-muted-foreground mb-2">Exemplos</p>
                <div className="space-y-1 ml-4">
                  {examplePages.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive(item.path)
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Layout Toggle */}
              <Button 
                variant="ghost" 
                onClick={toggleLayout}
                className="flex items-center w-full justify-start px-3 py-2 text-base font-medium"
              >
                <Monitor className="w-5 h-5 mr-3" />
                Layout Vertical
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Page Header */}
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-foreground">{getCurrentPageName()}</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
}