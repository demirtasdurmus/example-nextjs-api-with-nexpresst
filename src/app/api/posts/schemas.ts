import { z } from "zod";

export const postsQuerySchema = z.object({
  page: z.coerce
    .number({
      invalid_type_error: "Page must be a number",
    })
    .min(1, "Page must be greater than or equal to 1")
    .max(9999, "Page must be less than or equal to 9999")
    .optional()
    .default(1),
  limit: z.coerce
    .number({
      invalid_type_error: "Limit must be a number",
    })
    .min(1, "Limit must be greater than or equal to 1")
    .max(9999, "Limit must be less than or equal to 9999")
    .optional()
    .default(1),
});

export type TPostQuery = z.infer<typeof postsQuerySchema>;

export const postPayloadSchema = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title must be a string",
  }),
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description must be a string",
  }),
});

export type TPostPayload = z.infer<typeof postPayloadSchema>;

export const postParamsSchema = z.object({
  id: z.string({
    required_error: "Post id is required",
    invalid_type_error: "Post id must be a string",
  }),
});

export type TPostParams = z.infer<typeof postParamsSchema>;
