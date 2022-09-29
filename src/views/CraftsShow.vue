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
    <!-- added h-100 class to make all cards the same height -->
    <div class="card h-100 mx-auto my-4" style="width: 25rem">
      <div class="card-body">
        <img v-bind:src="craft.image" class="card-img-top" v-bind:alt="craft.title" style="height: 45%" />
        <h2 class="card-title">{{ craft.name }}</h2>
        <p class="card-text">Directions: {{ craft.description }}</p>
        <p class="card-text">Difficulty: {{ craft.difficulty }}</p>
        <p class="card-text">Materials: {{ craft.materials }}</p>
        <div class="card-footer">
          <div class="action">
            <Popper content="Favorited">
              <a
                data-bs-target="#px-quick-view"
                href="javascript:void(0)"
                v-on:click="createFavorite()"
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
                <!-- <i class="bi bi-heart-fill"></i> -->
              </a>
            </Popper>
          </div>
          <!-- <button id="favorite" v-on:click="createFavorite(craft)">Favorite</button> -->
        </div>
      </div>
    </div>
    <router-link to="/crafts">Back to all</router-link>
  </div>
</template>
<style></style>
