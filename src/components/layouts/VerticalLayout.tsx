import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  Settings,
  User,
  BarChart3,
  FileText,
  Menu,
  Users,
  Package,
  FolderKanban,
  TrendingUp,
  UserCheck,
  PieChart,
  LogOut,
  Bell,
  Monitor,
  Smartphone
} from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLayout } from "@/contexts/LayoutContext";
import userAvatar from "@/assets/user-avatar.jpg";

interface VerticalLayoutProps {
  children: ReactNode;
}

const mainNavItems = [
  { name: "Dashboard", path: "/", icon: Home },
  { name: "Métricas", path: "/metrics", icon: BarChart3 },
  { name: "Usuários", path: "/users", icon: Users },
  { name: "Confirmação", path: "/confirmation", icon: FileText },
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

export function VerticalLayout({ children }: VerticalLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const { toggleLayout } = useLayout();
  
  // Abrir seções por padrão se a rota atual estiver nelas
  const [isComponentsOpen, setIsComponentsOpen] = useState<boolean>(true);
  const [isExamplesOpen, setIsExamplesOpen] = useState<boolean>(true);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-card border-r border-border transition-all duration-300 flex flex-col shadow-sm`}
      >
        {/* Logo/Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {isSidebarOpen ? (
              <h1 className="text-xl font-bold text-primary">SaaS App</h1>
            ) : (
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          <ul className="space-y-2">
            {mainNavItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors group ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {isSidebarOpen && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            ))}

            {/* Components Section */}
            <li>
              <Collapsible open={isComponentsOpen} onOpenChange={setIsComponentsOpen}>
                <CollapsibleTrigger asChild>
                  <button
                    className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors group ${
                      isActive("/components")
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <Package className="w-5 h-5 flex-shrink-0" />
                    {isSidebarOpen && (
                      <>
                        <span className="ml-3">Componentes</span>
                        <PieChart className={`w-4 h-4 ml-auto transition-transform ${isComponentsOpen ? "rotate-90" : ""}`} />
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
                        className={`flex items-center px-3 py-2 rounded-lg transition-colors text-sm ${
                          isActive(item.path)
                            ? "bg-primary text-primary-foreground"
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

            {/* Examples Section */}
            <li>
              <Collapsible open={isExamplesOpen} onOpenChange={setIsExamplesOpen}>
                <CollapsibleTrigger asChild>
                  <button
                    className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors group ${
                      isActive("/examples")
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <TrendingUp className="w-5 h-5 flex-shrink-0" />
                    {isSidebarOpen && (
                      <>
                        <span className="ml-3">Exemplos</span>
                        <PieChart className={`w-4 h-4 ml-auto transition-transform ${isExamplesOpen ? "rotate-90" : ""}`} />
                      </>
                    )}
                  </button>
                </CollapsibleTrigger>
                {isSidebarOpen && (
                  <CollapsibleContent className="ml-4 mt-1 space-y-1">
                    {examplePages.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center px-3 py-2 rounded-lg transition-colors text-sm ${
                          isActive(item.path)
                            ? "bg-primary text-primary-foreground"
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
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <h2 className="text-lg font-semibold text-foreground">
              {(() => {
                const currentPage = [...mainNavItems, ...componentPages, ...examplePages].find(
                  (item) => item.path === location.pathname
                );
                return currentPage?.name || "Dashboard";
              })()}
            </h2>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLayout}
              className="flex items-center space-x-2"
            >
              <Monitor className="h-4 w-4" />
              <span className="hidden sm:inline">Layout Horizontal</span>
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full"></span>
            </Button>

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