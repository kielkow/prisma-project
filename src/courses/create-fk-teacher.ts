import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createFkTeacher() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Java",
      duration: 500,
      description: "Curso de Java 17",
      teacherId: "",
    },
  });

  console.log(result);
}

createFkTeacher();
