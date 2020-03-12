//Welcome Page component

<template>
  <div
    class="welcomePage"
    data-aos-duration="4000"
    data-aos-easing="ease-in"
    data-aos-offset="200"
    data-aos-delay="50"
  >
    <header class="title">
      <p data-aos="fade-left" class="signature">EH</p>
    </header>
    <section class="quote" data-aos="fade-down">
      <p>
        "In photography there is a reality so subtle that it becomes more real
        than reality."
      </p>
      <h1>- Alfred Stieglitz</h1>
    </section>
    <footer data-aos="fade-up" data-aos-once="true">
      <p class="arrowText">SCROLL DOWN</p>
      <object v-bind:data="arrowSvg" type="image/svg+xml" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  data() {
    return {
      arrowSvg: require("@/assets/scrollArrow.svg")
    };
  }
};
</script>

<style scoped>
.welcomePage {
  height: 100vh;
  background-color: rgb(242, 228, 210);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: #1c1f2b;
}
.title {
  width: 100%;
  color: #1c1f2b;
  display: flex;
  justify-content: flex-end;
}
.signature {
  font-weight: bold;
  font-size: 20px;
}

h2 {
  margin: 0;
}
p {
  font-weight: 500;
  font-size: 24px;
  font-style: italic;
  padding-right: 20px;
  padding-left: 20px;
}
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.arrowText {
  margin: 0;
  font-size: 20px;
  padding-bottom: 10px;
}
object {
  padding-bottom: 30px;
}
</style>
