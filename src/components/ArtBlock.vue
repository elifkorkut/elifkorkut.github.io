<template>
    <div class="art-block">
      <h3 class="top-text">{{ topText }}</h3>
      <div class="media-wrapper">
        <img v-if="art.type === 'image'" :src="art.src" :alt="art.alt" />
        <video
          v-else-if="art.type === 'video'"
          :src="art.src"
          :alt="art.alt"
          autoplay
          loop
          muted
          playsinline
        > </video>
      </div>
      <p class="description">{{ art.description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    art: {
      type: Object,
      required: true,
    },
    topText: {
      type: String,
      default: '',
    },
  });
  </script>
  
  <style scoped>
  .art-block {
    margin-bottom: 0.5rem;
  }
  
  .top-text {
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  
  .media-wrapper img,
  .media-wrapper video {
    max-width: 100%;
    border-radius: 8px;
    display: block;
    margin-bottom: 0.1rem;
  }
  
  .description {
    font-size: 1rem;
    color: var(--text-secondary);
  }

  @media (max-width: 950px) {
    .description {
    font-size: 0.7rem;
    color: var(--text-secondary);
  }
}
  </style>
  