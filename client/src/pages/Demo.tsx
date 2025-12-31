import { Layout } from "@/components/Layout";
import { useCreateLead } from "@/hooks/use-leads";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle2 } from "lucide-react";

export default function Demo() {
  const mutation = useCreateLead();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      message: "Demo Request", // Default message for demo requests
    },
  });

  const onSubmit = (data: InsertLead) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="lg:w-1/2 bg-slate-900 text-white p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1 className="text-4xl lg:text-5xl font-bold font-display mb-8">
              See PropelMeta in action
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              Get a personalized tour of the platform and discover how we can help you scale your business.
            </p>
            
            <div className="space-y-6">
              {[
                "Deep dive into features relevant to your goals",
                "Live Q&A with a product expert",
                "Custom pricing and onboarding plan"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800">
              <p className="text-slate-400 text-sm">
                "PropelMeta transformed our online presence. The demo showed us exactly what we were missing."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                <div>
                  <p className="font-bold">Mike Ross</p>
                  <p className="text-sm text-slate-500">Owner, Ross Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white">
          <div className="max-w-lg mx-auto w-full">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-8">Book your demo</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="h-12 rounded-xl bg-slate-50" />
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
                        <Input placeholder="Acme Inc." {...field} value={field.value || ""} className="h-12 rounded-xl bg-slate-50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" {...field} className="h-12 rounded-xl bg-slate-50" />
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
                        <Input placeholder="+1 (555) 000-0000" {...field} value={field.value || ""} className="h-12 rounded-xl bg-slate-50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                >
                  {mutation.isPending ? "Scheduling..." : "Schedule Demo"}
                </Button>
                
                <p className="text-center text-sm text-slate-500 mt-4">
                  No credit card required. No commitment.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
