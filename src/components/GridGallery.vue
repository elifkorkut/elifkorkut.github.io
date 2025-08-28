<template>
  <section :class="galleryClasses">
    <div
      class="gallery-item"
      v-for="(item, index) in items"
      :key="index"
    >
      <p class="top-text">{{ item.topText }}</p>

      <div class="media">
        <video
          v-if="item.type === 'video'"
          :src="item.src"
          :alt="item.alt"
          autoplay
          loop
          muted
          playsinline
        ></video>
        <img
          v-else
          :src="item.src"
          :alt="item.alt"
        />
      </div>

      <p class="bottom-text">{{ item.bottomText }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

// Dynamically determine the classes for the gallery container
const galleryClasses = computed(() => {
  return {
    'grid-gallery': true,
    'regular-grid': props.items.length < 5,
    'colossal-grid': props.items.length >= 5,
  };
});
</script>

<style scoped>
/* Base styles for the gallery container */
.grid-gallery {
  margin-top: 3rem;
}

/* --- Layout for MORE than 3 items (Colossal/Masonry) --- */
.colossal-grid {
  column-count: 3;
  column-gap: 2rem;
}

/* --- Layout for LESS than 4 items (Regular Grid) --- */
.regular-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Individual items */
.gallery-item {
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
}

/* Specific style for items in a colossal/masonry layout */
.colossal-grid .gallery-item {
  break-inside: avoid;
  display: inline-block;
}

/* Top caption */
.top-text {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* Media styling */
.media video,
.media img {
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

/* Bottom caption */
.bottom-text {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

/* --- Responsive Styles --- */

/* Tablet view */
@media (max-width: 1024px) {
  .colossal-grid {
    column-count: 2;
  }
  .regular-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile view */
@media (max-width: 640px) {
  .colossal-grid {
    column-count: 1;
  }
  .regular-grid {
    /* If there are 3 items, they will stack vertically */
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>