import { Link } from 'wouter';
import { ArrowLeft, BadgeCheck, CheckCircle2, Receipt, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

function readParam(name: string) {
  return new URLSearchParams(window.location.search).get(name);
}

export default function PaymentSuccess() {
  const merchantTxnId = readParam('merchantTxnId');
  const gid = readParam('gid');
  const status = readParam('status');
  const tier = readParam('tier');
  const billingCycle = readParam('billingCycle');

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#062f66_0%,#0f67bf_45%,#15a6df_100%)] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/payglocal-payment"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-50/90 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Checkout
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-50/90 backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            Backend Callback Processed
          </div>
        </div>

        <section className="mt-10 rounded-[32px] border border-emerald-200/20 bg-white/10 p-8 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.65)] backdrop-blur">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/20 text-emerald-200">
            <CheckCircle2 className="h-9 w-9" />
          </div>

          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Payment confirmed
          </h1>
          <p className="mt-4 max-w-2xl text-base text-blue-50/85 sm:text-lg">
            PayGlocal sent the response to your backend callback URL, and your
            backend redirected the user here after processing the payment.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/15 bg-black/10 p-5">
              <p className="text-sm text-blue-50/70">Merchant Txn ID</p>
              <p className="mt-2 break-all text-lg font-semibold text-white">
                {merchantTxnId || 'Unavailable'}
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-black/10 p-5">
              <p className="text-sm text-blue-50/70">PayGlocal GID</p>
              <p className="mt-2 break-all text-lg font-semibold text-white">
                {gid || 'Unavailable'}
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-black/10 p-5">
              <p className="text-sm text-blue-50/70">Gateway Status</p>
              <p className="mt-2 text-lg font-semibold text-white">
                {status || 'SENT_FOR_CAPTURE'}
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-black/10 p-5">
              <p className="text-sm text-blue-50/70">Selected Plan</p>
              <p className="mt-2 text-lg font-semibold text-white capitalize">
                {tier || 'Unknown'} {billingCycle ? `- ${billingCycle}` : ''}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-5">
            <div className="flex items-start gap-3">
              <Receipt className="mt-0.5 h-5 w-5 text-blue-100" />
              <p className="text-sm text-blue-50/85">
                Keep both <span className="font-semibold text-white">merchantTxnId</span>{' '}
                and <span className="font-semibold text-white">gid</span> in your
                database. They are the references you need for support, reconciliation,
                and payment tracking.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/payglocal-payment">
              <Button className="h-12 rounded-full bg-white px-8 text-base font-semibold text-slate-900 hover:bg-blue-50">
                Start Another Payment
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                variant="outline"
                className="h-12 rounded-full border-white/25 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10"
              >
                Back to Pricing
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur">
          <div className="flex items-start gap-3">
            <BadgeCheck className="mt-0.5 h-5 w-5 text-blue-100" />
            <p className="text-sm text-blue-50/80">
              This page is a frontend success screen. It is not the callback URL itself.
              The callback URL is your backend endpoint, for example
              <span className="ml-1 font-semibold text-white">https://your-domain.com/callbackurl</span>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
