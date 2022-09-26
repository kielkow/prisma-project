import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createToZero() {
  const result = await prisma.courseModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: "Curso de NodeJS",
          description: "Curso completo de NodeJS",
          teacherId: ''
        },
      },
      module: {
        create: {
          description: "Curso completo de PrismaIO",
          name: "PrismaIO",
          teacherId: ''
        },
      },
    },
  });

  console.log(result);
}

createToZero();