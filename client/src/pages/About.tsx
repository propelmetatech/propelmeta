import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold font-display text-slate-900 mb-8">
            We're on a mission to empower local businesses.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            PropelMeta was founded with a simple goal: to give independent business owners the same technology superpowers as the big giants.
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Unsplash: Team working together */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop" 
              alt="Our Team" 
              className="rounded-3xl shadow-xl w-full h-full object-cover min-h-[400px]"
            />
          </div>
          <div className="bg-blue-600 rounded-3xl p-12 text-white flex flex-col justify-center">
            <span className="text-6xl font-bold font-display mb-4">100+</span>
            <p className="text-xl text-blue-100">Team members across 12 countries</p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-slate-600">
            <p>
              It started in 2020. As the world shifted online overnight, we watched countless amazing local businesses struggle to adapt. They didn't have the tools, the budget, or the technical expertise to compete with digital-native giants.
            </p>
            <p>
              We believed that wasn't right. Great products and services deserve to be found, regardless of the size of the company behind them.
            </p>
            <p>
              So we built PropelMeta. Not just a website builder, but a complete growth engine. We combined marketing automation, online ordering, and mobile apps into one seamless platform.
            </p>
            <p>
              Today, we're proud to power thousands of businesses, helping them process millions in revenue and build lasting relationships with their customers.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-display text-slate-900 text-center mb-16">Meet the Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Sarah Chen", role: "CEO & Co-founder", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
              { name: "David Miller", role: "CTO & Co-founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
              { name: "Emily Zhang", role: "VP of Product", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
              { name: "James Wilson", role: "Head of Growth", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
            ].map((leader) => (
              <div key={leader.name} className="text-center group">
                <div className="mb-6 relative mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-slate-50 group-hover:border-primary/20 transition-all duration-300">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-slate-500 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
