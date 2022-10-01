<script>
import axios from "axios";
import Popper from "vue3-popper";
export default {
  components: {
    Popper,
  },
  data: function () {
    return {
      crafts: [],
      currentCraft: {},
      favoriteParams: {},
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
    createFavorite: function (craft) {
      var favorite = {
        user_id: 1,
        craft_id: craft.id,
        name: craft.name,
        image: craft.image,
      };
      console.log(favorite.name);
      console.log(favorite.image);
      axios
        .post("/favorites", favorite)
        .then((response) => {
          console.log("favorite created", response);
        })
        .catch((error) => {
          console.log("favorite create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="crafts-index">
    <h1 class="m-3">Craft Showcase</h1>
    <div class="row">
      <div
        class="col"
        v-bind:class="{ selected: craft === currentCraft }"
        v-for="craft in crafts"
        v-bind:key="craft.id"
        v-on:click="currentCraft = craft"
      >
        <!-- added h-100 class to make all cards the same height
        removed data-bs-toggle="modal" from favoritedd popper a tag to clean up console errors  -->
        <div class="card h-100 mx-auto my-4" style="width: 25rem">
          <div class="card-body">
            <img v-bind:src="craft.image" class="card-img-top" v-bind:alt="craft.title" style="height: 45%" />
            <h2 class="card-title">{{ craft.name }}</h2>
            <ol>
              <li v-for="item in craft.description">{{ item }}</li>
            </ol>
            <p class="card-text">Directions: {{ craft.description }}</p>
            <div class="card-footer">
              <a v-bind:href="`/crafts/${craft.id}`" class="btn btn-primary">More info</a>
              <div class="action">
                <Popper content="Favorited">
                  <a
                    data-bs-target="#px-quick-view"
                    href="javascript:void(0)"
                    v-on:click="createFavorite(craft)"
                    class="btn btn-outline-primary icon-color"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </a>
                </Popper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-body .btn {
  background-color: rgb(248, 174, 223);
  color: white;
}
.card-body .card-text .btn {
  padding-top: 100%;
}
.card-title {
  font-family: "Roboto Condensed", sans-serif;
}
.card-text {
  font-family: "Roboto Condensed", sans-serif;
}
.card-footer {
  padding-top: auto;
  position: relative;
  padding-bottom: 10%;
  background-color: white;
}
.crafts-index h1 {
  font-family: "Bungee Shade", cursive;
  /* color: rgb(255, 44, 185);
  text-shadow: 1px 1px 3px rgb(255, 44, 185); */
}
/* .card-title {
  text-shadow: 1px 1px 3px rgb(255, 44, 185);
} */
.card-footer .btn:hover {
  /* text-shadow: 1px 1px 3px rgb(255, 44, 185); */
  background-color: white;
  color: rgb(248, 174, 223);
  font-family: "Roboto Condensed", sans-serif;
}
/* .card-footer #favorite:hover {
  text-shadow: 1px 1px 3px rgb(255, 44, 185);
} */
:root {
  --popper-theme-background-color: rgb(248, 174, 223);
  --popper-theme-background-color-hover: rgb(248, 174, 223);
  --popper-theme-text-color: black;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 9px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
.icon-color {
  color: rgb(248, 174, 223);
}
.icon-color:hover {
  background-color: rgb(248, 174, 223);
  color: white;
}
</style>
