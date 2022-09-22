import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura limpa",
      author_id: "",
    },
  });

  console.log(result);
}

create();
