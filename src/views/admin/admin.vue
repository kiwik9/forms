<template>
  <div style="height: 100%; background-color: white">
  <div style="height: auto">
    <div  class="margin" style="height: 100%">
    <download-excel name="Encuestas.xls" style="margin-top: 50px" :data="data">
      <b-button type="is-link">
        Descargar Excel
      </b-button>
    </download-excel>
    <b-table style="margin-top: 50px" :data="data" :columns="columns"></b-table>
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
      await db
              .collection("forms")
              .get()
              .then(function(query) {
                query.forEach(function(doc) {
                  let f = doc.data();
                  let date = new Date(f.createdAt.seconds * 1000);
                  console.log(f)
                  let value = {
                    Registro: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                    edad: f.data.age,
                    "Experiencia Laboral": f.data.laboredExp,
                    "Años en el Hospital": f.data.laboredHosp,
                    "Guardia": f.data.guardType,
                    Riesgo: f.data.risk,
                    Sexo: f.data.sex,
                    Hijos: f.data.sons,
                    "Estado Civil": f.data.status,
                    "Equipo de Proteccion": f.data.equip,
                    "Horas por turno": f.data.turnHour,
                    "Exclusividad en Hospital": f.data.esclusivity,
                    Trabajo: f.data.workerType,
                    Especialidad: f.data.speciality,
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
                    Pregunta14: f.form2.q5
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
