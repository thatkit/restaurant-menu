<template>
	<span>Energy per 100g</span>
	<div class="cnt">
		<WrapWithLabel
			v-for="value in values"
			:name="value"
			:fullName="value.charAt(0).toUpperCase() + value.slice(1)"
		>
			<InputComponent :name="value" />
		</WrapWithLabel>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import WrapWithLabel from "./WrapWithLabel.vue";
import InputComponent from "./InputComponent.vue";
const values = ref(["kcal", "prots", "carbs", "fats"]);
</script>

<style scoped>
.cnt {
	display: flex;
	justify-content: space-between;
}
</style>
