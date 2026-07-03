<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Respecter prefers-reduced-motion — ne pas désactiver les raccourcis si l'utilisateur a des limitations
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Désactiver le clic droit (sauf si reduced-motion est actif — handicap)
  if (!prefersReducedMotion) {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  // Désactiver les raccourcis clavier suspects
  document.addEventListener('keydown', (e) => {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
    if (e.ctrlKey && (e.shiftKey && (e.keyCode === 73 || e.keyCode === 74) || e.keyCode === 85 || e.keyCode === 83)) {
      e.preventDefault();
      return false;
    }
  });

  // Protection contre le glisser-déposer des images
  document.addEventListener('dragstart', (e) => {
    if (e.target.nodeName === 'IMG') e.preventDefault();
  });
})
</script>

<template>
  <div class="app-wrapper">
    <!-- Watermark Layer -->
    <div class="watermark-overlay">
      <div v-for="n in 10" :key="n" class="watermark-row">
        <span v-for="m in 4" :key="m">
          Johnson Store . Editer par Johnson store . Email : eudesjohn650@gmail.com . Numero Whatapp +22940571370 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
}

.watermark-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9990;
  overflow: hidden;
  opacity: 0.02;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transform: rotate(-25deg) scale(2);
  user-select: none;
  white-space: nowrap;
}

.watermark-row {
  font-size: 0.6rem;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Désactiver la watermark si reduced-motion ou sur mobile (évite le débordement) */
@media (prefers-reduced-motion: reduce), (max-width: 768px) {
  .watermark-overlay {
    opacity: 0 !important;
    display: none !important;
  }
}
</style>
