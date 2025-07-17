<template>
  <section class="contributions">
    <h2 class="section-caption">Key Contributions</h2>
    <hr class="caption-line" />
    <div class="contribution-html" v-html="contributionsHtml" />
  </section>
</template>

<script setup>
defineProps({
  contributionsHtml: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.contributions {
  color: var(--project-description-color);
  text-align: justify;
  padding: 0;
}

.section-caption {
  font-size: 2rem;
  font-weight: 700;
  color: var(--project-color-caption-color);
  margin-bottom: 0.25rem;
}

.caption-line {
  width: 100%;
  border: 0.1rem solid white;
  margin-bottom: 1rem;
}

.contribution-html {
  padding-left: 0rem;
}

.contribution-html strong {
  display: list-item;
  list-style-type: disc;
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 0rem;
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
}

.contribution-html p,
.contribution-html div,
.contribution-html span {
  margin: 0.25rem 0 0.5rem 2rem;
  display: block;
  font-size: 1rem;
  line-height: 1.6;
}

.text-large {
  font-size: 1.2rem;
  font-weight: 700;
}

.text-medium {
  font-size: 1.05rem;
  font-weight: 600;
}

.text-small {
  font-size: 1rem;
  font-weight: 400;
}

.text-highlight {
  color: var(--project-accent-color);
  font-weight: 600;
}

@media (max-width: 580px) {
  .section-caption {
    font-size: 1.5rem;
  }

  .contribution-html {
    font-size: 0.9rem;
  }

  .contribution-html p,
  .contribution-html div,
  .contribution-html span {
    margin-left: 1.2rem;
    font-size: 0.85rem;
  }
}
</style>
