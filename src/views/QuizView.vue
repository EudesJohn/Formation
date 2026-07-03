<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Brain, CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy, Target, Zap, DollarSign } from 'lucide-vue-next'
import gsap from 'gsap'

const router = useRouter()

const questions = ref([
  {
    id: 1,
    category: "Algorithme",
    text: "Quel est l'objectif nÂ°1 de l'algorithme TikTok/Instagram ?",
    options: [
      "Faire plaisir aux crÃ©ateurs",
      "Garder l'utilisateur le plus longtemps possible sur l'application",
      "Vendre des publicitÃ©s uniquement",
      "Trier les vidÃ©os par date de publication"
    ],
    correct: 1,
    explanation: "L'algorithme est conÃ§u pour maximiser le temps de rÃ©tention. Plus tu gardes les gens sur l'app, plus il te pousse."
  },
  {
    id: 2,
    category: "ViralitÃ©",
    text: "Quelle est la partie la plus importante d'une vidÃ©o pour devenir viral ?",
    options: [
      "La qualitÃ© de la camÃ©ra",
      "La musique de fond",
      "Le 'Hook' (les 2 premiÃ¨res secondes)",
      "La description (lÃ©gende)"
    ],
    correct: 2,
    explanation: "Tout se joue au dÃ©but. Si tu ne captures pas l'attention en 2 secondes, l'utilisateur swipe et ton watchtime s'effondre."
  },
  {
    id: 3,
    category: "Architecture de Marque",
    text: "Ã€ quoi sert principalement ton profil (Bio + Photo) ?",
    options: [
      "Ã€ montrer que tu es beau/belle",
      "Ã€ transformer un visiteur curieux en abonnÃ© fidÃ¨le",
      "Ã€ mettre un lien vers ton site uniquement",
      "Ã€ dÃ©corer l'application"
    ],
    correct: 1,
    explanation: "Ton profil est ta vitrine. Il doit rÃ©pondre en 3 secondes Ã  : 'Qui es-tu et qu'est-ce que tu m'apportes ?'"
  },
  {
    id: 4,
    category: "CommunautÃ©",
    text: "Quelle est la diffÃ©rence entre une 'Audience' et une 'CommunautÃ©' ?",
    options: [
      "C'est la mÃªme chose",
      "L'audience est plus grande que la communautÃ©",
      "La communautÃ© repose sur la confiance et l'interaction rÃ©elle",
      "La communautÃ© coÃ»te plus cher Ã  entretenir"
    ],
    correct: 2,
    explanation: "Une audience regarde, une communautÃ© s'engage et achÃ¨te parce qu'elle te fait confiance."
  },
  {
    id: 5,
    category: "MonÃ©tisation",
    text: "Quelle est la meilleure stratÃ©gie pour monÃ©tiser une petite audience ?",
    options: [
      "Attendre d'avoir 100 000 abonnÃ©s",
      "Compter uniquement sur les vues (Fonds crÃ©ateurs)",
      "Vendre un produit ou service Ã  haute valeur ajoutÃ©e",
      "Demander des dons"
    ],
    correct: 2,
    explanation: "Avec 1000 abonnÃ©s qualifiÃ©s, tu peux gagner plus qu'un influenceur Ã  1M d'abonnÃ©s si tu vends le bon produit."
  }
])

const currentStep = ref(0) // 0: Start, 1: Quiz, 2: Results
const currentQuestionIndex = ref(0)
const selectedOption = ref(null)
const isAnswered = ref(false)
const score = ref(0)
const userAnswers = ref([])

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])
const progress = computed(() => ((currentQuestionIndex.value + 1) / questions.value.length) * 100)

const startQuiz = () => {
  currentStep.value = 1
  animateTransition()
}

const selectOption = (index) => {
  if (isAnswered.value) return
  selectedOption.value = index
}

const submitAnswer = () => {
  if (selectedOption.value === null) return
  
  isAnswered.value = true
  if (selectedOption.value === currentQuestion.value.correct) {
    score.value++
  }
  
  userAnswers.value.push({
    questionId: currentQuestion.value.id,
    selected: selectedOption.value,
    correct: currentQuestion.value.correct
  })
}

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    selectedOption.value = null
    isAnswered.value = false
    animateTransition()
  } else {
    currentStep.value = 2
  }
}

const restartQuiz = () => {
  currentStep.value = 0
  currentQuestionIndex.value = 0
  selectedOption.value = null
  isAnswered.value = false
  score.value = 0
  userAnswers.value = []
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const animateTransition = () => {
  if (prefersReducedMotion) return
  gsap.fromTo('.quiz-card',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
  )
}

const getVerdict = () => {
  const percent = (score.value / questions.value.length) * 100
  if (percent === 100) return { title: "Ã‰LITE ABSOLUE", msg: "Tu maÃ®trises parfaitement les codes de 2026. Tu es prÃªt Ã  dominer.", color: "#D4AF37" }
  if (percent >= 70) return { title: "STRATÃˆGE CONFIRMÃ‰", msg: "Excellentes bases. Encore quelques dÃ©tails et tu seras imparable.", color: "#2dd4bf" }
  return { title: "APPRENTI CRÃ‰ATEUR", msg: "Reprends les chapitres sur l'algorithme et la psychologie. L'action t'attend.", color: "#94a3b8" }
}
</script>

<template>
  <div class="quiz-layout">
    <div class="watermark-overlay">
      <div v-for="n in 10" :key="n" class="watermark-row">
        <span>Johnson Store . Editer par Johnson store . Email : eudesjohn650@gmail.com . Numero Whatapp +22940571370 &nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>

    <main class="quiz-container">
      <!-- STEP 0: START -->
      <div v-if="currentStep === 0" class="quiz-card glass-card start-screen">
        <div class="icon-header">
          <div class="brain-circle">
            <Brain :size="48" class="gold-text" />
          </div>
        </div>
        <h1 class="luxury-title">Test de MaÃ®trise <span class="gold-text">Sociale</span></h1>
        <p class="subtitle">Validez vos connaissances et prouvez que vous faites partie de l'Ã©lite des crÃ©ateurs.</p>
        
        <div class="quiz-info-grid">
          <div class="info-item">
            <Target :size="20" class="gold-text" />
            <span>{{ questions.length }} Questions StratÃ©giques</span>
          </div>
          <div class="info-item">
            <Zap :size="20" class="gold-text" />
            <span>Validation des acquis 2026</span>
          </div>
        </div>

        <button @click="startQuiz" class="btn-luxury start-btn">
          Commencer l'Examen <ArrowRight :size="20" />
        </button>
        <router-link to="/" class="back-link">Retour Ã  l'eBook</router-link>
      </div>

      <!-- STEP 1: QUIZ -->
      <div v-else-if="currentStep === 1" class="quiz-card glass-card main-quiz">
        <div class="quiz-header">
          <span class="category-badge">{{ currentQuestion.category }}</span>
          <div class="progress-container">
            <div class="progress-bar" :style="{ width: progress + '%' }"></div>
          </div>
          <span class="q-counter">{{ currentQuestionIndex + 1 }} / {{ questions.length }}</span>
        </div>

        <h2 class="question-text">{{ currentQuestion.text }}</h2>

        <div class="options-grid">
          <button 
            v-for="(option, index) in currentQuestion.options" 
            :key="index"
            @click="selectOption(index)"
            class="option-btn"
            :class="{ 
              'selected': selectedOption === index,
              'correct': isAnswered && index === currentQuestion.correct,
              'wrong': isAnswered && selectedOption === index && index !== currentQuestion.correct
            }"
            :disabled="isAnswered"
          >
            <span class="option-index">{{ String.fromCharCode(65 + index) }}</span>
            <span class="option-label">{{ option }}</span>
            <CheckCircle v-if="isAnswered && index === currentQuestion.correct" :size="20" class="status-icon" />
            <XCircle v-if="isAnswered && selectedOption === index && index !== currentQuestion.correct" :size="20" class="status-icon" />
          </button>
        </div>

        <div v-if="isAnswered" class="explanation-box" :class="selectedOption === currentQuestion.correct ? 'success' : 'error'">
          <p>{{ currentQuestion.explanation }}</p>
        </div>

        <div class="quiz-footer">
          <button v-if="!isAnswered" @click="submitAnswer" class="btn-primary" :disabled="selectedOption === null">
            Valider la rÃ©ponse
          </button>
          <button v-else @click="nextQuestion" class="btn-luxury">
            {{ currentQuestionIndex === questions.length - 1 ? 'Voir les rÃ©sultats' : 'Question suivante' }}
          </button>
        </div>
      </div>

      <!-- STEP 2: RESULTS -->
      <div v-else-if="currentStep === 2" class="quiz-card glass-card results-screen">
        <div class="result-header">
          <Trophy :size="64" class="gold-text animate-float" />
          <h2 class="verdict-title" :style="{ color: getVerdict().color }">{{ getVerdict().title }}</h2>
          <div class="score-circle">
            <span class="final-score">{{ score }}</span>
            <span class="total-q">/ {{ questions.length }}</span>
          </div>
        </div>

        <p class="verdict-msg">{{ getVerdict().msg }}</p>

        <div class="results-actions">
          <button @click="restartQuiz" class="btn-glass">
            <RotateCcw :size="18" /> Recommencer
          </button>
          <router-link to="/" class="btn-luxury">
            Retourner Ã  la Formation
          </router-link>
        </div>

        <div class="share-box">
          <p>Partage ton score avec le tag <span class="gold-text">#SocialMasteryElite</span></p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.quiz-layout {
  min-height: 100vh;
  min-height: 100dvh;
  background-color: #050505;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.quiz-container {
  width: 100%;
  max-width: 800px;
  z-index: 10;
}

.quiz-card {
  padding: 3rem;
  border-radius: 40px;
  text-align: center;
}

.icon-header { margin-bottom: 2rem; display: flex; justify-content: center; }
.brain-circle {
  width: 100px;
  height: 100px;
  background: rgba(212, 175, 55, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.luxury-title { font-size: 2.5rem; margin-bottom: 1rem; }
.gold-text { color: #D4AF37; }
.subtitle { color: #888; margin-bottom: 3rem; }

.quiz-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.info-item {
  background: rgba(255,255,255,0.02);
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.start-btn { width: 100%; }
.back-link { display: block; margin-top: 2rem; color: #555; text-decoration: none; font-weight: 600; }
.back-link:hover { color: #D4AF37; }

/* Quiz Main Style */
.quiz-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.category-badge {
  background: rgba(212, 175, 55, 0.1);
  color: #D4AF37;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
}

.progress-container { flex-grow: 1; height: 6px; background: #222; border-radius: 10px; overflow: hidden; }
.progress-bar { height: 100%; background: #D4AF37; transition: width 0.4s ease; }
.q-counter { font-size: 0.8rem; font-weight: 800; color: #555; }

.question-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 3rem;
  line-height: 1.4;
  text-align: left;
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.option-btn {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  padding: 1.2rem 1.5rem;
  border-radius: 20px;
  color: #ccc;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: left;
}

.option-btn:hover:not(:disabled) {
  background: rgba(255,255,255,0.05);
  border-color: rgba(212, 175, 55, 0.3);
  transform: translateX(5px);
}

.option-btn.selected {
  background: rgba(212, 175, 55, 0.05);
  border-color: #D4AF37;
  color: white;
}

.option-btn.correct { background: rgba(45, 212, 191, 0.1); border-color: #2dd4bf; color: #2dd4bf; }
.option-btn.wrong { background: rgba(239, 68, 68, 0.1); border-color: #ef4444; color: #ef4444; }

.option-index {
  width: 32px;
  height: 32px;
  background: rgba(0,0,0,0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.8rem;
}

.option-label { flex-grow: 1; font-weight: 600; }

.explanation-box {
  padding: 1.5rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: left;
}
.explanation-box.success { background: rgba(45, 212, 191, 0.05); color: #2dd4bf; border-left: 4px solid #2dd4bf; }
.explanation-box.error { background: rgba(239, 68, 68, 0.05); color: #ef4444; border-left: 4px solid #ef4444; }

.quiz-footer { margin-top: 2rem; }

/* Results */
.result-header { margin-bottom: 2rem; }
.verdict-title { font-family: 'Playfair Display', serif; font-size: 2.5rem; margin: 1.5rem 0; }
.score-circle { display: inline-block; margin-bottom: 2rem; }
.final-score { font-size: 4rem; font-weight: 900; color: #D4AF37; }
.total-q { font-size: 1.5rem; color: #555; font-weight: 800; }

.verdict-msg { font-size: 1.2rem; color: #888; margin-bottom: 3rem; line-height: 1.6; }

.results-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.share-box { font-size: 0.85rem; color: #555; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 2rem; }

@media (max-width: 640px) {
  .quiz-layout { padding: 1rem; }
  .quiz-card { padding: 1.5rem; border-radius: 24px; }
  .luxury-title { font-size: 1.8rem; line-height: 1.2; }
  .question-text { font-size: 1.3rem; margin-bottom: 2rem; }
  .quiz-info-grid { grid-template-columns: 1fr; gap: 0.75rem; margin-bottom: 2rem; }
  .results-actions { flex-direction: column; gap: 1rem; }
  .option-btn { padding: 1rem; font-size: 0.95rem; gap: 1rem; border-radius: 16px; }
  .option-index { width: 28px; height: 28px; font-size: 0.75rem; }
  .final-score { font-size: 3rem; }
  .verdict-title { font-size: 1.8rem; margin: 1rem 0; }
  .verdict-msg { font-size: 1rem; margin-bottom: 2rem; }
  .back-link { margin-top: 1.5rem; font-size: 0.85rem; }
  
  .watermark-overlay { opacity: 0.03; font-size: 8px; }
}

@media (max-width: 375px) {
  .quiz-layout { padding: 0.75rem; }
  .quiz-card { padding: 1.25rem; border-radius: 20px; }
  .luxury-title { font-size: 1.5rem; }
  .subtitle { font-size: 0.85rem; margin-bottom: 2rem; }

  .question-text { font-size: 1.1rem; margin-bottom: 1.5rem; }
  .option-btn { padding: 0.85rem; font-size: 0.85rem; gap: 0.75rem; border-radius: 14px; min-height: 48px; }
  .option-index { width: 24px; height: 24px; font-size: 0.7rem; }
  .option-label { font-size: 0.85rem; }

  .category-badge { font-size: 0.65rem; padding: 0.3rem 0.75rem; }
  .q-counter { font-size: 0.7rem; }
  .progress-container { height: 4px; }

  .explanation-box { padding: 1rem; font-size: 0.8rem; border-radius: 14px; }
  .info-item { padding: 0.75rem; font-size: 0.8rem; gap: 0.75rem; }

  .brain-circle { width: 64px; height: 64px; }
  .brain-circle svg { width: 28px; height: 28px; }

  .final-score { font-size: 2.5rem; }
  .total-q { font-size: 1.2rem; }
  .verdict-title { font-size: 1.4rem; }
  .verdict-msg { font-size: 0.9rem; }

  .results-actions { gap: 0.75rem; }
}
@media (max-width: 360px) {
  .quiz-layout { padding: 0.5rem; }
  .quiz-card { padding: 1rem; border-radius: 16px; }
  .luxury-title { font-size: 1.3rem; }
  .subtitle { font-size: 0.8rem; margin-bottom: 1.5rem; }
  .question-text { font-size: 1rem; margin-bottom: 1.25rem; }
  .option-btn { padding: 0.7rem; font-size: 0.8rem; gap: 0.6rem; border-radius: 12px; min-height: 44px; }
  .option-index { width: 22px; height: 22px; font-size: 0.65rem; }
  .option-label { font-size: 0.8rem; }
  .category-badge { font-size: 0.6rem; padding: 0.25rem 0.6rem; }
  .q-counter { font-size: 0.65rem; }
  .explanation-box { padding: 0.85rem; font-size: 0.78rem; border-radius: 12px; }
  .info-item { padding: 0.6rem; font-size: 0.78rem; gap: 0.5rem; }
  .quiz-info-grid { gap: 0.5rem; }
  .brain-circle { width: 56px; height: 56px; }
  .brain-circle svg { width: 24px; height: 24px; }
  .final-score { font-size: 2.2rem; }
  .total-q { font-size: 1rem; }
  .verdict-title { font-size: 1.25rem; margin: 0.75rem 0; }
  .verdict-msg { font-size: 0.85rem; margin-bottom: 1.5rem; }
  .results-actions { gap: 0.5rem; }
  .back-link { margin-top: 1.25rem; font-size: 0.8rem; }
}

</style>
