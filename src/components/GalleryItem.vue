//Post item component

<template>
  <div class="galleryItem">
    <img :src="item.download_url" />
    <p>Photo Credit: {{ item.author }}</p>
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: ["item"]
};
</script>

<style scoped>
.galleryItem {
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
