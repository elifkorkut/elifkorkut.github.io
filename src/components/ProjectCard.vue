<script setup>
import { ref } from 'vue'

defineProps({
  description: String,

})

const count = ref(0)

</script>

<template>
  <h1>{{ msg }}</h1>
   
   
</template>

<style scoped>
  @import  '../styles.css';


.project-card {
   
   background-color: var(--project-card-color);
   border-radius: 8px;
   overflow: hidden;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
   transition: transform 0.3s ease;
   z-index: 1;
 }

   
 .project-card img {
  
  
   vertical-align:bottom;
   width: 100%;
   object-fit:cover;
   /*background-color: white;
   border-radius: 10px*/;
 }
 
 .project-card:hover {
   transform: translateY(-5px);
 }
 

 
 .project-tags {
   
   margin-top: 10px;
 }
 
 .tag {
   display: inline-block;
   background-color: var(--tag-color);
   color: white;
   border-radius: 4px;
   padding: 5px 8px;
   margin-right: 5px;
   font-size: 12px;
 }





.project-header {
 position: relative;
 padding: 16px;
 background: var(--selected-color-button);
 display: flex;
 flex-direction: column;
 gap: 8px;
}

.project-header .details {

 font-size: 14px;
 display: flex;
 justify-content: space-between;
 align-items: center;
}

.project-header .details span {
 display: flex;
 align-items: center;
 gap: 4px;
}

.project-header .header {
 
 font-size: 18px;
 margin: 0 0 8px;
 color: var(--description-color);
}

.project-content {

 padding: 16px;
 background: var(--project-card-info-);
 

}

.project-content .header {
 font-size: 18px;
 margin: 0 0 8px;
 color: var(--description-color);
 font-weight: bold;
}

.project-content .description {
 
 font-size: 14px;
 margin: 0;
 color: var(--description-color-gray-light);
}

.project-content .role {
 
 font-size: 14px;
 color: var(--description-color-gray-dark);
 margin-bottom: 8px;
}

 
 /* Responsive Design */



 

/* For tablets */
@media (max-width: 1024px) and (min-width: 600px) 
{
 
}
/* For mobile phones */
@media (max-width: 599px)
{
 
}

@media (min-width: 1024px) 
{
 
}


</style>
