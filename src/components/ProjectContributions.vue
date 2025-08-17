<template>
  <section class="contributions">
    <h2 class="section-title">Key Contributions</h2>
    <div class="contributions-list">
      <!-- Loop through each contribution in the array -->
      <div 
        v-for="(contribution, index) in contributionsHtml" 
        :key="index" 
        class="contribution-item"
      >
        <h3 class="contribution-header">{{ contribution.header }}</h3>
        <p class="contribution-description" v-html="contribution.description"></p>
      </div>
    </div>
  </section>
</template>

<script setup>
// The component now correctly expects an Array with the name "contributionsHtml"
defineProps({
  contributionsHtml: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
:root {
  --bg-primary_contributions: #0A0F1E;
  --bg-card_contributions: #1A2033;
  --text-primary_contributions: #F0F4F8;
  --text-secondary_contributions: #A0AEC0;
  --accent-color_contributions: #99D9F2;
  --border-color_contributions: #3A415A;
}

.contributions {
  width: 100%;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-primary_contributions);
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color_contributions);
}

.contributions-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contribution-item {
  background-color: var(--bg-primary_contributions); /* Slightly darker than the main card */
  padding: 1.25rem;
  border-radius: 6px;
  border-left: 3px solid var(--accent-color_contributions);
}

.contribution-header {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--accent-color_contributions);
  margin: 0 0 0.5rem 0;
}

.contribution-description {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-secondary_contributions);
  text-align: justify;
  margin: 0;
}

/* Style for the bolded text inside the description */
.contribution-description :deep(b) {
  color: var(--text-primary_contributions);
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.4rem;
  }
  .contribution-header {
    font-size: 1rem;
  }
  .contribution-description {
    font-size: 0.85rem;
  }
}
</style>
