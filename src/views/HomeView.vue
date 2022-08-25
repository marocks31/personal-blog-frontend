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
  <div class="hero-image">
    <div class="hero-text">
      <h1>Craft Stars</h1>
      <p>A place to feel inspired and...</p>
    </div>
  </div>
</template>

<style>
.hero-image {
  background-image: url("https://res.cloudinary.com/dwstndeye/image/upload/v1661358607/Screen_Shot_2022-08-24_at_11.08.05_AM_hjgfva.png");
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
