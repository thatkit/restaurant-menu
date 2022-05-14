import { NextFunction, Request, Response } from "express";

export const stringToInt = (req: Request, res: Response, next: NextFunction) => {
	req.body.price = +req.body.price;
	next();
};
