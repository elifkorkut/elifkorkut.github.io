<template>
  <nav class="navbar">
    <router-link to="/" class="nav-btn" :class="{ 'nav-btn-active': $route.path === '/' }">Home</router-link>
    <router-link to="/aboutme" class="nav-btn" :class="{ 'nav-btn-active': $route.path === '/aboutme' }">About Me</router-link>
    <router-link to="/resume" class="nav-btn" :class="{ 'nav-btn-active': $route.path === '/resume' }">Resume</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
@import '../styles.css';

.navbar {
  background-color: var(--primary-color);
  color: var(--text-color);
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  padding: 10px 30px;
  position: relative;
  z-index: 5;
}

.nav-btn {
  background-color: var(--primary-color);
  color: var(--text-color);
  text-align: center;
  border: none;
  padding: 10px;
  cursor: pointer;
  flex: 1;
  margin: 0 10px;
  border-radius: 40px;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.nav-btn:hover {
  background-color: var(--accent-color);
}

.nav-btn-active {
  background-color: var(--background-color);
  color: white;
  text-align: center;
  border: none;
  padding: 10px;
  cursor: pointer;
  flex: 1;
  margin: 0 10px;
  border-radius: 40px;
  transition: background-color 0.3s ease;
}

/* Responsive Styles */
@media (min-width: 1024px) {
  .navbar {
    width: 60%;
    margin: auto;
    left: 350px;
    top: 30px;
    min-width: 100px;
    max-width: 1000px;
    position: absolute;
  }
}
@media (max-width: 1024px) and (min-width: 600px),
       (max-width: 599px) {
  .navbar {
    position: fixed;
    left: 3px;
    bottom: 0px;
    right: 3px;
  }
}
</style>
