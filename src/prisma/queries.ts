import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const CREATE_NEW_COURSE = async (data: Prisma.CourseCreateInput) => {
	return await prisma.course.create({ data });
};

export const CREATE_NEW_CUISINE = async (data: Prisma.CuisineCreateInput) => {
	return await prisma.cuisine.create({ data });
};
