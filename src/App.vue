<script>
export default {
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.getItem("jwt");
      console.log(localStorage.jwt, "jwt check");
      console.log(this.isLoggedIn);
    },
  },
};
</script>
<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="#">Craft Stars</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/about">
                About
                <!-- <span class="sr-only">(current)</span> -->
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/crafts">Craft Showcase</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/crafts/new">Submit Crafts</a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <a class="nav-link" href="/signup">Sign Up</a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <a class="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

/* nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
