<template>
  <div class="home bg-img">
    <div
      class="columns is-centered is-gapless is-0-desktop"
      style="height: 100%"
    >
      <div
        class="column is-half"
        style="height: 100%; background-color:  rgba(255, 255, 255, 0.99)"
      >
        <Navbar
          msg="Cuestionario: Realización Personal"
          msg2="CALIFICAR DEL 0 AL 6 LAS RESPUESTA SOBRE LA FRECUENCIA CON QUE SIENTE LOS ENUNCIADOS:   "
          q1="0 = Nunca"
          q2="1 = Pocas veces al año o menos"
          q3="2 = Una vez al mes o menos"
          q4="3 = Unas pocas veces al mes o menos"
          q5="4 = Una vez a la semana  "
          q6="5 = Pocas veces a la semana   "
          q7="6 = Todos los días"
        />
        <br />
        <div class="margin">
          <section style="margin-top: 25px">
            <b-field
              label="1. Siento que puedo entender fácilmente a los pacientes "
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 class="hide-text">Nunca</h5>
              <b-radio-button style="margin: 2%" v-model="q1" native-value="0">
                0
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q1" native-value="1">
                1
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q1" native-value="2">
                2
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q1" native-value="3">
                3
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q1" native-value="4">
                4
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q1" native-value="5">
                5
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q1" native-value="6">
                6
              </b-radio-button>
              <h5 class="hide-text">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q1"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="2. Siento que trato con mucha eficacia los problemas de mis pacientes"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 class="hide-text">Nunca</h5>
              <b-radio-button style="margin: 2%" v-model="q2" native-value="0">
                0
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q2" native-value="1">
                1
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q2" native-value="2">
                2
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q2" native-value="3">
                3
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q2" native-value="4">
                4
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q2" native-value="5">
                5
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q2" native-value="6">
                6
              </b-radio-button>
              <h5 class="hide-text">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q2"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="3. Siento que estoy influyendo positivamente en la vida de otras personas a través de mi trabajo"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 class="hide-text">Nunca</h5>
              <b-radio-button style="margin: 2%" v-model="q3" native-value="0">
                0
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q3" native-value="1">
                1
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q3" native-value="2">
                2
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q3" native-value="3">
                3
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q3" native-value="4">
                4
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q3" native-value="5">
                5
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q3" native-value="6">
                6
              </b-radio-button>
              <h5 class="hide-text">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q3"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="4. Me siento con mucha energía en mi trabajo."
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 class="hide-text">Nunca</h5>
              <b-radio-button style="margin: 2%" v-model="q4" native-value="0">
                0
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q4" native-value="1">
                1
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q4" native-value="2">
                2
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q4" native-value="3">
                3
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q4" native-value="4">
                4
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q4" native-value="5">
                5
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q4" native-value="6">
                6
              </b-radio-button>
              <h5 class="hide-text">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q4"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="5. Siento que puedo crear con facilidad un clima agradable con mis pacientes"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 class="hide-text">Nunca</h5>
              <b-radio-button style="margin: 2%" v-model="q5" native-value="0">
                0
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q5" native-value="1">
                1
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q5" native-value="2">
                2
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q5" native-value="3">
                3
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q5" native-value="4">
                4
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q5" native-value="5">
                5
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q5" native-value="6">
                6
              </b-radio-button>
              <h5 class="hide-text">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q5"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="6. Me siento estimado después de haber trabajado íntimamente con mis pacientes"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 class="hide-text">Nunca</h5>
              <b-radio-button style="margin: 2%" v-model="q6" native-value="0">
                0
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q6" native-value="1">
                1
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q6" native-value="2">
                2
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q6" native-value="3">
                3
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q6" native-value="4">
                4
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q6" native-value="5">
                5
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q6" native-value="6">
                6
              </b-radio-button>
              <h5 class="hide-text">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q6"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="7. Creo que consigo muchas cosas valiosas en este trabajo"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 class="hide-text">Nunca</h5>
              <b-radio-button style="margin: 2%" v-model="q7" native-value="0">
                0
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q7" native-value="1">
                1
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q7" native-value="2">
                2
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q7" native-value="3">
                3
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q7" native-value="4">
                4
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q7" native-value="5">
                5
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q7" native-value="6">
                6
              </b-radio-button>
              <h5 class="hide-text">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q7"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="8. Siento que en mi trabajo los problemas emocionales son tratados de forma adecuada."
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 class="hide-text">Nunca</h5>
              <b-radio-button style="margin: 2%" v-model="q8" native-value="0">
                0
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q8" native-value="1">
                1
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q8" native-value="2">
                2
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q8" native-value="3">
                3
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q8" native-value="4">
                4
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q8" native-value="5">
                5
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q8" native-value="6">
                6
              </b-radio-button>
              <h5 class="hide-text">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q8"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <b-field grouped position="is-right">
            <div class="buttons" style="margin-top: 40px;margin-bottom: 15%">
              <b-button @click="changeForm" type="is-info" :loading="loading"
                >Finalizar</b-button
              >
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
  name: "Form5",
  props: ["quest1", "quest2", "data"],
  mounted() {
    if (!this.quest1 || !this.quest2 || !this.data) {
      this.$router.push({ name: "Home" });
      return {};
    }
  },
  data() {
    return {
      loading: false,
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
      error_q1: false,
      error_q2: false,
      error_q3: false,
      error_q4: false,
      error_q5: false,
      error_q6: false,
      error_q7: false,
      error_q8: false,
    };
  },
  firestore() {
    return {
      formsDB: db.collection("forms"),
    };
  },
  methods: {
    add() {
      const quest3 = {
        q1: this.q1,
        q2: this.q2,
        q3: this.q3,
        q4: this.q4,
        q5: this.q5,
        q6: this.q6,
        q7: this.q7,
        q8: this.q8,
      };
      let router = this.$router;
      let quest1 = this.quest1;
      let quest2 = this.quest2;
      let data = this.data;
      this.$firestore.formsDB
        .add({
          data: JSON.parse(this.data),
          form1: JSON.parse(this.quest1),
          form2: JSON.parse(this.quest2),
          form3: quest3,
          createdAt: new Date(),
        })
        .then(function(resp) {
          console.log(resp);
          router.push({
            name: "Results",
            params: {
              quest3: JSON.stringify(quest3),
              quest2: quest2,
              quest1: quest1,
              data: data,
            },
          });
        });
    },
    errorNotification() {
      this.$buefy.notification.open({
        duration: 1500,
        message: `Es necesario responder todas las preguntas.`,
        position: "is-bottom-right",
        type: "is-danger",
        hasIcon: false,
      });
    },
    changeForm() {
      this.loading = true;
      if (this.q1 === "") {
        this.error_q1 = true;
        this.loading = false;
        this.errorNotification();
        return;
      }
      if (this.q2 === "") {
        this.error_q2 = true;
        this.loading = false;
        this.errorNotification();
        return;
      }
      if (this.q3 === "") {
        this.loading = false;
        this.error_q3 = true;
        this.errorNotification();
        return;
      }
      if (this.q4 === "") {
        this.loading = false;
        this.error_q4 = true;
        this.errorNotification();
        return;
      }
      if (this.q5 === "") {
        this.loading = false;
        this.error_q5 = true;
        this.errorNotification();
        return;
      }
      if (this.q6 === "") {
        this.loading = false;
        this.error_q6 = true;
        this.errorNotification();
        return;
      }
      if (this.q7 === "") {
        this.loading = false;
        this.error_q7 = true;
        this.errorNotification();
        return;
      }
      if (this.q8 === "") {
        this.loading = false;
        this.error_q8 = true;
        this.errorNotification();
        return;
      }
      this.add();
    },
  },
  components: {
    Navbar,
  },
};
</script>
<style>
.margin {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
