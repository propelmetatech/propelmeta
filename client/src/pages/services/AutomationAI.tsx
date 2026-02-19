import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { EarlyAccessSection } from '@/components/EarlyAccessSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import {
  BarChart3,
  Bot,
  CheckCircle,
  Mail,
  MessageSquare,
  Sparkles,
  Target,
} from 'lucide-react';
import { FaqAccordion } from '@/components/FaqAccordion';
import {
  ServiceImagePanel,
  ServiceInfoCard,
  ServiceStepsCard,
} from '@/components/ServiceSectionBlocks';
import paidAdsServiceImage from '@/assests/Paid Advertising.png';
import marketingAutomationServiceImage from '@/assests/Paid Advertising, Marketing Automation & AI Automation.png';
import aiAutomationServiceImage from '@/assests/AI Automation.png';
import adsAutomationProcessImage from '@/assests/Paid Advertising, Marketing Automation & AI Automation_1.png';
import heroBannerImage from '@/assests/baneerImagePaid Ads.png';

export default function AutomationAI() {
  const adIncludes = [
    'Meta Ads (Facebook and Instagram) management',
    'Google Ads management',
    'Ad creative design (images, posters, and videos)',
    'Ad copywriting',
    'Campaign setup and monitoring',
    'Performance optimization and reporting',
  ];

  const adBenefits = [
    'Increased website traffic and inquiries',
    'Better reach and visibility',
    'Optimized ad spending',
    'Clear performance tracking',
  ];

  const marketingIncludes = [
    'Automated email campaigns',
    'SMS campaigns for promotions and updates',
    'Customer follow-up automation',
    'Performance tracking and reporting',
  ];

  const marketingBenefits = [
    'Saves time and effort',
    'Improves customer engagement',
    'Increases repeat business',
    'Consistent communication with customers',
  ];

  const aiIncludes = [
    'AI-powered workflow automation',
    'AI-generated performance reports',
    'Automated lead tracking and insights',
    'AI-based campaign analysis',
  ];

  const aiBenefits = [
    'Faster decision-making',
    'Reduced manual work',
    'Improved performance tracking',
    'Scalable marketing systems',
  ];

  const processSteps = [
    'Business and ad account review',
    'Campaign setup and creative execution',
    'Automation and AI system setup',
    'Ongoing monitoring and reporting',
  ];

  const audiences = [
    'Restaurants and cafes',
    'Local service businesses',
    'E-commerce brands',
    'Startups and growing companies',
  ];

  const reasons = [
    'Fully managed advertising and automation services',
    'Ad creatives designed in-house',
    'Automated communication systems',
    'Transparent reporting',
    'Dedicated support',
  ];

  const faqs = [
    {
      question: 'Which platforms do you run ads on?',
      answer: 'We manage Facebook, Instagram, and Google Ads.',
    },
    {
      question: 'Do you create ad designs and videos?',
      answer: 'Yes, all ad creatives are designed and edited by our team.',
    },
    {
      question: 'Can automation work with my existing tools?',
      answer:
        'Yes, our automation systems can integrate with most marketing platforms.',
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden pt-16 pb-12 min-h-[600px] bg-gradient-to-br from-amber-50 via-white to-orange-50/30">
        {/* Background Image on Left Side */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBannerImage}
            alt="Paid Advertising & Marketing Automation Banner"
            className="w-full h-full object-cover rounded-r-[3rem]"
          />
        </div>

        {/* Decorative blur effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto lg:ml-[35px] max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
            {/* Left Side - Content (overlays the background) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="py-8 rounded-2xl pl-[30px] pr-0 lg:-ml-6"
            >
              <div className="inline-flex items-center rounded-full border border-white/40 bg-transparent px-4 py-2 text-sm font-medium text-white mb-6">
                <Target className="h-4 w-4 mr-2" />
                Paid Ads, Marketing Automation & AI
              </div>

              <p className="font-semibold uppercase tracking-[0.15em] text-white/90 mb-3 text-xs sm:text-sm">
                Performance-Driven Ads and Automated Marketing That Delivers
                Results
              </p>

              <h1 className="font-bold font-display text-white mb-4 text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Paid Advertising, Marketing Automation &{' '}
                <span className="text-white">
                  AI Automation Services
                </span>
              </h1>

              <p className="text-white/90 mb-4 text-sm sm:text-base leading-relaxed">
                At PropelMeta Tech, we provide complete paid advertising,
                marketing automation, and AI automation services to help
                businesses generate leads, increase sales, and scale
                efficiently.
              </p>

              <p className="text-white/80 text-xs sm:text-sm mb-6">
                We manage your ads, automate customer communication, and use
                AI-powered systems to improve performance - all handled by our
                expert team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/pricing">
                  <Button
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-xl shadow-blue-500/25 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl border-white/60 text-white hover:bg-white/10"
                  >
                    Contact PropelMeta Tech
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/85">
                {[
                  'Meta and Google Ads',
                  'Automation systems',
                  'AI insights',
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
        id="paid-advertising-services"
        className="py-12 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              Paid Advertising Services
            </h2>
            <p className="mt-4 text-slate-600">
              Managed ads on Facebook, Instagram, and Google to reach the right
              audience quickly.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="What's Included in Paid Advertising"
                items={adIncludes}
              />
              <ServiceImagePanel
                src={paidAdsServiceImage}
                alt="Paid advertising service"
                overlayClassName="from-amber-500/10 to-orange-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={marketingAutomationServiceImage}
                alt="Paid ads growth results"
                overlayClassName="from-orange-500/10 to-amber-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="Benefits of Our Paid Advertising Service"
                items={adBenefits}
                icon={<BarChart3 className="h-6 w-6 text-amber-600" />}
                className="lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="marketing-automation-services"
        className="py-12 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              Marketing Automation Services
            </h2>
            <p className="mt-4 text-slate-600">
              Automated Email & SMS Communication that keeps customers engaged
              without manual follow-ups.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="Our Marketing Automation Services Include"
                items={marketingIncludes}
                icon={<Mail className="h-6 w-6 text-amber-600" />}
              />
              <ServiceImagePanel
                src={marketingAutomationServiceImage}
                alt="Marketing automation service"
                overlayClassName="from-amber-500/10 to-orange-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={paidAdsServiceImage}
                alt="Automated campaign impact"
                overlayClassName="from-orange-500/10 to-amber-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="Why Marketing Automation Matters"
                items={marketingBenefits}
                icon={<MessageSquare className="h-6 w-6 text-amber-600" />}
                className="lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="ai-automation-services"
        className="py-12 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              AI Automation Services
            </h2>
            <p className="mt-4 text-slate-600">
              Smarter Systems Powered by Artificial Intelligence to improve
              efficiency and reporting.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="Our AI Automation Services Include"
                items={aiIncludes}
                icon={<Bot className="h-6 w-6 text-amber-600" />}
              />
              <ServiceImagePanel
                src={aiAutomationServiceImage}
                alt="AI automation service"
                overlayClassName="from-amber-500/10 to-orange-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={adsAutomationProcessImage}
                alt="AI automation benefits"
                overlayClassName="from-orange-500/10 to-amber-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="Benefits of AI Automation"
                items={aiBenefits}
                icon={<Sparkles className="h-6 w-6 text-amber-600" />}
                className="lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-our-ads-automation-works"
        className="py-12 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              How Our Paid Ads & Automation Service Works
            </h2>
            <p className="mt-4 text-slate-600">
              A structured execution model that combines ads, automation, and AI
              insights to scale leads and improve conversion outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
            <ServiceStepsCard
              title="How Our Paid Ads & Automation Service Works"
              steps={processSteps}
              footerText="We manage everything from ads to automation so your business runs smarter and faster."
              stepBadgeClassName="bg-amber-600"
            />
            <ServiceImagePanel
              src={adsAutomationProcessImage}
              alt="Ads and automation process"
              overlayClassName="from-amber-500/10 to-orange-500/10"
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

      <section id="faqs" className="py-12 bg-white scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-bold font-display text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <EarlyAccessSection source="service-paid-ads-marketing-ai" />
    </Layout>
  );
}
