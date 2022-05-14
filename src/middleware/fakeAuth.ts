import { NextFunction, Request, Response } from "express";

export const fakeAuth = (req: Request, res: Response, next: NextFunction) => {
	req.body.restaurantId = "3b4e6680-b0e2-4cba-b52c-9850524c9598";
	next();
};
