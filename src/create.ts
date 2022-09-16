import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
    const result = await prisma.courses.create({
        data: {
            name: 'NodeJS',
            duration: 50,
            description: 'NodeJS course'
        }
    });

    console.log(result);
}

create();
