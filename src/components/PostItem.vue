<template>
  <div class="postItem">
    <img :src="post.download_url" />
    <p>{{post.author}}</p>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: ["post"]
};
</script>

<style scoped>
.postItem {
  width: auto;
  padding: 20px;
  height: auto;
}
p {
  font-style: italic;
}
img {
  width: 100%;
}
</style>