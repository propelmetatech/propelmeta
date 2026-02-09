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
const BookCalendar = lazy(() => import('@/pages/BookCalendar'));
const TermsAndConditions = lazy(() => import('@/pages/TermsAndConditions'));
// Service Pages
const WebsiteBuilder = lazy(() => import('@/pages/services/WebsiteBuilder'));
const MarketingAutomation = lazy(
  () => import('@/pages/services/MarketingAutomation')
);
const MobileApps = lazy(() => import('@/pages/services/MobileApps'));
const OnlineSales = lazy(() => import('@/pages/services/OnlineSales'));
const SocialMediaManagement = lazy(
  () => import('@/pages/services/SocialMediaManagement')
);
const ContentCreation = lazy(() => import('@/pages/services/ContentCreation'));
const WebAppDevelopment = lazy(
  () => import('@/pages/services/WebAppDevelopment')
);
const SeoPaidAdvertising = lazy(
  () => import('@/pages/services/SeoPaidAdvertising')
);
const AutomationAI = lazy(() => import('@/pages/services/AutomationAI'));
const OnlineSupport = lazy(() => import('@/pages/services/OnlineSupport'));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/about-us" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/book-calendar" component={BookCalendar} />
      <Route path="/demo" component={Demo} />
      <Route
        path="/terms-and-conditions"
        component={TermsAndConditions}
      />
      {/* Service Routes */}
      <Route path="/services/website-builder" component={WebsiteBuilder} />
      <Route
        path="/services/marketing-automation"
        component={MarketingAutomation}
      />
      <Route path="/services/mobile-apps" component={MobileApps} />
      <Route path="/services/online-sales" component={OnlineSales} />
      <Route
        path="/services/social-media-management"
        component={SocialMediaManagement}
      />
      <Route path="/services/content-creation" component={ContentCreation} />
      <Route
        path="/services/web-app-development"
        component={WebAppDevelopment}
      />
      <Route
        path="/services/seo-paid-advertising"
        component={SeoPaidAdvertising}
      />
      <Route path="/services/automation-ai" component={AutomationAI} />
      <Route path="/services/online-support" component={OnlineSupport} />
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
