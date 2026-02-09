import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Smartphone,
  ShoppingCart,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Users,
  Rocket,
  Star,
  Quote,
  Play,
  Shield,
  Clock,
  Target,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Megaphone,
  PenTool,
  Code2,
  Search,
  Bot,
  Plus,
  Minus,
  Award,
  Lightbulb,
  Settings,
  Headphones,
} from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Layout } from '@/components/Layout';
import { AutoScrollCarousel } from '@/components/AutoScrollCarousel';
import { useEffect, useRef, useState } from 'react';
import socialMediaImage from '@/assests/Social Media Management.png';
import websiteDesignImage from '@/assests/Website Design & Development Services.png';
import paidAdsImage from '@/assests/Paid Advertising, Marketing Automation & AI Automation.png';
import supportImage from '@/assests/Online Support & Client Support Services.png';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Sample carousel data with modern marketing visuals
  const carouselItems = [
    {
      id: 1,
      image: websiteDesignImage,
      title: 'Website Design, Development & SEO',
      description: 'High-converting websites with SEO-ready structure.',
      stats: {
        label: 'Performance Score',
        value: '95+ Lighthouse',
        color: 'bg-violet-500',
      },
    },
    {
      id: 2,
      image: socialMediaImage,
      title: 'Social Media Management',
      description:
        'Grow your presence with consistent posts, reels, and visuals.',
      stats: {
        label: 'Engagement Lift',
        value: '+62% Avg',
        color: 'bg-indigo-500',
      },
    },
    {
      id: 3,
      image: paidAdsImage,
      title: 'Paid Ads, Marketing & AI Automation',
      description:
        'Performance-driven campaigns with automation that scales ROI.',
      stats: {
        label: 'Qualified Leads',
        value: '+3.1x',
        color: 'bg-amber-500',
      },
    },
    {
      id: 4,
      image: supportImage,
      title: 'Online & Client Support',
      description: 'Fast, reliable support that keeps operations moving.',
      stats: {
        label: 'Response Time',
        value: '< 15 min',
        color: 'bg-emerald-500',
      },
    },
  ];

  const features = [
    {
      icon: <Megaphone className="h-6 w-6 text-white" />,
      title: 'Social Media Management',
      description: 'Build trust, consistency, and engagement across platforms.',
      color: 'bg-blue-500',
      href: '/services/social-media-management',
    },
    {
      icon: <PenTool className="h-6 w-6 text-white" />,
      title: 'Content Creation',
      description: 'Scroll-stopping visuals and videos that tell your story.',
      color: 'bg-purple-500',
      href: '/services/content-creation',
    },
    {
      icon: <Code2 className="h-6 w-6 text-white" />,
      title: 'Website & App Development',
      description:
        'High-performance websites and mobile apps built to convert.',
      color: 'bg-indigo-500',
      href: '/services/web-app-development',
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: 'SEO & Paid Advertising',
      description: 'Be found faster and scale with performance-driven ads.',
      color: 'bg-amber-500',
      href: '/services/seo-paid-advertising',
    },
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      title: 'Automation & AI',
      description: 'Smarter systems that save time and boost ROI.',
      color: 'bg-emerald-500',
      href: '/services/automation-ai',
    },
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: 'Online & Client Support',
      description: 'Reliable support that keeps your operations running.',
      color: 'bg-slate-600',
      href: '/services/online-support',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart',
      avatar: 'SC',
      rating: 5,
      text: 'PropelMeta transformed our marketing completely. We saw a 300% increase in qualified leads within the first month.',
      company: 'TechStart Inc.',
      color: 'from-blue-500 to-blue-600',
      accentColor: 'blue',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Marketing Director',
      avatar: 'MR',
      rating: 5,
      text: 'The automation features saved us 20+ hours per week. Our team can now focus on strategy instead of manual tasks.',
      company: 'GrowthCorp',
      color: 'from-purple-500 to-purple-600',
      accentColor: 'purple',
    },
    {
      name: 'Emily Watson',
      role: 'Founder',
      avatar: 'EW',
      rating: 5,
      text: 'Best investment we made this year. The ROI was immediate and continues to compound month over month.',
      company: 'InnovateLab',
      color: 'from-pink-500 to-pink-600',
      accentColor: 'pink',
    },
    {
      name: 'Priya Nair',
      role: 'Owner',
      avatar: 'PN',
      rating: 5,
      text: 'Engagement doubled and reservations from Instagram are up 28% in just six weeks.',
      company: 'SpiceRoute Bistro',
      color: 'from-blue-500 to-blue-600',
      accentColor: 'blue',
    },
    {
      name: 'David Kim',
      role: 'COO',
      avatar: 'DK',
      rating: 5,
      text: 'Our new site loads in under two seconds and trial sign-ups jumped 41%.',
      company: 'Align Fitness',
      color: 'from-purple-500 to-purple-600',
      accentColor: 'purple',
    },
    {
      name: 'Aisha Patel',
      role: 'Marketing Lead',
      avatar: 'AP',
      rating: 5,
      text: 'Paid campaigns now deliver a steady 4.2x ROAS with clear, actionable reporting.',
      company: 'Bloom Cosmetics',
      color: 'from-pink-500 to-pink-600',
      accentColor: 'pink',
    },
    {
      name: 'James Ortega',
      role: 'Founder',
      avatar: 'JO',
      rating: 5,
      text: 'Automation flows cut manual follow-ups by 70% and increased repeat orders.',
      company: 'UrbanMart',
      color: 'from-blue-500 to-blue-600',
      accentColor: 'blue',
    },
    {
      name: 'Lina Fischer',
      role: 'Operations Manager',
      avatar: 'LF',
      rating: 5,
      text: 'Their support team updates menus and replies fast, keeping our listings spotless.',
      company: 'Harbor Cafe',
      color: 'from-purple-500 to-purple-600',
      accentColor: 'purple',
    },
    {
      name: 'Carlos Mendes',
      role: 'Growth Manager',
      avatar: 'CM',
      rating: 5,
      text: 'SEO improvements pushed us to page one for our core keywords in eight weeks.',
      company: 'NovaCloud',
      color: 'from-pink-500 to-pink-600',
      accentColor: 'pink',
    },
  ];

  const loopTestimonials = [...testimonials, ...testimonials];

  const featureTrackRef = useRef<HTMLDivElement | null>(null);
  const testimonialTrackRef = useRef<HTMLDivElement | null>(null);

  const scrollFeatures = (direction: 'left' | 'right') => {
    const track = featureTrackRef.current;
    if (!track) {
      return;
    }

    const scrollAmount = Math.round(track.clientWidth * 0.85);
    track.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const track = testimonialTrackRef.current;
    if (!track) {
      return;
    }

    let animationFrameId: number;
    let lastTime = performance.now();
    const scrollSpeed = 0.06;

    const step = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      track.scrollLeft += delta * scrollSpeed;

      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="  relative overflow-hidden pt-6 pb-8 md:pt-8 md:pb-12 lg:pt-28 lg:pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px] relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-20 xl:gap-24 2xl:gap-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 xl:col-span-5 max-w-2xl lg:pr-6"
            >
              <div className="inline-flex items-center rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-600 mb-8 shadow-lg shadow-blue-500/10">
                <Rocket className="h-4 w-4 mr-2 text-blue-500" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  New: Next-Gen AI Marketing Suite
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-slate-900 leading-[1.1] mb-6">
                Transform Your Business with <br />
                <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Intelligent Digital Marketing
                </span>
              </h1>
              {/* <p className="text-lg md:text-xl font-semibold text-slate-700 mb-4 max-w-xl">
                Transform Your Business with Intelligent Digital Marketing
              </p> */}
              <p className="text-lg text-slate-600 mb-4 leading-relaxed max-w-xl">
                PropelMeta Tech helps restaurants and modern businesses attract
                more customers, increase online visibility, and scale faster
                using data-driven marketing, creative content, and automation.
              </p>
              <p className="text-base text-slate-500 mb-10 max-w-xl">
                All-in-one marketing solutions. Measurable growth. Zero
                guesswork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/pricing">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-2xl shadow-2xl shadow-blue-500/30 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/40"
                  >
                    <Rocket className="h-5 w-5 mr-2" />
                    Get Started
                  </Button>
                </Link>
                <Link href="/book-calendar">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-2xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Book a Demo
                  </Button>
                </Link>
              </div>

              {/* Enhanced Social Proof */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-3 border-white bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-xs"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      5,000+ Companies
                    </p>
                    <p className="text-slate-500">Growing with PropelMeta</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="font-medium">4.9/5</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">2,500+ reviews</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 xl:col-span-7 relative min-h-[240px] lg:min-h-[320px] pb-12 sm:pb-16 lg:pb-24 flex items-center justify-center"
            >
              <div className="w-full max-w-4xl">
                <AutoScrollCarousel
                  items={carouselItems}
                  autoScrollInterval={5000}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}

      {/* Features Grid - Ultra Modern Design */}
      <section className="py-24 lg:py-32 xl:py-40 relative overflow-hidden">
        {/* Advanced Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/5 to-purple-300/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(90deg, rgb(148 163 184 / 0.1) 1px, transparent 1px),
              linear-gradient(rgb(148 163 184 / 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px] relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-blue-600 mb-8 shadow-lg shadow-blue-500/10"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              Complete Business Solution
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold font-display mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Everything you need
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                to scale
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              A comprehensive suite of tools designed to work together
              seamlessly, empowering your business to reach new heights.
            </motion.p>
          </div>

          {/* Ultra-Modern Feature Cards */}
          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 via-white/80 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 via-white/80 to-transparent"></div>

            <div
              ref={featureTrackRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-1"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{
                    y: -16,
                    scale: 1.03,
                    transition: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  className="group relative cursor-pointer snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]"
                >
                  {/* Card Container with Advanced Styling */}
                  <div className="relative p-8 lg:p-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/30 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden h-full group-hover:border-blue-300/50">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>

                    {/* Enhanced Glowing Border Effect */}
                    <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>

                    {/* Enhanced Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full skew-x-12"></div>

                    <div className="relative z-10">
                      {/* Enhanced Icon Container */}
                      <div className="relative mb-8">
                        <div
                          className={`${feature.color} w-16 h-16 lg:w-18 lg:h-18 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 relative overflow-hidden group-hover:scale-110 group-hover:rotate-6`}
                        >
                          {/* Icon Background Effects */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                          {/* Pulsing Ring Effect */}
                          <div className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>

                          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                            {feature.icon}
                          </div>
                        </div>

                        {/* Enhanced Floating Particles */}
                        <div className="absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-200"></div>
                        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-gradient-to-br from-pink-400/40 to-rose-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-300"></div>
                      </div>

                      {/* Enhanced Typography */}
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 transition-all duration-500">
                        <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-blue-800 transition-all duration-500">
                          {feature.title}
                        </span>
                      </h3>

                      <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-700 transition-all duration-500 mb-6">
                        {feature.description}
                      </p>

                      {/* Enhanced Arrow Indicator with Better Animation */}
                      <Link
                        href={feature.href}
                        className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-500 delay-100"
                      >
                        <span className="text-sm font-semibold mr-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Learn more
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>

                    {/* Subtle Corner Accents */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-200/0 group-hover:border-blue-300/60 rounded-tr-2xl transition-all duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-200/0 group-hover:border-purple-300/60 rounded-bl-2xl transition-all duration-500 delay-100"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollFeatures('left')}
              className="h-12 w-12 rounded-full bg-primary text-white shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
              aria-label="Scroll features left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollFeatures('right')}
              className="h-12 w-12 rounded-full bg-primary text-white shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
              aria-label="Scroll features right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Bottom Accent */}
          {/* <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-2 text-slate-500">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300"></div>
              <span className="text-sm font-medium">
                Trusted by 5,000+ companies worldwide
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300"></div>
            </div>
          </div> */}
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="pt-4 lg:pt-8 xl:pt-12 pb-24 lg:pb-32 xl:pb-40 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30
"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px] relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-blue-600 mb-8 shadow-lg shadow-blue-500/10"
            >
              <Lightbulb className="h-4 w-4 mr-2 text-blue-500" />
              Simple Process
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                How it works
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Get started in minutes with our streamlined onboarding process
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '01',
                title: 'Sign Up & Connect',
                description:
                  'Create your account and connect your existing tools in under 2 minutes.',
                icon: <Settings className="h-8 w-8 text-white" />,
                color: 'bg-blue-500',
              },
              {
                step: '02',
                title: 'Customize & Configure',
                description:
                  'Our AI analyzes your business and suggests the perfect setup for maximum results.',
                icon: <Target className="h-8 w-8 text-white" />,
                color: 'bg-purple-500',
              },
              {
                step: '03',
                title: 'Launch & Scale',
                description:
                  'Go live instantly and watch your business grow with automated optimization.',
                icon: <Rocket className="h-8 w-8 text-white" />,
                color: 'bg-pink-500',
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative"
              >
                {/* Connection Line */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0"></div>
                )}

                <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 text-center group hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-slate-800 to-slate-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div
                    className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-24 lg:py-32 xl:py-40 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
        {/* Light Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/5 to-purple-300/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(90deg, rgb(148 163 184 / 0.1) 1px, transparent 1px),
              linear-gradient(rgb(148 163 184 / 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px] relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-blue-600 mb-8 shadow-lg shadow-blue-500/10"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              Proven Results
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Numbers that speak
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                for themselves
              </span>
            </motion.h2>
          </div>

          {/* Modern Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative p-10 lg:p-12 xl:p-14 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/60 hover:border-blue-300/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 text-center overflow-hidden">
                {/* Gradient Icon Background */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>

                {/* Subtle Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>

                {/* Floating Particles */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
                <div className="absolute bottom-8 right-12 w-2 h-2 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-200"></div>

                <div className="relative z-10 pt-12">
                  {/* Enhanced Number */}
                  <p className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold font-display mb-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-blue-600 group-hover:to-blue-700 transition-all duration-700 leading-none">
                    30%
                  </p>

                  {/* Enhanced Description */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-500">
                    Revenue Growth
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-500 leading-relaxed">
                    Average increase in monthly revenue within the first 90 days
                  </p>

                  {/* Subtle Accent Line */}
                  <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent group-hover:via-blue-500 transition-colors duration-500"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative p-10 lg:p-12 xl:p-14 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/60 hover:border-purple-300/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 text-center overflow-hidden">
                {/* Gradient Icon Background */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Users className="h-8 w-8 text-white" />
                </div>

                {/* Subtle Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>

                {/* Floating Particles */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
                <div className="absolute bottom-8 right-12 w-2 h-2 bg-pink-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-200"></div>

                <div className="relative z-10 pt-12">
                  {/* Enhanced Number */}
                  <p className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold font-display mb-4 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-purple-600 group-hover:to-purple-700 transition-all duration-700 leading-none">
                    2.5x
                  </p>

                  {/* Enhanced Description */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-900 transition-colors duration-500">
                    Customer Retention
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-500 leading-relaxed">
                    Higher retention rates compared to industry standards
                  </p>

                  {/* Subtle Accent Line */}
                  <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent group-hover:via-purple-500 transition-colors duration-500"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative p-10 lg:p-12 xl:p-14 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/60 hover:border-pink-300/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-700 text-center overflow-hidden">
                {/* Gradient Icon Background */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>

                {/* Subtle Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-pink-50/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>

                {/* Floating Particles */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-pink-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
                <div className="absolute bottom-8 right-12 w-2 h-2 bg-rose-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-200"></div>

                <div className="relative z-10 pt-12">
                  {/* Enhanced Number */}
                  <p className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold font-display mb-4 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:via-pink-600 group-hover:to-pink-700 transition-all duration-700 leading-none">
                    1M+
                  </p>

                  {/* Enhanced Description */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-pink-900 transition-colors duration-500">
                    Orders Processed
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-500 leading-relaxed">
                    Successfully processed orders across all platforms daily
                  </p>

                  {/* Subtle Accent Line */}
                  <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent group-hover:via-pink-500 transition-colors duration-500"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Accent */}
          <div className="mt-20 lg:mt-24 text-center">
            <div className="inline-flex items-center space-x-3 text-slate-500">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              <span className="text-sm font-medium">
                Real results from real businesses
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-slate-300 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Testimonials Section */}
      <section className="py-24 lg:py-32 xl:py-40 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Light Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/5 to-purple-300/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(90deg, rgb(148 163 184 / 0.1) 1px, transparent 1px),
              linear-gradient(rgb(148 163 184 / 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px] relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-blue-600 mb-8 shadow-lg shadow-blue-500/10"
            >
              <Quote className="h-4 w-4 mr-2 text-blue-500" />
              Customer Stories
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                What our customers
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                are saying
              </span>
            </motion.h2>
          </div>

          {/* Auto-scroll Testimonials */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

            <div
              ref={testimonialTrackRef}
              className="flex gap-8 overflow-hidden pb-6"
            >
              {loopTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.name}-${idx}`}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="group relative shrink-0 w-[320px] sm:w-[360px] lg:w-[400px]"
                >
                  <div className="relative p-8 lg:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/60 hover:border-blue-300/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 overflow-hidden">
                    {/* Quote Icon */}
                    <div
                      className={`absolute top-6 right-6 text-${testimonial.accentColor}-400/30 group-hover:text-${testimonial.accentColor}-500/50 transition-colors duration-500`}
                    >
                      <Quote className="h-8 w-8" />
                    </div>

                    {/* Subtle Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${testimonial.accentColor}-50/50 via-transparent to-${testimonial.accentColor}-50/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}
                    ></div>

                    {/* Floating Particles */}
                    <div
                      className={`absolute top-6 left-6 w-3 h-3 bg-${testimonial.accentColor}-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500`}
                    ></div>
                    <div
                      className={`absolute bottom-8 left-12 w-2 h-2 bg-${testimonial.accentColor}-300/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-200`}
                    ></div>

                    <div className="relative z-10">
                      {/* Rating */}
                      <div className="flex text-yellow-400 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-700 text-lg leading-relaxed mb-8 group-hover:text-slate-800 transition-colors duration-500">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        >
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="text-slate-900 font-semibold group-hover:text-slate-800 transition-colors duration-500">
                            {testimonial.name}
                          </p>
                          <p className="text-slate-600 text-sm group-hover:text-slate-700 transition-colors duration-500">
                            {testimonial.role}
                          </p>
                          <p className="text-slate-500 text-xs group-hover:text-slate-600 transition-colors duration-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Subtle Accent Line */}
                      <div
                        className={`mt-6 w-16 h-0.5 bg-gradient-to-r from-transparent via-${testimonial.accentColor}-300 to-transparent group-hover:via-${testimonial.accentColor}-500 transition-colors duration-500`}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="mt-20 lg:mt-24 text-center">
            <div className="inline-flex items-center space-x-3 text-slate-500">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              <span className="text-sm font-medium">
                Trusted by thousands of businesses worldwide
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-slate-300 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px]">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-green-200/50 bg-gradient-to-r from-green-50 to-blue-50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-green-600 mb-8 shadow-lg shadow-green-500/10"
            >
              <Shield className="h-4 w-4 mr-2 text-green-500" />
              Trust & Security
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-green-800 to-blue-800 bg-clip-text text-transparent">
                Enterprise-grade security
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Your data is protected with bank-level security and compliance
              standards
            </motion.p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: 'SOC 2 Compliant',
                description: 'Independently audited security controls',
                color: 'bg-green-500',
              },
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: 'GDPR Ready',
                description: 'Full compliance with data protection regulations',
                color: 'bg-blue-500',
              },
              {
                icon: <Clock className="h-8 w-8 text-white" />,
                title: '99.9% Uptime',
                description: 'Guaranteed availability with redundant systems',
                color: 'bg-purple-500',
              },
              {
                icon: <Headphones className="h-8 w-8 text-white" />,
                title: '24/7 Support',
                description: 'Round-the-clock expert assistance',
                color: 'bg-orange-500',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div
                  className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px]">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-blue-600 mb-8 shadow-lg shadow-blue-500/10"
            >
              <MessageSquare className="h-4 w-4 mr-2 text-blue-500" />
              FAQ
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Frequently asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                questions
              </span>
            </motion.h2>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: 'How quickly can I get started with PropelMeta?',
                answer:
                  'You can be up and running in under 5 minutes. Our onboarding process is designed to be simple and intuitive, with guided setup that connects to your existing tools automatically.',
              },
              {
                question: 'Do I need technical knowledge to use the platform?',
                answer:
                  'Not at all! PropelMeta is built for business owners and marketers, not developers. Our drag-and-drop interface and AI-powered suggestions make it easy for anyone to create professional campaigns.',
              },
              {
                question: 'What kind of support do you provide?',
                answer:
                  'We offer 24/7 customer support via chat, email, and phone. Plus, every customer gets access to our dedicated success manager and comprehensive knowledge base with video tutorials.',
              },
              {
                question: 'Can I integrate with my existing tools?',
                answer:
                  'Yes! PropelMeta integrates with over 200+ popular tools including Shopify, WordPress, Salesforce, HubSpot, Mailchimp, and many more. Our API also allows custom integrations.',
              },
              {
                question: 'Is there a free trial available?',
                answer:
                  'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can cancel anytime during the trial period.',
              },
              {
                question: 'How does the pricing work?',
                answer:
                  'Our pricing is transparent and scales with your business. We offer flexible monthly and annual plans based on your usage and features needed. Contact us for custom enterprise pricing.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="mb-4"
              >
                <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-4 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg font-semibold text-slate-900 pr-4 sm:pr-8">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === idx ? (
                        <Minus className="h-5 w-5 text-blue-600" />
                      ) : (
                        <Plus className="h-5 w-5 text-slate-400" />
                      )}
                    </div>
                  </button>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-5 sm:px-8 sm:pb-6"
                    >
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px]">
          <div className="rounded-3xl border border-blue-500/50 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-6 sm:p-10 md:p-20 text-center shadow-2xl shadow-blue-700/40">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
                Get Early Access to PropelMeta
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                Join our waitlist today and be among the first to experience a
                smarter, faster, and more efficient way to grow your business.
              </p>
              <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email*"
                  className="h-12 w-full text-base bg-white border-slate-200 text-slate-900 placeholder:text-slate-500 focus-visible:ring-blue-500"
                />
                <Button
                  type="submit"
                  className="h-12 w-full sm:w-auto px-8 text-base font-semibold bg-white text-slate-900 hover:bg-slate-100"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
