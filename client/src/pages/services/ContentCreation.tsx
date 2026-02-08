import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircle, PenTool, Palette } from 'lucide-react';
import { FaqAccordion } from '@/components/FaqAccordion';
import contentServiceImage from '@/assests/Content Creation.png';
import contentProcessImage from '@/assests/Content Creation_1.png';

export default function ContentCreation() {
  const contentIncludes = [
    'Custom poster and graphic design',
    'Short-form video and reel editing',
    'Content research based on current trends',
    'Ad-ready creative designs',
    'Brand-matched visuals for all posts',
  ];

  const contentBenefits = [
    'Professional-looking content',
    'Higher engagement on posts and reels',
    'Better visual appeal for ads',
    'Strong brand presentation',
  ];

  const audiences = [
    'Restaurants and cafes',
    'Local businesses',
    'Service-based brands',
    'Growing companies looking for a consistent online presence',
  ];

  const processSteps = [
    'Content and design planning',
    'Custom poster, graphic, and reel creation',
    'Review and revisions aligned with your brand',
    'Delivery and scheduling support',
  ];

  const reasons = [
    'Custom designs - no templates',
    'Brand-matched visuals for every post',
    'Reliable creative delivery',
    'Transparent communication',
  ];

  const faqs = [
    {
      question: 'Do you create all designs from scratch?',
      answer:
        'Yes. All posters, graphics, and reels are custom-designed for your brand.',
    },
    {
      question: 'Which platforms are included?',
      answer: 'Instagram and Facebook are included by default.',
    },
    {
      question: 'Can I request changes?',
      answer: 'Yes. Revisions are included based on your plan.',
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-purple-200/50 bg-white/80 px-4 py-2 text-sm font-medium text-purple-600 mb-6">
                <PenTool className="h-4 w-4 mr-2" />
                Content Creation Services
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 mb-4">
                Custom Posters, Graphics, and Reels for Social Media
              </p>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mb-6">
                Content Creation That Tells Your Story
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We create high-quality content that visually represents your
                brand and attracts attention on social platforms.
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
                {['Custom posters', 'Reels editing', 'Brand-matched visuals'].map(
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
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&h=900&fit=crop&crop=center"
                  alt="Content creation"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
                Our Content Creation Services Include
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                High-quality content that visually represents your brand and
                attracts attention.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="rounded-3xl border border-slate-200/70 bg-slate-50/70 p-8 shadow-lg shadow-slate-200/40">
                  <ul className="space-y-3 text-slate-600">
                    {contentIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
                  <div className="flex items-center gap-3 mb-6">
                    <Palette className="h-6 w-6 text-purple-600" />
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Benefits of Our Content Creation
                    </h3>
                  </div>
                  <ul className="space-y-3 text-slate-600">
                    {contentBenefits.map((item) => (
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70">
                <img
                  src={contentServiceImage}
                  alt="Content creation services"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="lg:order-2">
              <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                  Who This Service Is For
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
              <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                  How Our Service Works
                </h3>
                <ol className="space-y-4 text-slate-600">
                  {processSteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/40">
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

            <div className="relative lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70">
                <img
                  src={contentProcessImage}
                  alt="Content creation process"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-4xl font-bold font-display text-white mb-6">
            Elevate Your Content Today
          </h2>
          <p className="text-xl text-purple-100/90 mb-10 max-w-2xl mx-auto">
            Let us create content that keeps your brand visible and engaging.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 rounded-xl bg-white text-purple-700"
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



