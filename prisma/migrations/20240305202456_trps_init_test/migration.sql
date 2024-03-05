-- CreateTable
CREATE TABLE "Todos" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
