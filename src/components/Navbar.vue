<template>
    <nav class="navbar">
      <a href="index.html" class="nav-btn-active" id="home-btn">Home</a>
      <a href="aboutme.html" class="nav-btn" id="about-btn">About Me</a>
      <a href="resume.html" class="nav-btn" id="resume-btn">Resume</a>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
   @import  '../styles.css';
   
   
    .navbar {
     
     background-color: var(--primary-color);
     color:var(--text-color);
     border-radius: 40px;   
     display: flex;
     justify-content: space-around;
     padding: 10px 30px;
     position: relative;
     z-index: 5;
 }
 
 
 /*-----------------------------------*\
   Navbar Buttons
 \*-----------------------------------*/
 
 .nav-btn {
     
      
     background-color: var(--primary-color);
     color: var(--text-color);
     text-align: center;
     border: none;
     padding: 10px;
     cursor: pointer;
     flex: 1;
     margin: 0 10px;
     border-radius: 40px;
     transition: background-color 0.3s ease;
 }
 
 .nav-btn:hover {
     background-color: var(--accent-color);
 }
 
 .nav-btn-active
 {  
     text-decoration: none;
     background-color: var(--background-color);
     color: white;
     text-align: center;
     border: none;
     padding: 10px;
     cursor: pointer;
     flex: 1;
     margin: 0 10px;
     border-radius: 40px;
     transition: background-color 0.3s ease;
     
 }
 
 
 /*
  Responsive Styles 
 */
 
 /* For large screens (PCs) */
 @media (min-width: 1024px) 
 {
   .navbar
   {
       
       width: 60%;
       margin: auto;
       left: 350px;
       top : 30px;
       min-width: 100px;
       max-width: 1000px;
       position: absolute;
     
   }
 }
 /* For tablets */
 @media (max-width: 1024px) and (min-width: 600px) 
 {
   .navbar {
         
     position: fixed;
     left: 3px;
     bottom: 0px;
     right:3px;
     
 
   
 }
 
 }
 /* For mobile phones */
 @media (max-width: 599px)
 {
   .navbar {
         
     position: fixed;
     left: 3px;
     bottom: 0px;
     right:3px;
     
 
   }
 }


  </style>