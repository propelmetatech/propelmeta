import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import {
  Eye,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

const differentiators = [
  {
    title: 'Results-focused approach',
    description:
      'Every strategy is designed around measurable outcomes for visibility, engagement, and revenue.',
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: 'Creative + technical expertise',
    description:
      'We combine brand storytelling, content systems, performance marketing, and modern product execution.',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: 'Transparent communication',
    description:
      'You always know what we are doing, why we are doing it, and how it impacts growth.',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: 'Customized growth strategies',
    description:
      'No generic playbooks. We tailor plans around your market, business model, and goals.',
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: 'Long-term partnership mindset',
    description:
      'We focus on sustainable online success and strong execution over the long run.',
    icon: <Rocket className="h-5 w-5" />,
  },
];

export default function About() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/60 pt-20 pb-14 sm:pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                About Us
              </span>
              <h1 className="mt-5 font-bold font-display text-slate-900">
                Who We Are
              </h1>
              <p className="mt-5 text-slate-600">
                <strong>PropelMeta Tech</strong> is a digital marketing and
                technology agency built to help businesses grow smarter, faster,
                and stronger in today&apos;s digital-first world.
              </p>
              <p className="mt-4 text-slate-600">
                We specialize in helping{' '}
                <strong>restaurants and service-based businesses</strong>{' '}
                increase visibility, engagement, and revenue through powerful
                marketing strategies and modern technology.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Team planning growth strategy"
                  className="h-[280px] sm:h-[360px] w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Eye className="h-4 w-4 text-blue-600" />
                    Digital Growth Partner
                  </div>
                  <p className="mt-2 text-slate-500">
                    Strategy, execution, automation, and reporting built for
                    modern business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-bold font-display text-slate-900">
                Our Mission
              </h2>
              <p className="mt-4 text-slate-600">
                To empower brands with{' '}
                <strong>
                  creative, data-driven, and automated digital solutions
                </strong>{' '}
                that drive measurable growth.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Eye className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-bold font-display text-slate-900">
                Our Vision
              </h2>
              <p className="mt-4 text-slate-600">
                To become a trusted global digital partner for businesses
                seeking sustainable online success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100/50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-bold font-display text-slate-900">
              What Makes Us Different
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-7 sm:p-10 text-white shadow-2xl">
                <p className="font-semibold uppercase tracking-[0.18em] text-blue-200">
                  Our Promise
                </p>
                <p className="mt-4 font-semibold">
                  We treat your brand like our own - with care, creativity, and
                  accountability.
                </p>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="h-11 px-6 text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100">
                      Let&apos;s Build Together
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                  alt="Digital team collaboration"
                  className="h-[260px] sm:h-[340px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
