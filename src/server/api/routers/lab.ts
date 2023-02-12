import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const labRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    // return ctx.prisma.example.findMany();
    return ctx.prisma.lab.findMany();
  }),
});
