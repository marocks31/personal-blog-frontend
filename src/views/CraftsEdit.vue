<script>
import axios from "axios";
export default {
  data: function () {
    return {
      craft: {},
      editCraftParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/crafts" + this.$route.params.id).then((response) => {
      console.log("crafts show", response);
      this.craft = response.data;
      this.editCraftParams = this.craft;
    });
  },
  methods: {
    updateCraft: function (craft) {
      axios
        .patch("/crafts" + craft.id, this.editCraftParams)
        .then((response) => {
          console.log("crafts update", response);
          this.$router.push("/crafts");
        })
        .catch((error) => {
          console.log("crafts update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
<template>
  <div class="crafts-edit row">
    <h1>Edit Craft</h1>
    <div class="col-2 m-auto editCraft">
      <form v-on:submit.prevent="updateCraft(craft)">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          Name:
          <input type="text" v-model="editCraftParams.name" />
        </div>
        <div>
          Description:
          <input type="text" v-model="editCraftParams.description" />
        </div>
        <div>
          Picture:
          <input type="text" v-model="editCraftParams.picture" />
        </div>
        <div>
          Description:
          <input type="text" v-model="editCraftParams.description" />
        </div>
        <div>
          Difficulty:
          <input type="text" v-model="editCraftParams.difficulty" />
        </div>
        <div>
          Materials:
          <input type="text" v-model="editCraftParams.materials" />
        </div>
        <div>
          Image:
          <input type="text" v-model="editCraftParams.image" />
        </div>
        <div>
          <input type="submit" value="Update" />
        </div>
        <div>
          <button><router-link to="/crafts">Back to all</router-link></button>
        </div>
      </form>
    </div>
  </div>
</template>
