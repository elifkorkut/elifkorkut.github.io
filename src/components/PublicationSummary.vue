<template>
      <h2 class="section-caption">Abstract</h2>
    <section class="publication-summary" v-html="summaryHtml"></section>
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
  .publication-summary {
    margin-bottom: 2rem;
    font-size: 1.125rem;
    color: var(--text-color);
    line-height: 1.6;
  }

  .section-caption {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--project-color-caption-color);
}
  </style>
  