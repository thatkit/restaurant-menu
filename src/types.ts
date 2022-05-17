export class CreateCourseDto {
    name!: string;
    desc!: string;
    ingredients?: string;
    // cuisineId!: string;
    energy?: Energy;
}

export class Energy {
    kcal!: number;
    prots!: number;
    carbs!: number;
    fats!: number;
}