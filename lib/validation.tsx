import { z } from "zod";

export const UserFormValidation = z.object({
    username: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone)=>/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone), "Invalid phone number"),
  });