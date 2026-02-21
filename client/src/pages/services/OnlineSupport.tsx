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
import heroBannerImage from '@/assests/bannerImageOnline Support.png';

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
      <section className="relative overflow-hidden pt-16 pb-10 min-h-[640px] sm:pb-12 lg:min-h-[600px]">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBannerImage}
            alt="Online Support & Client Support Banner"
            className="h-full w-full object-cover object-[72%_center] sm:object-center lg:object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/75 via-slate-900/62 to-slate-950/78 sm:from-slate-900/58 sm:via-slate-900/45 sm:to-slate-900/58 lg:hidden" />

        {/* Decorative blur effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-slate-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto lg:ml-[35px] max-w-7xl px-4 pr-12 sm:px-6 sm:pr-6 lg:px-8 lg:pr-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
            {/* Left Side - Content Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[640px] rounded-2xl bg-slate-900/30 px-4 py-7 backdrop-blur-[2px] sm:px-6 sm:py-8 lg:max-w-none lg:bg-transparent lg:px-0 lg:py-8 lg:pl-[30px] lg:pr-0 lg:-ml-6 lg:backdrop-blur-0"
            >
              <div className="inline-flex items-center rounded-full border border-white/40 bg-transparent px-4 py-2 text-sm font-medium text-white mb-6">
                <Headphones className="h-4 w-4 mr-2" />
                Online and Client Support
              </div>

              <p className="font-semibold uppercase tracking-[0.15em] text-white/90 mb-3 text-xs sm:text-sm">
                Reliable Online & Client Support for Smooth Business Operations
              </p>

              <h1 className="font-bold font-display text-white mb-4 text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Online Support & Client Support{' '}
                <span className="text-white">
                  Services
                </span>
              </h1>

              <p className="text-white/90 mb-4 text-sm sm:text-base leading-relaxed">
                At PropelMeta Tech, we provide professional online support and
                client support services to help businesses manage day-to-day
                digital operations efficiently and without delays.
              </p>

              <p className="text-white/80 text-xs sm:text-sm mb-6">
                From account handling and online platform support to customer
                communication and priority assistance, our team ensures your
                business receives consistent, reliable support whenever it is
                needed.
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
                  'Dedicated support',
                  'Fast response',
                  'Reliable operations',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Empty right side for background image */}
            <div className="hidden lg:block"></div>
          </div>
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

