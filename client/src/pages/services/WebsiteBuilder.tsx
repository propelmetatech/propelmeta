import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { ServiceHeroBanner } from '@/components/ServiceHeroBanner';
import { EarlyAccessSection } from '@/components/EarlyAccessSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import {
  Globe,
  Zap,
  Search,
  Smartphone,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
} from 'lucide-react';
import heroBannerImage from '@/assests/bannerImageWeb Site.png';

export default function WebsiteBuilder() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'AI-Powered Design',
      description:
        'Our AI analyzes your industry and creates a custom website tailored to your business needs.',
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: 'SEO Optimized',
      description:
        'Built-in SEO tools ensure your website ranks higher in search results from day one.',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Responsive',
      description:
        'Your website looks perfect on all devices - desktop, tablet, and mobile.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Analytics Dashboard',
      description:
        'Track visitor behavior, conversion rates, and performance metrics in real-time.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Hosting',
      description:
        'Enterprise-grade security with SSL certificates and daily backups included.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Lightning Fast',
      description:
        'Optimized for speed with global CDN ensuring fast loading times worldwide.',
    },
  ];

  const benefits = [
    'Drag-and-drop editor - no coding required',
    'Professional templates for every industry',
    'Custom domain and email included',
    'E-commerce ready with payment integration',
    '24/7 customer support',
    'Free SSL certificate and security',
    'Automatic backups and updates',
    'Integration with marketing tools',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Bloom Bakery',
      content:
        'PropelMeta helped us create a stunning website in just 2 hours. Our online orders increased by 300% in the first month!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      company: 'TechStart Solutions',
      content:
        'The AI design suggestions were spot-on for our tech startup. We launched faster than ever and our conversion rate is amazing.',
      rating: 5,
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden pt-16 pb-12 min-h-[600px] bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
        {/* Background Image on Left Side */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBannerImage}
            alt="Website Design & Development Services"
            className="w-full h-full object-cover rounded-r-[3rem]"
          />
        </div>

        {/* Decorative blur effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto lg:ml-[35px] max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
            {/* Left Side - Content (overlays the background) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 py-8 rounded-2xl pl-[30px] pr-0 lg:-ml-10 lg:mr-6"
            >
              <div className="inline-flex items-center rounded-full border border-white/40 bg-transparent px-4 py-2 text-sm font-medium text-white mb-6">
                <Globe className="h-4 w-4 mr-2" />
                Website Design & Development
              </div>

              <h1 className="font-bold font-display text-white mb-4 text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Build Your Dream Website in{' '}
                <span className="text-white">
                  Minutes
                </span>
              </h1>

              <p className="text-white/90 mb-4 text-sm sm:text-base leading-relaxed">
                Create stunning, high-converting websites with our AI-powered
                builder. No coding required - just tell us about your business
                and watch the magic happen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-xl shadow-blue-500/25 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    Start Building Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl border-white/60 text-white hover:bg-white/10"
                  >
                    View Examples
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/85">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>

            {/* Empty right side for background image */}
            <div className="hidden lg:block lg:col-span-7"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Everything you need to create a professional website that converts
              visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200/70/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bold font-display mb-8">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Why Choose Our Website Builder?
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                  alt="Website Analytics Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                What Our Customers Say
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
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50/50 border border-blue-100/50"
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

      <EarlyAccessSection source="service-website-builder" />
    </Layout>
  );
}
