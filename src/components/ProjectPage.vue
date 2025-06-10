<template>
 <div class="article-section">

    <div class="container">
     <!-- <button class="back-button" @click="router.back()">&#10094; Go Back</button> -->
  
      <h2 class="caption">{{ title }}</h2>
      <hr class="caption-line" />
  
      <!-- Gallery -->
      <div class="gallery">
        <component
          :is="item.type === 'image' ? 'img' : 'video'"
          v-for="(item, index) in galleryItems"
          :key="index"
          :src="item.src"
          class="gallery-item"
          :class="{ active: currentIndex === index }"
          v-bind="item.type === 'video' ? { controls: true, muted: true } : {}"
          @ended="handleVideoEnd(index)"
        />
      </div>
  
      <!-- Gallery controls -->
      <div class="gallery-buttons">
        <button @click="changeItem(-1)" class="prev-button">&#10094; Prev</button>
        <div class="gallery-dots">
          <span
            v-for="(_, index) in galleryItems"
            :key="index"
            :class="{ active: currentIndex === index }"
            @click="changeItem(index - currentIndex)"
          ></span>
        </div>
        <button @click="changeItem(1)" class="next-button">Next &#10095;</button>
      </div>
  
      <!-- Details -->
      <div class="details">
        <h2>Project Details</h2>
        <p><span>Project Length:</span> {{ details.length }}</p>
        <p><span>Studio:</span> {{ details.studio }}</p>
        <p><span>Team Members:</span> {{ details.team }}</p>
        <p><span>Technologies:</span> {{ details.tech }}</p>
      </div>
  
      <!-- Role -->
      <div class="role">
        <h2>My Role</h2>
        <p v-for="(p, i) in role.description" :key="i">{{ p }}</p>
        <p><strong>Key Responsibilities:</strong></p>
        <ul>
          <li v-for="(item, i) in role.responsibilities" :key="i">{{ item }}</li>
        </ul>
      </div>
  
      <div class="nav-buttons">
        <button @click="previousProject">Previous Project</button>
        <button @click="nextProject">Next Project</button>
      </div>
    </div>
</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    title: String,
    galleryItems: Array,
    details: Object,
    role: Object
  });
  
  const router = useRouter();
  const currentIndex = ref(0);
  
  function changeItem(direction) {
    const total = props.galleryItems.length;
    currentIndex.value = (currentIndex.value + direction + total) % total;
  
    const currentEl = document.querySelectorAll('.gallery-item')[currentIndex.value];
    if (currentEl?.tagName === 'VIDEO') {
      currentEl.play();
    }
  }
  
  function handleVideoEnd(index) {
    if (index === currentIndex.value) changeItem(1);
  }
  
  function previousProject() {
    alert('Going to previous project...');
  }
  
  function nextProject() {
    alert('Going to next project...');
  }
  
  onMounted(() => {
    const item = props.galleryItems[0];
    if (item?.type === 'video') {
      setTimeout(() => document.querySelectorAll('video')[0]?.play(), 5);
    }
  });
  </script>
  
  <style scoped>

    .container {
    width: 80%;
    margin: 0 auto;
  }
  
  .back-button,
  .gallery-buttons button,
  .nav-buttons button,
  .prev-button,
  .next-button {
    padding: 1rem 2rem;
    font-size: 1.125rem;
    background-color: var(--selected-color-button);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    display: inline-block;
    text-align: center;
  }
  
  .back-button:hover,
  .gallery-buttons button:hover,
  .nav-buttons button:hover,
  .prev-button:hover,
  .next-button:hover {
    background-color: var(--hover-color-button );
  }
  
  .back-button {
    margin-top: 2.5rem;
  }
  
  .caption {
    text-align: center;
    margin-top: 1rem;
    font-size: 4rem;
    font-weight: bold;
  }
  
  .caption-line {
    width: 100%;
    border: 2px solid white;
  }
  
  .gallery {
    position: relative;
    overflow: hidden;
    max-width: 100%;
    height: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gallery-background);
    margin-top: 2.5rem;
  }
  
  .gallery-item {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: none;
    position: absolute;
  }
  
  .gallery-item.active {
    display: block;
  }
  
  .gallery-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25rem;
    width: 100%;
  }
  
  .gallery-dots {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin: 0 2rem;
  }
  
  .gallery-dots span {
    height: 1.25rem;
    width: 1.25rem;
    margin: 0 0.3125rem;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s;
    text-align: center;
    line-height: 1.25rem;
    font-size: 0.75rem;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
  
  .gallery-dots .active {
    background-color: var(--selected-color-button);
  }
  
  .details,
  .role {
    background-color: var(--project-card-background-color);
    padding: 2rem;
    margin-top: 2.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  .details h2,
  .role h2 {
    font-size: 1.75rem;
    color: var(--project-color-caption-color);
    margin-bottom: 1rem;
  }
  
  .details p,
  .role p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: var(--project-description-color);
    
  }
  
  .details span,
  .role span {
    font-weight: bold;
    color: var(--project-color-caption-color);
  }
  
  .role ul {
    margin-top: 0rem;
    margin-left: 1rem;
    list-style-type: disc;
  }
  
  .role ul li {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
  
  .nav-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1.25rem;
    margin-bottom: 2rem;
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .container {
      width: 90%;
    }
  
    .back-button,
    .gallery-buttons button,
    .nav-buttons button,
    .prev-button,
    .next-button {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  
    .gallery-dots span {
      height: 1rem;
      width: 1rem;
      font-size: 0.625rem;
      line-height: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    .container {
      width: 95%;
    }
  
    .back-button,
    .gallery-buttons button,
    .nav-buttons button,
    .prev-button,
    .next-button {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }
  
    .gallery-dots span {
      height: 0.75rem;
      width: 0.75rem;
      font-size: 0.5rem;
      line-height: 0.75rem;
    }
  }
  
  @media (max-width: 480px) {
    .back-button,
    .gallery-buttons button,
    .nav-buttons button,
    .prev-button,
    .next-button {
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
    }
  
    .gallery-dots span {
      height: 0.75rem;
      width: 0.75rem;
      font-size: 0.5rem;
      line-height: 0.75rem;
    }
  }
  </style>
  