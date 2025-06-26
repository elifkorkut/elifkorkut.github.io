<template>
    <section class="project-summary" v-html="summaryHtml"></section>
  </template>
  
  <script setup>
  defineProps({
    summaryHtml: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .project-summary {
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
    color: var(--text-color);
    line-height: 1.6;
  }
  
  @media (max-width: 580px) {
  .project-summary {
    font-size: 0.9rem;
  }
}
 

  </style>
  