<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { Menu, X, BookOpen, ChevronRight } from 'lucide-vue-next'
import gsap from 'gsap'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const toggleMenu = async () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    if (!prefersReducedMotion) {
      await nextTick()
      gsap.fromTo('.mobile-menu-content',
        { opacity: 0, scale: 0.95, y: -10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      )
    }
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
      <div class="logo-wrapper" @click="$router.push('/')">
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
  max-width: 1100px;
  z-index: 2000;
  padding: 0.75rem 1.5rem;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(10, 10, 15, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar.scrolled {
  top: 1rem;
  width: 95%;
  background: rgba(10, 10, 15, 0.9);
  border-color: rgba(139, 92, 246, 0.2);
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
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
  border-radius: 8px;
}

.nav-link-btn:hover {
  color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.05);
}

.btn-primary.mini {
  padding: 0.6rem 1.5rem;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--accent-primary), #A78BFA);
  color: white;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

.btn-primary.mini:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
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
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
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
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.2rem;
  border-radius: 12px;
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

.mobile-link:hover {
  background: rgba(139, 92, 246, 0.08);
  border-color: rgba(139, 92, 246, 0.3);
}

.mobile-link.primary {
  background: linear-gradient(135deg, var(--accent-primary), #A78BFA);
  border-color: transparent;
}

.close-menu {
  margin-top: 3rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s;
}

.close-menu:hover {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-main);
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .mobile-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    min-height: 48px;
  }

  .navbar {
    top: 1rem;
    padding: 0.6rem 1.2rem;
    width: 92%;
    border-radius: 14px;
  }

  .navbar.scrolled {
    top: 0.75rem;
    width: 94%;
  }

  .logo {
    font-size: 1.2rem;
  }

  .mobile-link {
    min-height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-menu {
    min-height: 48px;
  }
}

@media (max-width: 480px) {
  .navbar {
    top: 0.75rem;
    padding: 0.5rem 1rem;
    width: 94%;
    border-radius: 12px;
  }

  .navbar.scrolled {
    top: 0.5rem;
    width: 96%;
    padding: 0.45rem 0.9rem;
  }

  .mobile-menu-content {
    width: 90%;
    padding: 2rem 1.25rem;
    border-radius: 20px;
  }
}

@media (max-width: 360px) {
  .navbar {
    top: 0.5rem;
    padding: 0.4rem 0.75rem;
    width: 96%;
    border-radius: 10px;
  }

  .navbar.scrolled {
    top: 0.4rem;
    width: 97%;
    padding: 0.35rem 0.65rem;
  }

  .logo {
    font-size: 1rem;
  }

  .mobile-toggle {
    min-width: 44px;
    min-height: 44px;
  }

  .mobile-toggle svg {
    width: 24px;
    height: 24px;
  }

  .mobile-menu-content {
    width: 92%;
    padding: 1.5rem 1rem;
    border-radius: 16px;
  }

  .mobile-logo {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .mobile-link {
    padding: 1rem;
    font-size: 1rem;
    min-height: 48px;
  }

  .btn-primary.mini {
    padding: 0.5rem 1rem;
    font-size: 0.78rem;
  }
}

@media (max-width: 320px) {
  .navbar {
    top: 0.4rem;
    padding: 0.35rem 0.6rem;
    width: 97%;
    border-radius: 10px;
  }
  .navbar.scrolled {
    top: 0.3rem;
    width: 98%;
    padding: 0.3rem 0.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .logo {
    font-size: 0.9rem;
  }
  .mobile-toggle {
    min-width: 40px;
    min-height: 40px;
  }
  .mobile-toggle svg {
    width: 22px;
    height: 22px;
  }
  .mobile-menu-content {
    width: 94%;
    padding: 1.25rem 0.85rem;
    border-radius: 14px;
  }
  .mobile-logo {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  .mobile-link {
    padding: 0.85rem;
    font-size: 0.9rem;
    min-height: 44px;
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
