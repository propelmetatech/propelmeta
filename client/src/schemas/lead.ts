import { z } from "zod";

export const insertLeadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  companyName: z.string().min(1, "Company name is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
