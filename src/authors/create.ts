import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  const result = await prisma.authors.create({
    data: {
      name: "Eric Evans",
    },
  });

  console.log(result);
}

create();
