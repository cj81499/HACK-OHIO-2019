<template>
  <div id="app">
    <Header />
    <Navbar />
    <div class="grid-container">
      <div class="grid-item">
        <Table />
      </div>
      <div class="grid-item">
        <MapPreview />
      </div>
      <div class="grid-item"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import MapPreview from "./components/MapPreview.vue";
import Table from "./components/Table.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Navbar,
    MapPreview,
    Table,
    Footer
  }
};
</script>

<style lang="scss">
@import "./styles/constants.scss";

@font-face {
  font-family: "Avenir";
  src: url("assets/Avenir Roman.otf");
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.grid-container {
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  flex-grow: 1;
}

.grid-item {
  $shadow: rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 1px $shadow, 0 2px 2px $shadow,
    0 4px 4px $shadow, 0 8px 8px $shadow,
    0 16px 16px $shadow;
  border: 1px solid #ccc;
  border-radius: $border-radius;
  padding: 1rem;
}


#app {
  display: flex;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606060;
  height: 100%;
}
</style>
