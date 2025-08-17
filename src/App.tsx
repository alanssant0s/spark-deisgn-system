import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutProvider as LayoutContextProvider } from "@/contexts/LayoutContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { LayoutProvider } from "@/components/layouts/LayoutProvider";
import Index from "./pages/Index";
import Components from "./pages/Components";
import DesignSystem from "./pages/DesignSystem";
import Metrics from "./pages/Metrics";
import NotFound from "./pages/NotFound";
import Confirmation from "./pages/Confirmation";
import UserManagement from "./pages/UserManagement";
import NotificationsPage from "./pages/NotificationsPage";
import ButtonsPage from "./pages/components/ButtonsPage";
import CardsPage from "./pages/components/CardsPage";
import AlertsPage from "./pages/components/AlertsPage";
import FormsPage from "./pages/components/FormsPage";
import DialogsPage from "./pages/components/DialogsPage";
import TablesPage from "./pages/components/TablesPage";
import ChartsPage from "./pages/components/ChartsPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NotificationProvider>
          <LayoutContextProvider>
            <LayoutProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/components" element={<Components />} />
              <Route path="/components/buttons" element={<ButtonsPage />} />
              <Route path="/components/cards" element={<CardsPage />} />
              <Route path="/components/alerts" element={<AlertsPage />} />
              <Route path="/components/forms" element={<FormsPage />} />
              <Route path="/components/dialogs" element={<DialogsPage />} />
              <Route path="/components/tables" element={<TablesPage />} />
              <Route path="/components/charts" element={<ChartsPage />} />
              <Route path="/design-system" element={<DesignSystem />} />
                <Route path="/metrics" element={<Metrics />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/users" element={<UserManagement />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </LayoutProvider>
          </LayoutContextProvider>
        </NotificationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
