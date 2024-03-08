import { z } from "zod";

const schema = z.object({
  id: z.number(),
  user: z.number(),
  full_name: z.string(),
  email: z.string().email(),
  is_admin: z.boolean(),
  job: z.string(),
  shift: z.object({
    id: z.number(),
    sun: z.boolean(),
    mon: z.boolean(),
    tues: z.boolean(),
    wed: z.boolean(),
    thurs: z.boolean(),
    fri: z.boolean(),
    sat: z.boolean(),
  }),
  shift_duration: z.coerce.number(),
});

export type Member = z.infer<typeof schema>;
export default schema;
