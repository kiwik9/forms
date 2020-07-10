<template>
  <div style="height: 100%; background-color: white">
    <div style="height: auto">
      <div class="margin" style="height: 100%">
        <div class="columns is-desktop is-centered">
          <div class="column">
            <download-excel
              name="Encuestas.xls"
              style="margin-top: 50px"
              :data="data"
            >
              <b-button type="is-link">
                Resultados de las Encuestas
              </b-button>
            </download-excel>
            <br />
            <download-excel name="General.xls" :data="data2">
              <b-button type="is-link">
                Resultado General
              </b-button>
            </download-excel>
          </div>
        </div>
        <div class="columns is-desktop is-centered">
          <div class="column">
            <h1 style="text-align: left;">Casos positivos {{ pos }}</h1>
            <br />
            <apexchart
              width="500"
              type="donut"
              :options="options"
              :series="series"
            ></apexchart>
          </div>
          <div class="column">
            <h1 style="text-align: left;">Casos Negativos: {{ neg }}</h1>
            <br />
            <apexchart
              width="500"
              type="donut"
              :options="options"
              :series="series2"
            ></apexchart>
          </div>
          <div class="column">
            <h1 style="text-align: left;">Casos Totales: {{ neg + pos }}</h1>
            <br />
            <apexchart
              width="500"
              type="donut"
              :options="options2"
              :series="series3"
            ></apexchart>
          </div>
        </div>
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
      pos: 0,
      neg: 0,
      data2: [],
      options: {
        labels: [
          "Médico Asistente",
          "Médico Residente",
          "Tecnólogo Médico",
          "Enfermera",
          "Obstetra",
          "Técnico de Enfermeria",
          "Quimico Farmaceutico",
          "Médico General"
        ]
      },
      options2: {
        labels: ["Positivos", "Negativos"]
      },
      series: [],
      series2: [],
      series3: []
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
      await this.$router.push({ name: "Login" });
      return;
    }

    const data = this.data;
    let pos = 0;
    let neg = 0;
    let pos0 = 0;
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    let pos5 = 0;
    let pos6 = 0;
    let pos7 = 0;
    let neg0 = 0;
    let neg1 = 0;
    let neg2 = 0;
    let neg3 = 0;
    let neg4 = 0;
    let neg5 = 0;
    let neg6 = 0;
    let neg7 = 0;
    let id = 0;
    await db
      .collection("forms")
      .get()
      .then(function(query) {
        query.forEach(function(doc) {
          id = id + 1;
          let f = JSON.parse(JSON.stringify(doc.data()));
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
          let positivo = "0";
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
          const type = parseInt(f.data.workerType);
          if (result1 === "ALTO" && result2 === "ALTO" && result3 === "BAJO") {
            positivo = "1";
            pos = pos + 1;
            if (type === 0) {
              pos0 = pos0 + 1;
            }
            if (type === 1) {
              pos1 = pos1 + 1;
            }
            if (type === 2) {
              pos2 = pos2 + 1;
            }
            if (type === 3) {
              pos3 = pos3 + 1;
            }
            if (type === 4) {
              pos4 = pos4 + 1;
            }
            if (type === 5) {
              pos5 = pos5 + 1;
            }
            if (type === 6) {
              pos6 = pos6 + 1;
            }
            if (type === 7) {
              pos7 = pos7 + 1;
            }
          } else {
            neg = neg + 1;
            if (type === 0) {
              neg0 = neg0 + 1;
            }
            if (type === 1) {
              neg1 = neg1 + 1;
            }
            if (type === 2) {
              neg2 = neg2 + 1;
            }
            if (type === 3) {
              neg3 = neg3 + 1;
            }
            if (type === 4) {
              neg4 = neg4 + 1;
            }
            if (type === 5) {
              neg5 = neg5 + 1;
            }
            if (type === 6) {
              neg6 = neg6 + 1;
            }
            if (type === 7) {
              neg7 = neg7 + 1;
            }
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
            Trabajo: type,
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
    this.series.push(pos0);
    this.series.push(pos1);
    this.series.push(pos2);
    this.series.push(pos3);
    this.series.push(pos4);
    this.series.push(pos5);
    this.series.push(pos6);
    this.series.push(pos7);
    this.series2.push(neg0);
    this.series2.push(neg1);
    this.series2.push(neg2);
    this.series2.push(neg3);
    this.series2.push(neg4);
    this.series2.push(neg5);
    this.series2.push(neg6);
    this.series2.push(neg7);
    this.pos = pos;
    this.neg = neg;
    let data2 = {
      Total: neg + pos,
      "Total Positivos": pos,
      "Total Negativos": neg,
      "Médico Asistente Positivos": pos0,
      "Médico Residente Positivos": pos1,
      "Tecnólogo Médico Positivos": pos2,
      "Enfermera Positivos": pos3,
      "Obstetra Positivos": pos4,
      "Técnico de Enfermeria Positivos": pos5,
      "Quimico Farmaceutico Positivos": pos6,
      "Médico General Positivos": pos7,
      "Médico Asistente Negativo": neg0,
      "Médico Residente Negativo": neg1,
      "Tecnólogo Médico Negativo": neg2,
      "Enfermera Negativo": neg3,
      "Obstetra Negativo": neg4,
      "Técnico de Enfermeria Negativo": neg5,
      "Quimico Farmaceutico Negativo": neg6,
      "Médico General Negativo": neg7
    };
    this.data2.push(data2);
    this.series3.push(pos);
    this.series3.push(neg);
  }
};
</script>
<style>
.margin {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
