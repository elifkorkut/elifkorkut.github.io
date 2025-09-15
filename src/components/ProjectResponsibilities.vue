<template>
  <section class="responsibilities">
    <h2 class="section-title">My Responsibilities</h2>
    <div class="responsibilities-list">
      <div class="responsibility-item">
        <div class="responsibilities-content" v-html="responsibilitiesHtml"></div>
      </div>
    </div>
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
  width: 100%;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid var(--line-color);
}

.responsibility-item {
  background-color: var(--background-color); /* Match the contributions item background */
  padding: 1.25rem;
  border-radius: 6px;
  border-left: 3px solid var(--text-color);
}

.responsibilities-content {
  color: var(--text-color);
  text-align: justify;
  font-size: 1rem;
}

.responsibilities-content :deep(p) {
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.4rem;
  }
  .responsibilities-content :deep(p) {
    font-size: 0.85rem;
  }
}
</style>
