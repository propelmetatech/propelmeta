import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
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
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-amber-200/50 bg-white/80 px-4 py-2 text-sm font-medium text-amber-600 mb-6">
                <Target className="h-4 w-4 mr-2" />
                Paid Ads, Marketing Automation & AI
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 mb-4">
                Performance-Driven Ads and Automated Marketing That Delivers Results
              </p>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mb-6">
                Paid Advertising, Marketing Automation & AI Automation Services
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                At PropelMeta Tech, we provide complete paid advertising,
                marketing automation, and AI automation services to help
                businesses generate leads, increase sales, and scale
                efficiently.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We manage your ads, automate customer communication, and use
                AI-powered systems to improve performance - all handled by our
                expert team.
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
                {['Meta and Google Ads', 'Automation systems', 'AI insights'].map(
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70">
                <img
                  src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1200&h=900&fit=crop&crop=center"
                  alt="Paid ads and automation"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-orange-500/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="paid-advertising-services"
        className="py-20 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
              Paid Advertising Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Managed ads on Facebook, Instagram, and Google to reach the right
              audience quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-3xl border h-full border-slate-200/70 bg-slate-50/70 p-8 shadow-lg shadow-slate-200/40">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                What's Included in Paid Advertising
              </h3>
              <ul className="space-y-3 text-slate-600">
                {adIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border h-full border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="h-6 w-6 text-amber-600" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Benefits of Our Paid Advertising Service
                </h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                {adBenefits.map((item) => (
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

      <section
        id="marketing-automation-services"
        className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
              Marketing Automation Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Automated Email & SMS Communication that keeps customers
              engaged without manual follow-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-3xl border h-full border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-amber-600" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Our Marketing Automation Services Include
                </h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                {marketingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border h-full border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-amber-600" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Why Marketing Automation Matters
                </h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                {marketingBenefits.map((item) => (
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

      <section
        id="ai-automation-services"
        className="py-20 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
              AI Automation Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Smarter Systems Powered by Artificial Intelligence to improve
              efficiency and reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-3xl border h-full border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3 mb-6">
                <Bot className="h-6 w-6 text-amber-600" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Our AI Automation Services Include
                </h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                {aiIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border h-full border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-amber-600" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Benefits of AI Automation
                </h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                {aiBenefits.map((item) => (
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

      <section
        id="how-our-ads-automation-works"
        className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <div className="rounded-3xl border h-full border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                How Our Paid Ads & Automation Service Works
              </h3>
              <ol className="space-y-4 text-slate-600">
                {processSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-white text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-slate-600 mt-6">
                We manage everything from ads to automation so your business
                runs smarter and faster.
              </p>
            </div>
            <div className="rounded-3xl border h-full border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
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

          <div className="mt-12 rounded-3xl border h-full border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
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

      <section id="faqs" className="py-20 bg-white scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-4xl font-bold font-display text-white mb-6">
            Start Generating Leads with Ads and Automation
          </h2>
          <p className="text-xl text-amber-100/90 mb-10 max-w-2xl mx-auto">
            Let us manage your paid ads, marketing automation, and AI automation
            all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 rounded-xl bg-white text-amber-700"
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



