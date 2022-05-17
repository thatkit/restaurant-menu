import { Request, Response } from "express";
import { CREATE_NEW_CUISINE } from "../../prisma/queries";
import { FIND_ALL_CUISINES } from "../../prisma/queries";

export const createCuisine = async (req: Request, res: Response) => {
	const response = await CREATE_NEW_CUISINE(req.body);
	// console.log("response co:", response);
	return res.status(201).json(response);
};

export const findAllCuisines = async (req: Request, res: Response) => {
	const response = await FIND_ALL_CUISINES();
	// console.log("response co:", response);
	return res.status(200).json(response);
};
