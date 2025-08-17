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
  color: var(--text-primary_resp);
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color_resp);
}

.responsibility-item {
  background-color: var(--bg-primary_resp); /* Match the contributions item background */
  padding: 1.25rem;
  border-radius: 6px;
  border-left: 3px solid var(--accent-color_resp);
}

.responsibilities-content {
  color: var(--text-secondary_resp);
  text-align: justify;
}

.responsibilities-content :deep(p) {
  font-size: 0.9rem;
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
