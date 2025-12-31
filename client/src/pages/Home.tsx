import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe, Zap, Smartphone, ShoppingCart, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

export default function Home() {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "AI Website Builder",
      description: "Convert more visitors with high-performance, SEO-optimized websites built in minutes.",
      color: "bg-blue-500"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Marketing Automation",
      description: "Put your growth on autopilot with smart email & SMS campaigns that drive repeat sales.",
      color: "bg-purple-500"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: "Branded Apps",
      description: "Launch your own iOS and Android mobile app to build customer loyalty directly.",
      color: "bg-pink-500"
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-white" />,
      title: "Online Sales",
      description: "Seamless ordering and delivery systems that keep 100% of your profits.",
      color: "bg-orange-500"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                New: AI-Powered Analytics
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display text-slate-900 leading-[1.1] mb-6">
                The All-in-One <br />
                <span className="text-gradient">Marketing Platform</span> <br />
                for Growth
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stop juggling multiple tools. PropelMeta gives you everything you need to build your online presence, market to customers, and drive sales — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20">
                    Book a Demo
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2">
                    View Products
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <p>Trusted by 1,000+ businesses</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-100 p-2 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Unsplash image: dashboard interface */}
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" 
                  alt="Dashboard Preview" 
                  className="rounded-xl w-full h-auto"
                />
                
                {/* Floating Card 1 */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce duration-[3000ms]">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Revenue</p>
                    <p className="text-lg font-bold text-slate-900">+32% This Month</p>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">New Leads</p>
                    <p className="text-lg font-bold text-slate-900">128 Today</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Powering the world's fastest growing brands
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text placeholders for logos as per instruction to minimize assets, normally would use SVGs */}
            {["Acme Corp", "GlobalTech", "Nebula", "Trio", "FoxRun"].map((brand) => (
              <span key={brand} className="text-xl font-bold font-display text-slate-800">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-4">
              Everything you need to scale
            </h2>
            <p className="text-xl text-slate-600">
              A comprehensive suite of tools designed to work together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className={`${feature.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-6xl font-bold font-display mb-2 text-blue-400">30%</p>
              <p className="text-lg text-slate-300">Average Revenue Increase</p>
            </div>
            <div>
              <p className="text-6xl font-bold font-display mb-2 text-purple-400">2.5x</p>
              <p className="text-lg text-slate-300">Customer Retention Rate</p>
            </div>
            <div>
              <p className="text-6xl font-bold font-display mb-2 text-pink-400">1M+</p>
              <p className="text-lg text-slate-300">Orders Processed Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-xl text-blue-100 mb-10">
                Join thousands of businesses using PropelMeta to grow faster and smarter.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/demo">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto rounded-xl bg-white text-primary hover:bg-blue-50">
                    Book a Free Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto rounded-xl border-white text-white hover:bg-white/10">
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
