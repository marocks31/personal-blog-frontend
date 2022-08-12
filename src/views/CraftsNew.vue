<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newCraftParams: {},
      errors: [],
      imageFile: "",
      description: "",
      difficulty: "",
      materials: "",
      name: "",
    };
  },
  created: function () {},
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.imageFile = event.target.files[0];
      }
    },
    submit: function () {
      var formData = new FormData();
      formData.append("image_file", this.imageFile);
      formData.append("", this.description);
      formData.append("", this.difficulty);
      formData.append("", this.materials);
      formData.append("", this.name);
    },
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
  <form action="/posts" method="post" enctype="multipart/form-data" v-on:submit.prevent="createCraft()">
    <div class="form-row">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="form-group col-md-6">
        <label for="craftTitle">Craft Title</label>
        <input
          type="text"
          v-model="newCraftParams.name"
          class="form-control"
          id="craftTitle"
          placeholder="Craft Title"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="craftDescription">Description</label>
        <input
          type="text"
          v-model="newCraftParams.description"
          class="form-control"
          id="craftDescription"
          placeholder="Description"
        />
      </div>
    </div>
    <div class="form-row">
      <!-- need to add in label explaining range, align, center-->
      <label for="craftDifficulty">Difficulty</label>
      <input
        type="range"
        v-model="newCraftParams.difficulty"
        placeholder="Craft difficulty"
        id="quantity"
        name="quantity"
        min="1"
        max="5"
      />
    </div>
    <div class="form-group col-md-6">
      <label for="craftMaterials">Materials</label>
      <input type="text" v-model="newCraftParams.materials" class="form-control" placeholder="Craft materials" />
    </div>
    <div class="form-group col-md-6">
      <label for="craftDescription">Image</label>
      <input type="file" name="image_file" placeholder="Craft image" class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<style>
input[type="number"] {
  width: 200px;
}
.form-row {
  padding: 10px;
  text-align: left;
}
.form-group {
  text-align: left;
  padding: 10px;
}
/* need padding around all inputs, labels */
</style>
