import { Layout } from '@/components/Layout';

export default function RefundCancellationPolicies() {
  return (
    <Layout>
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white p-6 text-slate-900 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <h1 className="text-xl font-semibold">
              Term of Agreement &amp; Termination Rights
            </h1>
            <p className="mt-4 text-[15px] leading-7 text-slate-700">
              Where services are governed by an active contract, all
              cancellations will be handled in accordance with the agreed
              contract term. Early termination of services may result in
              applicable fees or penalties, as specified in the relevant
              agreement.
            </p>

            <section className="mt-8">
              <h2 className="text-lg font-semibold">Notice of Cancellation</h2>
              <p className="mt-3 text-[15px] leading-7 text-slate-700">
                Clients are required to submit a written cancellation notice at
                least fourteen (14) days prior to the intended cancellation
                date. This advance notice allows PropelMeta Tech adequate time
                to process the request and complete any necessary operational or
                administrative arrangements.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold">
                Method of Cancellation Submission
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-slate-700">
                All cancellation requests must be submitted in writing via email
                to our designated cancellation team. Incomplete requests may
                result in processing delays.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold">
                Refund Policy &amp; Credit Allocation
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-slate-700">
                PropelMeta Tech does not issue refunds for prepaid fees or
                unused service periods following cancellation. However, at our
                discretion, unused prepaid amounts may be applied as service
                credits toward future projects or services with PropelMeta Tech.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold">
                Data Access, Retention &amp; Deletion
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-slate-700">
                Clients will retain full access to their account and data until
                the effective cancellation date.
              </p>
              <p className="mt-3 text-[15px] leading-7 text-slate-700">
                It is the client&rsquo;s responsibility to download, back up, or
                transfer any required data before this date.
              </p>
              <p className="mt-3 text-[15px] leading-7 text-slate-700">
                Once cancellation is finalized, all client data will be securely
                deleted in accordance with PropelMeta Tech&rsquo;s data retention
                and security policies.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold">
                Automatic Renewal &amp; Cancellation of Renewal
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-slate-700">
                Subscription-based services are automatically renewed unless
                cancellation is requested prior to the renewal date. To prevent
                future renewals, clients must follow the standard cancellation
                process outlined in this policy.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
