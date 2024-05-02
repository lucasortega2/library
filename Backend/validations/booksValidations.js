import z from 'zod';

const bookSchema = z.object({
  title: z.string().min(3).max(60),
  description: z.string().min(10).max(800),
  pages: z.number().int().min(0).max(6000),
  image_url: z.string().max(250),
  publication_date: z.string().max(12),
  extract: z.string().max(250),
});

export const validationSchema = (input) => {
  return bookSchema.safeParse(input);
};

export const validatePartialSchema = (input) => {
  return bookSchema.partial().safeParse(input);
};
