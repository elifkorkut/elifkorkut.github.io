<template>
  <section class="contributions">
    <h2 class="section-caption">Key Contributions</h2>
    <hr class="caption-line" />
    <ul>
      <li v-for="(item, index) in contributions" :key="index">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  contributions: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.contributions {
  color: var(--project-description-color);
}

.section-caption {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--project-color-caption-color);
}

.caption-line {
  width: 100%;
  border: 2px solid white;
  margin-bottom: 1rem;
}

/* Align list text flush with caption line */
.contributions ul {
  list-style-type: disc;
  padding-left: 0;
  margin-left: 1rem; /* bullet and text aligned */
}

.contributions li {
  margin-bottom: 0.75rem;
}
</style>
