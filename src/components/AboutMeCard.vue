
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
         I’m a curious creator, experience designer, and game developer with a passion for crafting meaningful digital worlds that make life feel a little more magical.
My journey began in the world of architecture, studying at Middle East Technical University, where I found myself more fascinated with designing experiences than just buildings. That curiosity led me deep into the realm of digital and parametric design, visualization, computational thinking and eventually straight into the game world, where everything clicked.
I pursued my Master’s in Multimedia Informatics with a focus on Game Technologies, diving into interactive storytelling, virtual museums, and multimedia development. Along the way, I also wrote and published several articles mostly centered on virtual reality and immersive technologies because I love not only building experiences but also reflecting on how we experience them.
My thesis? A PC and VR application project was a PC and VR application that let users design and curate their own virtual museums, an interactive playground for storytelling, curation, and spatial expression, because I believe everyone deserves a space to tell their story.
Since then, I’ve worked with a wide range of XR devices developing immersive experiences and games that blend art, tech, and a sprinkle of wonder. I even spent a beautiful, slightly chilly chapter in Sweden as an Erasmus student, where I discovered great coffee, amazing people, lots of metal bands, and the joy of fika with brilliant developers. I learned a lot, froze a little, and came back with a bigger heart and sharper skills.
After that, I started my first role in the industry, where I developed and published a variety of VR titles bringing immersive ideas to life and turning wild prototypes into real, playable, sometimes delightfully strange experiences. Every project added a new piece to the puzzle of what I love most: blending technology, creativity, and storytelling.
Today, I continue exploring the intersection of design and development building virtual worlds that connect, surprise, and inspire. When I’m not coding or designing, you’ll probably find me behind a camera lens, lost in a museum, or dancing flamenco (¡Olé!).
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
  
