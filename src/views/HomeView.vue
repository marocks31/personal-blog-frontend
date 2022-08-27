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
  <div class="home">
    <header class="container" id="hero">
      <img
        src="https://res.cloudinary.com/dwstndeye/image/upload/v1661564801/Screen_Shot_2022-08-26_at_8.46.06_PM_sz2h4t.png"
        alt=""
        style="width: auto"
      />
      <div class="hero-text">
        <h1>Craft Stars</h1>
        <p>A place to feel inspired and...</p>
      </div>
    </header>
  </div>
</template>

<style>
#hero {
  height: 50%;
  position: relative;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
