//App component

<template>
  <div id="app">
    <WelcomePage />
    <Gallery />
  </div>
</template>

<script>
import Gallery from "./components/Gallery";
import WelcomePage from "./components/WelcomePage";
export default {
  name: "App",
  components: { Gallery, WelcomePage }
};
</script>

<style>
html,
body {
  margin: 0;
  overflow: auto;
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
