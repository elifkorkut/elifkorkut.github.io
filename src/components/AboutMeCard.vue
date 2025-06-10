
<script>
export default {
  name: 'AboutMeCard'
}
</script>

<template>
  <div class="article-section">
    <header>
      <h2 class="h2 article-title">About Me</h2>
    </header>
    
    <div class="about-section">
      <div class="profile-photo">
        <img src="/images/pp.jpeg" alt="Logo" class="top-logo" />
      </div>

      <div class="about-text">
        <h2>Hi, I'm Elif</h2>
        <p>
          A passionate game developer specializing in VR experiences and interactive mechanics.
          I love creating immersive worlds that blend storytelling and technical innovation. 
          Currently, I'm working on dynamic, parametric VR environments and constantly exploring ways 
          to push the boundaries of game design.
        </p>
      </div>
    </div>
  </div>
</template>



  
  <style scoped>


 /*-----------------------------------*\
    About Me
  \*-----------------------------------*/
  @import  '../styles.css';
  .about-section {

    display: flex;
    align-items: center;
    max-width: 1300px;
   
    padding-left: 2em;
    padding-right: 2em;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .profile-photo img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    padding: 10px;
    object-fit: cover;
    margin-right: 20px;
  }
  
  .about-text h2 {
    font-size: 30px;
    color: #333;
  }
  
  .about-text p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #555;
    
  }
  
  /* Responsive adjustments */
  @media (max-width: 780px) {
    .about-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
  
  

    .profile-photo img {
     
       
         padding-top: 2rem;
         width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          }
  }
  
  </style>
  