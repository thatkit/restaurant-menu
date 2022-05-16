export class NewCourse {
	name!: string;
	desc!: string;
	price!: number;
	selectedCuisineId!: string;
	ingred?: string;
	energy?: Energy;
}

export class Energy {
	kcal!: number;
	prots!: number;
	carbs!: number;
	fats!: number;
}

export type CoursePropType =
	| "name"
	| "desc"
	| "price"
	| "selectedCuisineId"
	| "ingred"
	| "energy";

export type EnergyPropType =
	| "kcal"
	| "prots"
	| "carbs"
	| "fats";
