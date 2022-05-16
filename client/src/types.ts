export class NewCourse {
	name!: string;
	desc!: string;
	price!: string;
	selectedCuisineId!: string;
	ingred?: string;
	energy?: Energy;
}

export class Energy {
	kcal!: string;
	prots!: string;
	carbs!: string;
	fats!: string;
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
