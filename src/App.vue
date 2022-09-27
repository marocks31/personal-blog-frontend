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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Craft Blog</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <li class="nav-item">
              <!-- edited home button class -->
              <a class="nav-link" href="/">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/crafts">Craft Showcase</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/crafts/new">Submit Crafts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/favorite_crafts">Favorites</a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <a class="nav-link" href="/signup">Sign Up</a>
            </li>
            <li class="nav-item">
              <a v-if="!isLoggedIn" class="nav-link" href="/login">Login</a>
              <a v-else class="nav-link" href="/logout">Logout</a>
            </li>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid mx-auto">
      <router-view />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bungee&family=Bungee+Shade&family=Ewert&family=Major+Mono+Display&family=Reem+Kufi+Fun:wght@400;500;600;700&family=Rubik+Moonrocks&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  font-family: "Bungee", cursive;
  background-color: antiquewhite;
}
.navbar-brand {
  font-family: "Bungee Shade", cursive;
  font-size: 20px;
  color: black;
  font-weight: 600;
  letter-spacing: 2px;
}
/* .nav-item:hover {
  text-shadow: 5px 5px 10px blue;
} */
.container-fluid {
  width: 100%;
  background-size: cover;
  padding: 0;
}
</style>
