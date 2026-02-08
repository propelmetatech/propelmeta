import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircle, Globe, Search } from 'lucide-react';
import { FaqAccordion } from '@/components/FaqAccordion';
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-4">
                High-Performance Websites Built to Rank and Convert
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mb-6">
                Website Design, Development & SEO Optimization Services
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                At PropelMeta Tech, we provide complete website design,
                development, and SEO optimization services to help businesses
                establish a strong online presence and attract more customers
                through search engines.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-4">
                Website Design & Development Services
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Your website is often the first impression of your brand. We
                build professional websites that look clean, load fast, and
                function smoothly across all devices.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                    What's Included in Our Website Service
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {websiteIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                    What You Get
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {websiteBenefits.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70 ring-1 ring-white/60">
                <img
                  src={websiteServiceImage}
                  alt="Website design and development"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="seo-website-optimization"
        className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-4">
                SEO & Website Optimization Services
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Improve visibility, rankings, and local reach so customers can
                find your business faster.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Search className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Our SEO & Optimization Services Include
                    </h3>
                  </div>
                  <ul className="space-y-3 text-slate-600">
                    {seoIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                    Benefits of SEO Optimization
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {seoBenefits.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70 ring-1 ring-white/60">
                <img
                  src={seoServiceImage}
                  alt="SEO and website optimization"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-our-website-seo-works"
        className="py-20 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <div className="rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                  How Our Website & SEO Service Works
                </h3>
                <ol className="space-y-4 text-slate-600">
                  {processSteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-slate-600 mt-6">
                  Everything is handled by our team - from design to optimization.
                </p>
              </div>
              <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                  Who This Service Is Ideal For
                </h3>
                <ul className="space-y-3 text-slate-600">
                  {audiences.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                  Why Choose PropelMeta Tech?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                  {reasons.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70 ring-1 ring-white/60">
                <img
                  src={websiteProcessImage}
                  alt="Website and SEO process"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
            Get Your Website Built & Optimized Today
          </h2>
          <p className="text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto">
            Let us build a professional website that attracts traffic and
            converts visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <Button
                size="lg"
                variant="secondary"
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl bg-white text-indigo-700"
              >
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl border-white/80 text-white"
              >
                Contact PropelMeta Tech to Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}




