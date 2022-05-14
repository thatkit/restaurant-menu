import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const CREATE_NEW_COURSE = async (data: Prisma.CourseCreateInput) => {
	const response = await prisma.course.create({ data });

    console.log('response:', response);

    return response;
};
