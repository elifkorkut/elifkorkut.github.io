

<script>
import TopSection from '../components/TopSection.vue';
import Navbar from '../components/Navbar.vue';
import AboutMeCard from '../components/AboutMeCard.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
  name: 'AboutMe',
  components: {
    TopSection,
    Navbar,
    AboutMeCard,
    MyFooter
    
   }
};
</script>

<template>

<div class="wrap2em">
   
  <div id="aboutme">
    <TopSection/>
    <Navbar/>
   <AboutMeCard/>
  </div>
</div>

  <div id="footer">
 <MyFooter/>
  </div>
    
 
</template>


<style>
@import '../styles.css'; /* Add your global CSS */
</style>
