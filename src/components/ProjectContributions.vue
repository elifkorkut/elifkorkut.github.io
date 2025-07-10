<template>
  <section class="contributions">
    <h2 class="section-caption">Key Contributions</h2>
    <hr class="caption-line" />
    <div v-html="contributionsHtml"></div>
  </section>
</template>

<script setup>
defineProps({
  contributionsHtml: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.contributions {
  background: none;
  padding: 0;
  color: var(--project-description-color);
}

.section-caption {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
  color: var(--project-color-caption-color);
}

.caption-line {
  width: 100%;
  border: 0.1rem solid white;
  margin-bottom: 1rem;
}

.text-large {
  font-size: 1.5rem;
  font-weight: 700;
}

.text-medium {
  font-size: 10rem;
  font-weight: 500;
}

.text-small {
  font-size: 1rem;
  font-weight: 300;
}

.text-highlight {
  color: var(--project-accent-color);
  font-weight: 600;
}

@media (max-width: 580px) {
  .section-caption {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
  color: var(--project-color-caption-color);
}
}



</style>