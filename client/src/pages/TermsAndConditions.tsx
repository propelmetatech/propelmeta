import { Layout } from "@/components/Layout";

export default function TermsAndConditions() {
  return (
    <Layout>
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <h1 className="text-3xl font-display font-bold text-slate-900 sm:text-4xl">
              Terms and Conditions
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Last updated: February 8, 2026
            </p>

            <div className="mt-10 space-y-8 text-slate-700">
              <section>
                <h2 className="text-xl font-semibold text-slate-900">
                  Term of Agreement &amp; Termination Rights
                </h2>
                <p className="mt-3 leading-relaxed">
                  Where services are governed by an active contract, all
                  cancellations will be handled in accordance with the agreed
                  contract term. Early termination of services may result in
                  applicable fees or penalties, as specified in the relevant
                  agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">
                  Notice of Cancellation
                </h2>
                <p className="mt-3 leading-relaxed">
                  Clients are required to submit a written cancellation notice
                  at least fourteen (14) days prior to the intended
                  cancellation date. This advance notice allows PropelMeta Tech
                  adequate time to process the request and complete any
                  necessary operational or administrative arrangements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">
                  Method of Cancellation Submission
                </h2>
                <p className="mt-3 leading-relaxed">
                  All cancellation requests must be submitted in writing via
                  email to our designated cancellation team. Incomplete requests
                  may result in processing delays.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">
                  Refund Policy &amp; Credit Allocation
                </h2>
                <p className="mt-3 leading-relaxed">
                  PropelMeta Tech does not issue refunds for prepaid fees or
                  unused service periods following cancellation. However, at our
                  discretion, unused prepaid amounts may be applied as service
                  credits toward future projects or services with PropelMeta
                  Tech.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">
                  Data Access, Retention &amp; Deletion
                </h2>
                <p className="mt-3 leading-relaxed">
                  Clients will retain full access to their account and data
                  until the effective cancellation date.
                </p>
                <p className="mt-3 leading-relaxed">
                  It is the client&rsquo;s responsibility to download, back up,
                  or transfer any required data before this date.
                </p>
                <p className="mt-3 leading-relaxed">
                  Once cancellation is finalized, all client data will be
                  securely deleted in accordance with PropelMeta Tech&rsquo;s
                  data retention and security policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">
                  Automatic Renewal &amp; Cancellation of Renewal
                </h2>
                <p className="mt-3 leading-relaxed">
                  Subscription-based services are automatically renewed unless
                  cancellation is requested prior to the renewal date. To
                  prevent future renewals, clients must follow the standard
                  cancellation process outlined in this policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
