import { Request, Response } from "express";
import { CREATE_NEW_CUISINE } from "../../prisma/queries";

export const createCuisine = async (req: Request, res: Response) => {
	const response = await CREATE_NEW_CUISINE(req.body);
	console.log("response co:", response);
	return res.status(201).json(response);
};
