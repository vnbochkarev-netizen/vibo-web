import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/site/LanguageProvider";
import HomePage from "@/pages/home/Index";
import ProductPage from "@/pages/product/Index";
import BenchmarksPage from "@/pages/benchmarks/Index";
import SecurityPage from "@/pages/security/Index";
import PricingPage from "@/pages/pricing/Index";
import NotFound from "@/pages/not-found/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/benchmarks" element={<BenchmarksPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
