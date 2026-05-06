<script setup>
import Navbar from '../components/Navbar.vue'
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
    <Navbar />

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
</style>
