import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  const result = await prisma.teachers.create({
    data: {
      name: "Diego Fernandes",
    },
  });

  console.log(result);
}

create();