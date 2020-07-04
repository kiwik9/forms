<template>
  <div>
    {{ data }}
    <download-excel :data="data">
      Download Data
    </download-excel>
  </div>
</template>
<script>
import { db } from "../../plugins/firebase";

export default {
  name: "Admin",
  data() {
    return {
      data: []
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
      this.router.push({ name: "Login" });
      return;
    }
    const data = this.data;
    await db
      .collection("forms")
      .get()
      .then(function(query) {
        query.forEach(function(doc) {
          let f = doc.data();
          let value = {
            fecha: new Date(f.createdAt.seconds * 1000),
            edad: f.data.age,
            ExperienciaLaboral: f.data.laboredExp,
            HospitalAnios: f.data.laboredHosp,
            Riesgo: f.data.risk,
            Sexo: f.data.sex,
            Hijos: f.data.sons,
            EstadoCivil: f.data.status,
            EquipoProteccion: f.data.equip,
            TurnoHora: f.data.turnHour,
            ExclusividadHospital: f.data.esclusivity,
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
