import { Layout } from "@/components/Layout";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$199",
      description: "Perfect for small businesses just getting started online.",
      features: [
        "AI Website Builder",
        "Online Ordering",
        "Basic Analytics",
        "Email Support",
        "1 Admin User"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Growth",
      price: "$399",
      description: "Everything growing businesses need to scale revenue.",
      features: [
        "Everything in Starter",
        "Marketing Automation",
        "SMS Campaigns",
        "Advanced Analytics",
        "Priority Support",
        "5 Admin Users"
      ],
      cta: "Get Growth",
      popular: true
    },
    {
      name: "Scale",
      price: "$699",
      description: "Advanced features for multi-location brands.",
      features: [
        "Everything in Growth",
        "Branded Mobile App",
        "Custom Integrations",
        "Dedicated Success Manager",
        "API Access",
        "Unlimited Users"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-900"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold font-display mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose the plan that's right for your business. No hidden fees, cancel anytime.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-3xl p-8 bg-white shadow-xl flex flex-col ${
                tier.popular 
                  ? "border-2 border-primary relative transform md:-translate-y-4" 
                  : "border border-slate-100"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tier.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={tier.name === "Scale" ? "/contact" : "/demo"}>
                <Button 
                  className={`w-full py-6 rounded-xl text-lg font-semibold ${
                    tier.popular 
                      ? "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30" 
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold font-display text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time." },
              { q: "Is there a setup fee?", a: "No, all plans include free onboarding and setup assistance." },
              { q: "Do I need technical skills?", a: "Not at all. Our platform is designed for business owners, not developers." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
