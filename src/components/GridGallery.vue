<template>
  <section class="grid-gallery">
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
defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
/* Masonry layout using CSS columns */
.grid-gallery {
  column-count: 3;
  column-gap: 2rem;
  margin-top: 3rem;
}

/* Individual items */
.gallery-item {
  break-inside: avoid;
  margin-bottom: 2rem;
  display: inline-block;
  width: 100%;
  text-align: center;
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

/* Responsive: 2 columns on tablets */
@media (max-width: 1024px) {
  .grid-gallery {
    column-count: 2;
  }
}

/* Responsive: 1 column on mobile */
@media (max-width: 640px) {
  .grid-gallery {
    column-count: 1;
  }
}
</style>
