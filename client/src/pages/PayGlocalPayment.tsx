import { useEffect, useState } from 'react';
import { BadgeCheck, CheckCircle2, Loader2 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type BillingCycle = 'monthly' | 'yearly';
type Tier = 'standard' | 'premium' | 'elite';

type Plan = {
  tier: Tier;
  title: string;
  summary: string;
  monthlyPrice: string;
  yearlyMonthlyPrice: string;
  yearlyBilled: string;
  featured?: boolean;
  features: string[];
};

const API_BASE_URL =
  (import.meta.env.VITE_PAYGLOCAL_API_BASE_URL as string | undefined) ||
  'http://localhost:3001';
const CURRENCY_SYMBOL =
  (import.meta.env.VITE_PAYGLOCAL_CURRENCY_SYMBOL as string | undefined) || '$';
const TXN_STORAGE_KEY = 'payglocal_merchant_txn_id';
const PLAN_STORAGE_KEY = 'payglocal_selected_plan';

const plans: Plan[] = [
  {
    tier: 'standard',
    title: 'Standard',
    summary: 'Social Media & Review Management',
    monthlyPrice: '179',
    yearlyMonthlyPrice: '166.58',
    yearlyBilled: '1,999',
    features: [
      'Weekly social media posting',
      '2 Posts, 1 Reel & Stories',
      'Monthly website banner update (1 time)',
      'Google My Business (GMB) optimization',
      'Response to comments & DMs on social media',
      'Separate post or reel for festivals & special occasions',
      'Online ordering platform management',
      'DoorDash, Uber Eats & etc',
      'Menu updates & Price updates',
      'Note: Small businesses are looking to maintain a consistent online presence.',
    ],
  },
  {
    tier: 'premium',
    title: 'Premium',
    summary: 'Everything in Standard + Website and Order Management',
    monthlyPrice: '299',
    yearlyMonthlyPrice: '291.58',
    yearlyBilled: '3,499',
    featured: true,
    features: [
      'Includes everything in the Basic Plan, plus',
      'Social Media & Marketing',
      'Daily activity updates on social platforms, Monthly influencer collaboration',
      'Reel boosting (once per month)',
      'Website designing & development',
      'Keyword research, SEO optimization & SEO-based content creation',
      'Weekly backlink updates',
      'Blog updates',
      'Weekly progress & performance tracker',
      'Design : Logo design, Menu design, Images for all menu items and more',
      'Design requests are handled separately as per the requirement',
      'Note: Best for growing brands seeking strong visibility, traffic, and engagement',
    ],
  },
  {
    tier: 'elite',
    title: 'Elite',
    summary: 'Everything in Premium + Advertising, SEO and Menu Management',
    monthlyPrice: '499',
    yearlyMonthlyPrice: '458.25',
    yearlyBilled: '5,499',
    features: [
      'Includes everything in the Premium Plan, plus',
      "Fully customized strategy based on the client's daily operations",
      'Website designing & development',
      'Weekly posting collaborations (Charges are based on the Influencer)',
      'Weekly boosting (once per week)',
      'Priority handling for marketing activities',
      'Design requests handled separately as per requirement',
      'Note: Best for high-growth businesses needing aggressive, hands-on marketing.',
    ],
  },
];

function buildApiUrl(path: string) {
  return `${API_BASE_URL.replace(/\/$/, '')}${path}`;
}

function planCardClasses(plan: Plan) {
  if (plan.featured) {
    return 'border-white/25 bg-white/14 ring-1 ring-white/20 shadow-[0_36px_90px_-48px_rgba(15,23,42,0.85)]';
  }

  return 'border-white/15 bg-white/[0.07] shadow-[0_30px_80px_-46px_rgba(15,23,42,0.75)]';
}

export default function PayGlocalPayment() {
  const { toast } = useToast();
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [loadingTier, setLoadingTier] = useState<Tier | null>(null);

  useEffect(() => {
    const savedPlan = sessionStorage.getItem(PLAN_STORAGE_KEY);
    if (!savedPlan) {
      return;
    }

    try {
      const parsed = JSON.parse(savedPlan) as {
        billingCycle?: BillingCycle;
      };

      if (
        parsed.billingCycle === 'monthly' ||
        parsed.billingCycle === 'yearly'
      ) {
        setBillingCycle(parsed.billingCycle);
      }
    } catch {
      sessionStorage.removeItem(PLAN_STORAGE_KEY);
    }
  }, []);

  async function handleSubscribe(tier: Tier) {
    setLoadingTier(tier);

    try {
      sessionStorage.setItem(
        PLAN_STORAGE_KEY,
        JSON.stringify({ tier, billingCycle }),
      );

      const response = await fetch(buildApiUrl('/api/subscriptions/initiate'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tier,
          billingCycle,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data?.ok) {
        throw new Error(data?.message || 'Unable to start PayGlocal payment.');
      }

      if (!data.redirectUrl || !data.merchantTxnId) {
        throw new Error('PayGlocal did not return a redirect URL.');
      }

      sessionStorage.setItem(TXN_STORAGE_KEY, data.merchantTxnId);
      window.location.assign(data.redirectUrl);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong.';

      toast({
        title: 'Unable to continue',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setLoadingTier(null);
    }
  }

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-36 left-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at top, rgba(59, 130, 246, 0.25), transparent 55%)',
            }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1800px] px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/40 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
              Transparent plans, built for scale
            </div>
            <h1 className="font-bold font-display mb-6">
              Pricing that grows with your business
            </h1>
            <p className="mx-auto max-w-2xl text-slate-200">
              Choose the plan that fits today and scale when you are ready. No
              hidden fees, no long-term contracts.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-300"></span>
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-300"></span>
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

      <section className="relative -mt-10 bg-white pb-16 sm:-mt-14 sm:pb-20 lg:-mt-20 lg:pb-24">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="overflow-hidden rounded-[38px] bg-[linear-gradient(180deg,#1777d0_0%,#1e83dd_48%,#1471c8_100%)] px-5 py-8 text-white shadow-[0_38px_110px_-60px_rgba(15,23,42,0.55)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="mx-auto flex w-full max-w-[280px] rounded-full border border-white/20 bg-white/10 p-1 shadow-lg shadow-slate-950/20 backdrop-blur sm:max-w-[290px]">
              {(['monthly', 'yearly'] as BillingCycle[]).map((cycle) => (
                <button
                  key={cycle}
                  type="button"
                  onClick={() => setBillingCycle(cycle)}
                  className={`flex-1 rounded-full px-5 py-3 text-base font-semibold transition ${
                    billingCycle === cycle
                      ? 'bg-white text-slate-900 shadow-md'
                      : 'text-blue-50/75 hover:text-white'
                  }`}
                >
                  {cycle === 'monthly' ? 'Monthly' : 'Yearly'}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-3">
              {plans.map((plan) => {
                const isLoading = loadingTier === plan.tier;
                const displayPrice =
                  billingCycle === 'monthly'
                    ? plan.monthlyPrice
                    : plan.yearlyMonthlyPrice;
                const supportingPrice =
                  billingCycle === 'monthly'
                    ? 'Billed monthly'
                    : `${CURRENCY_SYMBOL}${plan.yearlyBilled} billed annually`;

                return (
                  <article
                    key={plan.tier}
                    className={`relative h-full rounded-[34px] border p-6 backdrop-blur-xl transition-all duration-300 xl:p-8 ${planCardClasses(plan)}`}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    <div className="flex flex-wrap items-center gap-3">
                      {plan.featured ? (
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          Most popular
                        </span>
                      ) : null}

                      {/* <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/45 px-3 py-1 text-xs font-semibold text-blue-50">
                        <Box className="h-3.5 w-3.5" />
                        Sandbox
                      </span> */}
                    </div>

                    <div className="mt-6">
                      <h2 className="text-3xl font-bold text-white sm:text-[2.15rem]">
                        {plan.title}
                      </h2>
                      <p className="mt-4 min-h-[64px] text-base leading-relaxed text-blue-50/75 sm:text-[1.05rem]">
                        {plan.summary}
                      </p>
                    </div>

                    <div className="mt-8">
                      <div className="flex items-end gap-3">
                        <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                          {CURRENCY_SYMBOL}
                          {displayPrice}
                        </p>
                        <p className="pb-1.5 text-base font-medium text-blue-50/85 sm:text-lg">
                          per month
                        </p>
                      </div>
                      <p className="mt-3 text-base text-blue-50/75 sm:text-[1.05rem]">
                        {supportingPrice}
                      </p>
                    </div>

                    <Button
                      type="button"
                      onClick={() => handleSubscribe(plan.tier)}
                      disabled={Boolean(loadingTier)}
                      className="mt-8 h-14 w-full rounded-full bg-white text-lg font-semibold text-slate-900 shadow-lg shadow-slate-950/20 transition hover:bg-blue-50"
                    >
                      {isLoading ? (
                        <span className="inline-flex items-center gap-2">
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Redirecting
                        </span>
                      ) : (
                        'Subscribe'
                      )}
                    </Button>

                    <div className="mt-8">
                      <p className="text-xl font-semibold text-white sm:text-[1.3rem]">
                        This includes:
                      </p>
                      <ul className="mt-6 space-y-4">
                        {plan.features.map((feature) => (
                          <li
                            key={`${plan.tier}-${feature}`}
                            className="flex items-start gap-3 text-base leading-relaxed text-blue-50/90 sm:text-[1.02rem]"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-100" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
