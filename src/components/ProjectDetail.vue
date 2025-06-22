<template>
  <div class="details" v-html="detailsHtml" />
</template>

<script setup>
defineProps(['detailsHtml']);
</script>

<style scoped>
.details {
  background: var(--project-card-background-color);
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
}
</style>
