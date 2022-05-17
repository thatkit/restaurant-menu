<template>
	<div class="cnt">
		<span class="desc">Energy per 100g</span>
		<WrapWithLabel
			v-for="value in values"
			:name="value"
			:fullName="value.charAt(0).toUpperCase() + value.slice(1)"
		>
			<InputComponent
				:name="value"
				type="number"
				:isRequired="false"
				@input="
					(e) => newCourseStore.setEnergyProp(value, e.target?.value)
				"
			/>
		</WrapWithLabel>
	</div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import WrapWithLabel from "./WrapWithLabel.vue";
import InputComponent from "./InputComponent.vue";
import { useNewCourseStore } from "@/stores/forms/newCourse";
import type { EnergyPropType } from "@/types";

const values: Ref<EnergyPropType[]> = ref(["kcal", "prots", "carbs", "fats"]);

const newCourseStore = useNewCourseStore();
</script>

<style scoped>
.cnt {
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	gap: 1rem;
}

.desc {
	width: 40%;
	text-align: left;
	display: flex;
	align-items: center;
}
</style>
