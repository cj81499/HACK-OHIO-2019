<template>
  <div id="app">
    <Header />
    <Navbar />
    <MapPreview />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import MapPreview from "./components/MapPreview.vue";

export default {
  name: "app",
  components: {
    Header,
    Navbar,
    MapPreview
  }
};
</script>

<style>
@font-face {
  font-family: "Avenir";
  src: url("assets/Avenir Roman.otf");
}

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606060;
}
</style>
