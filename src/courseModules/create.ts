import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  const result = await prisma.courseModules.create({
    data: {
        courseId: '',
        moduleId: ''
    },
  });

  console.log(result);
}

create();
