<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import "./styles/constants.scss";

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606060;
  height: 100%;
}
</style>
