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
      <p>
        <br />
        This is a crafting blog where users can sign up for an account and then post their own crafts & also
        rate/comment/favorite crafts on the ShowPage. This app uses Ruby on Rails, Vue.js, Bootstrap, the Cloudinary
        API, HTML, and CSS. You can check out my code here:
        <a href="https://github.com/marocks31/personal-blog-frontend">Front End</a>
        &
        <a href="https://github.com/marocks31/craftz">Back End</a>
        .
      </p>
      <p>
        <br />
        This craft blog also showcases some homemade crafts from Molly and friends. Each craft has a set of
        instructions, materials to consider using, and a difficulty rating. If you find a craft you'd like to save for
        later you can add it to your favorites.
      </p>

      <div class="container">
        <!-- bootstrap individual .carsousel-item interval -->
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="1500">
              <img
                src="https://res.cloudinary.com/dwstndeye/image/upload/v1659988995/IMG_5312_kushbj.jpg"
                class="d-block w-100"
                alt="A doll made of potatoes"
              />
            </div>
            <div class="carousel-item" data-bs-interval="1500">
              <img
                src="https://res.cloudinary.com/dwstndeye/image/upload/v1660405662/IMG_6072_brvovt.jpg"
                class="d-block w-100"
                alt="A t-shirt with a hand drawn Garfield on it."
              />
            </div>
            <div class="carousel-item" data-bs-interval="1500">
              <img
                src="https://res.cloudinary.com/dwstndeye/image/upload/v1664297021/E16954A9-28A3-4C4A-A601-1F8238ABD721_1_105_c_vdjdkl.jpg"
                class="d-block w-100"
                alt="A colorful table with different colored rectangles there is an adorable dog in the background too."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
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
  margin-left: 0;
  text-align: left;
  text-indent: 0 !important;
}
.about-section h1 {
  font-family: "Bungee Shade", cursive;
  text-align: center;
}
#carouselExampleInterval {
  /* margin-left: auto;
  margin-right: auto; */
  padding-top: none;
  /* object-fit: cover;
  object-position: center; */
  height: 60vh;
  width: 60vh;
  /* overflow: hidden;
  display: block;
  position: absolute; */
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.carousel-inner .carousel-item {
  object-fit: cover;
  object-position: center;
  height: 60vh;
  width: 60vh;
  overflow: hidden;
}

/* .about-section h1 {
  text-shadow: 5px 5px 10px blue;
  color: white;
} */
</style>
