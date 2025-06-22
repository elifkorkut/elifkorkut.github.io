<template>
    <section class="responsibilities">
      <h2 class="section-caption">My Responsibilities</h2>
      <hr class="caption-line" />
      <div v-html="responsibilitiesHtml"></div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    responsibilitiesHtml: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .responsibilities {
    background: none;
    padding: 0;
    color: var(--project-description-color);
  }
  
  .section-caption {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: var(--project-color-caption-color);
  }
  
  .caption-line {
    width: 100%;
    border: 2px solid white;
    margin-bottom: 1rem;
  }
  </style>
  