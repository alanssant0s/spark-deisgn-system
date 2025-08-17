import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
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
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ButtonsPage from "./pages/components/ButtonsPage";
import CardsPage from "./pages/components/CardsPage";
import AlertsPage from "./pages/components/AlertsPage";
import FormsPage from "./pages/components/FormsPage";
import DatePickerPage from "./pages/components/DatePickerPage";
import DialogsPage from "./pages/components/DialogsPage";
import TablesPage from "./pages/components/TablesPage";
import DataTablePage from "./pages/components/DataTablePage";
import ChartsPage from "./pages/components/ChartsPage";
import LogoProcessorPage from "./pages/LogoProcessor";
import ErrorPages from "./pages/ErrorPages";

// Error Pages
import NotFoundError from "./pages/errors/NotFound";
import ServerError from "./pages/errors/ServerError";
import Forbidden from "./pages/errors/Forbidden";
import Maintenance from "./pages/errors/Maintenance";
import ErrorBoundary from "./components/errors/ErrorBoundary";

// Lazy load SaaS pages
const Analytics = lazy(() => import("./pages/saas/Analytics"));
const Customers = lazy(() => import("./pages/saas/Customers"));
const Orders = lazy(() => import("./pages/saas/Orders"));
const Products = lazy(() => import("./pages/saas/Products"));


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NotificationProvider>
          <LayoutContextProvider>
            <ErrorBoundary>
              <LayoutProvider>
                <Routes>
                  <Route path="/" element={<Index />} />

                  {/* SaaS Pages */}
                  <Route path="/saas/analytics" element={<Suspense fallback={<div>Carregando...</div>}><Analytics /></Suspense>} />
                  <Route path="/saas/customers" element={<Suspense fallback={<div>Carregando...</div>}><Customers /></Suspense>} />
                  <Route path="/saas/orders" element={<Suspense fallback={<div>Carregando...</div>}><Orders /></Suspense>} />
                  <Route path="/saas/products" element={<Suspense fallback={<div>Carregando...</div>}><Products /></Suspense>} />

                  {/* Component Pages */}
                  <Route path="/components" element={<Components />} />
                  <Route path="/components/buttons" element={<ButtonsPage />} />
                  <Route path="/components/cards" element={<CardsPage />} />
                  <Route path="/components/alerts" element={<AlertsPage />} />
                  <Route path="/components/forms" element={<FormsPage />} />
                  <Route path="/components/datepicker" element={<DatePickerPage />} />
                  <Route path="/components/dialogs" element={<DialogsPage />} />
                  <Route path="/components/tables" element={<TablesPage />} />
                  <Route path="/components/datatable" element={<DataTablePage />} />
                  <Route path="/components/charts" element={<ChartsPage />} />

                  {/* Example Pages */}
                  <Route path="/design-system" element={<DesignSystem />} />
                  <Route path="/metrics" element={<Metrics />} />
                  <Route path="/confirmation" element={<Confirmation />} />
                  <Route path="/notifications" element={<NotificationsPage />} />
                  <Route path="/users" element={<UserManagement />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/logo-processor" element={<LogoProcessorPage />} />
                  <Route path="/error-pages" element={<ErrorPages />} />

                  {/* Error Pages */}
                  <Route path="/errors/404" element={<NotFoundError />} />
                  <Route path="/errors/500" element={<ServerError />} />
                  <Route path="/errors/403" element={<Forbidden />} />
                  <Route path="/errors/maintenance" element={<Maintenance />} />

                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFoundError />} />
                </Routes>
              </LayoutProvider>
            </ErrorBoundary>
          </LayoutContextProvider>
        </NotificationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
