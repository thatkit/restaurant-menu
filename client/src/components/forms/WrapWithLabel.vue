<template>
	<div class="form-floating">
		<slot></slot>
		<label :for="name">{{ fullName }}</label>
		<div class="invalid-feedback">Invalid input</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	name: string;
	fullName: string;
}>();
</script>

<style scoped></style>
