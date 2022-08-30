<script>
import axios from "axios";
export default {
  data: function () {
    return {
      favorites: [],
      errors: [],
    };
  },
  beforeCreate() {
    let jwt = !!localStorage.jwt;
    console.log(localStorage.jwt);
    if (jwt == false) {
      this.$router.push("/login");
    }
  },
  created: function () {
    this.indexFavorite();
  },
  methods: {
    indexFavorite: function () {
      axios.get("/favorites").then((response) => {
        console.log(response.data);
        this.favorites = response.data;
      });
    },
  },
};
</script>
<template>
  <div class="favorites-new">
    <h1>Favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <h2>{{ favorite.name }}</h2>
      <img v-bind:src="favorite.image" v-bind:alt="favorite.name" />
    </div>
  </div>
</template>

<style>
.favorites-new img {
  height: 100px;
}
</style>
