<template>
	<form>
		<WrapWithLabel name="name" fullName="Course name">
			<InputComponent name="name" />
		</WrapWithLabel>
		<WrapWithLabel name="desc" fullName="Description">
			<TextArea name="desc"></TextArea>
		</WrapWithLabel>
		<WrapWithLabel name="price" fullName="Price">
			<InputComponent name="price" />
		</WrapWithLabel>
		<SelectComponent fullName="Select cuisine" :options="store.getCuisines">
			<AddNewCuisine />
		</SelectComponent>
		<WrapWithLabel name="ingred" fullName="Ingredients">
			<TextArea name="ingred"></TextArea>
		</WrapWithLabel>
		<EnergyInfo />
		<button type="submit" class="btn btn-primary">Save new course</button>
	</form>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "@/stores/api";
import WrapWithLabel from "./WrapWithLabel.vue";
import InputComponent from "./InputComponent.vue";
import TextArea from "./TextArea.vue";
import SelectComponent from "./SelectComponent.vue";
import EnergyInfo from "./EnergyInfo.vue";
import AddNewCuisine from "./AddNewCuisine.vue";

const store = useStore();

onMounted(() => {
	store.setCuisines();
});
</script>

<style scoped></style>
