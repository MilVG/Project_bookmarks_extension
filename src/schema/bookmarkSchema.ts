
// src/schema/bookmarkSchema.ts
import { z } from "zod";

export const bookmarkSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
  categoryName: z.string().min(1),
  description: z.string()
});

export type BookmarkData = z.infer<typeof bookmarkSchema>;
