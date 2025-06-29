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
      <!-- Text with chevron icon (Mobile dropdown trigger) -->
      <div
        id="dropdown-toggle"
        class="dropdown-toggle"
        @click="toggleDropdown"
      >
        <span id="selected-category">{{ selectedCategory }}</span>
        <span id="chevron-icon">▼</span>
      </div>
      <!-- Dropdown menu with options -->
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

  <div class="projects-container">
    <router-link
      v-for="project in filteredProjects"
      :key="project.id"
      :to="project.link"
      class="project-card-link"
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

// Define categories and project data
const categories = ['All', 'Published Games', 'Multimedia Projects', 'Publications'];

// Reactive properties
const selectedCategory = ref('All');
const filteredProjects = ref([]);
const dropdownVisible = ref(false);

// Function to apply filter based on the selected category
function applyFilter(category) {
  selectedCategory.value = category;

  if (category === 'All') {
    filteredProjects.value = projects.filter(
      project => project && project.show !== false
    );
  } else {
    filteredProjects.value = projects.filter(
      project =>
        project &&
        project.show !== false &&
        project.types.includes(category)
    );
  }

  // Close the dropdown after selection on mobile
  dropdownVisible.value = false;
}

// Function to toggle dropdown visibility on mobile
function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

// Initialize with "All" category selected
onMounted(() => {
  applyFilter('All');
});
</script>

<style scoped>
/*-----------------------------------*\
  Filter
\*-----------------------------------*/

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
  padding-left: 0px;
  margin-right: 10px;
  margin-left: 10px;
}

.projects-section-title {
  text-align: center;
  position: relative;
  padding-bottom: 7px;
  margin-bottom: 10px;
}

.filter-btn {
  text-decoration: none;
  background-color: var(--accent-color-button);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 50px;
  width: 200px;
  text-align: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  display: inline-block;
  border-radius: 4px;
  padding: 5px 8px;
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

/* Dropdown for Mobile */
.dropdown-container {
  display: none;
  position: relative;
  margin-right: 30px;
  margin-left: 30px;
}

.dropdown-toggle {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
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
  position: relative;
  width: 100%;
  background-color: var(--accent-color-button);
  border-radius: 0px;
  margin-top: 10px;
  font-size: 2rem;
  z-index: 10;
  padding-right: 20px;
}

.projects-container {
  display: grid;
  position: relative;
  gap: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: auto;
  grid-auto-flow: row;
  justify-items: center;
}

.dropdown-menu button {
  color: white;
  width: 100%;
  background-color: var(--accent-color-button);
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  text-decoration: none;
  z-index: 5;
  border-radius: 4px;
}

.dropdown-menu button:hover {
  background-color: var(--hover-color-button);
}

/* Responsive Styles */
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
}

@media (max-width: 500px) {
  .filters {
    display: none;
  }

  .dropdown-container {
    display: block;
  }

  #dropdown-menu {
    display: block;
  }

  .projects-container {
    display: grid;
    position: relative;
    gap: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 0px;
    margin-right: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: auto;
    grid-auto-flow: row;
    justify-items: center;
  }
}
</style>
