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
        <Navbar />
        <br />
        <div class="margin">
          <p style="text-align: justify">
            Invito a usted a participar de la siguiente encuesta anónima, con el
            objetivo de identificar los factores asociados a este síndrome que
            se puedan encontrar entre los trabajadores de la salud. Se le
            agradece de antemano su participación. Los datos recolectados sólo
            serán conocidos y trabajados por el personal investigador. Usted
            tiene derecho a no participar de la encuesta virtual, si no lo
            desea.
          </p>
          <b-field grouped position="is-right">
            <div class="buttons" style="margin-top: 25px;">
              <b-button @click="changeForm" type="is-info">Aceptar</b-button>
            </div>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { db } from "../plugins/firebase";

export default {
  name: "Home",
  data() {
    return {};
  },
  firestore() {
    return {
      formsDB: db.collection("forms")
    };
  },
  methods: {
    add() {
      this.$firestore.formsDB
        .add({
          accept: true,
          date: new Date()
        })
        .then(function(resp) {
          console.log(resp);
        });
    },
    changeForm() {
      this.$router.push({
        name: "Form1",
        params: { perm: true }
      });
    }
  },
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
