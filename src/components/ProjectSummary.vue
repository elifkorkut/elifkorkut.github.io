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
    margin-bottom: 2rem;
    font-size: 1.125rem;
    color: var(--text-color);
    line-height: 1.6;
  }
  </style>
  