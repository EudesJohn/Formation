<script setup>
import HeroSection from '../components/HeroSection.vue'
import ChapterSection from '../components/ChapterSection.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.to('.landing-page', { opacity: 1, duration: 1 })
})
</script>

<template>
  <div class="landing-page">
    <nav class="navbar glass-card">
      <div class="nav-content">
        <div class="logo">Social<span>Mastery</span></div>
        <div class="nav-links">
          <button class="btn-primary" @click="window.location.hash='chapters'">Plan</button>
          <router-link to="/reader" class="btn-primary mini">Lire l'E-book</router-link>
        </div>
      </div>
    </nav>

    <main>
      <HeroSection />
      <ChapterSection />
    </main>

    <footer class="footer">
      <div class="section-container">
        <p>&copy; 2026 Social Mastery. Tous droits réservés.</p>
        <div class="footer-links">
          <a href="#">Mentions Légales</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.landing-page {
  opacity: 0;
}

.navbar {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  z-index: 1000;
  padding: 0.75rem 2rem;
  border-radius: 100px !important;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -1px;
}

.logo span {
  color: var(--accent-primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-main);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--accent-primary);
}

.btn-primary.mini {
  padding: 0.5rem 1.5rem;
  font-size: 0.8rem;
  text-decoration: none;
}

.footer {
  padding: 4rem 0;
  border-top: 1px solid var(--glass-border);
  text-align: center;
  color: var(--text-muted);
}

.footer-links {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .navbar {
    top: 1rem;
    padding: 0.5rem 1.5rem;
  }
  
  .logo {
    font-size: 1.2rem;
  }
  
  .nav-links {
    gap: 0.5rem;
  }

  .nav-links button:not(.mini) {
    display: none;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 1rem;
  }
  
  .btn-primary.mini {
    padding: 0.4rem 1rem;
    font-size: 0.75rem;
  }
}
</style>
