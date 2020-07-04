<template>
  <div class="home">
    <div class="columns is-medium is-0-desktop">
      <div class="column is-three-fifths is-offset-one-fifth">
        <Navbar msg="Resultados del test" />
        <br />
        <div class="margin">
          <p style="text-align: justify">
            {{ data }}
            {{ quest1 }}
            {{ quest2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { db } from "../plugins/firebase";

export default {
  name: "Home",
  props: ["quest1", "quest2", "data"],
  mounted() {
    if (!this.quest1 || !this.quest2 || !this.data) {
      this.$router.push({ name: "Home" });
      return {};
    }
  },
  data() {
    return {};
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
    },
    changeForm() {
      this.$router.push({
        name: "Form1",
        params: { perm: true }
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
