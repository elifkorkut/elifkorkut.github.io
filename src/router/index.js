import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Resume from '../views/Resume.vue'
import Tunnels from '../projects/Tunnels.vue'
import DownhillBike from '../projects/DownhillBike.vue'



// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/aboutme', component: AboutMe },
  { path: '/resume', component: Resume },
  { path: '/tunnels', component: Tunnels},
  { path: '/downhillbike', component: DownhillBike}

]

// Create router instance
const router = createRouter({
  history: createWebHistory(), // Uses modern browser history mode
  routes
})

export default router
