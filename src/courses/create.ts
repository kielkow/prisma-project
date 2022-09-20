import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Java",
      duration: 500,
      description: "Curso de Java 17",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Jonh Doe",
          },
          create: {
            name: "Jonh Doe",
          },
        },
      },
    },
  });

  console.log(result);
}

create();
