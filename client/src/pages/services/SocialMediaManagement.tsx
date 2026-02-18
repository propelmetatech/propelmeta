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
import heroBannerImage from '@/assests/bannerImage1_socialmedia.png';

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
      <section className="relative overflow-hidden pt-16 pb-8 min-h-[450px] flex items-center">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBannerImage}
            alt="Social Media Management Banner"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-purple-900/60 to-blue-900/70"></div>
        </div>

        {/* Decorative blur effects */}
        <div className="absolute inset-0 overflow-hidden z-[1]">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
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
              <Megaphone className="h-3.5 w-3.5 mr-1.5" />
              Social Media and Brand Management
            </div>

            <p className="font-semibold uppercase tracking-[0.15em] text-blue-300 mb-2 text-xs sm:text-sm">
              Professional Social Media Posting, Design & Brand Execution
            </p>

            <h1 className="font-bold font-display text-white mb-3 text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Social Media Management, Content Creation, and Brand Management
              Services
            </h1>

            <p className="text-slate-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              At PropelMeta Tech, we offer comprehensive social media
              management, content creation, and brand management services
              tailored to keep your business active, visible, and professional
              across digital platforms.
            </p>

            <p className="text-slate-200 text-xs sm:text-sm max-w-3xl mx-auto">
              We handle posting, poster designing, reels, and brand consistency,
              so you can focus on running your business while we manage your
              online presence.
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
              {['Fully managed', 'Custom designs', 'Transparent reporting'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                  >
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="font-medium">{item}</span>
                  </div>
                ),
              )}
            </div>
          </motion.div>
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
