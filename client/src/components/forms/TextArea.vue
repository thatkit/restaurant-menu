<template>
	<textarea
		:name="name"
		class="form-control"
		:id="name"
		:placeholder="name"
	></textarea>
</template>

<script setup lang="ts">
defineProps<{
	name: string;
}>();
</script>

<style scoped></style>
