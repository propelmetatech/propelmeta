import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircle, Globe, Search } from 'lucide-react';
import { FaqAccordion } from '@/components/FaqAccordion';

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
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-indigo-200/50 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-600 mb-6">
                <Globe className="h-4 w-4 mr-2" />
                Website Design and SEO
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 mb-4">
                High-Performance Websites Built to Rank and Convert
              </p>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mb-6">
                Website Design, Development, and SEO Optimization Services
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                At PropelMeta Tech, we provide complete website design,
                development, and SEO optimization services to help businesses
                establish a strong online presence and attract more customers
                through search engines.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We design modern, mobile-friendly websites and optimize them for
                visibility, speed, and performance so your website works as a
                powerful business tool.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/pricing">
                  <Button size="lg" className="text-lg px-8 py-6 rounded-xl">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 rounded-xl"
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=900&fit=crop&crop=center"
                  alt="Website development"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
              Website Design and Development Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Modern, responsive, and business-ready websites that load fast and
              work across all devices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                What Is Included
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
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
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
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
              SEO and Website Optimization Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Improve visibility, rankings, and local reach so customers can
              find your business faster.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Search className="h-6 w-6 text-indigo-600" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Our SEO and Optimization Services Include
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
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
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
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                How Our Website and SEO Service Works
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
                Everything is handled by our team from design to optimization.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
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
          </div>

          <div className="mt-12 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
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
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-700">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px] text-center">
          <h2 className="text-4xl font-bold font-display text-white mb-6">
            Get Your Website Built and Optimized Today
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
                className="text-lg px-8 py-6 rounded-xl bg-white text-indigo-700"
              >
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl border-white/80 text-white"
              >
                Contact PropelMeta Tech Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
