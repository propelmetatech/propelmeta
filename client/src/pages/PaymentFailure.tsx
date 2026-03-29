import { Link } from 'wouter';
import { AlertTriangle, ArrowLeft, CircleX, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';

function readParam(name: string) {
  return new URLSearchParams(window.location.search).get(name);
}

export default function PaymentFailure() {
  const merchantTxnId = readParam('merchantTxnId');
  const reason = readParam('reason');
  const status = readParam('status');
  const gid = readParam('gid');

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#3b0a18_0%,#8f1239_48%,#be185d_100%)] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/payglocal-payment"
            className="inline-flex items-center gap-2 text-sm font-medium text-rose-50/90 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Checkout
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose-50/90 backdrop-blur">
            <ShieldAlert className="h-4 w-4" />
            Callback Result
          </div>
        </div>

        <section className="mt-10 rounded-[32px] border border-rose-200/20 bg-white/10 p-8 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.65)] backdrop-blur">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-rose-500/20 text-rose-100">
            <CircleX className="h-9 w-9" />
          </div>

          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Payment was not completed
          </h1>
          <p className="mt-4 max-w-2xl text-base text-rose-50/85 sm:text-lg">
            Your backend received a non-success payment result and redirected the
            user here. The checkout can be retried after you review the details below.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/15 bg-black/10 p-5">
              <p className="text-sm text-rose-50/70">Merchant Txn ID</p>
              <p className="mt-2 break-all text-lg font-semibold text-white">
                {merchantTxnId || 'Unavailable'}
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-black/10 p-5">
              <p className="text-sm text-rose-50/70">Gateway Status</p>
              <p className="mt-2 break-all text-lg font-semibold text-white">
                {status || 'Unavailable'}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/15 bg-black/10 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-rose-100" />
              <div>
                <p className="text-sm text-rose-50/70">Reason</p>
                <p className="mt-2 text-base text-white">
                  {reason || 'No failure message was returned.'}
                </p>
              </div>
            </div>
          </div>

          {gid ? (
            <div className="mt-6 rounded-3xl border border-white/15 bg-black/10 p-5">
              <p className="text-sm text-rose-50/70">PayGlocal GID</p>
              <p className="mt-2 break-all text-base font-semibold text-white">
                {gid}
              </p>
            </div>
          ) : null}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/payglocal-payment">
              <Button className="h-12 rounded-full bg-white px-8 text-base font-semibold text-slate-900 hover:bg-rose-50">
                Retry Payment
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="h-12 rounded-full border-white/25 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
