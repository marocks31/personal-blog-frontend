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
    <!-- bootstrap horizontal cards -->
    <div id="favorite-card" class="card mb-3" style="max-width: 1400px">
      <div class="row g-0" v-for="favorite in favorites" v-bind:key="favorite.id">
        <div class="col-md-4">
          <img
            class="img-fluid rounded-start"
            style="height: 250px"
            v-bind:src="favorite.image"
            v-bind:alt="favorite.name"
          />
        </div>
        <div class="col-md-8">
          <div>
            <div class="card-body">
              <h4 class="card-title">{{ favorite.name }}</h4>
              <p class="card-text">Description:{{ favorite.description }}</p>
              <p class="card-text">Materials:{{ favorite.materials }}</p>
              <p class="card-text">Difficulty:{{ favorite.difficulty }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .favorites-new {
 background 
} */
#favorite-card {
  background-color: rgb(213, 228, 172);
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
.col-md-4 {
  padding: 50px;
}
.row {
  border-top: 3px solid green;
}
</style>
