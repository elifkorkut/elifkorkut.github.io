<template>
  <div class="art-block">
    <div class="media-wrapper">
      <img
        v-if="art.type === 'image'"
        :src="art.src"
        :alt="art.alt"
        loading="lazy"
      />
      <video
        v-else-if="art.type === 'video'"
        :src="art.src"
        :alt="art.alt"
        autoplay
        loop
        muted
        playsinline
        preload="none"
      >
      </video>
    </div>
    <p class="description">{{ art.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  art: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.art-block {
  margin-bottom: 0.5rem;
}

.media-wrapper img,
.media-wrapper video {
  max-width: 100%;
  border-radius: 8px;
  display: block;
  margin-bottom: 0.5rem; /* Increased margin for better spacing */
}

.description {
  font-size: 0.9rem; /* Adjusted for consistency */
  color: var(--text-secondary, #A0AEC0); /* Added fallback color */
  text-align: center; /* Center the description */
}

@media (max-width: 950px) {
  .description {
    font-size: 0.8rem; /* Adjusted for consistency */
  }
}
</style>
