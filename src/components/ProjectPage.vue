<template>
  <Navbar />
  <TopSection />

  <div class="wrap2em">
    <div class="container">
      <!-- Dynamic title -->
      <h1 :class="['caption', { 'is-publication': isPublicationLayout }]">
        {{ project.title }}
      </h1>
      <hr class="caption-line" />

      <!-- Publication layout -->
      <div v-if="isPublicationLayout" class="publication-layout">
        <div class="pub-summary-art-wrapper">
          <PublicationSummary :summaryHtml="project.summaryHtml" class="half-width" />
          <ArtBlock :art="project.mainArt" class="half-width" />
        </div>
        <GridGallery :items="project.gallery" />
      </div>

      <!-- Project layout -->
      <div v-else class="project-layout">
       
        <div class="summary-art-wrapper">
          <ProjectSummary :summaryHtml="project.summaryHtml" class="half-width" />
          <ProjectDetail :detailsHtml = "project.detailsHtml" class=" half-width"/>
          <ArtBlock :art="project.mainArt" class="half-width" />
        </div>

        <div class="secondary-resp-contrib-wrapper">
          <div class="left-side">
            <ArtBlock :art="project.secondaryArt" topText="" class="half-width" />
            <ProjectResponsibilities :responsibilitiesHtml="project.responsibilitiesHtml" class="half-width" />
          </div>
          <ProjectContributions :contributionsHtml ="project.keyContributionsHtml" class="half-width" />
        </div>

        <GridGallery :items="project.gallery" />
      </div>

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
  </div>

  <MyFooter />
</template>

<script setup>
import { ref, computed, watch } from 'vue';
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

watch(() => route.params.slug, (newSlug) => {
  slug.value = newSlug;
});

const currentIndex = computed(() => projects.findIndex(p => p.slug === slug.value));
const project = computed(() => projects[currentIndex.value] || { title: 'Project Not Found', types: [] });

const previousProject = computed(() =>
  currentIndex.value > 0 ? projects[currentIndex.value - 1] : null
);
const nextProject = computed(() =>
  currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null
);

const isPublicationLayout = computed(() =>
  project.value.types.includes('Publications')
);

function goTo(link) {
  router.push(link);
}
</script>

<style scoped>
@import '../styles.css';

.container {
  width: 95%;
  margin: 10rem auto 0 auto;
}

/* Title */
.caption {
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: 4rem;
  font-weight: bold;
}

/* Smaller for publications */
.caption.is-publication {
  font-size: 2.5rem;
}

/* Center title on small screens */
@media (max-width: 768px) {
  .caption {
    text-align: center;
  }
}

.caption-line {
  width: 100%;
  border: 2px solid white;
  margin-bottom: 1.5rem;
}

/* Layout wrapper sections */
.summary-art-wrapper,
.secondary-resp-contrib-wrapper,
.pub-summary-art-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
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
 
.half-width {
  width: 100%;
}
@media (min-width: 950px) {
  .half-width {
    width: 48%;
  }
}

.left-side {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

a {
  color: white;
  text-decoration: underline;
}


/* Navigation Buttons */
.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
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
</style>
