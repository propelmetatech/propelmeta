import { Layout } from "@/components/Layout";
import { Check, Globe, MessageSquare, ShoppingCart, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Products() {
  const products = [
    {
      id: "websites",
      title: "AI Website Builder",
      subtitle: "Your digital storefront, perfected.",
      description: "Create stunning, high-converting websites in minutes. Our AI analyzes your industry and builds a site optimized for SEO and conversion.",
      features: ["Drag-and-drop editor", "Mobile-responsive", "Built-in SEO tools", "Fast hosting included"],
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1481487484168-9b930d552086?w=800&h=600&fit=crop"
    },
    {
      id: "automation",
      title: "Marketing Automation",
      subtitle: "Growth on autopilot.",
      description: "Engage customers at the right time with the right message. Automated email and SMS campaigns that drive repeat business without the manual work.",
      features: ["Email drip campaigns", "SMS marketing", "Customer segmentation", "Performance analytics"],
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: "apps",
      title: "Branded Mobile Apps",
      subtitle: "Stay in your customers' pockets.",
      description: "Launch your own iOS and Android app. Increase loyalty and retention with a dedicated mobile experience for your brand.",
      features: ["Push notifications", "Loyalty programs", "One-tap ordering", "Brand customization"],
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
    },
    {
      id: "commerce",
      title: "Online Sales System",
      subtitle: "Take back your margins.",
      description: "A complete ordering and delivery system that you own. Say goodbye to high commission fees from third-party marketplaces.",
      features: ["Commission-free", "Driver management", "Inventory sync", "Secure payments"],
      icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&h=600&fit=crop"
    }
  ];

  return (
    <Layout>
      <div className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-6">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive suite of tools built to help your business grow online, offline, and everywhere in between.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14 sm:py-20">
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-6 sm:space-y-8">
                <div className="inline-flex p-3 rounded-2xl bg-slate-100 mb-4">
                  {product.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-slate-900 mb-2">{product.title}</h2>
                  <p className="text-lg sm:text-xl text-primary font-medium">{product.subtitle}</p>
                </div>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {product.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-700">
                      <div className="bg-green-100 rounded-full p-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/demo">
                    <Button size="lg" className="w-full sm:w-auto rounded-xl px-6 sm:px-8">
                      Get Started with {product.title}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 group">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  {/* Unsplash image with descriptive comment */}
                  {/* Technology product visualization */}
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-slate-900 py-14 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-8">
            Not sure what you need?
          </h2>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
