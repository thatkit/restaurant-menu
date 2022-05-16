<template>
	<form>
		<WrapWithLabel name="name" fullName="Course name">
			<InputComponent
				name="name"
				@input="
					(e) => newCourseStore.setCourseProp('name', e.target?.value)
				"
			/>
		</WrapWithLabel>
		<WrapWithLabel name="desc" fullName="Description">
			<TextArea
				name="desc"
				@input="
					(e) => newCourseStore.setCourseProp('desc', e.target?.value)
				"
			></TextArea>
		</WrapWithLabel>
		<WrapWithLabel name="price" fullName="Price">
			<InputComponent
				name="price"
				@input="
					(e) =>
						newCourseStore.setCourseProp('price', e.target?.value)
				"
			/>
		</WrapWithLabel>
		<SelectComponent fullName="Select cuisine" :options="cuisines">
			<AddNewCuisine />
		</SelectComponent>
		<WrapWithLabel name="ingred" fullName="Ingredients">
			<TextArea
				name="ingred"
				@input="
					(e) =>
						newCourseStore.setCourseProp('ingred', e.target?.value)
				"
			></TextArea>
		</WrapWithLabel>
		<EnergyInfo />
		<button type="submit" class="btn btn-primary" @click="onSumbit">
			Save new course
		</button>
	</form>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "@/stores/api";
import { useNewCourseStore } from "@/stores/newCourse";
import WrapWithLabel from "./WrapWithLabel.vue";
import InputComponent from "./InputComponent.vue";
import TextArea from "./TextArea.vue";
import SelectComponent from "./SelectComponent.vue";
import EnergyInfo from "./EnergyInfo.vue";
import AddNewCuisine from "./AddNewCuisine.vue";
import { storeToRefs } from "pinia";

const store = useStore();
const newCourseStore = useNewCourseStore();

onMounted(() => {
	store.setCuisines();
});

const { cuisines } = storeToRefs(store);

const onSumbit = (e: Event) => {
	e.preventDefault();
	store.createNewCourse();
};
</script>

<style scoped></style>
