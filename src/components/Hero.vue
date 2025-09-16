<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hi">Hi, I'm Elif</h1>
      <h2 class="job">Game Developer & Architect</h2>
      <p class="about">
        Game programmer specializing in systems and gameplay programming, focused on writing efficient, clean code and tackling new challenges in game development.
        I love creating immersive and interactive experiences, blending creativity with technology. Let's build something amazing together!
      </p>
      <ul class="social-list-hero">
        <li>
          <a href="mailto:elifh.korkut@gmail.com" class="btn-social btn-outline"><i class="fa fa-fw fa-envelope-o"></i></a>
        </li>
        <li>
          <a href="https://discord.com/users/elif.korkut#3106" class="btn-social btn-outline"><i class="fa-brands fa-discord"></i></a>
        </li>
        <li>
          <a href="https://github.com/elifkorkut" class="btn-social btn-outline"><i class="fa fa-fw fa-github"></i></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elifhilalkorkut/" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>
        </li>
        <li>
    <a href="https://scholar.google.com/citations?hl=tr&user=8GzZicEAAAAJ" class="btn-social btn-outline" target="_blank">
      <i class="fa fa-graduation-cap"></i>
    </a>
  </li>
  <!-- CV Download / Open -->
  <li>
    <a href="CV_ElifHilalKorkut.pdf" class="btn-social btn-outline" target="_blank">
      <i class="fa fa-file-text" aria-hidden="true"></i>
    </a>
  </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
@import  '../styles.css';

 /* Hero Section */
 .hero {
     
     background-image: url('empty');
     background-size: cover;
     background-position: center;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 8rem;
 }
 
 .hero-content {
     margin: 1em;
 }
 
 /* Text Styles */
 .hi {
     font-size: 3rem;
     color: var(--text-color);
     margin-bottom: 10px;
     font-weight: 500;
 }
 
 .job {
     font-size: 2rem;
     color:var(--text-color);
     margin-bottom: 15px;
     font-weight: 400;
 }
 
 .about {
     font-size: 1.5rem;
     color:var(--text-color);
     margin-bottom: -30px;
     line-height: 1.6;
 }
 
 /* Social Links */
 
 .social-list-hero {
   display: flex;
   justify-content: flex-start;
   align-items: center;
   gap: 15px;
   padding-bottom: 1em;
   padding-left: 0px;
   
 }
 
 
 .btn-social {
     display: inline-block;
     height: 50px;
     width: 50px;
     border: 2px solid var(--button-border);
     border-radius: 100%;
     text-align: center;
     font-size: 20px;
     line-height: 50px;
     margin-top: 1em;
     justify-content: center;
   }
 
   .btn-outline {
     
     color:var(--button-border);
     font-size: 30px;
     border: solid 2px var(--button-border);
     background: transparent;
     transition: all 0.3s ease-in-out;
     margin-top: 2em;
   }
 
   .btn-outline:hover,
   .btn-outline:focus,
   .btn-outline:active,
   .btn-outline.active {
     
     color: var(--background-color);
     background:var(--button-border);
     border: solid 2px var(--button-border);
   }
 
   .btn:focus,
   .btn:active,
   .btn.active {
     outline: none;
   }
 
 
 
   /*
  Responsive Styles 
 */
 
 /* For large screens (PCs) */
 @media (min-width: 1024px) 
 {
 
 }
 /* For tablets */
 @media (max-width: 1024px) and (min-width: 600px) 
 {
 
 }
 /* For mobile phones */
 @media (max-width: 599px)
 {
   .hi {
     font-size: 2rem;
 }
 
 .job {
     font-size: 1.5rem;
 }
 
 .about {
     font-size: 1em;
 }
 
 .hero-content
 {
    margin: 0;
 }
 .social-links {
     
   flex-direction: column;
     gap: 15px;
 }
 }

</style>
