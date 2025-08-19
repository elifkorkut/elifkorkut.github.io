<template>
  <Navbar />
  <TopSection />

  <div class="page-wrapper">
    <div class="page-container">
      <!-- Caption -->
      <h1
        :class="[
          'caption',
          isPublicationLayout ? 'caption-publication' : 'caption-project'
        ]"
      >
        {{ project.title }}
      </h1>

    </div>
  </div>

  <!-- Publication Layout -->
  <div v-if="isPublicationLayout" class="publication-layout">
    <div class="summary-wrapper publication-wrapper">
      <div class="layout-split">
        <div class="left">
          <PublicationSummary :summaryHtml="project.summaryHtml" />
          <div class="citation">
            <p>{{ project.citation }}</p>
          </div>
          <a :href="project.link1" target="_blank" rel="noopener noreferrer" class="link-button">
            Read Publication
            <!-- SVG for external link icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
        <div class="right">
          <ArtBlock :art="project.mainArt" />
        </div>
      </div>
    </div>
    <GridGallery :items="project.gallery" class="gallery-wrapper" />
  </div>

  <!-- Project Layout -->
  <div v-else class="project-layout">
    <!-- Summary Section -->
    <div class="summary-wrapper project-wrapper">
      <div class="layout-split">
        <div class="left">
          <ProjectSummary :summaryHtml="project.summaryHtml" />
          <ProjectDetail :detailsHtml="project.detailsHtml" />
        </div>
        <div class="right">
          <ArtBlock :art="project.mainArt" />
        </div>
      </div>
    </div>

    <!-- Secondary Section -->
    <div class="secondary-wrapper project-wrapper">
      <div class="layout-responsive">
        <template v-if="isMobile">
          <ArtBlock :art="project.secondaryArt" />
          <ProjectResponsibilities :responsibilitiesHtml="project.responsibilitiesHtml" />
          <ArtBlock v-if="project.optArt" :art="project.optArt" class="optart-block" />
          <ProjectContributions :contributionsHtml="project.keyContributionsHtml" />
        </template>

        <template v-else>
          <!-- Left Column -->
          <div class="column">
            <ArtBlock :art="project.secondaryArt" />
            <ProjectResponsibilities :responsibilitiesHtml="project.responsibilitiesHtml" />
            <ArtBlock v-if="project.optArt" :art="project.optArt" class="optart-block" />
          </div>

          <!-- Right Column -->
          <div class="column">
            <ProjectContributions :contributionsHtml="project.keyContributionsHtml" />
          </div>
        </template>
      </div>
    </div>

    <GridGallery :items="project.gallery" class="gallery-wrapper" />
  </div>

  <div class="page-wrapper">
    <!-- Navigation Buttons -->
    <div class="nav-buttons">
      <button v-if="previousProject" @click="goTo(previousProject.link)" class="nav-btn">
        <!-- SVG for back arrow icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Previous
      </button>
      <button v-if="nextProject" @click="goTo(nextProject.link)" class="nav-btn">
        Next
        <!-- SVG for forward arrow icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
    </div>
  </div>

  <MyFooter />
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects } from '../data/projects.js';

import Navbar from '../components/Navbar.vue';
import TopSection from '../components/TopSection.vue';
import MyFooter from '../components/MyFooter.vue';

import ProjectDetail from '../components/ProjectDetail.vue';
import ProjectSummary from '../components/ProjectSummary.vue';
import PublicationSummary from '../components/PublicationSummary.vue';
import ArtBlock from '../components/ArtBlock.vue';
import ProjectResponsibilities from '../components/ProjectResponsibilities.vue';
import ProjectContributions from '../components/ProjectContributions.vue';
import GridGallery from '../components/GridGallery.vue';

const route = useRoute();
const router = useRouter();
const slug = ref(route.params.slug);
const isMobile = ref(false);

watch(() => route.params.slug, (newSlug) => {
  slug.value = newSlug;
});

const currentIndex = computed(() => projects.findIndex(p => p.slug === slug.value));
const project = computed(() => projects[currentIndex.value] || { title: 'Project Not Found', types: [] });

const previousProject = computed(() => {
  for (let i = currentIndex.value - 1; i >= 0; i--) {
    if (projects[i].show !== false) return projects[i];
  }
  return null;
});

const nextProject = computed(() => {
  for (let i = currentIndex.value + 1; i < projects.length; i++) {
    if (projects[i].show !== false) return projects[i];
  }
  return null;
});

const isPublicationLayout = computed(() =>
  project.value.types.includes('Publications')
);

function goTo(link) {
  router.push(link);
}

onMounted(() => {
  isMobile.value = window.innerWidth < 950;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 950;
  });
});
</script>

<style scoped>


.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  /* Removed horizontal padding */
}

.page-container {
  width: 100%;
  margin: 10rem 0 2rem 0; /* Increased top margin */
  padding: 0 2rem; /* Keep padding on the title container */
}

.caption {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.caption-project {
  font-size: 3.5rem;
  font-weight: 700;
  text-align: left;
}

.caption-publication {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
}

.caption-line {
  width: 100%;
  border: 0;
  height: 1px;
  background: var(--line-color);
  margin-bottom: 2rem;
}

.project-layout, .publication-layout {
  max-width: 100%; /* Allow layouts to be full width */
  margin: 0 auto 2rem auto;
  /* Removed horizontal padding */
}

.layout-responsive, .layout-split {
  display: flex;
  gap: 2rem;
}

.layout-split .left,
.layout-split .right {
  flex: 1;
  min-width: 0;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 0;
}

.summary-wrapper, .secondary-wrapper, .gallery-wrapper {
  padding: 2rem;
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: 0px solid var(--line-color);
  border-bottom: 0px solid var(--line-color);
  margin-bottom: 2rem;
}

.summary-wrapper, .gallery-wrapper {
  background-color: var(--bg-card_project1);
}

.secondary-wrapper {
  background-color: var(--bg-card_project2); /* Alternating color */
}


.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 0 2rem; /* Add padding back to nav buttons */
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--hover-color-button);
  color: var(--text-color);
  border: 1px solid var(--hover-color-button);
  cursor: pointer;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background-color: var(--hover-color-button);
  border-color: var(--accent-color_project);
}

.link-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--hover-color-button);
  color: var(--bg-primary_project);
  border: 1px solid var(--accent-color_project);
  cursor: pointer;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.link-button:hover {
  background-color: var(--primary-color);
  color: var(--text-secondary);
}

.citation {
  color: var(--text-secondary);
  font-style: italic;
  font-size: 0.9rem;
  line-height: 1.6;
  border-left: 3px solid var(--highlight-color);
  padding-left: 1rem;
}

/* Deeply scoped styles for rendered HTML */
:deep(.project-details a), :deep(.project-summary a) {
  color: var(--text-color);
  text-decoration: underline;
}
:deep(.project-details strong), :deep(.project-summary strong) {
  color: var(--text-color);
  font-weight: 600;
}

/* Responsive Styles */
@media (max-width: 949px) {
  .layout-responsive, .layout-split {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .page-container {
    margin-top: 8rem; /* Increased top margin for mobile */
    padding: 0 1rem;
  }
  .summary-wrapper, .secondary-wrapper, .gallery-wrapper {
    padding: 1.5rem;
  }
  .nav-buttons {
    padding: 0 1rem;
  }
  .caption-project {
    font-size: 2.5rem;
    text-align: center;
  }
  .caption-publication {
    font-size: 1.75rem;
  }
  .link-button {
    align-self: stretch;
  }
}
</style>
