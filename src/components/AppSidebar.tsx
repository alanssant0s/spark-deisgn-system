import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useLayout } from "@/contexts/LayoutContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Home, Bell, Zap, BarChart3, Users, FileText, Package, Settings, 
  ChevronDown, TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainNavItems = [
  { name: "Dashboard", path: "/", icon: Home },
  { name: "Notificações", path: "/notifications", icon: Bell },
  { name: "Processador Logo", path: "/logo-processor", icon: Zap },
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

export function AppSidebar() {
  const { state } = useSidebar();
  const { sidebarTheme } = useLayout();
  const location = useLocation();
  const currentPath = location.pathname;

  const [isSaasOpen, setIsSaasOpen] = useState(
    saasPages.some(page => currentPath.startsWith(page.path))
  );
  const [isComponentsOpen, setIsComponentsOpen] = useState(
    componentPages.some(page => currentPath.startsWith(page.path))
  );

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  const getNavClassName = (path: string) => {
    const collapsed = state === "collapsed";
    const active = isActive(path);
    const baseClasses = "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200";
    
    if (collapsed) {
      return cn(baseClasses, 
        "justify-center w-10 h-10 p-0",
        active 
          ? "bg-primary text-primary-foreground shadow-md" 
          : sidebarTheme === 'dark'
            ? "text-slate-300 hover:bg-slate-800 hover:text-white"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      );
    }

    return cn(baseClasses,
      active 
        ? "bg-primary text-primary-foreground font-medium shadow-sm" 
        : sidebarTheme === 'dark'
          ? "text-slate-300 hover:bg-slate-800 hover:text-white"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    );
  };

  const collapsed = state === "collapsed";

  const sidebarClasses = cn(
    "border-r transition-all duration-300",
    collapsed ? "w-16" : "w-64",
    sidebarTheme === 'dark' 
      ? "bg-slate-900 border-slate-800 text-slate-100" 
      : "bg-card border-border"
  );

  return (
    <Sidebar className={sidebarClasses} collapsible="icon">
      <SidebarContent className="overflow-hidden">
        {/* Logo/Header */}
        <div className={cn(
          "p-4 border-b flex items-center justify-center",
          sidebarTheme === 'dark' ? 'border-slate-800' : 'border-border'
        )}>
          {collapsed ? (
            <img 
              src="/lovable-uploads/6c8cd236-d552-4a9b-8b41-7493ef7a762a.png" 
              alt="Spark" 
              className="w-8 h-8 object-contain"
            />
          ) : (
            <div className="flex items-center justify-center space-x-3">
              <img 
                src="/lovable-uploads/6c8cd236-d552-4a9b-8b41-7493ef7a762a.png" 
                alt="Spark Logo" 
                className="h-8 object-contain"
              />
              <img 
                src="/lovable-uploads/4ab292c0-f52e-45b0-8352-96cfa9636b16.png" 
                alt="Spark" 
                className="w-20 h-8 object-contain"
              />
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 p-2">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.path} 
                      className={getNavClassName(item.path)}
                      title={collapsed ? item.name : undefined}
                    >
                      <item.icon className={cn(
                        "flex-shrink-0",
                        collapsed ? "w-5 h-5" : "w-5 h-5"
                      )} />
                      {!collapsed && <span>{item.name}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* SaaS Section */}
        {!collapsed && (
          <SidebarGroup>
            <Collapsible open={isSaasOpen} onOpenChange={setIsSaasOpen}>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className={cn(
                  "flex items-center w-full px-3 py-2 rounded-lg transition-colors cursor-pointer",
                  saasPages.some(page => isActive(page.path))
                    ? "bg-primary text-primary-foreground"
                    : sidebarTheme === 'dark'
                      ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}>
                  <Zap className="w-5 h-5 flex-shrink-0" />
                  <span className="ml-3">SaaS</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 ml-auto transition-transform", 
                    isSaasOpen ? "rotate-180" : ""
                  )} />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu className="ml-4 mt-1 space-y-1">
                    {saasPages.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild>
                          <NavLink 
                            to={item.path} 
                            className={cn(
                              "flex items-center px-3 py-2 rounded-lg transition-colors text-sm",
                              isActive(item.path)
                                ? "bg-primary text-primary-foreground"
                                : sidebarTheme === 'dark'
                                  ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                          >
                            <item.icon className="w-4 h-4 flex-shrink-0" />
                            <span className="ml-3">{item.name}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        )}

        {/* Components Section */}
        {!collapsed && (
          <SidebarGroup>
            <Collapsible open={isComponentsOpen} onOpenChange={setIsComponentsOpen}>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className={cn(
                  "flex items-center w-full px-3 py-2 rounded-lg transition-colors cursor-pointer",
                  isActive("/components")
                    ? "bg-primary text-primary-foreground"
                    : sidebarTheme === 'dark'
                      ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}>
                  <Package className="w-5 h-5 flex-shrink-0" />
                  <span className="ml-3">Componentes</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 ml-auto transition-transform", 
                    isComponentsOpen ? "rotate-180" : ""
                  )} />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu className="ml-4 mt-1 space-y-1">
                    {componentPages.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild>
                          <NavLink 
                            to={item.path} 
                            className={cn(
                              "flex items-center px-3 py-2 rounded-lg transition-colors text-sm",
                              isActive(item.path)
                                ? "bg-primary text-primary-foreground"
                                : sidebarTheme === 'dark'
                                  ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                          >
                            <item.icon className="w-4 h-4 flex-shrink-0" />
                            <span className="ml-3">{item.name}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        )}

        {/* Collapsed state - show all main items as icons */}
        {collapsed && (
          <>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 p-2">
                  {saasPages.slice(0, 4).map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.path} 
                          className={getNavClassName(item.path)}
                          title={item.name}
                        >
                          <item.icon className="w-5 h-5 flex-shrink-0" />
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 p-2">
                  {componentPages.slice(0, 4).map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.path} 
                          className={getNavClassName(item.path)}
                          title={item.name}
                        >
                          <item.icon className="w-5 h-5 flex-shrink-0" />
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>
    </Sidebar>
  );
}