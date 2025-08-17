import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LayoutSettings } from "@/components/LayoutSettings";
import { NotificationCenter } from "@/components/notifications/NotificationCenter";
import { Link, useLocation } from "react-router-dom";
import { useLayout } from "@/contexts/LayoutContext";
import { User, Settings, LogOut } from "lucide-react";
import userAvatar from "@/assets/user-avatar.jpg";
import { cn } from "@/lib/utils";

interface SidebarLayoutProps {
  children: ReactNode;
}

const allPages = [
  { name: "Dashboard", path: "/" },
  { name: "Notificações", path: "/notifications" },
  { name: "Processador Logo", path: "/logo-processor" },
  { name: "Analytics", path: "/saas/analytics" },
  { name: "Clientes", path: "/saas/customers" },
  { name: "Pedidos", path: "/saas/orders" },
  { name: "Produtos", path: "/saas/products" },
  { name: "Métricas", path: "/metrics" },
  { name: "Usuários", path: "/users" },
  { name: "Confirmação", path: "/confirmation" },
  { name: "Sistema", path: "/design-system" },
  { name: "Botões", path: "/components/buttons" },
  { name: "Cards", path: "/components/cards" },
  { name: "Formulários", path: "/components/forms" },
  { name: "Date Picker", path: "/components/datepicker" },
  { name: "Tabelas", path: "/components/tables" },
  { name: "Alertas", path: "/components/alerts" },
  { name: "Diálogos", path: "/components/dialogs" },
  { name: "Gráficos", path: "/components/charts" },
];

export function SidebarLayout({ children }: SidebarLayoutProps) {
  const location = useLocation();
  const { sidebarTheme } = useLayout();

  const getCurrentPageName = () => {
    const currentPage = allPages.find((page) => page.path === location.pathname);
    return currentPage?.name || "Dashboard";
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className={cn(
            "h-16 border-b flex items-center justify-between px-6 shadow-sm",
            sidebarTheme === 'dark' 
              ? "bg-slate-900 border-slate-800 text-slate-100" 
              : "bg-card border-border"
          )}>
            <div className="flex items-center space-x-4">
              <SidebarTrigger className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors" />
              
              <h2 className="text-lg font-semibold">
                {getCurrentPageName()}
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

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6 bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}