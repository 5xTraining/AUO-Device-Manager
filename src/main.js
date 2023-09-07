import "./assets/main.css"

import { createApp } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"

// pages
import Entry from "@/Entry.vue"
import App from "@/pages/App.vue"
import About from "@/pages/About.vue"
import DeviceDetail from "@/pages/DeviceDetail.vue"

const routes = [
  { path: "/", component: App },
  { path: "/about", component: About },
  { path: "/app", component: App },
  { path: "/devices/:deviceId", component: DeviceDetail },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(Entry)
app.use(router)
app.mount("#app")
