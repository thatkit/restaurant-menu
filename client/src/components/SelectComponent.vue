<template>
	<select
		class="form-select"
		@change="
			(e) =>
				newCourseStore.setCourseProp(
					'selectedCuisineId',
					e.target?.value
				)
		"
	>
		<option selected>{{ fullName }}</option>
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
</template>

<script setup lang="ts">
import { useNewCourseStore } from "@/stores/newCourse";

class Option {
	id!: string;
	name!: string;
}

defineProps<{
	fullName: string;
	options: Option[];
}>();

const newCourseStore = useNewCourseStore();
</script>

<style scoped></style>
