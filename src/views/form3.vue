<template>
  <div class="home">
    <div class="columns is-medium is-0-desktop">
      <div class="column is-three-fifths is-offset-one-fifth">
        <Navbar
          msg="Cuestionario: Cansancio Emocional"
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
              label="Me siento emocionalmente agotado por mi trabajo"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 style="align-self: center;">Nunca</h5>
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
              <h5 style="align-self: center;">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q1"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="Me siento cansado al final de la jornada de trabajo"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 style="align-self: center;">Nunca</h5>
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
              <h5 style="align-self: center;">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q2"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="Cuando me levanto por la mañana y me enfrento a otra jornada de trabajo me siento fatigado"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 style="align-self: center;">Nunca</h5>
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
              <h5 style="align-self: center;">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q3"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="Siento que trabajar todo el día con gente supone un gran esfuerzo y me cansa."
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 style="align-self: center;">Nunca</h5>
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
              <h5 style="align-self: center;">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q4"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="Siento que mi trabajo me está desgastando"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 style="align-self: center;">Nunca</h5>
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
              <h5 style="align-self: center;">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q5"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="Me siento frustrado/a en mi trabajo"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 style="align-self: center;">Nunca</h5>
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
              <h5 style="align-self: center;">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q6"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="Creo que trabajo demasiado"
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 style="align-self: center;">Nunca</h5>
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
              <h5 style="align-self: center;">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q7"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="Trabajar directamente con alumnos/as me produce estrés."
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 style="align-self: center;">Nunca</h5>
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
              <h5 style="align-self: center;">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q8"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="Me siento acabado en mi trabajo, al límite de mis posibilidades."
              style="margin-bottom: 25px"
            >
            </b-field>
            <b-field style="align-self: center;">
              <h5 style="align-self: center;">Nunca</h5>
              <b-radio-button style="margin: 2%" v-model="q9" native-value="0">
                0
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q9" native-value="1">
                1
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q9" native-value="2">
                2
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q9" native-value="3">
                3
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q9" native-value="4">
                4
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q9" native-value="5">
                5
              </b-radio-button>
              <b-radio-button style="margin: 2%" v-model="q9" native-value="6">
                6
              </b-radio-button>
              <h5 style="align-self: center;">Todos los dias</h5>
            </b-field>
            <b-field
              v-if="error_q9"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <b-field grouped position="is-right">
            <div class="buttons" style="margin-top: 40px;margin-bottom: 15%">
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
  name: "Form2",
  props: ["data"],
  mounted() {
    if (!this.data) {
      this.$router.push({ name: "Home" });
    }
  },
  data() {
    return {
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
      q9: "",
      error_q1: false,
      error_q2: false,
      error_q3: false,
      error_q4: false,
      error_q5: false,
      error_q6: false,
      error_q7: false,
      error_q8: false,
      error_q9: false
    };
  },
  methods: {
    errorNotification() {
      this.$buefy.notification.open({
        duration: 1500,
        message: `Es necesario responder todas las preguntas.`,
        position: "is-bottom-right",
        type: "is-danger",
        hasIcon: false
      });
    },
    changeForm() {
      if (this.q1 === "") {
        this.error_q1 = true;
        this.errorNotification();
        return;
      }
      if (this.q2 === "") {
        this.error_q2 = true;
        this.errorNotification();
        return;
      }
      if (this.q3 === "") {
        this.error_q3 = true;
        this.errorNotification();
        return;
      }
      if (this.q4 === "") {
        this.error_q4 = true;
        this.errorNotification();
        return;
      }
      if (this.q5 === "") {
        this.error_q5 = true;
        this.errorNotification();
        return;
      }
      if (this.q6 === "") {
        this.error_q6 = true;
        this.errorNotification();
        return;
      }
      if (this.q7 === "") {
        this.error_q7 = true;
        this.errorNotification();
        return;
      }
      if (this.q8 === "") {
        this.error_q8 = true;
        this.errorNotification();
        return;
      }
      if (this.q9 === "") {
        this.error_q9 = true;
        this.errorNotification();
        return;
      }
      const quest1 = {
        q1: this.q1,
        q2: this.q2,
        q3: this.q3,
        q4: this.q4,
        q5: this.q5,
        q6: this.q6,
        q7: this.q7,
        q8: this.q8,
        q9: this.q9
      };
      this.$router.push({
        name: "Form4",
        params: { quest1: JSON.stringify(quest1), data: this.data }
      });
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
