<template>
  <div class="container">
    <div class="carousel-demo-2">
      <div class="carousel-panel">
        <img
          class="panel-img"
          src="https://i.loli.net/2020/04/09/YI3OwlqA7MmJ5No.jpg"
        />
      </div>
      <div class="carousel-panel">
        <img
          class="panel-img"
          src="https://i.loli.net/2020/04/09/IBv56feTrKxNYpm.jpg"
        />
      </div>
      <div class="carousel-panel">
        <img
          class="panel-img"
          src="https://i.loli.net/2020/04/09/zyWXVsocxwCFK63.jpg"
        />
      </div>
      <div class="carousel-panel">
        <img
          class="panel-img"
          src="https://i.loli.net/2020/04/09/K4VyJejRYGLEQxv.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    import("../../../dist/index.js").then((module) => {
      const { Carousel } = module;
      new Carousel({
        element: document.querySelector(".carousel-demo-2"),
        height: "400px",
      });
    });
  },
};
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 16px;
}
.carousel-demo-2 {
  width: 600px;
  margin: 0 auto;
}
</style>
