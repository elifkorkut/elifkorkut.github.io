<template>
  <Navbar />
  <TopSection />

  <div class="wrap2em">
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
      <hr class="caption-line" />
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
      <img src="/images/read.jpg" alt="External Link" class="link-icon" />
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

  <div class="wrap2em">
    <!-- Navigation Buttons -->
    <div class="nav-buttons">
      <button v-if="previousProject" @click="goTo(previousProject.link)" class="nav-btn">
        ← Previous
      </button>
      <button v-if="nextProject" @click="goTo(nextProject.link)" class="nav-btn">
        Next →
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
@import '../styles.css';

.page-container {
  width: 100%;
  margin: 10rem 0 0 0;
}

.caption-project {
  font-size: 4rem;
  font-weight: bold;
  text-align: left;
}

.caption-publication {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 768px) {
  .caption-project {
    font-size: 2.5rem;
    text-align: center;
  }
  .caption-publication {
    font-size: 1.5rem;
    text-align: center;
  }
}

.caption-line {
  width: 100%;
  border: 1px solid white;
  margin-bottom: 0rem;
}

.layout-responsive {
  display: flex;
  gap: 2rem;
}

.layout-split {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.layout-split .left,
.layout-split .right {
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.column {
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (max-width: 949px) {
  .layout-responsive,
  .layout-split {
    display: block;
  }

  .column,
  .layout-split .left,
  .layout-split .right {
    width: 100%;
  }
}

.summary-wrapper {
  background-color: var(--primary-background);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.secondary-wrapper {
  background-color: var(--summary-background);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.gallery-wrapper {
  background-color: var(--primary-background);
  border-radius: 10px;
  padding: 2rem;
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
}

::v-deep(.project-summary a),
::v-deep(.project-summary strong) {
  display: inline;
  white-space: normal;
}

::v-deep(.project-details a) {
  display: inline;
  white-space: normal;
  color: white;
  text-decoration: underline;
}

::v-deep(.project-details strong) {
  display: inline;
  white-space: normal;
  font-weight: 600;
}

.nav-btn {
  padding: 10px 20px;
  background: var(--accent-color-button);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}


.nav-btn:hover,
.nav-btn:focus {
  background: var(--hover-color-button);
  outline: none;
}

.link-button {
  align-self: center;
  text-decoration: none;
}

.link-icon {
  width: 100%;
  height: 70px;
  display: inline-block;
  transition: transform 0.2s ease;
}

.link-icon:hover {
  transform: scale(1.1);
}
@media (max-width: 600px) {
 
  .link-icon {
    width: 100%;
    height: 40px;
  }
}

.citation {
  margin-top: 1rem;
  color: var(--citation-text-color, #888);
  font-style: italic;
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: justify;
  padding-left: 4px;
  padding-right: 4px;
}

/* Optional: Responsive sizing */
@media (max-width: 600px) {
  .citation {
    font-size: 0.85rem;
  }
}


</style>
