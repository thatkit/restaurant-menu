import { NextFunction, Request, Response } from "express";

export const stringToInt = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	req.body.price = +req.body.price;
	let energy = req.body.energy;
	if (energy) {
		energy = {
			kcal: +energy.kcal,
			prots: +energy.prots,
			carbs: +energy.carbs,
			fats: +energy.fats,
		};
		req.body.energy = energy;
	}
	next();
};
