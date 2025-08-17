<template>
  <section class="project-details">
 
    <ul class="details-list" v-html="detailsHtml"></ul>
  </section>
</template>

<script setup>
defineProps({
  detailsHtml: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>


.project-details {
  width: 100%;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-primary_details);
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color_details);
}

.details-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Deep styles to target the HTML rendered by v-html */
.details-list :deep(li) {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-color_details);
}

.details-list :deep(li:last-child) {
  border-bottom: none;
}

.details-list :deep(strong) {
  font-weight: 500;
  color: var(--text-secondary_details);
  flex-shrink: 0;
  margin-right: 1rem;
}

.details-list :deep(a) {
  color: var(--accent-color_details);
  text-decoration: none;
  transition: text-decoration 0.3s ease;
}

.details-list :deep(a:hover) {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 580px) {
  .section-title {
    font-size: 1.4rem;
  }
  .details-list :deep(li) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>
