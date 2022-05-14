import { Request, Response } from "express";
import { CREATE_NEW_COURSE } from "../../prisma/queries";

export const createCourse = async (req: Request, res: Response) => {
	const response = await CREATE_NEW_COURSE(req.body);
	console.log("response co:", response);
	return res.status(201).json(response);
};
