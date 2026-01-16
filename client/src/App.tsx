import { Switch, Route } from 'wouter';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Pricing from '@/pages/Pricing';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import Demo from '@/pages/Demo';
// Service Pages
import WebsiteBuilder from '@/pages/services/WebsiteBuilder';
import MarketingAutomation from '@/pages/services/MarketingAutomation';
import MobileApps from '@/pages/services/MobileApps';
import OnlineSales from '@/pages/services/OnlineSales';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/demo" component={Demo} />
      {/* Service Routes */}
      <Route path="/services/website-builder" component={WebsiteBuilder} />
      <Route
        path="/services/marketing-automation"
        component={MarketingAutomation}
      />
      <Route path="/services/mobile-apps" component={MobileApps} />
      <Route path="/services/online-sales" component={OnlineSales} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
