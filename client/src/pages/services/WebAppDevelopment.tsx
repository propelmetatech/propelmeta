import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { EarlyAccessSection } from '@/components/EarlyAccessSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import {
  CheckCircle,
  Code2,
  Gauge,
  Search,
  Shield,
  Sparkles,
} from 'lucide-react';
import { FaqAccordion } from '@/components/FaqAccordion';
import {
  ServiceImagePanel,
  ServiceInfoCard,
  ServiceStepsCard,
} from '@/components/ServiceSectionBlocks';
import websiteDesignServiceImage from '@/assests/Website Design & Development Services.png';
import websiteDesignResultsImage from '@/assests/Website Design & Development Services_1.png';
import seoServiceImage from '@/assests/SEO & Website Optimization Services.png';
import seoResultsImage from '@/assests/SEO & Website Optimization Services_1.png';
import heroBannerImage from '@/assests/bannerImageWeb Site.png';

export default function WebAppDevelopment() {
  const websiteDesignIncludes = [
    'Custom website design aligned to your brand',
    'Responsive development for mobile, tablet, and desktop',
    'Fast-loading pages with performance optimization',
    'Conversion-focused pages with lead capture sections',
    'CMS-ready structure for easy updates',
    'Technical setup with analytics integration',
  ];

  const websiteDesignBenefits = [
    'Professional first impression for your brand',
    'Higher inquiry and conversion rates',
    'Faster website performance across devices',
    'Scalable foundation for future growth',
  ];

  const seoIncludes = [
    'On-page SEO for titles, meta tags, and headings',
    'Keyword research based on your target market',
    'Technical SEO cleanup for crawlability and indexing',
    'Content optimization for local and service intent',
    'Core Web Vitals and page speed improvements',
    'Monthly SEO performance reporting',
  ];

  const seoBenefits = [
    'Improved visibility on Google search',
    'More qualified traffic from organic search',
    'Better rankings for service-related keywords',
    'Long-term, compounding lead generation',
  ];

  const processSteps = [
    'Business goals and competitor analysis',
    'Website design and development execution',
    'SEO setup and optimization deployment',
    'Performance tracking and continuous improvement',
  ];

  const audiences = [
    'Local businesses and service providers',
    'Restaurants, cafes, and hospitality brands',
    'E-commerce and product-based businesses',
    'Startups needing a strong digital foundation',
  ];

  const reasons = [
    'Design and SEO delivered by one team',
    'Custom strategy based on your business goals',
    'Transparent reporting and communication',
    'Scalable implementation for long-term growth',
    'Reliable support after launch',
  ];

  const faqs = [
    {
      question: 'Do you build websites from scratch?',
      answer:
        'Yes. Every website is custom-built to match your brand, business goals, and content requirements.',
    },
    {
      question: 'Can you optimize my existing website for SEO?',
      answer:
        'Yes. We can audit and optimize existing websites, including structure, speed, and on-page SEO improvements.',
    },
    {
      question: 'How long does it take to see SEO results?',
      answer:
        'Initial improvements can appear in a few weeks, while stronger ranking growth usually takes a few months depending on competition.',
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden pt-16 pb-10 min-h-[640px] bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 sm:pb-12 lg:min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBannerImage}
            alt="Website Design, Development and SEO Banner"
            className="h-full w-full object-cover object-[72%_center] sm:object-center lg:object-cover rounded-none lg:rounded-r-[3rem]"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/75 via-slate-900/62 to-slate-950/78 sm:from-slate-900/58 sm:via-slate-900/45 sm:to-slate-900/58 lg:hidden" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto lg:ml-[35px] max-w-7xl px-4 pr-12 sm:px-6 sm:pr-6 lg:px-8 lg:pr-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[640px] rounded-2xl bg-slate-900/30 px-4 py-7 backdrop-blur-[2px] sm:px-6 sm:py-8 lg:max-w-none lg:bg-transparent lg:px-0 lg:py-8 lg:pl-[30px] lg:pr-0 lg:-ml-10 lg:mr-6 lg:backdrop-blur-0"
            >
              <div className="inline-flex items-center rounded-full border border-white/40 bg-transparent px-4 py-2 text-sm font-medium text-white mb-6">
                <Code2 className="h-4 w-4 mr-2" />
                Website Design, Development and SEO
              </div>

              <p className="font-semibold uppercase tracking-[0.15em] text-white/90 mb-3 text-xs sm:text-sm">
                High-Performance Websites Built to Rank and Convert
              </p>

              <h1 className="font-bold font-display text-white mb-4 text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Website Design, Development and{' '}
                <span className="text-white">
                  SEO Services
                </span>
              </h1>

              <p className="text-white/90 mb-4 text-sm sm:text-base leading-relaxed">
                We design and develop conversion-focused websites, then optimize
                them for SEO so your business gets found, trusted, and chosen.
              </p>

              <p className="text-white/80 text-xs sm:text-sm mb-6">
                From strategy and design to technical setup and ranking
                improvements, our team manages the full website and SEO
                execution for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/pricing" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto sm:min-w-[220px] justify-center text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-xl shadow-blue-500/25 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto sm:min-w-[220px] justify-center text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl border-white/60 text-white hover:bg-white/10"
                  >
                    Contact PropelMeta Tech
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/85">
                {[
                  'Custom development',
                  'SEO-ready architecture',
                  'Performance optimized',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      <section
        id="website-design-development"
        className="py-12 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              Website Design and Development
            </h2>
            <p className="mt-4 text-slate-600">
              Modern, responsive websites built to present your brand
              professionally and drive real business outcomes.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="What Is Included"
                items={websiteDesignIncludes}
                icon={<Code2 className="h-6 w-6 text-blue-600" />}
              />
              <ServiceImagePanel
                src={websiteDesignServiceImage}
                alt="Website design and development service"
                overlayClassName="from-blue-500/10 to-indigo-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={websiteDesignResultsImage}
                alt="Website development results"
                overlayClassName="from-indigo-500/10 to-blue-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="Benefits of Our Website Development"
                items={websiteDesignBenefits}
                icon={<Gauge className="h-6 w-6 text-blue-600" />}
                className="lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="seo-website-optimization"
        className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              SEO and Website Optimization
            </h2>
            <p className="mt-4 text-slate-600">
              Search-focused optimization that improves rankings, speed, and
              visibility for high-intent traffic.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="Our SEO Services Include"
                items={seoIncludes}
                icon={<Search className="h-6 w-6 text-indigo-600" />}
              />
              <ServiceImagePanel
                src={seoServiceImage}
                alt="SEO and optimization service"
                overlayClassName="from-indigo-500/10 to-blue-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={seoResultsImage}
                alt="SEO growth outcomes"
                overlayClassName="from-blue-500/10 to-indigo-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="What You Get From SEO Optimization"
                items={seoBenefits}
                icon={<Sparkles className="h-6 w-6 text-indigo-600" />}
                className="lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-our-website-seo-works"
        className="py-12 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              How Our Website and SEO Service Works
            </h2>
            <p className="mt-4 text-slate-600">
              A practical process from strategy to delivery, with ongoing
              optimization for measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
            <ServiceStepsCard
              title="How Our Website and SEO Service Works"
              steps={processSteps}
              footerText="We manage implementation and optimization end-to-end so your team can focus on operations."
              stepBadgeClassName="bg-blue-600"
            />
            <ServiceImagePanel
              src={websiteDesignResultsImage}
              alt="Website and SEO process"
              overlayClassName="from-blue-500/10 to-indigo-500/10"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
            <ServiceInfoCard
              title="Who This Service Is Ideal For"
              items={audiences}
            />
            <ServiceInfoCard
              title="Why Choose PropelMeta Tech?"
              items={reasons}
              icon={<Shield className="h-6 w-6 text-blue-600" />}
              twoColumnItems
            />
          </div>
        </div>
      </section>

      <section
        id="faqs"
        className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-bold font-display text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <EarlyAccessSection source="service-web-app-development" />
    </Layout>
  );
}

