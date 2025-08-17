import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Palette, 
  Component, 
  BarChart3, 
  Settings,
  Menu,
  X,
  Users,
  User,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Calendar,
  CreditCard,
  Table,
  ToggleLeft,
  FileText,
  MessageSquare,
  FolderKanban,
  TrendingUp,
  UserCheck,
  PieChart
} from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface SaasLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { 
    name: "Exemplos", 
    icon: FolderKanban,
    children: [
      { name: "Dashboard", href: "/examples/dashboard" },
      { name: "Projetos", href: "/examples/projects" },
      { name: "Analytics", href: "/examples/analytics" },
      { name: "Equipe", href: "/examples/team" },
    ]
  },
  { 
    name: "Componentes UI", 
    icon: Component,
    children: [
      { name: "Visão Geral", href: "/components" },
      { name: "Alerts", href: "/components/alerts" },
      { name: "Buttons", href: "/components/buttons" },
      { name: "Cards", href: "/components/cards" },
      { name: "Dialogs", href: "/components/dialogs" },
      { name: "Forms", href: "/components/forms" },
      { name: "Tables", href: "/components/tables" },
      { name: "Charts", href: "/components/charts" },
    ]
  },
  { name: "Design System", href: "/design-system", icon: Palette },
  { name: "Métricas", href: "/metrics", icon: BarChart3 },
  { name: "Gestão de Usuários", href: "/users", icon: Users },
  { name: "Perfil", href: "/profile", icon: User },
  { name: "Confirmação", href: "/confirmation", icon: CheckCircle },
  { name: "Configurações", href: "/settings", icon: Settings },
];

export const SaasLayout = ({ children }: SaasLayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(true);
  const [examplesOpen, setExamplesOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full bg-card border-r border-card-border transform transition-all duration-300 lg:translate-x-0 flex flex-col",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        sidebarCollapsed ? "lg:w-16" : "w-64"
      )}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-card-border">
          {!sidebarCollapsed && (
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SaaS Design
            </h1>
          )}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:flex"
            >
              {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent"
             style={{ 
               scrollbarWidth: 'thin',
               scrollbarColor: 'hsl(var(--muted)) transparent'
             }}>
          {navigation.map((item) => {
            if (item.children) {
              const hasActiveChild = item.children.some(child => location.pathname === child.href);
              const isComponentsPage = item.name === "Componentes UI" && location.pathname.startsWith('/components');
              const isExamplesPage = item.name === "Exemplos" && location.pathname.startsWith('/examples');
              const isOpen = item.name === "Componentes UI" ? componentsOpen : examplesOpen;
              const setOpen = item.name === "Componentes UI" ? setComponentsOpen : setExamplesOpen;
              
              return (
                <Collapsible 
                  key={item.name} 
                  open={isOpen && !sidebarCollapsed} 
                  onOpenChange={setOpen}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start px-3 py-2.5 text-sm font-medium transition-all duration-200",
                        "hover:bg-muted group",
                        (isComponentsPage || isExamplesPage)
                          ? "bg-primary text-primary-foreground shadow-sm" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <item.icon className={cn(
                        "h-5 w-5 transition-transform duration-200 group-hover:scale-110",
                        sidebarCollapsed ? "mr-0" : "mr-3"
                      )} />
                      {!sidebarCollapsed && (
                        <>
                          <span className="flex-1 text-left">{item.name}</span>
                          <ChevronDown className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isOpen ? "rotate-180" : ""
                          )} />
                        </>
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 mt-1">
                    {item.children.map((child) => {
                      const isActive = location.pathname === child.href;
                      return (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={cn(
                            "flex items-center gap-3 px-6 py-2 rounded-lg text-sm transition-all duration-200",
                            "hover:bg-muted",
                            isActive 
                              ? "bg-accent text-accent-foreground border-l-4 border-primary" 
                              : "text-muted-foreground hover:text-foreground"
                          )}
                          onClick={() => setSidebarOpen(false)}
                        >
                          {child.name}
                        </Link>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>
              );
            }

            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  "hover:bg-muted group",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className={cn(
                  "h-5 w-5 transition-transform duration-200 group-hover:scale-110",
                  isActive ? "text-primary-foreground" : "",
                  sidebarCollapsed ? "mr-0" : ""
                )} />
                {!sidebarCollapsed && item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className={cn(
        "min-h-screen transition-all duration-300",
        sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
      )}>
        {/* Header */}
        <header className="bg-card border-b border-card-border px-4 lg:px-6 h-16 flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg mr-4"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-foreground">
              {(() => {
                // Find current page name including nested routes
                for (const item of navigation) {
                  if (item.href === location.pathname) {
                    return item.name;
                  }
                  if (item.children) {
                    const child = item.children.find(c => c.href === location.pathname);
                    if (child) {
                      return child.name;
                    }
                  }
                }
                // Special cases for example pages
                if (location.pathname.startsWith('/examples/')) {
                  const pageMap: { [key: string]: string } = {
                    '/examples/dashboard': 'Dashboard Exemplo',
                    '/examples/projects': 'Projetos Exemplo',
                    '/examples/analytics': 'Analytics Exemplo',
                    '/examples/team': 'Equipe Exemplo'
                  };
                  return pageMap[location.pathname] || 'Exemplo';
                }
                return "Dashboard";
              })()}
            </h2>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};