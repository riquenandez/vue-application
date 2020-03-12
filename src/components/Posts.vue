//Post Container component
//this component loads image data
<template>
  <div class="hello">
    <div v-for="post in posts" :key="post.id">
      <PostItem v-bind:post="post" />
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem";

export default {
  name: "Posts",
  components: {
    PostItem
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getAllImages();
  },
  methods: {
    //fetch images from url
    async getAllImages() {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      this.posts = data;
    }
  }
};
</script>

<style>
</style>
