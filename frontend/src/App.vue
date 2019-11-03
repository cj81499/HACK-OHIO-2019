<template>
  <div id="app">
    <Header />
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Navbar,
    Footer,
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
