<template>
	<input
		type="text"
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
}>();
</script>

<style scoped></style>
