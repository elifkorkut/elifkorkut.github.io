<script>

import TopSection from '../components/TopSection.vue';
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import Projects from '../components/ProjectsContainer.vue';
import MyFooter from '../components/MyFooter.vue';



export default {
  name: 'Home',
  components: {
    TopSection,
    Navbar,
    Hero,
    Projects,
    MyFooter
  }
};
</script>

<template>

<div class="wrap2em">
   
  <div id="home">
    <TopSection/>
    <Navbar />
    <Hero />
    <Projects />
  </div>
</div>

    
 
</template>


<style>
@import '../styles.css'; /* Add your global CSS */
</style>

