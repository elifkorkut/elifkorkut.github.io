<template>
  <footer class="footer">
   
    <ul class="footer-social-links">
      <li>
        <a href="mailto:elifh.korkut@gmail.com" class="social-btn" aria-label="Email">
          <i class="fa-regular fa-envelope"></i>
        </a>
      </li>
      <li>
        <a href="https://discord.com/users/elif.korkut#3106" class="social-btn" aria-label="Discord">
          <i class="fa-brands fa-discord"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/elifkorkut" class="social-btn" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/elifhilalkorkut/" class="social-btn" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </li>
    </ul>
    <p class="footer-copy">&copy; 2025 Elif Hilal Korkut. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
 
  padding: 1.5rem 0;
  background-color: var(--primary-color);
  text-align: center;
  color: var(--button-border);
}

.footer-social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  font-size: 18px;
  border: 2px solid var(--button-border);
  border-radius: 50%;
  background-color: transparent;
  color: inherit;
  transition: transform 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.1);
  /* No background or color change — preserves original icon color */
}

.footer-copy {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
}
@media (max-width: 1023px) {
  .footer {
    background-color: var(--secondary-color);
    padding-bottom: 5rem; /* mobile only */
  } }
</style>

