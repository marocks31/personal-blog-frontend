<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newCraftParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createCraft: function () {
      axios
        .post("/crafts", this.newCraftParams)
        .then((response) => {
          console.log("crafts create", response);
          this.$router.push("/crafts");
        })
        .catch((error) => {
          console.log("crafts create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="crafts-new">
    <h1>Submit a new craft</h1>
    <form action="/posts" method="post" enctype="multipart/form-data" v-on:submit.prevent="createCraft()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <input type="text" v-model="newCraftParams.name" placeholder="Craft title" />
      <input type="text" v-model="newCraftParams.description" placeholder="Craft description" />
      <label for="quantity">Rate the craft difficulty 1 (easy) to 5 (difficult)</label>
      <input
        type="number"
        v-model="newCraftParams.difficulty"
        placeholder="Craft difficulty"
        id="quantity"
        name="quantity"
        min="1"
        max="5"
      />
      <input type="text" v-model="newCraftParams.materials" placeholder="Craft materials" />
      <input type="file" name="image_file" placeholder="Craft image" />

      <input type="submit" value="Create" />
    </form>
  </div>
</template>
