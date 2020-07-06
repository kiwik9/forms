<template>
  <div class="home bg-img" style="height: 140%;">
    <div
      class="columns is-centered is-gapless is-0-desktop"
      style="height: 100%"
    >
      <div
        class="column is-half"
        style="height: 100%; background-color:  rgba(255, 255, 255, 0.99)"
      >
        <Navbar msg="Resultados del test" />
        <br />
        <div class="margin">
          <div
            class="columns is-0-desktop is-multiline is-centered"
            style="margin-top: 50px;margin-bottom: 100px"
          >
            <div class="column">
              <radial-progress-bar
                startColor="#337547"
                innerStrokeColor="#dedede"
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
            <div class="column is-centered">
              <radial-progress-bar
                innerStrokeColor="#dedede"
                startColor="#22c8ac"
                stopColor="#22c8ac"
                :completed-steps="r2"
                :total-steps="rt2"
              >
                <p style="font-size: 40px">{{ r2 }}/{{ rt2 }}</p>
              </radial-progress-bar>
              <p style="margin-top: 15px;text-align: center;font-size: 20px;">
                Despersonalización
              </p>
            </div>

            <div class="column is-centered">
              <radial-progress-bar
                innerStrokeColor="#dedede"
                startColor="#a5b41d"
                stopColor="#a5b41d"
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
  props: ["quest1", "quest2", "quest3", "data"],
  mounted() {
    if (!this.quest1 || !this.quest2 || !this.data || !this.quest3) {
      this.$router.push({ name: "Home" });
      return {};
    }
    let number = [];
    let qu1 = Object.values(JSON.parse(this.quest1));
    qu1.forEach(x => {
      number.push(parseInt(x));
    });
    let q2 = Object.values(JSON.parse(this.quest2));
    q2.forEach(x => {
      number.push(parseInt(x));
    });
    let q3 = Object.values(JSON.parse(this.quest3));
    q3.forEach(x => {
      number.push(parseInt(x));
    });
    this.r1 =
      number[0] +
      number[1] +
      number[2] +
      number[5] +
      number[7] +
      number[12] +
      number[13] +
      number[15] +
      number[19];
    this.r2 = number[4] + number[9] + number[10] + number[14] + number[21];
    this.r3 =
      number[3] +
      number[6] +
      number[8] +
      number[11] +
      number[16] +
      number[17] +
      number[18] +
      number[20];
  },
  data() {
    return {
      r1: 0,
      rt1: 54,
      r2: 0,
      rt2: 30,
      r3: 0,
      rt3: 48
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
