<template>
  <div id="app">
    <Header />
    <Navbar />
    <div class="grid-container">
      <div class="grid-items">
        <MapPreview />
      </div>
      <div class="grid-items">
        <Table />
      </div>
      <div class="grid-items">
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import MapPreview from "./components/MapPreview.vue";
import Table from "./components/Table.vue";

export default {
  name: "app",
  components: {
    Header,
    Navbar,
    MapPreview,
    Table
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

.grid-container {
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.grid-items {
  border: 0.5px solid #00aaff;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606060;
}
</style>
