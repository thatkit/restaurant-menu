<template>
	<div class="cnt">
		<select
			class="form-select"
			:required="isRequired"
			@change="
				(e) =>
					newCourseStore.setCourseProp('cuisineId', (e.target as HTMLInputElement).value)
			"
		>
			<option selected value="">{{ fullName }}</option>
			<option
				v-for="option in options"
				:key="option.id"
				:id="option.id"
				:value="option.id"
			>
				{{ option.name }}
			</option>
		</select>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { useNewCourseStore } from "@/stores/forms/newCourse";

class Option {
	id!: string;
	name!: string;
}

defineProps<{
	fullName: string;
	options: Option[];
	isRequired: boolean;
}>();

const newCourseStore = useNewCourseStore();
</script>

<style scoped>
.cnt {
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 1rem;
}
</style>
