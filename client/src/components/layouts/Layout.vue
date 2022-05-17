<template>
	<div class="container customCnt">
		<header class="header">
			<h1>Bobby's cafe</h1>
		</header>
		<main class="main">
			<FormComponent />
		</main>
		<footer class="footer">2022</footer>
	</div>
</template>

<script setup lang="ts">
import FormComponent from "@/components/forms/FormComponent.vue";
</script>

<style scoped>
.customCnt {
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
}

@media screen and (min-width: 992px) {
	.customCnt {
		max-width: 720px;
	}
}

.header, .footer {
	width: 100%;
	padding: 1.5rem 0;
}

.footer {
	margin-top: auto;
	text-align: center;
}
</style>
