import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Resume from '../views/Resume.vue'
import ProjectPage from '../components/ProjectPage.vue';




// Define your routes
const routes = [
 
  { path: '/project/:slug', component: ProjectPage },
  { path: '/', component: Home },
  { path: '/aboutme', component: AboutMe },
  { path: '/resume', component: Resume },
 
]

// Create router instance
const router = createRouter({
  history:  createWebHashHistory(), // Uses modern browser history mode
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 } }
})

export default router
