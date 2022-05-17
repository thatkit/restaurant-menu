import { Request, Response } from "express";
import { CREATE_NEW_COURSE } from "../../prisma/queries";
import { serverError } from "../../tools/errorHandler";

export const createCourse = async (req: Request, res: Response) => {
	const response = await CREATE_NEW_COURSE(req.body);

	if (response === serverError) {
		return res.status(500).json(response);
	}

	return res.status(201).json(response);
};