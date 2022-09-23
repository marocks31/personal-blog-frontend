<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>

<template>
  <div class="parallax d-flex"></div>
  <div class="about-section">
    <h1>About</h1>
    <div style="height: 1000px; font-size: 24px">
      This is a crafting blog where users can sign up for an account and then post their own crafts & also
      rate/comment/favorite crafts on the ShowPage. This app uses Ruby on Rails, Vue.js, Bootstrap, the Cloudinary API,
      HTML, and CSS. You can check out my code here:
      <a href="https://github.com/marocks31/personal-blog-frontend">Front End</a>
      &
      <a href="https://github.com/marocks31/craftz">Back End</a>
      .
    </div>
  </div>
</template>

<style>
.parallax {
  /* The image used */
  background-image: url("https://res.cloudinary.com/dwstndeye/image/upload/v1661719557/IMG_6814_e2xsbj.jpg");

  /* Set a specific height */
  height: 50vh;
  width: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.about-section {
  padding: 10px;
  font-family: "Roboto Condensed", sans-serif;
}
.about-section h1 {
  font-family: "Bungee Shade", cursive;
}

/* .about-section h1 {
  text-shadow: 5px 5px 10px blue;
  color: white;
} */
</style>
