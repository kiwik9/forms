<template>
  <div class="home" style="height: 100%">
    <div
      class="columns is-centered is-gapless is-0-desktop"
      style="height: 100%"
    >
      <div
        class="column is-half"
        style="height: 100%; background-color:  rgba(255, 255, 255, 0.99)"
      >
        <Navbar msg="" />
        <br />
        <div class="margin">
          <h1 style="text-align: center;margin-top: 100px;font-size: 50px">
            ¡Muchas Gracias!
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  props: ["perm"],
  name: "Thank",
  data() {
    return {};
  },
  mounted() {
    if (!this.perm) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {},
  components: {
    Navbar
  }
};
</script>
<style>
body,
html {
  width: 100%;
  height: 100%;
}
.margin {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
