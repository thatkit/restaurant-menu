import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const CREATE_NEW_COURSE = async (data: any) => {
	const { energy, ...mainData } = data;
	return await prisma.course.create({
		data: {
			...mainData,
			energy: {
				create: energy,
			},
		},
	});
};

export const CREATE_NEW_CUISINE = async (data: Prisma.CuisineCreateInput) => {
	return await prisma.cuisine.create({ data });
};
