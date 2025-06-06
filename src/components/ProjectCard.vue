<template>
  <div class="project-card">     
    <router-link :to="link" class="project-link">
      <img :src="image" :alt="title + ' Icon'">
    </router-link>
    <div class="project-content">
      <p class="header">{{ title }}</p>
      <p class="role">{{ role }}</p>
      <p class="description">{{ description }}</p>
      <div class="project-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="project-types">
        <span v-for="type in types" :key="typpe" class="type">{{ type }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  link: { type: String, default: "/" },
  image: { type: String, default: "/default-image.png" },
  title: { type: String, default: "Untitled Project" },
  role: { type: String, default: "Role not specified" },
  description: { type: String, default: "No description available." },
  tags: { type: Array, default: () => [] },
  type: { type: Array, default: () => [] }
}
};
</script>

<style scoped>


.project-card {
   
   background-color: var(--project-card-color);
   border-radius: 8px;
   overflow: hidden;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
   transition: transform 0.3s ease;
   z-index: 1;
   width: 380px;

 }

   
 .project-card img {
  
  width: 100%;
  object-fit: cover;
  vertical-align:bottom;
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

  
 .project-types {
   
 display: none;
 }
 
 .type {
 display: none;
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
 width: 100%;

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
  

 


</style>