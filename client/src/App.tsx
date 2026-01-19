import { Suspense, lazy } from 'react';
import { Switch, Route } from 'wouter';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

const NotFound = lazy(() => import('@/pages/not-found'));
const Home = lazy(() => import('@/pages/Home'));
const Products = lazy(() => import('@/pages/Products'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const About = lazy(() => import('@/pages/About'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Contact = lazy(() => import('@/pages/Contact'));
const Demo = lazy(() => import('@/pages/Demo'));
// Service Pages
const WebsiteBuilder = lazy(() => import('@/pages/services/WebsiteBuilder'));
const MarketingAutomation = lazy(
  () => import('@/pages/services/MarketingAutomation')
);
const MobileApps = lazy(() => import('@/pages/services/MobileApps'));
const OnlineSales = lazy(() => import('@/pages/services/OnlineSales'));

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
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center text-slate-500">
              Loading...
            </div>
          }
        >
          <Router />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
