import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { ServiceHeroBanner } from '@/components/ServiceHeroBanner';
import { EarlyAccessSection } from '@/components/EarlyAccessSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import {
  MessageSquare,
  Mail,
  Smartphone,
  Target,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
} from 'lucide-react';

export default function MarketingAutomation() {
  const features = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Campaigns',
      description:
        'Create beautiful, personalized email campaigns that drive engagement and conversions.',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'SMS Marketing',
      description:
        'Reach customers instantly with targeted SMS messages and promotional offers.',
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Customer Segmentation',
      description:
        'Automatically segment customers based on behavior, preferences, and purchase history.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Performance Analytics',
      description:
        'Track open rates, click-through rates, and ROI with detailed analytics dashboards.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Lead Nurturing',
      description:
        'Automatically nurture leads through personalized drip campaigns and workflows.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Automated Workflows',
      description:
        'Set up complex automation workflows that run 24/7 without manual intervention.',
    },
  ];

  const benefits = [
    'Increase customer lifetime value by 300%',
    'Reduce manual marketing tasks by 80%',
    'Improve email open rates by 45%',
    'Boost conversion rates with personalization',
    'Recover abandoned carts automatically',
    'Welcome new customers with onboarding sequences',
    'Re-engage inactive customers',
    'A/B test campaigns for optimal performance',
  ];

  const automationTypes = [
    {
      title: 'Welcome Series',
      description:
        'Automatically welcome new subscribers with a series of engaging emails.',
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: 'Abandoned Cart Recovery',
      description:
        'Win back customers who left items in their cart with targeted reminders.',
      icon: <MessageSquare className="h-8 w-8" />,
    },
    {
      title: 'Birthday & Anniversary',
      description:
        'Send personalized offers on special occasions to increase loyalty.',
      icon: <Star className="h-8 w-8" />,
    },
    {
      title: 'Re-engagement Campaigns',
      description:
        'Automatically reach out to inactive customers with special offers.',
      icon: <TrendingUp className="h-8 w-8" />,
    },
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Fashion Forward Boutique',
      content:
        "Our email marketing ROI increased by 400% after implementing PropelMeta's automation. The abandoned cart recovery alone pays for itself!",
      rating: 5,
    },
    {
      name: 'David Thompson',
      company: 'TechGear Solutions',
      content:
        'The SMS marketing feature helped us reach customers instantly. Our flash sale generated $50K in revenue in just 2 hours!',
      rating: 5,
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden pt-16 pb-8 bg-gradient-to-br from-purple-50 via-white to-pink-50/30">
        {/* Hero Section */}
        <ServiceHeroBanner />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto lg:ml-[35px] max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-purple-600 mb-8">
                <MessageSquare className="h-4 w-4 mr-2" />
                Marketing Automation
              </div>

              <h1 className="font-bold font-display text-slate-900 mb-6">
                Put Your Growth on{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Autopilot
                </span>
              </h1>

              <p className="text-slate-600 mb-8">
                Engage customers at the right time with the right message. Our
                smart automation platform drives repeat sales while you focus on
                growing your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/demo" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto sm:min-w-[220px] justify-center text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-xl shadow-blue-500/25 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    Start Automating
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto sm:min-w-[220px] justify-center text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl"
                  >
                    See Examples
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Setup in minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>No contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>24/7 support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-[650px] mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/70">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                  alt="Marketing Automation Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Smart Automation Types
              </span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Pre-built automation workflows that start working immediately to
              grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50/50 to-pink-50/30 hover:from-purple-50 hover:to-pink-50 hover:shadow-xl transition-all duration-300 border border-purple-100/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="font-bold mb-4 text-slate-900">{type.title}</h3>
                <p className="text-slate-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Everything you need to create sophisticated marketing campaigns
              that convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-slate-200/70/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bold font-display mb-8">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Results You Can Expect
                </span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-[650px] mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
                  alt="Marketing Analytics"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-white border border-purple-100/50 shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EarlyAccessSection source="service-marketing-automation" />
    </Layout>
  );
}

