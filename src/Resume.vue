

<script>
import TopSection from './components/TopSection.vue';
import Navbar from './components/Navbar.vue';
import ResumeCard from './components/ResumeCard.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  name: 'Resume',
  components: {
    TopSection,
    Navbar,
    ResumeCard,
    MyFooter,
    }
};
</script>

<template>

<div class="wrap2em">
   
  <div id="resume">
    <TopSection/>
    <Navbar />
   <ResumeCard/>
  </div>
</div>

  <div id="footer">
 <MyFooter />
  </div>
    
 
</template>


<style>
@import 'styles.css'; /* Add your global CSS */
</style>
