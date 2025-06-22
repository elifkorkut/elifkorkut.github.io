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
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.gallery-item {
  text-align: center;
}

.top-text {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.media video,
.media img {
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.bottom-text {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: var(--project-description-color);
}
</style>
