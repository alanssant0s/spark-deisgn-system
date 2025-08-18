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

import ModalsPage from "./pages/components/ModalsPage";
import TablesPage from "./pages/components/TablesPage";
import DataTablePage from "./pages/components/DataTablePage";
import ChartsPage from "./pages/components/ChartsPage";
import LogoProcessorPage from "./pages/LogoProcessor";
import ErrorPages from "./pages/ErrorPages";
import AuthPages from "./pages/AuthPages";
import LibraryPlayground from "./pages/LibraryPlayground";
import BreadcrumbDemoPage from "./pages/components/BreadcrumbPage";
import EcommercePage from "./pages/breadcrumb-demo/EcommercePage";
import CategoriesPage from "./pages/breadcrumb-demo/CategoriesPage";
import ElectronicsPage from "./pages/breadcrumb-demo/ElectronicsPage";
import SmartphonesPage from "./pages/breadcrumb-demo/SmartphonesPage";
import DeepLevel1 from "./pages/breadcrumb-demo/DeepLevel1";
import DeepLevel2 from "./pages/breadcrumb-demo/DeepLevel2";
import DeepLevel3 from "./pages/breadcrumb-demo/DeepLevel3";
import DeepLevel4 from "./pages/breadcrumb-demo/DeepLevel4";

// Error Pages
import NotFoundError from "./pages/errors/NotFound";
import ServerError from "./pages/errors/ServerError";
import Forbidden from "./pages/errors/Forbidden";
import Maintenance from "./pages/errors/Maintenance";
import ErrorBoundary from "./components/errors/ErrorBoundary";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import { AuthProvider } from "./contexts/AuthContext";

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
        <AuthProvider>
          <NotificationProvider>
            <LayoutContextProvider>
              <ErrorBoundary>
                <Routes>
                  {/* Auth Routes (without layout) */}
                  <Route path="/auth/login" element={<Login />} />
                  <Route path="/auth/register" element={<Register />} />
                  <Route path="/auth/reset-password" element={<ResetPassword />} />

                  {/* App Routes (with layout) */}
                  <Route path="/*" element={
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

                        <Route path="/components/modals" element={<ModalsPage />} />
                        <Route path="/components/tables" element={<TablesPage />} />
                        <Route path="/components/datatable" element={<DataTablePage />} />
                        <Route path="/components/charts" element={<ChartsPage />} />
                        <Route path="/components/breadcrumb" element={<BreadcrumbDemoPage />} />

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
                        <Route path="/auth-pages" element={<AuthPages />} />
                        <Route path="/playground" element={<LibraryPlayground />} />

                        {/* Breadcrumb Demo Pages */}
                        <Route path="/breadcrumb-demo/ecommerce" element={<EcommercePage />} />
                        <Route path="/breadcrumb-demo/ecommerce/categories" element={<CategoriesPage />} />
                        <Route path="/breadcrumb-demo/ecommerce/categories/electronics" element={<ElectronicsPage />} />
                        <Route path="/breadcrumb-demo/ecommerce/categories/electronics/smartphones" element={<SmartphonesPage />} />

                        {/* Deep Navigation Test Routes */}
                        <Route path="/breadcrumb-demo/deep/level1" element={<DeepLevel1 />} />
                        <Route path="/breadcrumb-demo/deep/level1/level2" element={<DeepLevel2 />} />
                        <Route path="/breadcrumb-demo/deep/level1/level2/level3" element={<DeepLevel3 />} />
                        <Route path="/breadcrumb-demo/deep/level1/level2/level3/level4" element={<DeepLevel4 />} />

                        {/* Error Pages */}
                        <Route path="/errors/404" element={<NotFoundError />} />
                        <Route path="/errors/500" element={<ServerError />} />
                        <Route path="/errors/403" element={<Forbidden />} />
                        <Route path="/errors/maintenance" element={<Maintenance />} />

                        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                        <Route path="*" element={<NotFoundError />} />
                      </Routes>
                    </LayoutProvider>
                  } />
                </Routes>
              </ErrorBoundary>
            </LayoutContextProvider>
          </NotificationProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
