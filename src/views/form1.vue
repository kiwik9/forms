<template>
  <div class="home" style="height: 100%">
    <div
      class="columns is-centered is-gapless is-0-desktop"
      style="height: 100%"
    >
      <div class="column is-half" style="height: 100%; background-color: white">
        <Navbar msg="" />
        <br />
        <div class="margin">
          <p style="text-align: justify">
            ¿Continua usted laborando durante el periodo de pandemia?
            <br />
            Si su respuesta es "SI" puede continuar con el cuestionario *
          </p>
          <section style="margin-top: 25px">
            <div class="field">
              <b-radio v-model="radio" native-value="Si">
                Si
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="radio" native-value="No" type="is-info">
                No
              </b-radio>
            </div>
          </section>
          <b-field grouped position="is-right">
            <div class="buttons" style="margin-top: 25px;">
              <b-button @click="changeForm" type="is-info">Siguiente</b-button>
            </div>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Form1",
  props: ["perm"],
  data() {
    return {
      radio: "Si"
    };
  },
  methods: {
    changeForm() {
      if (this.radio === "No") {
        this.$router.push({
          name: "Thank",
          params: { perm: true }
        });
        return;
      }
      this.$router.push({
        name: "Form2",
        params: { perm: true }
      });
    }
  },
  mounted() {
    if (!this.perm) {
      this.$router.push({ name: "Home" });
    }
  },
  components: {
    Navbar
  }
};
</script>
<style>
.margin {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
