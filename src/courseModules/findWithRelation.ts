import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findWithRelation() {
  const result = await prisma.courseModules.findMany({
    include: {
      course: true,
      module: true,
    },
  });

  console.log(JSON.stringify(result));
}

findWithRelation();
