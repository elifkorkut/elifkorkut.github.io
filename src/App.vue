<script>
import TopSection from './components/TopSection.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import AboutMe from './components/AboutMeCard.vue';
import Projects from './components/ProjectsContainer.vue';
import MyFooter from './components/MyFooter.vue';
import Resume from './components/ResumeCard.vue';


export default {
  name: 'App',
  components: {
    TopSection,
    Navbar,
    Hero,
    Projects,
    MyFooter,
    Resume,
    AboutMe
  }
};
</script>

<template>

<router-view /> 
    
</template>

<style>
@import 'styles.css'; /* Add your global CSS */
</style>
