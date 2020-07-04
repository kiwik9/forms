<template>
  <div class="home" style="height: 100%">
    <div class="columns is-medium is-0-desktop"  style="height: 100%">
      <div class="column is-three-fifths is-offset-one-fifth" style="height: 100%; background-color: white">
        <Navbar msg="Resultados del test" />
        <br />
        <div class="margin">
          <div class="columns is-desktop" style="margin-top: 50px">
            <div class="column">
              <radial-progress-bar
                      startColor="#337547"
                      stopColor="#337547"
                      :completed-steps="r1"
                      :total-steps="rt1"
              >
                <p style="font-size: 40px">{{ r1 }}/{{ rt1 }}</p>
              </radial-progress-bar>
              <p style="margin-top: 15px;text-align: center;font-size: 20px;">
                Cansancio emocional
              </p>
            </div>
            <div class="column">
              <radial-progress-bar
                      startColor="#337547"
                      stopColor="#337547"
                      :completed-steps="r2"
                      :total-steps="rt2"
              >
                <p style="font-size: 40px">{{ r2 }}/{{ rt2 }}</p>
              </radial-progress-bar>
              <p style="margin-top: 15px;text-align: center;font-size: 20px;">
                Despersonalización
              </p>
            </div>

            <div class="column">
              <radial-progress-bar
                      startColor="#337547"
                      stopColor="#337547"
                      :completed-steps="r3"
                      :total-steps="rt3"
              >
                <p style="font-size: 40px">{{ r3 }}/{{ rt3 }}</p>
              </radial-progress-bar>
              <p style="font-size: 20px; margin-top: 15px;text-align: center">
                Realización personal
              </p>
            </div>
          </div>

          <p
                  style="margin-left: 7%;margin-right: 7%;font-style: italic;text-align: center;margin-top: 100px"
          >
            Altas puntuaciones en las dos primeras subescalas y bajas en la
            tercera definen el síndrome de Burnout. Hay que analizar de manera
            detallada los distintos aspectos para determinar el Grado del
            Síndrome de Burnout, que puede ser más o menos severo dependiendo de
            si los indicios aparecen en uno, dos o tres ámbitos; y de la mayor o
            menor diferencia de los resultados con respecto a los valores de
            referencia que marcan los indicios del síndrome. Este análisis de
            aspectos e ítems puede orientar sobre los puntos fuertes y débiles
            de cada uno en su labor.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RadialProgressBar from "vue-radial-progress";
  import Navbar from "../components/Navbar";
  import { db } from "../plugins/firebase";

  export default {
    name: "Home",
    props: ["quest1", "quest2", "data"],
    mounted() {
      if (!this.quest1 || !this.quest2 || !this.data) {
        this.$router.push({ name: "Home" });
        return {};
      }
    },
    data() {
      return {
        r1: 0,
        rt1: 25,
        r2: 0,
        rt2: 25,
        r3: 0,
        rt3: 25
      };
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
      Navbar,
      RadialProgressBar
    }
  };
</script>
<style>
  .margin {
    margin-left: 5%;
    margin-right: 5%;
  }
</style>
