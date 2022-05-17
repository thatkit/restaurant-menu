<template>
	<button v-if="!isShown" @click="setIsShown(true)">Add new cuisine</button>
	<form v-if="isShown">
		<WrapWithLabel name="newCuisine" fullName="New cuisine name">
			<InputComponent
				name="newCuisine"
				@input="(e) => store.setNewCuisine(e.target?.value)"
			/>
		</WrapWithLabel>
		<button type="submit" class="btn btn-primary" @click="setNewCuisine">
			Add new cuisine
		</button>
	</form>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/api";
import WrapWithLabel from "@/components/forms/WrapWithLabel.vue";
import InputComponent from "@/components/forms/InputComponent.vue";
import { ref } from "vue";

const store = useStore();

const isShown = ref(false);
const setIsShown = (value: boolean) => {
	isShown.value = value;
};

const setNewCuisine = (e: Event) => {
	e.preventDefault();
	store.addNewCuisine();
};
</script>

<style scoped></style>
