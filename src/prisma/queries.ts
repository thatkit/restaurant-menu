import { PrismaClient, Prisma } from "@prisma/client";
import { errorHandler } from "../tools/errorHandler";
const prisma = new PrismaClient();

export const CREATE_NEW_COURSE = async (data: any) => {
	try {
		const { energy, ...mainData } = data;
		const response = await prisma.course.create({
			data: {
				...mainData,
				energy: {
					create: energy,
				},
			},
		});
		return response;
	} catch (err) {
		return errorHandler(err);
	}
};

export const CREATE_NEW_CUISINE = async (data: Prisma.CuisineCreateInput) => {
	try {
		return await prisma.cuisine.create({ data });
	} catch (err) {
		return errorHandler(err);
	}
};

export const FIND_ALL_CUISINES = async () => {
	try {
		return await prisma.cuisine.findMany();
	} catch (err) {
		return errorHandler(err);
	}
};
