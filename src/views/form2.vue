<template>
  <div class="home bg-img" style="height: auto">
    <div
      class="columns is-centered is-gapless is-0-desktop"
      style="height: 100%"
    >
      <div
        class="column is-half"
        style="height: 100%; background-color:  rgba(255, 255, 255, 0.99)"
      >
        <Navbar
          msg="RECOLECCIÓN DE DATOS"
          msg2="Al continuar usted laborando en el hospital, puede responder a las siguientes respuestas del cuestionario."
        />
        <br />
        <div class="margin">
          <section style="margin-top: 25px">
            <b-field label="Sexo"> </b-field>
            <div class="field">
              <b-radio v-model="sex" native-value="1">
                Masculino
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="sex" native-value="0" type="is-info">
                Femenino
              </b-radio>
            </div>
            <b-field
              v-if="sexError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="Edad" style="width: 200PX" message="">
              <b-input v-model="age" type="number" min="18" max="100" />
            </b-field>
            <b-field
              v-if="ageError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="Estado Civil" />
            <div class="field">
              <b-radio v-model="status" native-value="1">
                Soltero
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="status" native-value="0" type="is-info">
                Casado
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="status" native-value="2" type="is-info">
                Otros
              </b-radio>
            </div>
            <b-field
              v-if="statusError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="Hijos" />
            <div class="field">
              <b-radio v-model="sons" native-value="1">
                Si
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="sons" native-value="0" type="is-info">
                No
              </b-radio>
            </div>
            <b-field
              v-if="sonsError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="Tipo de Trabajador">
              <b-select
                v-model="workerType"
                style="width: 250px"
                placeholder="Elija"
                expanded
              >
                <option value="0">Médico Asistente</option>
                <option value="1">Médico Residente</option>
                <option value="2">Tecnólogo Médico</option>
                <option value="3">Enfermera</option>
                <option value="4">Obstetra</option>
                <option value="5">Técnico de Enfermeria </option>
                <option value="6">Quimico Farmaceutico </option>
                <option value="7">Médico General</option>
              </b-select>
            </b-field>
            <b-field
              v-if="workerTypeError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="Especialidad en la que labora">
              <b-select
                style="width: 250px"
                v-model="special"
                placeholder="Elija"
                expanded
              >
                <option value="0">Emergencia</option>
                <option value="1">Quirúrgica</option>
                <option value="2">Clínica</option>
                <option value="3">Otros</option>
              </b-select>
            </b-field>
            <b-field
              v-if="specialtyError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="Años de experiencia profesional">
              <b-select
                style="width: 250px"
                v-model="laboredExp"
                placeholder="Elija"
                expanded
              >
                <option value="0">Menos 10 Años</option>
                <option value="1">De 10 a 19 años</option>
                <option value="2">De 20 a 29 años</option>
                <option value="3">Mas de 30 años</option>
              </b-select>
            </b-field>
            <b-field
              v-if="laboredExpError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="Años laborando en el Hospital">
              <b-select
                style="width: 250px"
                v-model="laboredHosp"
                placeholder="Elija"
                expanded
              >
                <option value="0">Menos 10 Años</option>
                <option value="1">De 10 a 19 años</option>
                <option value="2">De 20 a 29 años</option>
                <option value="3">Mas de 30 años</option>
              </b-select>
            </b-field>
            <b-field
              v-if="laboredExpError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="Dedicación exclusiva al Hospital" />
            <div class="field">
              <b-radio v-model="exclux" native-value="1">
                Si
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="exclux" native-value="0" type="is-info">
                No
              </b-radio>
            </div>
            <b-field
              v-if="exclusivityError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="¿Realiza guardias diurnas o nocturnas?" />
            <div class="field">
              <b-radio v-model="guardType" native-value="1">
                Si
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="guardType" native-value="0" type="is-info">
                No
              </b-radio>
            </div>
            <b-field
              v-if="guardTypeError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="Cantidad de horas por turno *">
              <b-select
                style="width: 250px"
                v-model="turnHour"
                placeholder="Elija"
                expanded
              >
                <option value="0">6 Horas</option>
                <option value="1">12 Horas</option>
                <option value="2">Mas de 12 Horas</option>
              </b-select>
            </b-field>
            <b-field
              v-if="turnHourError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field
              label="DISPONIBILIDAD Y ACCESO DE EQUIPO DE PROTECCIÓN PERSONAL CUANDO USTED LO REQUIERA (respirador N95, mascarillas quirúrgicas, batas, careta o visor, gafas, gorros, polainas, guantes, entre otros)"
            />
            <div class="field">
              <b-radio v-model="equip" native-value="1">
                Si
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="equip" native-value="0" type="is-info">
                No
              </b-radio>
            </div>
            <b-field
              v-if="equipError"
              type="is-danger"
              message="Esta respuesta es requerida."
            ></b-field>
          </section>

          <section style="margin-top: 25px">
            <b-field label="RIESGO DE EXPOSICIÓN A SARS-CoV-2" />
            <div class="field">
              <b-radio v-model="risk" native-value="0">
                BAJO: no tiene contacto cercano con el público (> 2 metros) o
                contacto ocupacional mínimo.
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="risk" native-value="1" type="is-info">
                MEDIANO: contacto frecuente y cercano con personas (Menos de 2
                metros de distancia)
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="risk" native-value="2" type="is-info">
                ALTO: exposición a fuentes conocidas o sospechosas de COVID-19.
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="risk" native-value="3" type="is-info">
                MUY ALTO: trabajos con contacto directo y frecuente con casos
                COVID-19
              </b-radio>
            </div>
            <b-field
              v-if="riskError"
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
  props: ["perm"],
  data() {
    return {
      sex: "",
      age: "",
      status: "",
      sons: "",
      workerType: "",
      special: "",
      laboredExp: "",
      laboredHosp: "",
      exclux: "",
      guardType: "",
      turnHour: "",
      equip: "",
      risk: "",

      sexError: false,
      ageError: false,
      statusError: false,
      sonsError: false,
      workerTypeError: false,
      specialtyError: false,
      laboredExpError: false,
      laboredHospError: false,
      exclusivityError: false,
      guardTypeError: false,
      turnHourError: false,
      equipError: false,
      riskError: false
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
      if (this.sex === "") {
        this.sexError = true;
        console.log("1");
        this.errorNotification();
        return;
      }
      if (this.age === "") {
        this.errorNotification();
        this.ageError = true;
        console.log("asd");
        return;
      }
      if (this.status === "") {
        this.errorNotification();
        this.statusError = true;
        return;
      }
      if (this.sons === "") {
        this.errorNotification();
        this.sonsError = true;
        return;
      }
      if (this.workerType === "") {
        this.errorNotification();
        this.workerTypeError = true;
        return;
      }
      if (this.special === "") {
        this.errorNotification();
        this.specialtyError = true;
        return;
      }
      if (this.laboredExp === "") {
        this.errorNotification();
        this.laboredExpError = true;
        return;
      }
      if (this.laboredHosp === "") {
        this.errorNotification();
        this.laboredHospError = true;
        return;
      }
      if (this.exclux === "") {
        this.errorNotification();
        this.exclusivityError = true;
        return;
      }

      if (this.guardType === "") {
        this.errorNotification();
        this.guardTypeError = true;
        return;
      }

      if (this.turnHour === "") {
        this.errorNotification();
        this.turnHourError = true;
        return;
      }

      if (this.equip === "") {
        this.errorNotification();
        this.equipError = true;
        return;
      }
      if (this.risk === "") {
        this.errorNotification();
        this.riskError = true;
        return;
      }
      const data = {
        laboral: "1",
        sex: this.sex,
        age: this.age,
        status: this.status,
        sons: this.sons,
        workerType: this.workerType,
        speciality: this.special,
        laboredExp: this.laboredExp,
        laboredHosp: this.laboredHosp,
        esclusivity: this.exclux,
        guardType: this.guardType,
        turnHour: this.turnHour,
        equip: this.equip,
        risk: this.risk
      };
      this.$router.push({
        name: "Form3",
        params: { data: JSON.stringify(data) }
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
