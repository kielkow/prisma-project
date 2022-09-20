import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createExistTeacher() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Java",
      duration: 500,
      description: "Curso de Java 17",
      teachers: {
        connect: {
          id: "",
        },
      },
    },
  });

  console.log(result);
}

createExistTeacher();
