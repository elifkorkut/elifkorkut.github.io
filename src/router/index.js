import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Resume from '../views/Resume.vue'
import ProjectDetail from '../components/ProjectDetail.vue';




// Define your routes
const routes = [
 
  { path: '/project/:slug', component: ProjectDetail },
  { path: '/', component: Home },
  { path: '/aboutme', component: AboutMe },
  { path: '/resume', component: Resume },
 

]

// Create router instance
const router = createRouter({
  history: createWebHistory(), // Uses modern browser history mode
  routes
})

export default router
