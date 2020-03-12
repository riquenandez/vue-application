<template>
  <div id="app">
    <WelcomePage />
    <Posts />
  </div>
</template>

<script>
import Posts from "./components/Posts";
import WelcomePage from "./components/WelcomePage";
export default {
  name: "App",
  components: { Posts, WelcomePage }
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
