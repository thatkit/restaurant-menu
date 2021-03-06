export class NewCourse {
	name!: string;
	desc!: string;
	price!: string;
	cuisineId!: string;
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
	| "cuisineId"
	| "ingredients"
	| "energy";

export type EnergyPropType =
	| "kcal"
	| "prots"
	| "carbs"
	| "fats";
