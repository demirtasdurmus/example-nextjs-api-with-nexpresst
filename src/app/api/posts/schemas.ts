import { z } from "zod";

export const postsQuerySchema = z.object({
  page: z.coerce
    .number({
      error: "Page must be a number",
    })
    .min(1, "Page must be greater than or equal to 1")
    .max(9999, "Page must be less than or equal to 9999")
    .optional()
    .default(1),
  limit: z.coerce
    .number({
      error: "Limit must be a number",
    })
    .min(1, "Limit must be greater than or equal to 1")
    .max(9999, "Limit must be less than or equal to 9999")
    .optional()
    .default(1),
});

export type TPostQuery = z.infer<typeof postsQuerySchema>;

export const postPayloadSchema = z.object({
  title: z.string({
    error: "Title is required",
  }),
  description: z.string({
    error: "Description is required",
  }),
});

export type TPostPayload = z.infer<typeof postPayloadSchema>;

export const postParamsSchema = z.object({
  id: z.string({
    error: "Post id is required",
  }),
});

export type TPostParams = z.infer<typeof postParamsSchema>;
