<template>
	<select class="form-select">
		<option selected>{{ fullName }}</option>
		<option v-for="option in options" :key="option.id">
			{{ option.name }}
		</option>
	</select>
</template>

<script setup lang="ts">
class Option {
	id!: number;
	name!: string;
}
defineProps<{
	fullName: string;
	options: Option[];
}>();
</script>

<style scoped></style>
