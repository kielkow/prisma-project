import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findOne() {
  // SELECT * FROM COURSES LIMIT 1
  const firstCourse = await prisma.courses.findFirst();

  // SELECT * FROM COURSES ORDER BY ID DESC LIMIT 1
  const moreRecentCourse = await prisma.courses.findFirst({
    take: -1,
  });

  console.log(firstCourse);
  console.log(moreRecentCourse);
}

findOne();
