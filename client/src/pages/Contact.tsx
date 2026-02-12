import { Layout } from '@/components/Layout';
import './Contact.css';
import { useForm, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertLeadSchema, type InsertLead } from '@/schemas/lead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const formEndpoint = import.meta.env.VITE_FORMSPARK_URL as string | undefined;

  const resolver = (
    zodResolver as unknown as (schema: unknown) => Resolver<InsertLead>
  )(insertLeadSchema);

  const form = useForm<InsertLead>({
    resolver,
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      message: '',
    },
  });

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const onSubmit = async (data: InsertLead) => {
    if (!formEndpoint) {
      toast({
        title: 'Missing form endpoint',
        description: 'Set VITE_FORMSPARK_URL to enable form submissions.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        company: data.companyName || '',
        message: data.message || '',
        source: 'contact-page',
      };

      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      const toastInstance = toast({
        title: 'Message sent',
        description: 'We’ll be in touch within 1 business day.',
      });
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
      successTimeoutRef.current = setTimeout(() => {
        toastInstance.dismiss();
      }, 5000);
      form.reset();
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
    <Layout>
      <div className="contact-page">
        <section className="contact-hero relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <div className="absolute -top-20 right-[-10%] h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute bottom-0 left-[-5%] h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>
          <div className="contact-hero-inner relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Contact Sales
              </span>
              <h1 className="mt-5 font-bold font-display">
                Tell us about your growth goals.
              </h1>
              <p className="mt-4 text-white/70">
                We help teams launch high-performing sites and automation that
                convert. Share a few details and we’ll propose the right plan.
              </p>
              <div className="contact-pills mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="contact-pill rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Clock className="h-5 w-5 text-white/80" />
                  <p className="mt-3 font-semibold">Fast response</p>
                  <p className="text-white/60">Within 1 business day</p>
                </div>
                <div className="contact-pill rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="h-5 w-5 text-white/80" />
                  <p className="mt-3 font-semibold">Secure by design</p>
                  <p className="text-white/60">
                    Your info stays private
                  </p>
                </div>
                <div className="contact-pill rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Mail className="h-5 w-5 text-white/80" />
                  <p className="mt-3 font-semibold">
                    Direct to experts
                  </p>
                  <p className="text-white/60">Sales + solution team</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-body relative -mt-8 sm:-mt-12 pb-16 sm:pb-24">
          <div className="contact-body-inner mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="contact-grid grid grid-cols-1 gap-8 lg:grid-cols-5">
              <div className="space-y-8 lg:col-span-2">
                <div className="contact-panel rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-slate-100">
                  <h3 className="font-bold text-slate-900">
                    What happens next
                  </h3>
                  <div className="mt-6 space-y-4 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-primary font-semibold">
                        01
                      </span>
                      <p>
                        We review your goals and reach out within 1 business
                        day.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-primary font-semibold">
                        02
                      </span>
                      <p>
                        We map the quickest path to results and scope the right
                        plan.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-primary font-semibold">
                        03
                      </span>
                      <p>
                        You get a clear proposal with timeline, cost, and next
                        steps.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-panel rounded-3xl bg-primary p-6 sm:p-8 text-white shadow-xl">
                  <h3 className="font-bold font-display">
                    Get in touch
                  </h3>
                  <div className="mt-6 space-y-6 text-sm">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 mt-0.5 opacity-80" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-blue-100">ads@propelmetatech.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 mt-0.5 opacity-80" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-blue-100"> +1 4698509526</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 mt-0.5 opacity-80" />
                      <div>
                        <p className="font-semibold">Office</p>
                        <p className="text-blue-100">
                          220 N Gould St Sheridan,
                          <br />
                          WY, 82801, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-100">
                <div className="mb-8">
                  <h2 className="font-bold text-slate-900">
                    Start the conversation
                  </h2>
                  <p className="text-slate-500 mt-2">
                    Tell us about your business and goals. The more context, the
                    better.
                  </p>
                </div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                {...field}
                                className="h-12 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Acme Inc."
                                {...field}
                                value={field.value || ''}
                                className="h-12 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@company.com"
                                {...field}
                                className="h-12 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+1 (555) 000-0000"
                                {...field}
                                value={field.value || ''}
                                className="h-12 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="What are you trying to achieve? Any timelines or constraints?"
                              className="min-h-[160px] rounded-xl resize-none"
                              {...field}
                              value={field.value || ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        disabled={
                          isSubmitting ||
                          !formEndpoint ||
                          !form.formState.isValid
                        }
                        className="w-full h-12 text-base sm:text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
