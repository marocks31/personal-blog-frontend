<script>
import axios from "axios";
import { Form, Field } from "vee-validate";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
      Form,
      Field,
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
    validateEmail(value) {
      if (!value) {
        return `'This field is required'`;
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return `'This field must be a valid email'`;
      }
      return true;
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
          <input type="text" v-model="newUserParams.name" />
        </div>
        <div>
          <label>Email:</label>
          <Field name="email" type="email" :rules="validateEmail" v-model="newUserParams.email" />
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
    </form>
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
