import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircle, Headphones, Shield } from 'lucide-react';
import { FaqAccordion } from '@/components/FaqAccordion';

export default function OnlineSupport() {
  const onlineSupportIncludes = [
    'Handling online portals and platforms',
    'Managing client accounts',
    'Updating offers, promotions, and menus',
    'Mobile application updates and support',
    'Monitoring platform activity and notifications',
  ];

  const onlineSupportBenefits = [
    'Reduced operational workload',
    'Accurate and up-to-date online listings',
    'Faster issue resolution',
    'Consistent platform performance',
  ];

  const clientSupportIncludes = [
    'Dedicated account manager (premium plans)',
    'WhatsApp and phone support',
    'Priority response for premium clients',
    'Ongoing communication and updates',
    'Issue tracking and resolution support',
  ];

  const clientSupportBenefits = [
    'Improves client satisfaction',
    'Builds long-term partnerships',
    'Ensures smooth project coordination',
    'Enhances service reliability',
  ];

  const processSteps = [
    'Account and platform review',
    'Support setup and access management',
    'Ongoing online and client support',
    'Regular updates and issue resolution',
  ];

  const audiences = [
    'Restaurants and cafes',
    'Service-based businesses',
    'E-commerce brands',
    'Businesses needing ongoing digital support',
  ];

  const reasons = [
    'Reliable online and client support',
    'Clear communication channels',
    'Fast response times',
    'Experienced support team',
    'Scalable support plans',
  ];

  const faqs = [
    {
      question: 'Do you provide daily online support?',
      answer: 'Yes, support frequency depends on your selected plan.',
    },
    {
      question: 'Which platforms can you support?',
      answer: 'We support most major online platforms, apps, and portals.',
    },
    {
      question: 'Is a dedicated account manager included?',
      answer: 'A dedicated account manager is available with premium plans.',
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100/60">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-300/30 to-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-slate-300/30 to-indigo-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 mb-6">
                <Headphones className="h-4 w-4 mr-2" />
                Online and Client Support
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 mb-4">
                Reliable Support for Smooth Business Operations
              </p>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mb-6">
                Online Support and Client Support Services
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                At PropelMeta Tech, we provide professional online support and
                client support services to help businesses manage day-to-day
                digital operations efficiently and without delays.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From account handling and online platform support to customer
                communication and priority assistance, our team ensures your
                business receives consistent, reliable support whenever it is
                needed.
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
                {['Dedicated support', 'Fast response', 'Reliable operations'].map(
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
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=900&fit=crop&crop=center"
                  alt="Online support team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-500/10 to-blue-500/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
              Online Support Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dedicated assistance for your digital platforms so operations run
              smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                What Our Online Support Includes
              </h3>
              <ul className="space-y-3 text-slate-600">
                {onlineSupportIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Benefits of Our Online Support
              </h3>
              <ul className="space-y-3 text-slate-600">
                {onlineSupportBenefits.map((item) => (
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

      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100/60">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
              Client Support Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional communication and priority assistance that builds
              trust.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Headphones className="h-6 w-6 text-slate-700" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Our Client Support Includes
                </h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                {clientSupportIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-slate-700" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Why Client Support Matters
                </h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                {clientSupportBenefits.map((item) => (
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
                How Our Support Services Work
              </h3>
              <ol className="space-y-4 text-slate-600">
                {processSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
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
              Why Choose PropelMeta Tech for Support Services?
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

      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100/60">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px] text-center">
          <h2 className="text-4xl font-bold font-display text-white mb-6">
            Get Reliable Online and Client Support Today
          </h2>
          <p className="text-xl text-slate-200/90 mb-10 max-w-2xl mx-auto">
            Let us handle your online platforms and client communication while
            you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 rounded-xl bg-white text-slate-800"
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
