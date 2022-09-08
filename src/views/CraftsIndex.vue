<script>
import axios from "axios";
export default {
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
    // toggleFavorite: function () {
    //   if (this.favorited) {
    //     this.unfavoriteCraft();
    //   } else {
    //     this.favoriteCraft();
    //   }
    // },
    // favoriteCraft: function () {
    //   this.submitted = true;
    //   this.$http.post("/favorites", { craft: this.craft }, function () {
    //     this.favorited = true;
    //     this.submitted = false;
    //     this.text = "Unfavorite";
    //   });
    // },
    // unfavoriteCraft: function () {
    //   this.submitted = true;
    //   this.$http.delete("/favorites/" + this.craft, function () {
    //     this.favorited = false;
    //     this.submitted = false;
    //     this.text = "Favorite";
    //   });
    // },
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
        <!-- added h-100 class to make all cards the same height -->
        <div class="card h-100 mx-auto my-4" style="width: 25rem">
          <div class="card-body">
            <img v-bind:src="craft.image" class="card-img-top" v-bind:alt="craft.title" style="height: 45%" />
            <h2 class="card-title">{{ craft.name }}</h2>
            <p class="card-text">Description: {{ craft.description }}</p>
            <div class="card-footer">
              <a v-bind:href="`/crafts/${craft.id}`" class="btn btn-primary">More info</a>
              <button id="favorite" v-on:click="createFavorite(craft)">Favorite</button>
            </div>

            <!-- Button trigger modal -->
            <!-- <a
            v-bind:href="`/crafts/${craft.id}`"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            More info
          </a> -->

            <!-- Modal -->
            <!-- <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div> -->
            <!-- <router-link v-bind:to="`/crafts/${craft.id}`">More Details</router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-body .btn {
  background-color: rgb(254, 166, 66);
}
.card-body .card-text .btn {
  padding-top: 100%;
}
.card-footer {
  padding-top: auto;
  position: relative;
  padding-bottom: 10%;
}
.crafts-index h1 {
  text-shadow: 5px 5px 10px rgb(235, 173, 213);
}
.card-title {
  text-shadow: 5px 5px 10px blue;
}
.card-footer .btn:hover {
  text-shadow: 5px 5px 10px white;
}
.card-footer #favorite:hover {
  text-shadow: 5px 5px 10px blue;
}
</style>
