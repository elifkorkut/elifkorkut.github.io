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
  background-color: var(--navbar-color);
  color: var(--navbar-text-color-reverse);
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  padding: 10px 30px;
  position: relative;
  z-index: 5;
  align-items: center;
  flex-wrap: wrap;
}

.nav-btn {
  background-color: var(--navbar-color);
  color: var(--navbar-text-color-reverse);
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
  background-color: var(--accent-color-navbar-button);
  color: var(--navbar-text-color);
}

.nav-btn-active {
  background-color: var(--background-color);
  color: var(--navbar-text-color);
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
@media (max-width: 1023px)  {
        .navbar {
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
    padding: 8px;
    border-radius: 20px 20px 20px 20px;
    width: auto;
  }

  .nav-btn {
    font-size: 0.85rem;
    padding: 8px 10px;
    margin: 0 4px;
  }
}
</style>
