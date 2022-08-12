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
  methods: {},
};
</script>
<template>
  <div class="crafts-show">
    <h2>{{ craft.name }}</h2>
    <img v-bind:src="craft.image" v-bind:alt="craft.name" />
    <p>{{ craft.description }}</p>
  </div>
</template>
