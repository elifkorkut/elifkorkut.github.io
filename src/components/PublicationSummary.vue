<template>
      
  <section class="section-caption">Abstract</section>
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
.section-caption {
  font-size: 2rem;
  font-weight: 700;
  color: var(--project-color-caption-color);
  margin-bottom: 0.25rem;
}

.publication-summary {
  font-size: 1.125rem;
  color: var(--text-color);
  line-height: 1.6;
  text-align: justify;
  margin-top: 0;
}

.publication-summary * {
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.publication-summary p:last-child,
.publication-summary div:last-child {
  margin-bottom: 0;
}

.link-button {
  align-self: flex-start;
  margin-bottom: 0.25rem;
  text-decoration: none;
}

.link-icon {
  width: 24px;
  height: 24px;
  display: inline-block;
  transition: transform 0.2s ease;
}

.link-icon:hover {
  transform: scale(1.1);
}

/* Responsive font sizing for smaller screens */
@media (max-width: 600px) {
  .section-caption {
    font-size: 1.5rem;
  }

  .publication-summary {
    font-size: 0.9rem;
  }
}
</style>
