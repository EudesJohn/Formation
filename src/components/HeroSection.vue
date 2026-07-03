<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { Rocket, ChevronRight, Sparkles } from 'lucide-vue-next'

const heroTitle = ref(null)
const heroContent = ref(null)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

onMounted(() => {
  if (prefersReducedMotion) return

  gsap.from(heroTitle.value, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  })

  gsap.from(heroContent.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out"
  })
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-bg"></div>
    <div class="section-container hero-grid">
      <div class="hero-text" ref="heroContent">
        <span class="badge"><Rocket :size="16" /> Le Guide Ultime 2026</span>
        <h1 ref="heroTitle" class="main-title">
          Réseaux Sociaux : <br/>
          <span class="gradient-text">Zéro à 10 000</span> Abonnés
        </h1>
        <p class="hero-description">
          Le guide complet pour débutants qui veulent craquer l'algorithme et bâtir une communauté engagée en partant de rien.
        </p>
        <div class="hero-actions">
          <router-link to="/reader" class="btn-primary">
            Commencer l'aventure <Rocket :size="20" />
          </router-link>
          <a href="#chapters" class="btn-secondary">
            Découvrir le plan <ChevronRight :size="20" />
          </a>
        </div>
      </div>
      
      <div class="hero-visual animate-float">
        <div class="book-mockup glass-card">
          <img src="/images/cover.png" alt="E-book Cover" class="cover-img" />
          <div class="glow-effect"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
  width: 100%;
  max-width: 100%;
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 70px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding-top: 60px;
  }
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(45, 212, 191, 0.15) 0%, transparent 50%);
  z-index: -1;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.badge {
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.main-title {
  font-size: clamp(1.8rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
}

.hero-description {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--text-muted);
  max-width: 500px;
  width: 100%;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.btn-secondary {
  color: var(--text-main);
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s;
}

.btn-secondary:hover {
  opacity: 0.8;
}

.book-mockup {
  position: relative;
  padding: 1rem;
  transform: rotate(5deg);
  transition: transform 0.5s ease;
  overflow: hidden;
}

.book-mockup:hover {
  transform: rotate(0deg) scale(1.05);
}

.cover-img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  object-fit: contain;
}

.glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
  z-index: -1;
  pointer-events: none;
}

@media (max-width: 968px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 8rem;
    padding-bottom: 4rem;
    gap: 2rem;
  }
  
  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .main-title {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .hero-description {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
  
  .btn-primary {
    width: 100%;
    justify-content: center;
  }
  
  .hero-visual {
    margin-top: 2rem;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2.2rem;
  }
  .hero-actions {
    gap: 0.75rem;
  }
  .btn-primary {
    padding: 1rem 1.5rem;
    font-size: 0.95rem;
    min-height: 52px;
  }
  .hero-visual {
    max-width: 240px;
  }
  .badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 375px) {
  .main-title {
    font-size: 1.8rem;
  }
  .hero-description {
    font-size: 0.95rem;
  }
  .badge {
    font-size: 0.75rem;
  }
  .book-mockup {
    transform: rotate(2deg);
    padding: 0.5rem;
  }
  .hero-visual {
    max-width: 200px;
  }
}

@media (max-width: 360px) {
  .main-title {
    font-size: 1.6rem;
  }
  .hero-description {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  .badge {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
  }
  .book-mockup {
    transform: rotate(1deg);
    padding: 0.4rem;
  }
  .hero-visual {
    max-width: 180px;
  }
  .hero-section {
    padding-top: 50px;
  }
}

</style>
