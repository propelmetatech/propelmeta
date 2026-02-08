import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import {
  Smartphone,
  Bell,
  Heart,
  ShoppingBag,
  Star,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Download,
  Palette,
  Shield,
} from 'lucide-react';

export default function MobileApps() {
  const features = [
    {
      icon: <Bell className="h-6 w-6" />,
      title: 'Push Notifications',
      description:
        'Send targeted notifications to re-engage customers and drive immediate action.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Loyalty Programs',
      description:
        'Built-in loyalty system with points, rewards, and exclusive member benefits.',
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: 'One-Tap Ordering',
      description:
        'Streamlined checkout process that reduces cart abandonment by 60%.',
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Brand Customization',
      description:
        'Fully customizable design that matches your brand colors, fonts, and style.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Customer Profiles',
      description:
        'Detailed customer insights and preferences for personalized experiences.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Payments',
      description:
        'Enterprise-grade security with multiple payment options and fraud protection.',
    },
  ];

  const appTypes = [
    {
      title: 'Restaurant & Food',
      description:
        'Menu browsing, online ordering, table reservations, and loyalty rewards.',
      icon: <ShoppingBag className="h-8 w-8" />,
      features: [
        'Digital menu',
        'Order tracking',
        'Table booking',
        'Reviews & ratings',
      ],
    },
    {
      title: 'Retail & E-commerce',
      description:
        'Product catalog, shopping cart, wishlist, and personalized recommendations.',
      icon: <Star className="h-8 w-8" />,
      features: ['Product search', 'Wishlist', 'Size guides', 'AR try-on'],
    },
    {
      title: 'Service Business',
      description:
        'Appointment booking, service catalog, customer communication, and reviews.',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Booking system',
        'Service menu',
        'Chat support',
        'Portfolio gallery',
      ],
    },
    {
      title: 'Fitness & Wellness',
      description:
        'Class schedules, membership management, progress tracking, and community.',
      icon: <Heart className="h-8 w-8" />,
      features: [
        'Class booking',
        'Workout plans',
        'Progress tracking',
        'Community feed',
      ],
    },
  ];

  const benefits = [
    'Increase customer retention by 3x',
    'Boost average order value by 25%',
    'Reduce customer acquisition costs',
    'Direct communication channel with customers',
    'Higher engagement than mobile websites',
    'Offline functionality for better UX',
    'App store visibility and discovery',
    'Detailed analytics and user insights',
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      company: 'Bella Vista Restaurant',
      content:
        'Our mobile app increased repeat orders by 250%! Customers love the convenience and our loyalty program keeps them coming back.',
      rating: 5,
      appDownloads: '5,000+',
    },
    {
      name: 'James Wilson',
      company: 'FitLife Gym',
      content:
        'The app transformed how we connect with members. Class bookings are up 400% and member engagement has never been higher.',
      rating: 5,
      appDownloads: '3,200+',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-pink-50 via-white to-purple-50/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-pink-200/50 bg-gradient-to-r from-pink-50 to-purple-50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-pink-600 mb-8">
                <Smartphone className="h-4 w-4 mr-2" />
                Branded Mobile Apps
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-slate-900 leading-tight mb-6">
                Stay in Your Customers'{' '}
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Pockets
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Launch your own iOS and Android mobile app to build deeper
                customer relationships, increase loyalty, and drive more repeat
                business than ever before.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-xl shadow-pink-500/25 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Launch Your App
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl"
                  >
                    View App Examples
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>iOS & Android</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>App store submission</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Ongoing updates</span>
                </div>
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
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center"
                  alt="Mobile App Interface"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Apps for Every Business
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pre-designed app templates optimized for different industries and
              business types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50/50 to-purple-50/30 hover:from-pink-50 hover:to-purple-50 hover:shadow-xl transition-all duration-300 border border-pink-100/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {type.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  {type.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {type.features.map((feature, featureIdx) => (
                    <div
                      key={featureIdx}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-pink-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Powerful App Features
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to create an engaging mobile experience that
              keeps customers coming back.
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
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-8">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Why Mobile Apps Win
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                  alt="Mobile App Analytics"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                App Success Stories
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
                className="p-8 rounded-2xl bg-white border border-pink-100/50 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Download className="h-4 w-4" />
                    <span>{testimonial.appDownloads} downloads</span>
                  </div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-pink-700 to-purple-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Ready to Launch Your Mobile App?
            </h2>
            <p className="text-xl text-pink-100/90 mb-10 max-w-2xl mx-auto">
              Join hundreds of businesses using mobile apps to increase customer
              loyalty and drive more sales.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl bg-white text-pink-700 hover:bg-pink-50"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Start Building
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl border-white/80 text-white hover:bg-white/10"
                >
                  See App Demo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}




