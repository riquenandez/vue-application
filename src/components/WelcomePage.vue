<template>
  <div>
    <header class="welcomePage">
      <h2>An art gallery</h2>
    </header>
  </div>
</template>

<script>
export default { name: "WelcomePage" };
</script>

<style scoped>
.welcomePage {
  height: 100vh;
  background-color: bisque;
  display: flex;
  align-items: center;
  flex-direction: column;
}
h2 {
  margin: 0;
  color: black;
}
</style>