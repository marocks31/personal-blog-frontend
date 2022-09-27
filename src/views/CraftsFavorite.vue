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
    destroyFavorite: function (favorite) {
      const token = localStorage.getItem("jwt");
      axios
        .delete(`/favorites/${favorite.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("favorite destroyed", response);
          let index = this.favorites.indexOf(favorite);
          this.favorites.splice(index, 1);
          this.$router.push("/favorite_crafts");
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
          <img class="img-fluid rounded-start" v-bind:src="favorite.image" v-bind:alt="favorite.name" />
        </div>
        <div class="col-md-8">
          <div>
            <div class="card-body">
              <h4 class="card-title">{{ favorite.name }}</h4>
              <p class="card-text">Description:{{ favorite.description }}</p>
              <p class="card-text">Materials:{{ favorite.materials }}</p>
              <p class="card-text">Difficulty:{{ favorite.difficulty }}</p>
            </div>
            <div class="action">
              Unfavorite
              <a
                data-bs-toggle="modal"
                data-bs-target="#px-quick-view"
                href="javascript:void(0)"
                v-on:click="destroyFavorite(favorite)"
                class="btn btn-outline-primary icon-color"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heartbreak-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"
                  />
                </svg>
              </a>
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
.favorites-new h1 {
  font-family: "Bungee Shade", cursive;
}
#favorite-card {
  background-color: white;
  margin: auto;
  width: 80%;
  padding: 10px;
  font-family: "Roboto Condensed", sans-serif;
}
.col-md-4 {
  padding: 50px;
}
.img-fluid {
  max-width: 100%;
  height: 50vh;
}
.card-title {
  font-family: "Bungee", cursive;
}
</style>
