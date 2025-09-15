
<script setup>
import { ref, onMounted, provide } from 'vue'
import TopSection from './components/TopSection.vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import AboutMe from './components/AboutMeCard.vue'
import Projects from './components/ProjectsContainer.vue'
import MyFooter from './components/MyFooter.vue'
import Resume from './components/ResumeCard.vue'

const isLight = ref(false)

function applyTheme(light) {
  document.documentElement.classList.toggle('light-theme', light)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isLight.value = saved === 'light'
  } else {
    isLight.value =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
  }
  applyTheme(isLight.value)
})

function toggleTheme() {
  isLight.value = !isLight.value
  localStorage.setItem('theme', isLight.value ? 'light' : 'dark')
  applyTheme(isLight.value)
}

// ✅ provide theme state to all child components
provide('isLight', isLight)
</script>

<template>
  <div id="app">
    <button class="theme-toggle-btn" @click="toggleTheme">
      
      {{ isLight ? '🌙 ' : '☀️' }}
    </button>

    <Navbar />
    <TopSection />
    <router-view />
    <MyFooter />
  </div>
</template>

<style>
/* quick toggle styling; adapt to your .btn-social look if you want */
.theme-toggle-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 999;
  border-radius: 999px;
  padding: 0.5rem 0.7rem;
  font-size: 1rem;
  background: var(--primary-color);
  color: var(--text-color);
  border: 1px solid var(--line-color);
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  cursor: pointer;
}
.theme-toggle-btn:focus { outline: 2px solid var(--highlight-bg-color); }
</style>











