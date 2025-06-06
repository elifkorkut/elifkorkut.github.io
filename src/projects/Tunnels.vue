<script>
import TopSection from '../components/TopSection.vue';
import Navbar from '../components/Navbar.vue';
import MyFooter from '../components/MyFooter.vue';
import ProjectPage from '../components/ProjectPage.vue';



export default {
  name: 'Tunnel',
  components: {
    ProjectPage,
    TopSection,
    Navbar,
    MyFooter,
    }
};

</script>

<template>

<div class="wrap2em">
   
 <ProjectPage
  title="SPHERONEERS"
  :galleryItems="[
    { type: 'image', src: '/images/DownhillBikeLogo.png'},
    { type: 'video', src: '/images/tunnels/video1.mp4' },
    { type: 'video', src: '/images/tunnels/video1.mp4' }
  ]"
  :details="{
    length: '6 months',
    studio: 'XYZ Studios',
    team: '5 (2 Designers, 1 Gameplay Programmer, 1 Sound Designer, 1 Producer)',
    tech: 'Unity3D, C#, Blender, Photoshop'
  }"
  :role="{
    description: [
      'As a Gameplay Programmer, I was responsible for implementing core game mechanics, including movement and AI behavior.'
    ],
    responsibilities: [
      'Gameplay Implementation: Programmed various interactive gameplay elements.',
      'AI Behavior: Created enemy AI, including pathfinding, decision trees, etc.',
      'Collaboration: Worked closely with design and sound teams.',
      'Optimization: Ensured smooth performance across platforms.'
    ]
  }"
/>

   <div id="aboutme">
     <TopSection/>
     <Navbar/>
   </div>
 </div>
 
   <div id="footer">
  <MyFooter/>
   </div>
 
</template>


<style>
@import '../styles.css'; /* Add your global CSS */
</style>
