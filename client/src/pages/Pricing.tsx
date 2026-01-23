import { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { FaqAccordion } from '@/components/FaqAccordion';

export default function Pricing() {
  const stripePublishableKey =
    import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ??
    'pk_test_51SofdnDZeN1YHWHryTmXX3SASdS4IJglBR1GNcBa7olvu59kvqiP3LpvwT7TIb3J5TgNJeuc5oWcbhhPWeDOvCgw00rq4wkTpp';

  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, all plans include free onboarding and setup assistance.',
    },
    {
      question: 'Do I need technical skills?',
      answer:
        'Not at all. Our platform is designed for business owners, not developers.',
    },
  ];

  useEffect(() => {
    const scriptSrc = 'https://js.stripe.com/v3/pricing-table.js';
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = scriptSrc;
    document.head.appendChild(script);
  }, []);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-36 left-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at top, rgba(59, 130, 246, 0.25), transparent 55%)',
            }}
          ></div>
        </div>

        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[1800px] relative z-10 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur mb-6">
              Transparent plans, built for scale
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              Pricing that grows with your business
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Choose the plan that fits today and scale when you are ready. No
              hidden fees, no long-term contracts.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-300"></span>
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-300"></span>
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-300"></span>
                Priority support
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-20 relative z-20 pb-24">
        <div className="rounded-3xl bg-white p-6 shadow-xl md:p-10">
          {stripePublishableKey ? (
            <stripe-pricing-table
              pricing-table-id="prctbl_1SsKCADZeN1YHWHr7yPTVNq5"
              publishable-key={stripePublishableKey}
            />
          ) : (
            <p className="text-center text-sm text-slate-500">
              Set VITE_STRIPE_PUBLISHABLE_KEY to display pricing.
            </p>
          )}
        </div>
      </div>

      <section className="bg-white pb-24">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-slate-50 p-6 shadow-lg md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900 text-center mb-8">
              Extra Addon Features
            </h3>
            {stripePublishableKey ? (
              <stripe-pricing-table
                pricing-table-id="prctbl_1SsPyiDZeN1YHWHryHnTzGIc"
                publishable-key={stripePublishableKey}
              />
            ) : (
              <p className="text-center text-sm text-slate-500">
                Set VITE_STRIPE_PUBLISHABLE_KEY to display pricing.
              </p>
            )}
            <div className="mt-8 flex justify-center">
              <a href="/policies">
                <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
                  Refund & Cancellation Policies
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold font-display text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </Layout>
  );
}
