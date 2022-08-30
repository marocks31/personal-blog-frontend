<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newCraft: {},
      errors: [],
      imageFile: "",
    };
  },
  // love these lines of code below, great for UX
  beforeCreate() {
    let jwt = !!localStorage.jwt;
    console.log(localStorage.jwt);
    if (jwt == false) {
      this.$router.push("/login");
    }
  },
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.imageFile = event.target.files[0];
      }
    },
    createCraft() {
      var craftForm = new FormData();
      craftForm.append("image_file", this.imageFile);
      craftForm.append("description", this.description);
      craftForm.append("difficulty", this.difficulty);
      craftForm.append("materials", this.materials);
      craftForm.append("name", this.name);

      axios
        .post("/crafts", craftForm)
        .then((response) => {
          console.log("craft created", response);
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
  <form v-on:submit.prevent="createCraft()">
    <div class="form">
      <!-- changing the div class from form-row to form improved the left alignment -->
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="form-group col-md-6">
        <label for="craftTitle">Craft Title</label>
        <input type="text" v-model="newCraft.name" class="form-control" id="craftTitle" placeholder="Craft Title" />
        <p>
          <small v-if="newCraft?.name?.length > 0 && newCraft?.name?.length <= 20">
            Remaining characters: {{ 20 - newCraft?.name?.length }}
          </small>
          <small v-if="newCraft?.name?.length > 20" class="text-danger">Craft title can't be over 20 characters.</small>
        </p>
      </div>
      <div class="form-group col-md-6">
        <label for="craftDescription">Description</label>
        <input
          type="text"
          v-model="newCraft.description"
          class="form-control"
          id="craftDescription"
          placeholder="Description"
        />
        <p>
          <small v-if="newCraft?.description?.length > 0 && newCraft?.description?.length <= 100">
            Remaining characters: {{ 100 - newCraft?.description?.length }}
          </small>
          <small v-if="newCraft?.name?.length > 100" class="text-danger">
            Craft description can't be over 100 characters.
          </small>
        </p>
      </div>
    </div>
    <div class="form-group col-md-6">
      <label for="craftMaterials">Materials</label>
      <input
        type="text"
        v-model="newCraft.materials"
        class="form-control"
        id="craftDescription"
        placeholder="Craft materials"
      />
    </div>
    <div class="form-group col-md-6">
      <label for="craftImage">Image</label>
      <input
        type="file"
        name="image_file"
        placeholder="Craft image"
        class="form-control"
        v-on:change="setFile($event)"
        ref="fileInput"
      />
    </div>
    <div class="form-group col-md-6">
      <!-- need to add in label explaining range, align, center-->
      <label for="craftDifficulty">Difficulty</label>
      <input
        type="range"
        v-model="newCraft.difficulty"
        placeholder="Craft difficulty"
        id="quantity"
        name="quantity"
        min="1"
        max="5"
      />
      <p>
        <small>easy......................</small>
        <small>challenging</small>
      </p>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<style>
input[type="number"] {
  width: 200px;
  padding: 20px;
}
.form-row {
  padding: 10px;
  text-align: left;
}
.form-group {
  text-align: left;
  padding: 20px;
}
label {
  color: black;
}
p {
  text-indent: 10%;
}
/* need padding around all inputs, labels */
</style>
