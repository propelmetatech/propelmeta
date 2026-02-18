import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { EarlyAccessSection } from '@/components/EarlyAccessSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircle, Headphones, Shield } from 'lucide-react';
import { FaqAccordion } from '@/components/FaqAccordion';
import {
  ServiceImagePanel,
  ServiceInfoCard,
  ServiceStepsCard,
} from '@/components/ServiceSectionBlocks';
import onlineSupportServiceImage from '@/assests/Online Support & Client Support Services.png';
import clientSupportServiceImage from '@/assests/Client Support.png';
import supportProcessImage from '@/assests/Online Support & Client Support Services_1.png';
import heroBannerImage from '@/assests/bannerImage3_onlinesupport.png';

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
      <section className="relative overflow-hidden pt-16 pb-8 min-h-[450px] flex items-center">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBannerImage}
            alt="Online Support & Client Support Banner"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/60 to-blue-900/70"></div>
        </div>

        {/* Decorative blur effects */}
        <div className="absolute inset-0 overflow-hidden z-[1]">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-slate-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-slate-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content - Centered */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center rounded-full border border-blue-300/60 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white mb-2 shadow-lg">
              <Headphones className="h-3.5 w-3.5 mr-1.5" />
              Online and Client Support
            </div>

            <p className="font-semibold uppercase tracking-[0.15em] text-blue-300 mb-2 text-xs sm:text-sm">
              Reliable Online & Client Support for Smooth Business Operations
            </p>

            <h1 className="font-bold font-display text-white mb-3 text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Online Support & Client Support Services
            </h1>

            <p className="text-slate-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              At PropelMeta Tech, we provide professional online support and
              client support services to help businesses manage day-to-day
              digital operations efficiently and without delays.
            </p>

            <p className="text-slate-200 text-xs sm:text-sm max-w-3xl mx-auto">
              From account handling and online platform support to customer
              communication and priority assistance, our team ensures your
              business receives consistent, reliable support whenever it is
              needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/30"
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
              {[
                'Dedicated support',
                'Fast response',
                'Reliable operations',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                >
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="online-support-services"
        className="py-12 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              Online Support Services
            </h2>
            <p className="mt-4 text-slate-600">
              Dedicated assistance for your digital platforms so operations run
              smoothly.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="What Our Online Support Includes"
                items={onlineSupportIncludes}
              />
              <ServiceImagePanel
                src={onlineSupportServiceImage}
                alt="Online support services"
                overlayClassName="from-slate-500/10 to-blue-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={supportProcessImage}
                alt="Online support outcomes"
                overlayClassName="from-blue-500/10 to-slate-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="Benefits of Our Online Support"
                items={onlineSupportBenefits}
                className="lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="client-support-services"
        className="py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100/60 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              Client Support Services
            </h2>
            <p className="mt-4 text-slate-600">
              Professional communication and priority assistance that builds
              trust.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="Our Client Support Includes"
                items={clientSupportIncludes}
                icon={<Headphones className="h-6 w-6 text-slate-700" />}
              />
              <ServiceImagePanel
                src={clientSupportServiceImage}
                alt="Client support services"
                overlayClassName="from-slate-500/10 to-indigo-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={onlineSupportServiceImage}
                alt="Client support benefits"
                overlayClassName="from-indigo-500/10 to-slate-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="Why Client Support Matters"
                items={clientSupportBenefits}
                icon={<Shield className="h-6 w-6 text-slate-700" />}
                className="lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-our-support-works"
        className="py-12 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              How Our Support Services Work
            </h2>
            <p className="mt-4 text-slate-600">
              A practical support flow to keep your operations smooth, your
              response times fast, and your service quality consistent.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
            <ServiceStepsCard
              title="How Our Support Services Work"
              steps={processSteps}
              footerText="All support services are handled by our trained team - no outsourcing."
              stepBadgeClassName="bg-slate-800"
            />
            <ServiceImagePanel
              src={supportProcessImage}
              alt="Support service process"
              overlayClassName="from-slate-500/10 to-blue-500/10"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
            <ServiceInfoCard
              title="Who This Service Is Ideal For"
              items={audiences}
            />
            <ServiceInfoCard
              title="Why Choose PropelMeta Tech for Support Services?"
              items={reasons}
              twoColumnItems
            />
          </div>
        </div>
      </section>

      <section
        id="faqs"
        className="py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100/60 scroll-mt-28"
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

      <EarlyAccessSection source="service-online-support" />
    </Layout>
  );
}
