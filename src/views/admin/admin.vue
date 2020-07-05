<template>
  <div style="height: 100%; background-color: white">
    <div style="height: auto">
      <div class="margin" style="height: 100%">
        <download-excel
          name="Encuestas.xls"
          style="margin-top: 50px"
          :data="data"
        >
          <b-button type="is-link">
            Descargar Excel
          </b-button>
        </download-excel>
        <b-table
          style="margin-top: 50px"
          :data="data"
          :columns="columns"
        ></b-table>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../../plugins/firebase";

export default {
  name: "Admin",
  data() {
    return {
      data: [],
      columns: [
        {
          field: "Nro",
          label: "Nro"
        },
        {
          field: "edad",
          label: "Edad",
          searchable: true
        },
        {
          field: "Experiencia Laboral",
          label: "Experiencia Laboral",
          searchable: true
        },
        {
          field: "Años en el Hospital",
          label: "Años en el Hospital",
          searchable: true
        },
        {
          field: "Sexo",
          label: "Sexo",
          searchable: true
        },
        {
          field: "Hijos",
          label: "Hijos",
          searchable: true
        },
        {
          field: "Estado Civil",
          label: "Estado Civil",
          searchable: true
        },
        {
          field: "Riesgo",
          label: "Riesgo",
          date: true,
          searchable: true
        },
        {
          field: "Especialidad",
          label: "Especialidad",
          date: true,
          searchable: true
        },
        {
          field: "Trabajo",
          label: "Trabajo",
          date: true,
          searchable: true
        },
        {
          field: "Exclusividad en Hospital",
          label: "Exclusividad en Hospital",
          date: true,
          searchable: true
        },
        {
          field: "Horas por turno",
          label: "Horas por turno",
          date: true,
          searchable: true
        },
        {
          field: "Equipo de Proteccion",
          label: "Equipo de Proteccion",
          date: true,
          searchable: true
        },
        {
          field: "Guardia",
          label: "Guardia",
          date: true,
          searchable: true
        },
        {
          field: "Registro",
          label: "Registro",
          date: true,
          searchable: true
        }
      ]
    };
  },
  firestore() {
    return {
      formsDB: db.collection("forms")
    };
  },
  methods: {},
  async mounted() {
    if (!localStorage.user) {
      this.$router.push({ name: "Login" });
      return;
    }
    const data = this.data;
    let id = 0;
    await db
      .collection("forms")
      .get()
      .then(function(query) {
        query.forEach(function(doc) {
          id = id + 1;
          let f = doc.data();
          let date = new Date(f.createdAt.seconds * 1000);
          let number = [];
          let qu1 = Object.values(f.form1);
          qu1.forEach(x => {
            number.push(parseInt(x));
          });
          let q2 = Object.values(f.form2);
          q2.forEach(x => {
            number.push(parseInt(x));
          });
          let q3 = Object.values(f.form3);
          q3.forEach(x => {
            number.push(parseInt(x));
          });
          let r1 =
            number[0] +
            number[1] +
            number[2] +
            number[5] +
            number[7] +
            number[12] +
            number[13] +
            number[15] +
            number[19];
          let r2 =
            number[4] +
            number[9] +
            number[10] +
            number[14] +
            number[7] +
            number[21];
          let r3 =
            number[3] +
            number[6] +
            number[8] +
            number[11] +
            number[16] +
            number[17] +
            number[18] +
            number[20];
          let value = {
            Nro: id,
            Registro: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            edad: f.data.age,
            "Experiencia Laboral": f.data.laboredExp,
            "Años en el Hospital": f.data.laboredHosp,
            Guardia: f.data.guardType,
            Riesgo: f.data.risk,
            Sexo: f.data.sex,
            Hijos: f.data.sons,
            "Estado Civil": f.data.status,
            "Equipo de Proteccion": f.data.equip,
            "Horas por turno": f.data.turnHour,
            "Exclusividad en Hospital": f.data.esclusivity,
            Trabajo: f.data.workerType,
            Especialidad: f.data.speciality,
            "Puntuacion Cansancio Emocional": r1,
            "Puntuacion Despersonalizacion": r2,
            "Puntuacion Realizacion Personal": r3,
            Pregunta1: f.form1.q1,
            Pregunta2: f.form1.q2,
            Pregunta3: f.form1.q3,
            Pregunta4: f.form1.q4,
            Pregunta5: f.form1.q5,
            Pregunta6: f.form1.q6,
            Pregunta7: f.form1.q7,
            Pregunta8: f.form1.q8,
            Pregunta9: f.form1.q9,
            Pregunta10: f.form2.q1,
            Pregunta11: f.form2.q2,
            Pregunta12: f.form2.q3,
            Pregunta13: f.form2.q4,
            Pregunta14: f.form2.q5,
            Pregunta15: f.form3.q1,
            Pregunta16: f.form3.q2,
            Pregunta17: f.form3.q3,
            Pregunta18: f.form3.q4,
            Pregunta19: f.form3.q5,
            Pregunta20: f.form3.q6,
            Pregunta21: f.form3.q7,
            Pregunta22: f.form3.q8
          };
          data.push(value);
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
    this.data = data;
  }
};
</script>
<style>
.margin {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
