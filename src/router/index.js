import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Form1 from "../views/form1.vue";
import Form2 from "../views/form2.vue";
import Form3 from "../views/form3.vue";
import Form4 from "../views/form4.vue";
import Results from "../views/results.vue";
import Login from "../views/admin/login";
import Admin from "../views/admin/admin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/form/1",
    name: "Form1",
    component: Form1,
    props: true
  },
  {
    path: "/form/2",
    name: "Form2",
    component: Form2,
    props: true
  },
  {
    path: "/form/3",
    name: "Form3",
    component: Form3,
    props: true
  },
  {
    path: "/form/4",
    name: "Form4",
    component: Form4,
    props: true
  },
  {
    path: "/results",
    name: "Results",
    component: Results,
    props: true
  },
  {
    path: "/c8198e6e-bdc7-11ea-b3de-0242ac130004",
    name: "Login",
    component: Login
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
