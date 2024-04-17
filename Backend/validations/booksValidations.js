import z from 'zod';

const bookSchema = z.object({
  id: z.any(),
  title: z.string(),
  description: z.string().min(10).max(800),
  pages: z.number().int().min(0).max(6000),
  image_url: z.string(),
  publication_date: z.any(),
  extract: z.string(),
});

export const validationSchema = (input) => {
  return bookSchema.safeParse(input);
};

export const validatePartialSchema = (input) => {
  return bookSchema.partial().safeParse(input);
};
