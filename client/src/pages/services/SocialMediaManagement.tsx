import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { EarlyAccessSection } from '@/components/EarlyAccessSection';
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
import {
  ServiceImagePanel,
  ServiceInfoCard,
  ServiceStepsCard,
} from '@/components/ServiceSectionBlocks';
import socialMediaServiceImage from '@/assests/Social Media Management.png';
import contentCreationServiceImage from '@/assests/Content Creation.png';
import brandManagementServiceImage from '@/assests/Brand Management Services.png';
import socialProcessImage from '@/assests/Social Media Management_1.png';
import heroBannerImage from '@/assests/bannerImageSocial Media.png';

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
      <section className="relative overflow-hidden pt-16 pb-12 min-h-[600px] bg-gradient-to-br from-purple-50 via-white to-blue-50/30">
        {/* Background Image on Left Side */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBannerImage}
            alt="Social Media Management Banner"
            className="w-full h-full object-cover rounded-r-[3rem]"
          />
        </div>

        {/* Decorative blur effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
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
                <Megaphone className="h-4 w-4 mr-2" />
                Social Media and Brand Management
              </div>

              <p className="font-semibold uppercase tracking-[0.15em] text-white/90 mb-3 text-xs sm:text-sm">
                Professional Social Media Posting, Design & Brand Execution
              </p>

              <h1 className="font-bold font-display text-white mb-4 text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Social Media Management, Content Creation & Brand{' '}
                <span className="text-white">
                  Management Services
                </span>
              </h1>

              <p className="text-white/90 mb-4 text-sm sm:text-base leading-relaxed">
                At PropelMeta Tech, we offer comprehensive social media
                management, content creation, and brand management services
                tailored to keep your business active, visible, and professional
                across digital platforms.
              </p>

              <p className="text-white/80 text-xs sm:text-sm mb-6">
                We handle posting, poster designing, reels, and brand
                consistency, so you can focus on running your business while we
                manage your online presence.
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
                  'Fully managed',
                  'Custom designs',
                  'Transparent reporting',
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
        id="social-media-management-services"
        className="py-12 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              Social Media Management Services
            </h2>
            <p className="mt-4 text-slate-600">
              Posting, poster design, and reels management to maintain a
              consistent and engaging presence on Instagram and Facebook.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="What Is Included"
                items={socialIncludes}
                icon={<Megaphone className="h-6 w-6 text-blue-600" />}
              />
              <ServiceImagePanel
                src={socialMediaServiceImage}
                alt="Social media management service"
                overlayClassName="from-blue-500/10 to-purple-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={socialProcessImage}
                alt="Social media growth outcome"
                overlayClassName="from-purple-500/10 to-blue-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="What You Get"
                items={socialResults}
                icon={<LineChart className="h-6 w-6 text-blue-600" />}
                className="lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="content-creation-services"
        className="py-12 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              Content Creation Services
            </h2>
            <p className="mt-4 text-slate-600">
              Custom posters, graphics, and reels that match your brand and
              attract attention on social platforms.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard
                title="Our Content Creation Services Include"
                items={contentIncludes}
                icon={<PenTool className="h-6 w-6 text-purple-600" />}
              />
              <ServiceImagePanel
                src={contentCreationServiceImage}
                alt="Content creation service"
                overlayClassName="from-purple-500/10 to-pink-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={socialMediaServiceImage}
                alt="Creative social content output"
                overlayClassName="from-pink-500/10 to-purple-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="Benefits of Our Content Creation"
                items={contentBenefits}
                icon={<Palette className="h-6 w-6 text-purple-600" />}
                className="lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="brand-management-services"
        className="py-12 bg-white scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              Brand Management Services
            </h2>
            <p className="mt-4 text-slate-600">
              Consistent brand execution across every digital touchpoint.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceInfoCard title="What We Manage" items={brandManagement} />
              <ServiceImagePanel
                src={brandManagementServiceImage}
                alt="Brand management service"
                overlayClassName="from-slate-500/10 to-blue-500/10"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              <ServiceImagePanel
                src={socialProcessImage}
                alt="Brand consistency outcomes"
                overlayClassName="from-blue-500/10 to-slate-500/10"
                className="lg:order-1"
              />
              <ServiceInfoCard
                title="Why Brand Management Matters"
                description="Consistency builds trust. We ensure your brand maintains the same look, feel, and message across all digital channels."
                icon={<Shield className="h-6 w-6 text-slate-600" />}
                className="lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-our-service-works"
        className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-bold font-display text-slate-900">
              How Our Service Works
            </h2>
            <p className="mt-4 text-slate-600">
              Clear execution flow with complete management from planning to
              reporting, so your team can focus on business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
            <ServiceStepsCard
              title="How Our Service Works"
              steps={processSteps}
              footerText="All work is handled by our team - no manual effort required from you."
              stepBadgeClassName="bg-blue-600"
            />
            <ServiceImagePanel
              src={socialProcessImage}
              alt="Social media service process"
              overlayClassName="from-blue-500/10 to-indigo-500/10"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
            <ServiceInfoCard
              title="Who This Service Is For"
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

      <EarlyAccessSection source="service-social-media-management" />
    </Layout>
  );
}
