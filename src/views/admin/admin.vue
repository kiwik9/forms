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
          let r2 = number[4] + number[9] + number[10] + number[14] + number[21];
          let r3 =
            number[3] +
            number[6] +
            number[8] +
            number[11] +
            number[16] +
            number[17] +
            number[18] +
            number[20];

          let result1 = "BAJO";
          let result2 = "BAJO";
          let result3 = "BAJO";
          let positivo = "NEGATIVO";
          if (r1 >= 19 && r1 <= 26) {
            result1 = "MEDIO";
          }
          if (r1 >= 27 && r1 <= 54) {
            result1 = "ALTO";
          }
          if (r2 >= 6 && r2 <= 9) {
            result2 = "MEDIO";
          }
          if (r2 >= 10 && r2 <= 30) {
            result2 = "ALTO";
          }
          if (r3 >= 34 && r3 <= 39) {
            result3 = "MEDIO";
          }
          if (r3 >= 40 && r3 <= 56) {
            result3 = "ALTO";
          }
          if (result1 === "ALTO" && result2 === "ALTO" && result3 === "BAJO") {
            positivo = "POSITIVO";
          }

          let value = {
            Nro: id,
            Registro: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            edad: f.data.age,
            Labora: f.data.laboral,
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
            "Puntuacion Cansancio Emocional": `${result1} (${r1})`,
            "Puntuacion Despersonalizacion": `${result2} (${r2})`,
            "Puntuacion Realizacion Personal": `${result3} (${r2})`,
            BURNOUT: positivo
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
