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
  Plus,
  Minus,
  Award,
  Lightbulb,
  Settings,
  Headphones,
} from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { AutoScrollCarousel } from '@/components/AutoScrollCarousel';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Sample carousel data with modern marketing visuals
  const carouselItems = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
      title: 'AI-Powered Analytics Dashboard',
      description:
        'Real-time insights and predictive analytics to drive your business decisions with confidence.',
      stats: {
        label: 'Revenue Growth',
        value: '+47% This Quarter',
        color: 'bg-emerald-500',
      },
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
      title: 'Marketing Automation Hub',
      description:
        'Streamline your campaigns across all channels with intelligent automation and personalization.',
      stats: {
        label: 'Conversion Rate',
        value: '12.8% Average',
        color: 'bg-blue-500',
      },
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center',
      title: 'Customer Experience Platform',
      description:
        'Deliver exceptional experiences at every touchpoint with our unified customer platform.',
      stats: {
        label: 'Customer Satisfaction',
        value: '98.5% Rating',
        color: 'bg-purple-500',
      },
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center',
      title: 'E-commerce Integration',
      description:
        'Seamlessly connect your online store with powerful sales and inventory management tools.',
      stats: {
        label: 'Sales Increase',
        value: '+156% YoY',
        color: 'bg-orange-500',
      },
    },
  ];

  const features = [
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: 'AI Website Builder',
      description:
        'Convert more visitors with high-performance, SEO-optimized websites built in minutes.',
      color: 'bg-blue-500',
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: 'Marketing Automation',
      description:
        'Put your growth on autopilot with smart email & SMS campaigns that drive repeat sales.',
      color: 'bg-purple-500',
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: 'Branded Apps',
      description:
        'Launch your own iOS and Android mobile app to build customer loyalty directly.',
      color: 'bg-pink-500',
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-white" />,
      title: 'Online Sales',
      description:
        'Seamless ordering and delivery systems that keep 100% of your profits.',
      color: 'bg-orange-500',
    },
  ];

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
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 items-center">
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
              <h1 className="text-5xl md:text-7xl font-bold font-display text-slate-900 leading-[1.1] mb-8">
                Transform Your Business with <br />
                <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Intelligent Marketing
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Harness the power of AI-driven insights, automation, and
                personalization to accelerate growth and maximize ROI across all
                your marketing channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-blue-500/30 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/40"
                  >
                    <Rocket className="h-5 w-5 mr-2" />
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-10 py-7 rounded-2xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <BarChart3 className="h-5 w-5 mr-2" />
                    View Demo
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
              className="lg:col-span-7 xl:col-span-7 relative min-h-[280px] lg:min-h-[320px] pb-20 lg:pb-24 flex items-center justify-center"
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

        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px] relative z-10">
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
              className="text-5xl lg:text-6xl xl:text-7xl font-bold font-display mb-6 leading-tight"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  y: -16,
                  scale: 1.05,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="group relative cursor-pointer"
              >
                {/* Card Container with Advanced Styling */}
                <div className="relative p-8 lg:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/30 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden h-full group-hover:border-blue-300/50">
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
                    <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 group-hover:translate-x-1 transition-all duration-500 delay-100">
                      <span className="text-sm font-semibold mr-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Learn more
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Subtle Corner Accents */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-200/0 group-hover:border-blue-300/60 rounded-tr-2xl transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-200/0 group-hover:border-purple-300/60 rounded-bl-2xl transition-all duration-500 delay-100"></div>
                </div>
              </motion.div>
            ))}
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

        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px] relative z-10">
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
              className="text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-6 leading-tight"
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

        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px] relative z-10">
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
              className="text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-4 leading-tight"
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
                  <p className="text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-blue-600 group-hover:to-blue-700 transition-all duration-700 leading-none">
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
                  <p className="text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-4 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-purple-600 group-hover:to-purple-700 transition-all duration-700 leading-none">
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
                  <p className="text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-4 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:via-pink-600 group-hover:to-pink-700 transition-all duration-700 leading-none">
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

        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px] relative z-10">
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
              className="text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-6 leading-tight"
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

          {/* Modern Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative"
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
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
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
              className="text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight"
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
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
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
              className="text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-6 leading-tight"
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
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-slate-900 pr-8">
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
                      className="px-8 pb-6"
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

      {/* CTA Section */}
      <section className="py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px]">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/30">
            {/* Enhanced Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/20 to-purple-300/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300/20 to-white/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            {/* Animated particles */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-200/40 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-purple-200/40 rounded-full animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Ready to transform your business?
              </h2>
              <p className="text-xl text-blue-100/90 mb-10 leading-relaxed">
                Join thousands of businesses using PropelMeta to grow faster and
                smarter.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 h-auto rounded-xl bg-white text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Book a Free Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 h-auto rounded-xl border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
