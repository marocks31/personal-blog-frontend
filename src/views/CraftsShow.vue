<script>
import axios from "axios";
export default {
  data: function () {
    return {
      craft: {},
    };
  },
  created: function () {
    axios.get("/crafts/" + this.$route.params.id).then((response) => {
      console.log("crafts show", response);
      this.craft = response.data;
    });
  },
  methods: {
    destroyCraft: function (craft) {
      axios.delete("/crafts/" + craft.id).then((response) => {
        console.log("craft destroy", response);
        this.$router.push("/crafts");
      });
    },
  },
};
</script>
<template>
  <div class="crafts-show">
    <h1>A Closer look..</h1>
    <h2>{{ craft.name }}</h2>
    <img id="craft-image" v-bind:src="craft.image" v-bind:alt="craft.name" />
    <h2>Description:</h2>
    <h4>{{ craft.description }}</h4>
    <h2>Difficulty:</h2>
    <h4>{{ craft.difficulty }}</h4>
    <h2>Materials:</h2>
    <h4>{{ craft.materials }}</h4>

    <button><router-link v-bind:to="`/crafts/${craft.id}/edit`">Edit</router-link></button>
    <router-link v-bind:to="`/comments/${craft.id}/edit`">Comment</router-link>
    <button v-on:click="destroyCraft(craft)">Delete</button>
    <router-link to="/crafts">Back to all</router-link>
  </div>
</template>
<style>
#craft-image {
  height: 50vh;
}
</style>
