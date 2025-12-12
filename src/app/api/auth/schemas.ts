import { z } from "zod";

export const authSchema = z.object({
  email: z.email({ message: "Invalid email" }),
  password: z
    .string({ error: "Password is required" })
    .min(4, "Password must be at least 4 characters long"),
});

export type TAuthPayload = z.infer<typeof authSchema>;
