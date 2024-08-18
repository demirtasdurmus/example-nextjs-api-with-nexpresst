import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is invalid"),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, "Password must be at least 4 characters long"),
});

export type TAuthPayload = z.infer<typeof authSchema>;
