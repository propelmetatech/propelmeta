import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { ServiceHeroBanner } from '@/components/ServiceHeroBanner';
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
      answer:
        'Yes, basic on-page SEO and website optimization are included.',
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
      <section className="relative overflow-hidden pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40">
              <ServiceHeroBanner />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-indigo-200/60 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-600 mb-6 shadow-sm shadow-indigo-200/40">
                <Globe className="h-4 w-4 mr-2" />
                Website Design, Development & SEO Optimization
              </div>
              <p className="font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-4">
                High-Performance Websites Built to Rank and Convert
              </p>
              <h1 className="font-bold font-display text-slate-900 mb-6">
                Website Design, Development & SEO Optimization Services
              </h1>
              <p className="text-slate-600 mb-6">
                At PropelMeta Tech, we provide complete website design,
                development, and SEO optimization services to help businesses
                establish a strong online presence and attract more customers
                through search engines.
              </p>
              <p className="text-slate-600 mb-8">
                We design modern, mobile-friendly websites and optimize them for
                visibility, speed, and performance - ensuring your website
                works as a powerful business tool.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/pricing">
                  <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl"
                  >
                    Contact PropelMeta Tech
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                {['Modern design', 'SEO-ready build', 'Mobile friendly'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70 ring-1 ring-white/60">
                <img
                  src={websiteServiceImage}
                  alt="Website development"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="website-design-development"
        className="py-20 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              Website Design & Development Services
            </h2>
            <p className="mt-4 text-slate-600">
              Your website is often the first impression of your brand. We
              build professional websites that look clean, load fast, and
              function smoothly across all devices.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-10">
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
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

            <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
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
        className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              SEO & Website Optimization Services
            </h2>
            <p className="mt-4 text-slate-600">
              Improve visibility, rankings, and local reach so customers can
              find your business faster.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-10">
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
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

            <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
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
        className="py-20 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              How Our Website & SEO Service Works
            </h2>
            <p className="mt-4 text-slate-600">
              A clear, step-by-step process with full delivery support from
              planning to launch and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
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

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
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

      <section id="faqs" className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
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






