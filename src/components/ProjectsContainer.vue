<template>
  <header>
    <h2 class="projects-section-title">PROJECTS</h2>
  </header>

  <div class="filter-container">
    <!-- Filter Buttons (Desktop) -->
    <div class="filters">
      <button
        v-for="category in categories"
        :key="category"
        class="filter-btn"
        :class="{ active: selectedCategory === category }"
        @click="applyFilter(category)"
      >
        {{ category }}
      </button>
    </div>

    <!-- Dropdown for Mobile View -->
    <div class="dropdown-container">
      <div
        id="dropdown-toggle"
        class="dropdown-toggle"
        @click="toggleDropdown"
      >
        <span id="selected-category">{{ selectedCategory }}</span>
        <span id="chevron-icon">▼</span>
      </div>
      <div
        id="dropdown-menu"
        class="dropdown-menu"
        v-show="dropdownVisible"
      >
        <button
          v-for="category in categories"
          :key="category"
          class="filter-dropdown-btn"
          @click="applyFilter(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </div>

  <!-- Masonry Grid -->
  <div class="projects-masonry">
    <router-link
      v-for="project in filteredProjects"
      :key="project.id"
      :to="project.link"
      class="project-card-wrapper"
    >
      <ProjectCard
        :image="project.cardImage"
        :title="project.title"
        :role="project.role"
        :description="project.shortDescription"
        :tags="project.tags"
        :types="project.types"
      />
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.vue';

const categories = ['All', 'Published Games', 'Multimedia Projects', 'Publications'];
const selectedCategory = ref('All');
const filteredProjects = ref([]);
const dropdownVisible = ref(false);

function applyFilter(category) {
  selectedCategory.value = category;
  if (category === 'All') {
    filteredProjects.value = projects.filter(p => p && p.show !== false);
  } else {
    filteredProjects.value = projects.filter(
      p => p && p.show !== false && p.types.includes(category)
    );
  }
  dropdownVisible.value = false;
}

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

onMounted(() => {
  applyFilter('All');
});
</script>

<style scoped>
/* Filter Styling */
.filter-container {
  z-index: 5;
  align-items: center;
  padding-bottom: 20px;
}

.filters {
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;
  margin: 0 10px;
}

.projects-section-title {
  text-align: center;
  padding-bottom: 7px;
  margin-bottom: 10px;
}

.filter-btn {
  background-color: var(--accent-color-button);
  border: none;
  color: white;
  font-size: 0.75rem;
  border-radius: 4px;
  padding: 5px 8px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-btn:hover {
  background-color: var(--hover-color-button);
}

.filter-btn.active {
  background-color: var(--selected-color-button);
  font-weight: bold;
}

.filter-dropdown-btn {
  padding: 10px 20px;
  background-color: var(--accent-color-button);
  border: none;
  cursor: pointer;
  text-align: left;
  width: 100%;
  font-size: 16px;
}

.filter-dropdown-btn:hover {
  background-color: var(--hover-color-button);
}

.dropdown-container {
  display: none;
  position: relative;
  margin: 0 30px;
}

.dropdown-toggle {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--accent-color-button);
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
}

#chevron-icon {
  font-size: 16px;
  transition: transform 0.3s;
}

#dropdown-menu {
  display: none;
  background-color: var(--accent-color-button);
  margin-top: 10px;
  z-index: 10;
  padding-right: 20px;
  width: 100%;
}

.dropdown-menu button {
  color: white;
  width: 100%;
  background-color: var(--accent-color-button);
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  border-radius: 4px;
}

.dropdown-menu button:hover {
  background-color: var(--hover-color-button);
}

/* Masonry Layout */
.projects-masonry {
  column-count: 3;
  column-gap: 1.5rem;
  padding: 20px;
}

.project-card-wrapper {
  display: inline-block;
  width: 100%;
  margin-bottom: 1.5rem;
  break-inside: avoid;
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .projects-masonry {
    column-count: 2;
  }
}

@media (max-width: 750px) {
  .filters {
    display: none;
  }

  .dropdown-container {
    display: block;
  }

  #dropdown-menu {
    display: block;
  }

  .projects-masonry {
    column-count: 2;
  }
}

@media (max-width: 500px) {
  .projects-masonry {
    column-count: 1;
  }
}
</style>
