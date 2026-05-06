<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Target, Users, Zap, DollarSign, CheckCircle } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const chapters = [
  {
    title: "Chapitre 1 — Choisir LA bonne plateforme",
    description: "Instagram, TikTok, LinkedIn... Ne vous dispersez pas. Apprenez à identifier où se trouve votre audience cible en 2026.",
    icon: Target,
    image: "/images/strategy.png"
  },
  {
    title: "Chapitre 4 — Les secrets de l'algorithme",
    description: "L'algorithme n'est pas votre ennemi. Découvrez comment transformer la data en visibilité organique.",
    icon: Zap,
    image: "/images/algorithm.png"
  },
  {
    title: "Chapitre 7 — Monétiser ses réseaux",
    description: "Les 5 méthodes concrètes pour transformer vos abonnés en clients fidèles, même avec une petite audience.",
    icon: DollarSign,
    image: "/images/monetization.png"
  }
]

const chapterRefs = ref([])

onMounted(() => {
  chapterRefs.value.forEach((el, index) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      duration: 1,
      ease: "power3.out"
    })
  })
})
</script>

<template>
  <section id="chapters" class="chapters-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="gradient-text">Ce que vous allez apprendre</h2>
        <p>Un plan d'action étape par étape pour ne plus jamais naviguer à vue.</p>
      </div>

      <div class="chapters-grid">
        <div 
          v-for="(chapter, index) in chapters" 
          :key="index"
          class="chapter-card glass-card"
          ref="chapterRefs"
          :class="{ 'reverse': index % 2 !== 0 }"
        >
          <div class="chapter-content">
            <div class="icon-wrapper">
              <component :is="chapter.icon" :size="32" />
            </div>
            <h3>{{ chapter.title }}</h3>
            <p>{{ chapter.description }}</p>
            <ul class="benefit-list">
              <li><CheckCircle :size="16" /> Stratégies validées</li>
              <li><CheckCircle :size="16" /> Outils gratuits inclus</li>
            </ul>
          </div>
          <div class="chapter-image">
            <img :src="chapter.image" :alt="chapter.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chapters-section {
  padding-bottom: 8rem;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-header h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.section-header p {
  color: var(--text-muted);
  font-size: 1.2rem;
}

.chapters-grid {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.chapter-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 3rem;
  align-items: center;
  overflow: hidden;
}

.chapter-card.reverse {
  direction: rtl;
}

.chapter-card.reverse .chapter-content {
  direction: ltr;
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  background: rgba(124, 58, 237, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
  margin-bottom: 2rem;
}

.chapter-content h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.chapter-content p {
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.benefit-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.benefit-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--accent-secondary);
}

.chapter-image img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

@media (max-width: 968px) {
  .chapter-card {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
  
  .chapter-card.reverse {
    direction: ltr;
  }
  
  .chapter-image {
    order: -1;
  }
}
</style>
