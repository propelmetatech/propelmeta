import { Layout } from "@/components/Layout";
import { useCreateLead } from "@/hooks/use-leads";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const mutation = useCreateLead();

  const resolver = (zodResolver as unknown as (schema: unknown) => Resolver<InsertLead>)(
    insertLeadSchema
  );

  const form = useForm<InsertLead>({
    resolver,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertLead) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-display mb-6">Contact Sales</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to grow? Let's talk about how PropelMeta can help transform your business.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Info Card */}
          <div className="bg-primary rounded-3xl p-10 text-white shadow-xl h-fit lg:col-span-1">
            <h3 className="text-2xl font-bold font-display mb-8">Get in touch</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 opacity-80" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-blue-100">sales@propelmeta.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 opacity-80" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-blue-100">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 opacity-80" />
                <div>
                  <p className="font-semibold mb-1">Office</p>
                  <p className="text-blue-100">123 Tech Blvd, Suite 400<br />San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="h-12 rounded-xl" />
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
                          <Input placeholder="Acme Inc." {...field} value={field.value || ""} className="h-12 rounded-xl" />
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
                          <Input placeholder="john@company.com" {...field} className="h-12 rounded-xl" />
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
                          <Input placeholder="+1 (555) 000-0000" {...field} value={field.value || ""} className="h-12 rounded-xl" />
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
                      <FormLabel>How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          className="min-h-[150px] rounded-xl resize-none" 
                          {...field} 
                          value={field.value || ""} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full h-12 text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
