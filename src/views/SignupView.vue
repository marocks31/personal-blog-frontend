<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup: function () {
    return { v$: useVuelidate() };
  },
  data: function () {
    return {
      newUserParams: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: [],
    };
  },
  validations: function () {
    return {
      newUserParams: {
        name: { required },
        email: { required, email },
        password: { required },
        password_confirmation: { required },
      },
    };
  },
  methods: {
    onSubmit: function () {
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
    <form @submit.prevent="onSubmit">
      <div id="sign-up-container">
        <h3>sign up</h3>
        <div>
          <label>Name:</label>
          <input type="text" v-model="v$.newUserParams.name.$model" />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" type="email" v-model="v$.newUserParams.email.$model" />
        </div>
        <div>
          <input
            id="password-input"
            type="password"
            v-model="v$.newUserParams.password.$model"
            placeholder="new password"
          />
        </div>
        <div>
          <input
            id="confirm-input"
            type="password"
            placeholder="confirm password"
            v-model="v$.newUserParams.password_confirmation.$model"
          />
        </div>
        <button v-on:click="submit()" :disabled="v$.newUserParams.$invalid">create account</button>
      </div>
    </form>
    <div :class="{ error: v$.newUserParams.name.$errors.length }">
      <div class="input-errors" v-for="error of v$.newUserParams.name.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
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
