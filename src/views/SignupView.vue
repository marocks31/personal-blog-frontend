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
        <input id="password-input" type="password" placeholder="new password" oninput="validate()" />
      </div>
      <div>
        <input id="confirm-input" type="password" placeholder="confirm password" oninput="validate()" />
      </div>
      <p id="min-length" class="password-req not-met">* must be 6 characters or longer</p>
      <p id="max-length" class="password-req">* must be 12 characters or shorter</p>
      <p id="match" class="password-req">* passwords must match</p>
      <button v-on:click="submit()">create account</button>
    </div>
  </body>
</template>

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

    validate: function () {
      let passwordInput = document.getElementById("password-input");
      let confirmInput = document.getElementById("confirm-input");
      let minLengthWarning = document.getElementById("min-length");
      let maxLengthWarning = document.getElementById("max-length");
      let matchWarning = document.getElementById("match");
      // let buttonElement = document.getElementsByTagName("button")[0];
      let passwordValue = passwordInput.value;
      let confirmValue = confirmInput.value;
      if (passwordValue.length < 6) {
        minLengthWarning.className = "password-req not-met";
      } else {
        minLengthWarning.className = "password-req";
      }
      if (passwordValue.length > 12) {
        maxLengthWarning.className = "password-req not-met";
      } else {
        maxLengthWarning.className = "password-req";
      }
      if (passwordValue != confirmValue) {
        matchWarning.className = "password-req not-met";
      } else {
        matchWarning.className = "password-req";
      }
    },
  },
};
</script>

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
