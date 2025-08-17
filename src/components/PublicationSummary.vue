<template>
  <section class="publication-summary">
    <h2 class="section-title">Abstract</h2>
    <div class="summary-content" v-html="summaryHtml"></div>
  </section>
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
:root {
  --text-primary_pub-summary: #F0F4F8;
  --text-secondary_pub-summary: #A0AEC0;
  --border-color_pub-summary: #3A415A;
}

.publication-summary {
  width: 100%;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-primary_pub-summary);
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color_pub-summary);
}

.summary-content {
  color: var(--text-secondary_pub-summary);
  text-align: justify;
}

.summary-content :deep(p) {
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.4rem;
  }
  .summary-content :deep(p) {
    font-size: 0.85rem;
  }
}
</style>
