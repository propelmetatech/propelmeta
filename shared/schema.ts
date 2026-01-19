import { z } from "zod";

export const insertLeadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional().nullable(),
  companyName: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
