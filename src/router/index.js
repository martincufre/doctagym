import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Editar from "../views/Editar.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/editar",
    name: "Editar",
    component: Editar
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
