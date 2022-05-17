<template>
	<input
		:type="type"
		:name="name"
		class="form-control"
		:id="name"
		:placeholder="name"
		value=""
		:required="isRequired"
	/>
</template>

<script setup lang="ts">
defineProps<{
	name: string;
	isRequired: boolean;
	type: "text" | "number";
}>();
</script>

<style scoped></style>
