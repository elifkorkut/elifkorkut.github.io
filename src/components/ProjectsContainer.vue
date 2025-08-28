<template>
  <header>
    <h2 class="projects-section-title">PROJECTS</h2>
  </header>

  <div class="filter-container">
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

  <div :class="masonryClasses">
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
import { ref, onMounted, computed } from 'vue'; // Import computed
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.vue';

const categories = ['All', 'Published Games', 'Multimedia Projects', 'Publications'];
const selectedCategory = ref('All');
const filteredProjects = ref([]);
const dropdownVisible = ref(false);

// Dynamically determine the classes for the projects container
const masonryClasses = computed(() => {
  return {
    'projects-masonry': true, // Base class
    'regular-grid': filteredProjects.value.length < 5,
    'colossal-grid': filteredProjects.value.length >= 5,
  };
});

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
/* --- Base and Filter Styles (largely unchanged) --- */
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
/* (Dropdown styles are unchanged) */
.dropdown-container { display: none; /* ... */ }

/* --- Grid Layout Styles --- */

/* Base styles for the grid container */
.projects-masonry {
  padding: 20px;
}

/* Layout for MORE than 3 items (Colossal/Masonry) */
.colossal-grid {
  column-count: 3;
  column-gap: 1.5rem;
}

/* Layout for LESS than 4 items (Regular Grid) */
.regular-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Base styles for the project card wrapper */
.project-card-wrapper {
  width: 100%;
  margin-bottom: 1.5rem;
}

/* Specific styles for items in the colossal/masonry layout */
.colossal-grid .project-card-wrapper {
  display: inline-block;
  break-inside: avoid;
}

/* --- Responsive Breakpoints --- */
@media (max-width: 1024px) {
  .colossal-grid {
    column-count: 2;
  }
  .regular-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 750px) {
  .filters {
    display: none;
  }
  .dropdown-container {
    display: block;
  }
  /* Additional responsive rules might be needed here if you want to change grid behavior */
}

@media (max-width: 500px) {
  .colossal-grid {
    column-count: 1;
  }
  .regular-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>