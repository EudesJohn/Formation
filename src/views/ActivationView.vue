<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Lock, ShieldCheck, ArrowRight } from 'lucide-vue-next'
import gsap from 'gsap'

const router = useRouter()
const accessCode = ref('')
const error = ref('')
const isLoading = ref(false)

// MOT DE PASSE MASTER (Tu peux le changer ici)
const MASTER_CODE = 'ELITE-2026-PRO'

const handleActivation = () => {
  if (!accessCode.value) {
    error.value = "Veuillez entrer votre code d'accès."
    return
  }

  isLoading.value = true

  // Simulation d'une petite attente pour le côté "Premium/Sérieux"
  setTimeout(() => {
    if (accessCode.value.trim().toUpperCase() === MASTER_CODE) {
      localStorage.setItem('ebook_access_token', 'validated_elite_2026')

      gsap.to('.activation-card', {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "expo.inOut",
        onComplete: () => {
          router.push('/')
        }
      })
    } else {
      error.value = "Code invalide. Contactez le support si le problème persiste."
      gsap.fromTo('.activation-card', { x: -10 }, { x: 10, duration: 0.1, repeat: 5, yoyo: true })
    }
    isLoading.value = false
  }, 800)
}
</script>

<template>
  <div class="activation-layout">
    <div class="background-effects">
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
    </div>

    <main class="activation-container">
      <div class="activation-card glass-card animate-float">
        <div class="icon-header">
          <div class="lock-circle">
            <Lock :size="32" class="amber-icon" v-if="!isLoading" />
            <div class="loader-spinner" v-else></div>
          </div>
        </div>

        <h1 class="luxury-title">Accès <span class="amber-text">Restreint</span></h1>
        <p class="subtitle">Veuillez entrer votre code d'activation Élite pour débloquer le contenu de la Masterclass.</p>

        <div class="input-group">
          <input
            v-model="accessCode"
            type="text"
            placeholder="Entrez votre code ici..."
            @keyup.enter="handleActivation"
            class="elite-input"
          />
          <p v-if="error" class="error-msg">{{ error }}</p>
        </div>

        <button @click="handleActivation" class="btn-primary activation-btn" :disabled="isLoading">
          Activer mon accès <ShieldCheck :size="20" />
        </button>

        <div class="support-link">
          <p>Pas de code ? <a href="https://fooocsof.mychariow.shop" target="_blank">Obtenir mon accès Elite</a></p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.activation-layout {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-dark);
  overflow: hidden;
  position: relative;
  padding: 1rem;
}

.background-effects {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.glow-orb {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
}

.orb-1 { background: var(--gold); top: -100px; right: -100px; }
.orb-2 { background: var(--accent-primary); bottom: -100px; left: -100px; }

.activation-container {
  z-index: 10;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
}

.activation-card {
  padding: 3rem;
  border-radius: 24px;
  background: rgba(15, 15, 18, 0.7);
  border: 1px solid rgba(245, 158, 11, 0.15);
}

.icon-header {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.lock-circle {
  width: 80px;
  height: 80px;
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(245, 158, 11, 0.15);
}

.amber-text { color: var(--gold); }
.amber-icon { color: var(--gold); }

.luxury-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
}

.subtitle {
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.input-group {
  width: 100%;
  margin-bottom: 1.5rem;
}

.elite-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--glass-border);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  color: white;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

.elite-input:focus {
  outline: none;
  border-color: var(--gold);
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.1);
}

.error-msg {
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.activation-btn {
  width: 100%;
  margin-top: 1rem;
}

.support-link {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.support-link a {
  color: var(--gold);
  text-decoration: none;
  font-weight: 600;
}

.support-link a:hover {
  text-decoration: underline;
}

.loader-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(245, 158, 11, 0.2);
  border-top-color: var(--gold);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 640px) {
  .activation-container { padding: 1.25rem; }
  .activation-card { padding: 2rem 1.5rem; border-radius: 16px; }
  .luxury-title { font-size: 1.6rem; }
  .subtitle { font-size: 0.85rem; margin-bottom: 1.5rem; }
  .elite-input { padding: 0.85rem; font-size: 0.95rem; }
  .lock-circle { width: 64px; height: 64px; }
  .lock-circle svg { width: 24px; height: 24px; }
}

@media (max-width: 375px) {
  .activation-container { padding: 1rem; }
  .activation-card { padding: 1.5rem 1.25rem; border-radius: 14px; }
  .luxury-title { font-size: 1.4rem; }
  .subtitle { font-size: 0.8rem; margin-bottom: 1.25rem; }
  .elite-input { padding: 0.75rem; font-size: 0.9rem; }
  .lock-circle { width: 56px; height: 56px; }
  .lock-circle svg { width: 22px; height: 22px; }
  .activation-btn { padding: 0.85rem 1.5rem; font-size: 0.9rem; min-height: 48px; }
}

@media (max-width: 360px) {
  .activation-container { padding: 0.75rem; }
  .activation-card { padding: 1.25rem 1rem; border-radius: 12px; }
  .luxury-title { font-size: 1.25rem; }
  .subtitle { font-size: 0.78rem; margin-bottom: 1rem; }
  .elite-input { padding: 0.65rem; font-size: 0.85rem; letter-spacing: 1px; }
  .lock-circle { width: 48px; height: 48px; }
  .lock-circle svg { width: 20px; height: 20px; }
  .activation-btn { padding: 0.75rem 1.25rem; font-size: 0.85rem; min-height: 44px; gap: 0.5rem; }
  .support-link p { font-size: 0.8rem; }
  .error-msg { font-size: 0.78rem; }
}
</style>
