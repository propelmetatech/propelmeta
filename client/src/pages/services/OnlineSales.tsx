import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { EarlyAccessSection } from '@/components/EarlyAccessSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import {
  ShoppingCart,
  CreditCard,
  Truck,
  BarChart3,
  Package,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Clock,
} from 'lucide-react';

export default function OnlineSales() {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: 'Complete E-commerce',
      description:
        'Full-featured online store with product catalog, inventory management, and order processing.',
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Secure Payments',
      description:
        'Accept all major payment methods with PCI-compliant security and fraud protection.',
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Delivery Management',
      description:
        'Integrated delivery system with real-time tracking and driver management tools.',
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: 'Inventory Sync',
      description:
        'Real-time inventory tracking across all sales channels with low-stock alerts.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Sales Analytics',
      description:
        'Detailed reports on sales performance, customer behavior, and revenue trends.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Customer Management',
      description:
        'Complete CRM with customer profiles, order history, and communication tools.',
    },
  ];

  const benefits = [
    'Keep 100% of your profits - no commission fees',
    'Own your customer data and relationships',
    'Integrated with your existing systems',
    'Multi-channel selling (online, mobile, in-store)',
    'Automated tax calculations and reporting',
    'Built-in marketing and promotional tools',
    'Scalable infrastructure that grows with you',
    '24/7 technical support and maintenance',
  ];

  const salesChannels = [
    {
      title: 'Online Store',
      description:
        'Beautiful, conversion-optimized e-commerce website that works on all devices.',
      icon: <ShoppingCart className="h-8 w-8" />,
      features: [
        'Product catalog',
        'Shopping cart',
        'Checkout',
        'Customer accounts',
      ],
    },
    {
      title: 'Mobile App',
      description:
        'Native iOS and Android apps for seamless mobile shopping experience.',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Push notifications',
        'One-tap ordering',
        'Loyalty rewards',
        'Offline browsing',
      ],
    },
    {
      title: 'In-Store POS',
      description:
        'Point-of-sale system that syncs with your online inventory and customer data.',
      icon: <Package className="h-8 w-8" />,
      features: [
        'Barcode scanning',
        'Receipt printing',
        'Staff management',
        'Inventory sync',
      ],
    },
    {
      title: 'Social Commerce',
      description:
        'Sell directly on social media platforms with integrated shopping features.',
      icon: <DollarSign className="h-8 w-8" />,
      features: [
        'Facebook shop',
        'Instagram shopping',
        'Social ads',
        'Influencer tools',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      company: 'TechGadgets Pro',
      content:
        'Switching to PropelMeta saved us $15,000 monthly in commission fees. Our profit margins increased by 35% while sales grew 200%!',
      rating: 5,
      monthlySales: '$85,000',
    },
    {
      name: 'Lisa Thompson',
      company: 'Artisan Crafts Co.',
      content:
        'The integrated system manages everything - inventory, orders, shipping, and customers. We can focus on creating while the system handles sales.',
      rating: 5,
      monthlySales: '$42,000',
    },
  ];

  const pricingComparison = [
    {
      platform: 'Third-party Marketplaces',
      commission: '15-30%',
      monthlyFee: '$39-299',
      customerData: 'Limited',
      branding: 'Restricted',
    },
    {
      platform: 'PropelMeta',
      commission: '0%',
      monthlyFee: '$99',
      customerData: 'Full ownership',
      branding: 'Complete control',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-red-50/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-red-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-orange-200/50 bg-gradient-to-r from-orange-50 to-red-50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-orange-600 mb-8">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Online Sales System
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-slate-900 leading-tight mb-6">
                Take Back Your{' '}
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                  Margins
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A complete ordering and delivery system that you own. Say
                goodbye to high commission fees from third-party marketplaces
                and keep 100% of your profits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-xl shadow-orange-500/25 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                  >
                    <DollarSign className="h-5 w-5 mr-2" />
                    Start Selling
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl"
                  >
                    Calculate Savings
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>0% commission</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Own your data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Full control</span>
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
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&h=600&fit=crop&crop=center"
                  alt="E-commerce Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-red-500/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Stop Paying High Commissions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how much you could save by switching from third-party
              marketplaces to your own sales system.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-2xl bg-red-50 border border-red-200"
              >
                <h3 className="text-2xl font-bold text-red-800 mb-6">
                  Third-party Marketplaces
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Commission Fees</span>
                    <span className="font-bold text-red-600">15-30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Monthly Fees</span>
                    <span className="font-bold text-red-600">$39-299</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Customer Data</span>
                    <span className="font-bold text-red-600">Limited</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Branding Control</span>
                    <span className="font-bold text-red-600">Restricted</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-100 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Example:</strong> $10,000 monthly sales =
                    $1,500-3,000 in fees
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-2xl bg-green-50 border border-green-200 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    RECOMMENDED
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-6">
                  PropelMeta System
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Commission Fees</span>
                    <span className="font-bold text-green-600">0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Monthly Fees</span>
                    <span className="font-bold text-green-600">$99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Customer Data</span>
                    <span className="font-bold text-green-600">
                      Full Ownership
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Branding Control</span>
                    <span className="font-bold text-green-600">Complete</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Example:</strong> $10,000 monthly sales = $99 total
                    cost
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-800">
                    Save $1,401-2,901 monthly
                  </div>
                  <div className="text-green-600">on $10,000 in sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Channels Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-orange-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Sell Everywhere
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              One unified system that manages sales across all channels -
              online, mobile, in-store, and social.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {salesChannels.map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-slate-200/70/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {channel.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {channel.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  {channel.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {channel.features.map((feature, featureIdx) => (
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
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Complete Sales Solution
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to run a successful online business, all in
              one integrated platform.
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
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-8">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Why Own Your Sales System?
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
                  alt="Sales Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Real Results
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
                className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50/50 border border-orange-100/50"
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
                    <DollarSign className="h-4 w-4" />
                    <span>{testimonial.monthlySales}/month</span>
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

      <EarlyAccessSection source="service-online-sales" />
    </Layout>
  );
}




