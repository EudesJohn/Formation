<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { Menu, X, BookOpen, ChevronRight } from 'lucide-vue-next'
import gsap from 'gsap'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = async () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    await nextTick()
    gsap.fromTo('.mobile-menu-content', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    )
  } else {
    document.body.style.overflow = ''
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (id) => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="nav-container">
      <div class="logo-wrapper" @click="$router.push('/intro')">
        <div class="logo">Social<span>Mastery</span></div>
      </div>

      <!-- Desktop Links -->
      <div class="nav-links desktop-only">
        <button class="nav-link-btn" @click="scrollToSection('chapters')">Plan</button>
        <router-link to="/reader" class="btn-primary mini">
          Lire l'E-book <ChevronRight :size="16" />
        </router-link>
      </div>

      <!-- Mobile Toggle -->
      <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle Menu">
        <component :is="isMenuOpen ? X : Menu" :size="28" />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="mobile-menu-overlay" @click="toggleMenu">
        <div class="mobile-menu-content" @click.stop>
          <div class="mobile-logo">Social<span>Mastery</span></div>
          <div class="mobile-links">
            <button class="mobile-link" @click="scrollToSection('chapters')">
              Le Plan du Guide
            </button>
            <router-link to="/reader" class="mobile-link primary" @click="isMenuOpen = false">
              Lire l'E-book <BookOpen :size="20" />
            </router-link>
          </div>
          <button class="close-menu" @click="toggleMenu">
            Fermer <X :size="20" />
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  z-index: 2000;
  padding: 0.75rem 1.5rem;
  border-radius: 100px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(10, 1, 24, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar.scrolled {
  top: 1rem;
  width: 95%;
  background: rgba(10, 1, 24, 0.8);
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-wrapper {
  cursor: pointer;
}

.logo {
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -1px;
  color: white;
}

.logo span {
  color: var(--accent-primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link-btn {
  background: none;
  border: none;
  color: var(--text-main);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.nav-link-btn:hover {
  color: var(--accent-primary);
}

.btn-primary.mini {
  padding: 0.6rem 1.5rem;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 100px;
  background: linear-gradient(135deg, var(--accent-primary), #6366f1);
  color: white;
  text-decoration: none;
  font-weight: 700;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(5, 1, 15, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
}

.mobile-menu-content {
  width: 85%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 3rem 2rem;
  text-align: center;
}

.mobile-logo {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 3rem;
}

.mobile-logo span {
  color: var(--accent-primary);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-link {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.2rem;
  border-radius: 16px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s;
}

.mobile-link.primary {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
}

.close-menu {
  margin-top: 3rem;
  background: none;
  border: none;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 100%;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  
  .mobile-toggle {
    display: block;
  }

  .navbar {
    top: 1rem;
    padding: 0.6rem 1.2rem;
  }

  .logo {
    font-size: 1.2rem;
  }
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
