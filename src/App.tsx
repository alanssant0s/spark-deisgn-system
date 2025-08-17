import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutProvider as LayoutContextProvider } from "@/contexts/LayoutContext";
import { LayoutProvider } from "@/components/layouts/LayoutProvider";
import Index from "./pages/Index";
import Components from "./pages/Components";
import DesignSystem from "./pages/DesignSystem";
import Metrics from "./pages/Metrics";
import NotFound from "./pages/NotFound";
import Confirmation from "./pages/Confirmation";
import UserProfile from "./pages/UserProfile";
import UserManagement from "./pages/UserManagement";
import AlertsPage from "./pages/components/AlertsPage";
import ButtonsPage from "./pages/components/ButtonsPage";
import CardsPage from "./pages/components/CardsPage";
import DialogsPage from "./pages/components/DialogsPage";
import ChartsPage from "./pages/components/ChartsPage";
import FormsPage from "./pages/components/FormsPage";
import TablesPage from "./pages/components/TablesPage";
import DashboardPage from "./pages/examples/DashboardPage";
import ProjectsPage from "./pages/examples/ProjectsPage";
import AnalyticsPage from "./pages/examples/AnalyticsPage";
import TeamPage from "./pages/examples/TeamPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LayoutContextProvider>
          <LayoutProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/components" element={<Components />} />
              <Route path="/components/alerts" element={<AlertsPage />} />
              <Route path="/components/buttons" element={<ButtonsPage />} />
              <Route path="/components/cards" element={<CardsPage />} />
              <Route path="/components/dialogs" element={<DialogsPage />} />
              <Route path="/components/charts" element={<ChartsPage />} />
              <Route path="/components/forms" element={<FormsPage />} />
              <Route path="/components/tables" element={<TablesPage />} />
              <Route path="/examples/dashboard" element={<DashboardPage />} />
              <Route path="/examples/projects" element={<ProjectsPage />} />
              <Route path="/examples/analytics" element={<AnalyticsPage />} />
              <Route path="/examples/team" element={<TeamPage />} />
              <Route path="/design-system" element={<DesignSystem />} />
              <Route path="/metrics" element={<Metrics />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/users" element={<UserManagement />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LayoutProvider>
        </LayoutContextProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
