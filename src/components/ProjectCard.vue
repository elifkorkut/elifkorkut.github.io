<template>
  <div class="project-card">
    <img :src="image" :alt="title + ' Icon'" />
    <div class="project-content">
      <p class="header">{{ title }}</p>
      <p class="role">{{ role }}</p>
      <p class="description">{{ description }}</p>
      <div class="project-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    image: String,
    title: String,
    role: String,
    description: String,
    tags: Array,
    types: Array
  }
};
</script>

<style scoped>
.project-card {
  background-color: var(--project-card-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  z-index: 1;
  width: 100%;
  max-width: 360px;
  margin: 1rem auto;
  box-sizing: border-box;
}

@media (max-width: 480px) {
  .project-card {
    max-width: 100%;
    margin: 1rem 1rem;
  }
}

.project-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 0px;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-content {
  padding: 16px;
  background: var(--project-card-info-);
  width: 100%;
  box-sizing: border-box;
}

.project-content .header {
  font-size: 18px;
  margin: 0 0 8px;
  color: var(--description-color);
  font-weight: bold;
}

.project-content .role {
  font-size: 14px;
  color: var(--description-color-gray-dark);
  margin-bottom: 8px;
}

.project-content .description {
  font-size: 14px;
  margin: 0;
  color: var(--description-color-gray-light);
}

.project-tags {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background-color: var(--tag-color);
  color: white;
  border-radius: 4px;
  padding: 5px 8px;
  font-size: 12px;
}
</style>
