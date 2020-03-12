//Post Container component, this component loads image data
<template>
  <div>
    <p>Gallery</p>
    <div v-for="item in items" :key="item.id">
      <GalleryItem v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import GalleryItem from "./GalleryItem";

export default {
  name: "Gallery",
  components: {
    GalleryItem
  },
  data() {
    return {
      items: []
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
      this.items = data;
    }
  }
};
</script>

<style scoped>
p {
  font-style: italic;
  font-weight: 600;
  font-size: 30px;
}
</style>
