<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <div class="field">
                <label class="label">Correo</label>
                <div class="control has-icons-left">
                  <input v-model="user" type="text" class="input" required />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Contraseña</label>
                <div class="control has-icons-left">
                  <input
                    v-model="pass"
                    type="password"
                    placeholder=""
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <button @click="login" class="button is-success">
                  Iniciar Sesion
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      pass: "",
      error: false
    };
  },

  mounted() {
    if(localStorage.user){
      this.$router.push({name: "Login"})
    }
  },
  methods: {
    login() {
      if (this.user === "admin" && this.pass === "5Lgwcx1bZCxjOZ9c") {
        localStorage.user = true;
        this.$router.push({ name: "Admin" });
      } else {
        this.error = true;
      }
    }
  }
};
</script>
<style>
.margin {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
