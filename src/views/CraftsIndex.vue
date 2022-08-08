<script>
import axios from "axios";
export default {
  data: function () {
    return {
      crafts: [],
    };
  },
  created: function () {
    this.indexCrafts();
  },
  methods: {
    indexCrafts: function () {
      axios.get("/crafts").then((response) => {
        console.log("crafts index", response);
        this.crafts = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="crafts-index">
    <h1>Craft Showcase</h1>
    <div v-for="craft in crafts" v-bind:key="craft.name">
      <h2>{{ craft.name }}</h2>
    </div>
  </div>
</template>
