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
  <div class="parallax"></div>
  <div class="about-section">
    <p>About</p>
    <div style="height: 1000px; font-size: 36px">
      Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip:
      Try to remove the background-attachment property to remove the scrolling effect.
    </div>
  </div>

  <!-- <div class="hero">
    <img
      src="https://res.cloudinary.com/dwstndeye/image/upload/v1661564801/Screen_Shot_2022-08-26_at_8.46.06_PM_sz2h4t.png"
      alt="a banner"
      style="width: auto"
    />
    <div class="hero-text">
      <h1>Craft Stars</h1>
      <p>A place to feel inspired and...</p>
    </div>
    <body>
      <h1>About Craft Stars</h1>
    </body>
  </div> -->
</template>

<style>
.parallax {
  /* The image used */
  background-image: url("https://res.cloudinary.com/dwstndeye/image/upload/v1661719557/IMG_6814_e2xsbj.jpg");

  /* Set a specific height */
  min-height: 700px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.about-section {
  background-color: #6883ba;
}
/* #hero {
  height: 50%;
  position: relative;

  /* Create the parallax scrolling effect 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
} */
</style>
