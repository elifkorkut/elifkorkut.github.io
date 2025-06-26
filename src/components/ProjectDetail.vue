<template>
  <section class="project-details" v-html="detailsHtml"></section>
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
@import '../styles.css';


.project-details {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: var(--text-color);
    line-height: 2rem;
    font-weight: 100;
}

.project-details strong {
    
    font-weight: 50;
}


@media (max-width: 580px) {
  .project-details {
    font-size: 0.8rem;
    line-height: 1.5rem;
    
  }
}

</style>



  