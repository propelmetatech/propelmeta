import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { EarlyAccessSection } from '@/components/EarlyAccessSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircle, Globe, Search } from 'lucide-react';
import { FaqAccordion } from '@/components/FaqAccordion';
import {
  ServiceImagePanel,
  ServiceInfoCard,
  ServiceStepsCard,
} from '@/components/ServiceSectionBlocks';
import websiteServiceImage from '@/assests/Website Design & Development Services.png';
import seoServiceImage from '@/assests/SEO & Website Optimization Services.png';
import websiteProcessImage from '@/assests/Website Design & Development Services_1.png';
import heroBannerImage from '@/assests/bannerimage2_websitedevelopment.png';

export default function WebAppDevelopment() {
  const websiteIncludes = [
    '1-3 page basic websites (optional)',
    '4-7 page modern, responsive websites',
    'Mobile-friendly and cross-browser design',
    'SEO-ready website structure',
    'Contact forms and lead capture setup',
    'Hosting and domain setup assistance',
    'Ongoing website maintenance and updates',
  ];

  const websiteBenefits = [
    'Professional and modern design',
    'Fast loading performance',
    'Easy navigation and user-friendly layout',
    'A website ready for search engine visibility',
  ];

  const seoIncludes = [
    'On-page SEO setup',
    'Keyword placement and content optimization',
    'Website structure optimization for search engines',
    'Google Business Profile optimization',
    'Local SEO support for service-based businesses and restaurants',
  ];

  const seoBenefits = [
    'Improved search engine rankings',
    'Increased website traffic',
    'More local inquiries and leads',
    'Long-term online visibility',
  ];

  const processSteps = [
    'Website review and requirement gathering',
    'Design and development implementation',
    'SEO setup and website optimization',
    'Testing, launch, and performance monitoring',
  ];

  const audiences = [
    'Restaurants and cafes',
    'Local businesses',
    'Service-based companies',
    'Startups and growing brands',
  ];

  const reasons = [
    'Complete website and SEO service under one roof',
    'Clean, modern design approach',
    'SEO-friendly development',
    'Transparent reporting',
    'Reliable post-launch support',
  ];

  const faqs = [
    {
      question: 'Is SEO included with the website?',
      answer: 'Yes, basic on-page SEO and website optimization are included.',
    },
    {
      question: 'Will the website be mobile-friendly?',
      answer: 'Absolutely. All websites are fully responsive across devices.',
    },
    {
      question: 'Do you provide ongoing SEO support?',
      answer:
        'Yes, monthly SEO and optimization services are available as add-ons.',
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden pt-16 pb-8 min-h-[450px] flex items-center">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBannerImage}
            alt="Website Design & Development Banner"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/60 to-indigo-900/70"></div>
        </div>

        {/* Decorative blur effects */}
        <div className="absolute inset-0 overflow-hidden z-[1]">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content - Centered */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center rounded-full border border-indigo-300/60 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white mb-2 shadow-lg">
              <Globe className="h-3.5 w-3.5 mr-1.5" />
              Website Design, Development & SEO Optimization
            </div>

            <p className="font-semibold uppercase tracking-[0.15em] text-indigo-300 mb-2 text-xs sm:text-sm">
              High-Performance Websites Built to Rank and Convert
            </p>

            <h1 className="font-bold font-display text-white mb-3 text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Website Design, Development & SEO Optimization Services
            </h1>

            <p className="text-slate-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              At PropelMeta Tech, we provide complete website design,
              development, and SEO optimization services to help businesses
              establish a strong online presence and attract more customers
              through search engines.
            </p>

            <p className="text-slate-200 text-xs sm:text-sm max-w-3xl mx-auto">
              We design modern, mobile-friendly websites and optimize them for
              visibility, speed, and performance - ensuring your website works
              as a powerful business tool.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-500/30"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 rounded-xl border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-xl"
                >
                  Contact PropelMeta Tech
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 justify-center text-xs sm:text-sm text-white pt-3">
              {['Modern design', 'SEO-ready build', 'Mobile friendly'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                  >
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="font-medium">{item}</span>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="website-design-development"
        className="py-12 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              Website Design & Development Services
            </h2>
            <p className="mt-4 text-slate-600">
              Your website is often the first impression of your brand. We build
              professional websites that look clean, load fast, and function
              smoothly across all devices.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="What's Included in Our Website Service"
                items={websiteIncludes}
              />
              <ServiceImagePanel
                src={websiteServiceImage}
                alt="Website design and development"
                overlayClassName="from-indigo-500/10 to-blue-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={websiteProcessImage}
                alt="Website design result preview"
                overlayClassName="from-blue-500/10 to-indigo-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="What You Get"
                items={websiteBenefits}
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
              SEO & Website Optimization Services
            </h2>
            <p className="mt-4 text-slate-600">
              Improve visibility, rankings, and local reach so customers can
              find your business faster.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="Our SEO & Optimization Services Include"
                items={seoIncludes}
                icon={<Search className="h-6 w-6 text-indigo-600" />}
              />
              <ServiceImagePanel
                src={seoServiceImage}
                alt="SEO and website optimization"
                overlayClassName="from-blue-500/10 to-indigo-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={websiteServiceImage}
                alt="Search optimized website preview"
                overlayClassName="from-indigo-500/10 to-blue-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="Benefits of SEO Optimization"
                items={seoBenefits}
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
              How Our Website & SEO Service Works
            </h2>
            <p className="mt-4 text-slate-600">
              A clear, step-by-step process with full delivery support from
              planning to launch and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
            <ServiceStepsCard
              title="How Our Website & SEO Service Works"
              steps={processSteps}
              footerText="Everything is handled by our team - from design to optimization."
              stepBadgeClassName="bg-indigo-600"
            />
            <ServiceImagePanel
              src={websiteProcessImage}
              alt="Website and SEO process"
              overlayClassName="from-indigo-500/10 to-blue-500/10"
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
              twoColumnItems
            />
          </div>
        </div>
      </section>

      <section
        id="faqs"
        className="py-12 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 scroll-mt-28"
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
