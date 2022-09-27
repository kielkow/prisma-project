import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findWithModule() {
  const result = await prisma.courses.findMany({
    include: {
      courseModules: true,
    },
  });

  console.log(JSON.stringify(result));
}

findWithModule();
