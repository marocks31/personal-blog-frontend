<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password"];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="form">
    <div class="login">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Email:</label>
          <input type="email" v-model="newSessionParams.email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="newSessionParams.password" />
        </div>
        <div class="submit-button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.login {
  font-family: "Roboto Condensed", sans-serif;
  height: 300px;
  width: 300px;
  background-color: rgb(248, 174, 223);
  border: solid chocolate 1px;
  margin: 100px auto;
  padding: 50px;
  text-align: center;
}
.login h1 {
  font-family: "Bungee Shade", cursive;
  text-shadow: 1px 1px 8px white;
  font-size: 50px;
}
.login label {
  padding: 5px;
}

.submit-button {
  padding: 10px;
}
</style>
