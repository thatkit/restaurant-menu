<template>
	<input
		type="text"
		:name="name"
		class="form-control"
		:id="name"
		:placeholder="name"
		value=""
	/>
</template>

<script setup lang="ts">
defineProps<{
	name: string;
}>();
</script>

<style scoped></style>
