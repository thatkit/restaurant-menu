<template>
  <form>
    <div class="form-floating">
      <!-- <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Granny's soup"
      /> -->
      <InputComponent name="name" />
      <label for="name">Course name</label>
    </div>
    <div class="form-floating">
      <textarea
        class="form-control"
        id="desc"
        placeholder="Tasty!!!"
      ></textarea>
      <label for="desc">Description</label>
    </div>
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="price"
        placeholder="Price"
        aria-label="Amount (to the nearest dollar)"
      />
      <label for="price">Price</label>
      <span class="input-group-text">&#8381;</span>
    </div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Select cuisine</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="form-floating">
      <textarea
        class="form-control"
        id="ingr"
        placeholder="Choco, mayo and choco again!"
      ></textarea>
      <label for="ingr">Ingredients</label>
    </div>
    <div class="form-floating">
      <input
        type="text"
        aria-label="kcal"
        class="form-control"
        placeholder="kcal"
      />
      <label>kcal</label>
      <input
        type="text"
        aria-label="prots"
        class="form-control"
        placeholder="prots"
      />
      <label>prots</label>
      <input
        type="text"
        aria-label="carbs"
        class="form-control"
        placeholder="carbs"
      />
      <label>carbs</label>
      <input
        type="text"
        aria-label="fats"
        class="form-control"
        placeholder="fats"
      />
      <label>fats</label>
      <span class="input-group-text">Energy info</span>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import InputComponent from "./InputComponent.vue";
</script>
<style lang=""></style>
