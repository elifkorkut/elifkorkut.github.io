<template>


<section>
      <div class="top-content">
        <router-link to="/">
  <img src="/images/Raccoon_Logo_white.png" alt="Logo" class="top-logo" />
</router-link>

        <p class="top-text">&nbsp;&nbsp;&nbsp;elif hilal korkut | game developer</p>
      </div>
    </section>
    
  </template>
  
  <script>
  export default {
    name: 'TopSection'
  }
  </script>
  
  <style scoped>
  

  
    /*-----------------------------------*\
    Top-Logo
  \*-----------------------------------*/
  
  
  .top-logo {
     
     max-width: 100%;
     height: auto;
 }
 
 .top-text {
    
     margin-top: 8px;
     font-size: 1.2rem; 
     text-align: center;
 }
 
 .top-content {
    
     display: flex;
     flex-direction: column;
     align-items: center;
     font-family: 'afacad', sans-serif;
     font-weight: 300;
 }
 
 
 /*
  Responsive Styles 
 */
 
 /* For large screens (PCs) */
 @media (min-width: 1024px) 
 {
   .top-content
   {
       position: absolute;
       top: 20px;
       left: 0px;
       width: 300px;
   }
 
   .top-text {
 
       font-size: 1rem; 
     
   }
 
   .top-logo
   {
       width: 100px;
   }
 
 
 }
 /* For tablets */
 @media (max-width: 1024px) and (min-width: 600px) 
 {
 
   .top-content
   {
      
           position: absolute;
           top: 20px;
           left: 50%;
           transform: translateX(-50%);
           width: 300px;
   }
 
   .top-text {
 
       font-size: 1rem; 
     
   }
 
   .top-logo
   {
       width: 100px; 
   }
 
 
 }
 
 /* For mobile phones */
@media (max-width: 599px)
{
  .top-content
  {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90vw; /* Responsive width instead of fixed 500px */
    max-width: 300px; /* Optional: limit how large it can get */
  }

  .top-text {
    font-size: 0.9rem; 
  }

  .top-logo {
    width: 80px; 
  }
}


  
  </style>
  