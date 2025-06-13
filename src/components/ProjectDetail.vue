<template>
  <Navbar />
  <TopSection />

  <div class="wrap2em">
    <div class="article-section">
      <div class="container">
        <h1 class="caption">{{ project.title }}</h1>
        <hr class="caption-line" />
        <Gallery :items="project.gallery" :key="slug" />

       

        <div class="details">
          <p class="description">{{ project.descriptionlong }}</p>
          <ul>
            <li><strong>Length:</strong> {{ project.details.length }}</li>
            <li><strong>Studio:</strong> {{ project.details.studio }}</li>
            <li><strong>Team:</strong> {{ project.details.team }}</li>
            <li><strong>Tech:</strong> {{ project.details.tech }}</li>
          </ul>

          <p class="role" v-if="project.role">{{ project.role }}</p>
          <template v-if="project.roleInfo">
            <p v-for="desc in project.roleInfo.description" :key="desc">{{ desc }}</p>
            <ul>
              <li v-for="resp in project.roleInfo.responsibilities" :key="resp">{{ resp }}</li>
            </ul>
          </template>
        </div>

        <div class="nav-buttons">
          <button
            v-if="previousProject"
            @click="goTo(previousProject.link)"
            class="nav-btn"
          >
            ← {{ previousProject.title }}
          </button>
          <button
            v-if="nextProject"
            @click="goTo(nextProject.link)"
            class="nav-btn"
          >
            {{ nextProject.title }} →
          </button>
        </div>
      </div>
    </div>
  </div>

  <MyFooter />
</template>

<script setup>
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
import { ref, computed, watch } from 'vue';
import { projects } from '../data/projects.js';
import Gallery from '../components/Gallery.vue';
import TopSection from '../components/TopSection.vue';
import Navbar from '../components/Navbar.vue';
import MyFooter from '../components/MyFooter.vue';

const route = useRoute();
const router = useRouter();
const slug = ref(route.params.slug);

watch(() => route.params.slug, (newSlug) => {
  slug.value = newSlug;
});

const currentIndex = computed(() => projects.findIndex(p => p.slug === slug.value));
const project = computed(() => projects[currentIndex.value]);

const previousProject = computed(() =>
  currentIndex.value > 0 ? projects[currentIndex.value - 1] : null
);
const nextProject = computed(() =>
  currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null
);

function goTo(link) {
  router.push(link);
}
</script>

<style scoped>
@import '../styles.css';

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
}

.nav-btn:hover {
  background: var(--hover-color-button);
}

.container {
  width: 80%;
  margin: 0 auto;
}

.back-button,
.nav-buttons button,
.prev-button,
.next-button {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  background-color: var(--selected-color-button);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  display: inline-block;
  text-align: center;
}

.back-button:hover,
.nav-buttons button:hover,
.prev-button:hover,
.next-button:hover {
  background-color: var(--hover-color-button);
}

.back-button {
  margin-top: 2.5rem;
}

.caption {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: 4rem;
  font-weight: bold;
}

.caption-line {
  width: 100%;
  border: 2px solid white;
}

.details,
.role {
  background-color: var(--project-card-background-color);
  padding: 2rem;
  margin-top: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  text-align: left;
}

.details h2,
.role h2 {
  font-size: 1.75rem;
  color: var(--project-color-caption-color);
  margin-bottom: 1rem;
}

.details p,
.role p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--project-description-color);
}

.details span,
.role span {
  font-weight: bold;
  color: var(--project-color-caption-color);
}

.role ul {
  margin-top: 0rem;
  margin-left: 1rem;
  list-style-type: disc;
}

.role ul li {
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .container {
    width: 90%;
  }
  .back-button,
  .nav-buttons button,
  .prev-button,
  .next-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .container {
    width: 95%;
  }
  .back-button,
  .nav-buttons button,
  .prev-button,
  .next-button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .back-button,
  .nav-buttons button,
  .prev-button,
  .next-button {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
}
</style>