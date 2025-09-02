<template>
  <header>
    <h2 class="projects-section-title">PROJECTS</h2>
  </header>

  <!-- Filter buttons (desktop) -->
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

    <!-- Dropdown (mobile) -->
    <div class="dropdown-container">
      <div
        class="dropdown-toggle"
        @click="toggleDropdown"
      >
        <span class="selected-category">{{ selectedCategory }}</span>
        <span class="chevron-icon" :class="{ rotated: dropdownVisible }">▼</span>
      </div>
      <div
        class="dropdown-menu"
        v-show="dropdownVisible"
      >
        <button
          v-for="category in categories"
          :key="'dropdown-' + category"
          class="filter-dropdown-btn"
          @click="applyFilter(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </div>

  <!-- Projects grid -->
  <div :class="gridClasses">
    <router-link
      v-for="project in filteredProjects"
      :key="project.id+project.title"
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
import { ref, onMounted, computed } from "vue";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.vue";

const categories = ["All", "Published Games", "Multimedia Projects", "Publications"];
const selectedCategory = ref("All");
const filteredProjects = ref([]);
const dropdownVisible = ref(false);

// Computed grid classes
const gridClasses = computed(() => {
  return {
    "projects-grid": true,
    "regular-grid": filteredProjects.value.length < 4,
    "colossal-grid": filteredProjects.value.length >= 4,
  };
});

function applyFilter(category) {
  selectedCategory.value = category;

  if (category === "All") {
    filteredProjects.value = projects.filter(
      (p) => p && p.show !== false
    );
  } else {
    filteredProjects.value = projects.filter(
      (p) =>
        p &&
        p.show !== false &&
        Array.isArray(p.types) &&
        p.types.includes(category)
    );
  }

  dropdownVisible.value = false; // Close dropdown after selection
}

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

onMounted(() => {
  applyFilter("All");
});
</script>

<style scoped>
/* --- Filter and UI Styles --- */
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
.filter-btn:hover { background-color: var(--hover-color-button); }
.filter-btn.active {
  background-color: var(--selected-color-button);
  font-weight: bold;
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
.selected-category {
  font-weight: 500;
}
.chevron-icon {
  font-size: 16px;
  transition: transform 0.3s;
}
.chevron-icon.rotated {
  transform: rotate(180deg);
}
.dropdown-menu {
  position: absolute;
  background-color: var(--accent-color-button);
  margin-top: 5px;
  z-index: 10;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
}
.filter-dropdown-btn {
  padding: 12px 20px;
  background-color: var(--accent-color-button);
  border: none;
  color: white;
  cursor: pointer;
  text-align: left;
  width: 100%;
  font-size: 12px;
  border-radius: 4px;
}
.filter-dropdown-btn:hover { background-color: var(--hover-color-button); }

/* --- Grid Layout Styles --- */
.projects-grid {
  padding: 20px;
}
.colossal-grid {
  column-count: 3;
  column-gap: 1.5rem;
}
.regular-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.project-card-wrapper {
  width: 100%;
  margin-bottom: 1.5rem;
  display: block;
}
.colossal-grid .project-card-wrapper {
  break-inside: avoid;
}

/* --- Responsive Breakpoints --- */
@media (max-width: 1024px) {
  .colossal-grid { column-count: 2; }
  .regular-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 750px) {
  .filters { display: none; }
  .dropdown-container { display: block; }
  .colossal-grid { column-count: 2; }
  .regular-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 500px) {
  .colossal-grid { column-count: 1; }
  .regular-grid { grid-template-columns: repeat(1, 1fr); }
}
</style>
