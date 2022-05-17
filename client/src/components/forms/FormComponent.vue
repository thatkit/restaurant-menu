<template>
	<form
		class="form needs-validation"
		novalidate
		@submit="onSumbit"
		@change="onChange"
	>
		<WrapWithLabel name="name" fullName="Course name" class="formItem">
			<InputComponent
				name="name"
				:isRequired="true"
				@input="
					(e) => newCourseStore.setCourseProp('name', e.target?.value)
				"
			/>
		</WrapWithLabel>
		<WrapWithLabel name="desc" fullName="Description" class="formItem">
			<TextArea
				name="desc"
				:isRequired="true"
				@input="
					(e) => newCourseStore.setCourseProp('desc', e.target?.value)
				"
			></TextArea>
		</WrapWithLabel>
		<WrapWithLabel name="price" fullName="Price" class="formItem">
			<InputComponent
				name="price"
				:isRequired="true"
				@input="
					(e) =>
						newCourseStore.setCourseProp('price', e.target?.value)
				"
			/>
		</WrapWithLabel>
		<SelectComponent
			fullName="Select cuisine"
			:options="cuisines"
			:isRequired="true"
			class="formItem"
		>
			<AddNewCuisine />
		</SelectComponent>
		<WrapWithLabel name="ingred" fullName="Ingredients" class="formItem">
			<TextArea
				name="ingred"
				:isRequired="false"
				@input="
					(e) =>
						newCourseStore.setCourseProp(
							'ingredients',
							e.target?.value
						)
				"
			></TextArea>
		</WrapWithLabel>
		<EnergyInfo class="formItem" />
		<button
			type="submit"
			class="btn btn-primary p-3"
			:disabled="!isValid"
		>
			Save new course
		</button>
	</form>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useApiStore } from "@/stores/api";
import { useFormValidationStore } from "@/stores/forms/formValidation";
import { useNewCourseStore } from "@/stores/forms/newCourse";
import WrapWithLabel from "@/components/forms/WrapWithLabel.vue";
import InputComponent from "@/components/forms/InputComponent.vue";
import TextArea from "@/components/forms/TextArea.vue";
import SelectComponent from "@/components/forms/SelectComponent.vue";
import EnergyInfo from "@/components/forms/EnergyInfo.vue";
import AddNewCuisine from "@/components/forms/AddNewCuisine.vue";
import { validateForm } from "@/tools/formValidation";

const apiStore = useApiStore();
const formValidationStore = useFormValidationStore();
const newCourseStore = useNewCourseStore();

onMounted(() => {
	apiStore.setCuisines();
});

const { cuisines } = storeToRefs(apiStore);
const { isValid } = storeToRefs(formValidationStore);

const onChange = () => {
	formValidationStore.setIsValid(validateForm()[0]);
};
const onSumbit = (e: Event) => apiStore.createNewCourse();
</script>

<style scoped>
.form {
	display: flex;
	flex-flow: column nowrap;
	gap: 1rem;
}
</style>
