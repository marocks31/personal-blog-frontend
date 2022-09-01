<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Sign Up</title>
  </head>
  <body>
    <div id="sign-up-container">
      <h3>sign up</h3>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <input id="password-input" type="password" v-model="newUserParams.password" placeholder="new password" />
      </div>
      <div>
        <input
          id="confirm-input"
          type="password"
          placeholder="confirm password"
          v-model="newUserParams.password_confirmation"
        />
      </div>
      <button v-on:click="submit()">create account</button>
    </div>
  </body>
</template>

<style>
body {
  margin: 0;
  background-color: #eb9486;
}
#sign-up-container {
  height: 300px;
  width: 300px;
  background-color: bisque;
  border: solid chocolate 1px;
  margin: 100px auto;
  padding: 50px;
  text-align: center;
}

button {
  margin-top: 20px;
}

.password-req {
  font-size: 12px;
  color: grey;
}

.password-req.not-met {
  color: black;
}
</style>
