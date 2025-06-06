<script setup>
import { onMounted } from 'vue';

// Load Ionicons dynamically when the component is mounted
onMounted(() => {
  const scriptESM = document.createElement('script');
  scriptESM.type = 'module';
  scriptESM.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
  document.head.appendChild(scriptESM);

  const scriptNoModule = document.createElement('script');
  scriptNoModule.noModule = true;
  scriptNoModule.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
  document.head.appendChild(scriptNoModule);
});
</script>

<template>
  <footer>
    <p>Copyright &copy; Elif Hilal Korkut 2025.</p>
    <div class="separator"></div>
    <ul class="social-list-footer">
      <li class="social-item-footer">
        <a href="mailto:elifh.korkut@gmail.com" class="social-link-footer" target="_blank">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </li>
      <li class="social-item-footer">
        <a href="https://www.linkedin.com/in/elifhilalkorkut/" class="social-link-footer" target="_blank">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </li>
      <li class="social-item-footer">
        <a href="https://github.com/elifkorkut" class="social-link-footer" target="_blank">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </li>
      <li class="social-item-footer">
        <a href="https://discord.com/users/elif.korkut#3106" class="social-link-footer" target="_blank">
          <ion-icon name="logo-discord"></ion-icon>
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
@import '../styles.css';

/* Footer */
footer {
   background-color: var(--primary-color);
   color: white;
   padding: 0px 0px;
   text-align: center;
   width: 100%;
   height: 6rem;
   bottom: 0;
   z-index: 6;
   position: static;
}

.footer-text {
   align-items: center;
}

.social-list-footer {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 15px;
   margin-left: -30px;
   margin-top: -10px;
}

.social-item-footer .social-link-footer {
   color: var(--light-gray-70);
   font-size: 18px;
}

.social-item-footer .social-link-footer:hover { 
   color: var(--accent-color);
}
</style>
