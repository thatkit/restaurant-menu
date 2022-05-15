<template>
  <div class="container">
    <header>
      <h1>Bobby's cafe</h1>
      <p>Adress: just down the street</p>
    </header>
    <main>
      <FormComponent />
    </main>
    <footer>2022</footer>
  </div>
</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import FormComponent from "./components/FormComponent.vue";
</script>

<style></style>
