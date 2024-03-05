import { z } from "zod";

import prisma from "@/lib/prisma";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    const todos = await prisma.todos.findMany();
    return todos;
  }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    await prisma.todos.create({
      data: {
        content: opts.input,
      },
    });

    return true;
  }),
});

export type AppRouter = typeof appRouter;
