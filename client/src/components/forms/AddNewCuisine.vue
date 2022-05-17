<template>
	<button
		v-if="!isShown"
		@click="setIsShown(true)"
		class="btn text-bg-secondary p-3 fullWidth"
	>
		Add new cuisine
	</button>
	<form v-if="isShown" class="fullWidth form">
		<WrapWithLabel name="newCuisine" fullName="New cuisine name">
			<InputComponent
				name="newCuisine"
				@input="(e) => newCuisineStore.setNewCuisine(e.target?.value)"
			/>
		</WrapWithLabel>
		<button
			type="submit"
			class="btn text-bg-secondary p-3 fullWidth"
			@click="setNewCuisine"
		>
			Add new cuisine
		</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useApiStore } from "@/stores/api";
import { useNewCuisineStore } from "@/stores/forms/newCuisine";
import WrapWithLabel from "@/components/forms/WrapWithLabel.vue";
import InputComponent from "@/components/forms/InputComponent.vue";

const newCuisineStore = useNewCuisineStore();
const apiStore = useApiStore();

const isShown = ref(false);
const setIsShown = (value: boolean) => {
	isShown.value = value;
};

const setNewCuisine = (e: Event) => {
	e.preventDefault();
	apiStore.addNewCuisine();
};
</script>

<style scoped>
.fullWidth {
	width: 100%;
}

.form {
	display: flex;
	flex-flow: column nowrap;
	gap: 1rem;
}
</style>
