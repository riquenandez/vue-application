<template>
  <div id="app">
    <WelcomePage />
    <Posts v-bind:posts="posts" />
  </div>
</template>

<script>
import Posts from "./components/Posts";
import WelcomePage from "./components/WelcomePage";
export default {
  name: "App",
  components: { Posts, WelcomePage },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getAllImages();
  },
  methods: {
    async getAllImages() {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      this.posts = data;
    }
  }
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
