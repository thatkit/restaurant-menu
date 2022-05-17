<template>
	<textarea
		:name="name"
		class="form-control"
		:id="name"
		:placeholder="name"
		:required="isRequired"
	></textarea>
</template>

<script setup lang="ts">
defineProps<{
	name: string;
	isRequired: boolean;
}>();
</script>

<style scoped></style>
