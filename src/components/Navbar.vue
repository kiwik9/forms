<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Cuestionario de Malasch Burnout Inventory
        </h1>
        <h2 class="subtitle" style="text-align: justify;margin-top: 20px">
          {{ msg }}
        </h2>
        <h2 class="subtitle is-6" style="text-align: justify">
          {{ msg2 }}
        </h2>
        <p>{{q1}}</p>
        <p>{{q2}}</p>
        <p>{{q3}}</p>
        <p>{{q4}}</p>
        <p>{{q5}}</p>
        <p>{{q6}}</p>
        <p>{{q7}}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Navbar",
  props: {
    msg: {
      String,
      default:
        'CONSENTIMIENTO INFORMADO PARA EL PROYECTO DE TESIS "FACTORES ASOCIADOS A SÍNDROME DE\n' +
        "BURNOUT EN LOS TRABAJADORES DE LA SALUD DEL HOSPITAL BELÉN DE TRUJILLO DURANTE EL PERIODO DE\n" +
        'PANDEMIA SARS-CoV-22" PARA OPTAR EL TÍTULO PROFESIONAL DE MÉDICO CIRUJANO.'
    },
    msg2: {
      String,
      default: ""
    },
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String
  }
};
</script>
