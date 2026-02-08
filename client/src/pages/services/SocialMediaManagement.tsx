import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import {
  CheckCircle,
  LineChart,
  Megaphone,
  Palette,
  PenTool,
  Shield,
} from 'lucide-react';
import { FaqAccordion } from '@/components/FaqAccordion';
import socialMediaServiceImage from '@/assests/Social Media Management.png';
import contentCreationServiceImage from '@/assests/Content Creation.png';
import brandManagementServiceImage from '@/assests/Brand Management Services.png';
import socialProcessImage from '@/assests/Social Media Management_1.png';

export default function SocialMediaManagement() {
  const socialIncludes = [
    'Monthly posting schedule',
    'Professionally designed social media posters',
    '2 social media posts per week',
    'Professional reel creation and editing',
    'Branded story templates',
    'Instagram and Facebook page optimization',
    'Monthly performance reports',
  ];

  const socialResults = [
    'Regular, professional posting',
    'Visually consistent feeds',
    'Increased engagement and reach',
    'A managed social media presence without daily effort',
  ];

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

  const brandManagement = [
    'Brand colors, fonts, and visual consistency',
    'Logo placement and usage',
    'Menu design and redesign (for restaurants)',
    'Review monitoring and response support',
    'Unified brand styling across social platforms',
  ];

  const audiences = [
    'Restaurants and cafes',
    'Local businesses',
    'Service-based brands',
    'Growing companies looking for a consistent online presence',
  ];

  const processSteps = [
    'Brand and page review',
    'Content and design planning',
    'Regular posting and updates',
    'Performance tracking and reporting',
  ];

  const reasons = [
    'Fully managed services',
    'Custom designs - no templates',
    'Transparent reporting',
    'Reliable communication',
    'Scalable service plans',
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
      <section className="relative overflow-hidden pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-blue-200/60 bg-white/80 px-4 py-2 text-sm font-medium text-blue-600 mb-6 shadow-sm shadow-blue-200/40">
                <Megaphone className="h-4 w-4 mr-2" />
                Social Media and Brand Management
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-4">
                Professional Social Media Posting, Design & Brand Execution
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight mb-6">
                Social Media Management, Content Creation, and Brand Management
                Services
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                At PropelMeta Tech, we offer comprehensive social media
                management, content creation, and brand management services
                tailored to keep your business active, visible, and professional
                across digital platforms.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We handle posting, poster designing, reels, and brand
                consistency, so you can focus on running your business while we
                manage your online presence.
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
                {['Fully managed', 'Custom designs', 'Transparent reporting'].map(
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
                  src={socialMediaServiceImage}
                  alt="Social media management"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="social-media-management-services"
        className="py-20 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-4">
                Social Media Management Services
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Posting, poster design, and reels management to maintain a
                consistent and engaging presence on Instagram and Facebook.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Megaphone className="h-6 w-6 text-blue-600" />
                    <h3 className="text-2xl font-semibold text-slate-900">
                      What Is Included
                    </h3>
                  </div>
                  <ul className="space-y-3 text-slate-600">
                    {socialIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <LineChart className="h-6 w-6 text-blue-600" />
                    <h3 className="text-2xl font-semibold text-slate-900">
                      What You Get
                    </h3>
                  </div>
                  <ul className="space-y-3 text-slate-600">
                    {socialResults.map((item) => (
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
                  src={socialMediaServiceImage}
                  alt="Social media management service"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="content-creation-services"
        className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-4">
                Content Creation Services
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Custom posters, graphics, and reels that match your brand and
                attract attention on social platforms.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <PenTool className="h-6 w-6 text-purple-600" />
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Our Content Creation Services Include
                    </h3>
                  </div>
                  <ul className="space-y-3 text-slate-600">
                    {contentIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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

            <div className="relative lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70 ring-1 ring-white/60">
                <img
                  src={contentCreationServiceImage}
                  alt="Content creation service"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="brand-management-services"
        className="py-20 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-4">
                Brand Management Services
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Consistent brand execution across every digital touchpoint.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6">
                <div className="rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                    What We Manage
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {brandManagement.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-6 w-6 text-slate-600" />
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Why Brand Management Matters
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Consistency builds trust. We ensure your brand maintains the
                    same look, feel, and message across all digital channels.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70 ring-1 ring-white/60">
                <img
                  src={brandManagementServiceImage}
                  alt="Brand management service"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-500/10 to-blue-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-our-service-works"
        className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:order-2">
              <div className="rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
              <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                  How Our Service Works
                </h3>
                <ol className="space-y-4 text-slate-600">
                  {processSteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-slate-600 mt-6">
                  All work is handled by our team - no manual effort required
                  from you.
                </p>
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

            <div className="relative lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70 ring-1 ring-white/60">
                <img
                  src={socialProcessImage}
                  alt="Social media service process"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="py-20 bg-white scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
            Get Started with Social Media and Brand Management
          </h2>
          <p className="text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto">
            Let us manage your social media, content, and brand professionally
            and consistently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <Button
                size="lg"
                variant="secondary"
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl bg-white text-blue-700"
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
                Contact PropelMeta Tech Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}




