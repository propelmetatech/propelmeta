import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

type EarlyAccessSectionProps = {
  source: string;
};

export function EarlyAccessSection({ source }: EarlyAccessSectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const formEndpoint = import.meta.env.VITE_FORMSPARK_URL as string | undefined;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();
    if (!normalizedEmail) {
      toast({
        title: 'Email required',
        description: 'Please enter your email address.',
        variant: 'destructive',
      });
      return;
    }

    if (!formEndpoint) {
      toast({
        title: 'Missing form endpoint',
        description: 'Set VITE_FORMSPARK_URL to enable submissions.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: 'Early Access Lead',
          email: normalizedEmail,
          phone: '',
          company: '',
          message: 'Get Early Access to PropelMeta',
          source,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast({
        title: 'Submitted',
        description: 'Thanks. We will contact you soon.',
      });
      setEmail('');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong.';
      toast({
        title: 'Submission failed',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-blue-500/50 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-6 sm:p-10 md:p-16 text-center shadow-2xl shadow-blue-700/40">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
              Get Early Access to PropelMeta
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Join our waitlist today and be among the first to experience a
              smarter, faster, and more efficient way to grow your business.
            </p>
            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email*"
                className="h-12 w-full text-base bg-white border-slate-200 text-slate-900 placeholder:text-slate-500 focus-visible:ring-blue-500"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full sm:w-auto px-8 text-base font-semibold bg-white text-slate-900 hover:bg-slate-100"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
