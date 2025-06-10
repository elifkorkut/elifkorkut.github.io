<template>
    <div class="gallery">
      <component
        :is="currentItem.type === 'image' ? 'img' : 'video'"
        :src="currentItem.src"
        class="gallery-item active"
        v-bind="currentItem.type === 'video' ? { controls: true, muted: true, autoplay: true } : {}"
        @ended="handleVideoEnd"
      />
    </div>
  
      <div class="gallery-buttons">
        <button @click="changeItem(-1)" class="prev-button">&#10094; Prev</button>
  
        <div class="gallery-dots">
          <span
            v-for="(_, index) in items"
            :key="index"
            :class="{ active: currentIndex === index }"
            @click="goToItem(index)"
          ></span>
        </div>
  
        <button @click="changeItem(1)" class="next-button">Next &#10095;</button>
      </div>
  
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
 
  
  const props = defineProps({
    items: { type: Array, required: true }
  });
  
  const currentIndex = ref(0);
  const currentItem = ref(props.items[0]);
  
  const changeItem = (direction) => {
    const total = props.items.length;
    currentIndex.value = (currentIndex.value + direction + total) % total;
    currentItem.value = props.items[currentIndex.value];
  };
  
  const goToItem = (index) => {
    currentIndex.value = index;
    currentItem.value = props.items[index];
  };
  
  const handleVideoEnd = () => {
    changeItem(1);
  };
  
  // Optional: autoplay the first video if needed
  onMounted(() => {
    if (currentItem.value?.type === 'video') {
      setTimeout(() => {
        const video = document.querySelector('video');
        video?.play();
      }, 10);
    }
  });
  </script>
  
  <style scoped>
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
    position: absolute;
   
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
    cursor: pointer;
  }
  
  .gallery-dots .active {
    background-color: var(--selected-color-button);
  }
  
  .prev-button,
  .next-button {
    padding: 1rem 2rem;
    font-size: 1.125rem;
    background-color: var(--selected-color-button);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
  }
  
  .prev-button:hover,
  .next-button:hover {
    background-color: var(--hover-color-button);
  }
  
  /* Responsive tweaks as before */
  @media (max-width: 768px) {
    .prev-button,
    .next-button {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .gallery-dots span {
      height: 1rem;
      width: 1rem;
    }
  }
  </style>
  