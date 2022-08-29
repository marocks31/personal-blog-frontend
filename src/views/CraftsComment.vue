<script>
import axios from "axios";
export default {
  data: function () {
    return {
      comments: [],
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
    this.indexComment();
  },
  methods: {
    indexComment: function () {
      axios.get("/comments").then((response) => {
        console.log(response.data);
        this.comments = response.data;
      });
    },
  },
};
</script>
<template>
  <div class="comments-new">
    <h1>comments</h1>
    <div v-for="comment in comments" v-bind:key="comment.id">
      <h2>{{ comment.craft.name }}</h2>
      <img v-bind:src="comment.craft.image" v-bind:alt="comment.craft.name" />
    </div>
  </div>
</template>

<style></style>
