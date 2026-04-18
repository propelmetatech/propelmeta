import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

function readParam(name: string) {
  return new URLSearchParams(window.location.search).get(name);
}

export default function PaymentSuccess() {
  const transactionId = readParam('merchantTxnId') || readParam('gid');

  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#062f66_0%,#0f67bf_45%,#15a6df_100%)] px-4 py-10 text-white">
      <div className="w-full max-w-xl rounded-[32px] border border-white/15 bg-white/10 p-8 text-center shadow-[0_30px_80px_-45px_rgba(15,23,42,0.65)] backdrop-blur">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
          <CheckCircle2 className="h-9 w-9" />
        </div>

        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Thank you</h1>
        <p className="mt-3 text-base text-blue-50/90 sm:text-lg">
          Transaction is successful.
        </p>

        <div className="mt-8 rounded-3xl border border-white/15 bg-black/10 p-5">
          <p className="text-sm text-blue-50/70">Transaction ID</p>
          <p className="mt-2 break-all text-lg font-semibold text-white">
            {transactionId || 'Unavailable'}
          </p>
        </div>

        <div className="mt-8">
          <Link href="/payglocal-payment">
            <Button className="h-12 rounded-full bg-white px-8 text-base font-semibold text-slate-900 hover:bg-blue-50">
              Back to Payments
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
