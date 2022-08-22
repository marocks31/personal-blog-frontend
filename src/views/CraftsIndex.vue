<script>
import axios from "axios";
export default {
  data: function () {
    return {
      crafts: [],
      currentCraft: {},
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
    <h1 class="m-3">Craft Showcase</h1>
    <div class="row">
      <div
        class="col"
        v-bind:class="{ selected: craft === currentCraft }"
        v-for="craft in crafts"
        v-bind:key="craft.id"
        v-on:click="currentCraft = craft"
      >
        <div class="card mx-auto my-4" style="width: 18rem">
          <img v-bind:src="craft.image" class="card-img-top" v-bind:alt="craft.title" />
          <div class="card-body">
            <h2 class="card-title">{{ craft.name }}</h2>
            <h5 class="card-text">Description: {{ craft.description }}</h5>
            <a v-bind:href="`/crafts/${craft.id}`" class="btn btn-primary">More info</a>

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
