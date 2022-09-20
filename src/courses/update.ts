import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function update() {
    const result = await prisma.courses.create({
        data: {
            name: 'NodeJS',
            duration: 50,
            description: 'NodeJS course'
        }
    });

    const resultUpdated = await prisma.courses.update({
        where: {
            id: result.id
        },
        data: {
            name: 'NodeJS Version 14 LTS',
            duration: 70,
            description: 'NodeJS course updated'
        }
    });

    console.log(resultUpdated);
}

update();
