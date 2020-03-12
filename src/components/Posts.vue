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
  props: ["posts"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
