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
import UserManagement from "./pages/UserManagement";


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
              
              <Route path="/design-system" element={<DesignSystem />} />
              <Route path="/metrics" element={<Metrics />} />
              <Route path="/confirmation" element={<Confirmation />} />
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
