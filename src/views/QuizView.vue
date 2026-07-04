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
    text: "Quel est l'objectif n°1 de l'algorithme TikTok/Instagram ?",
    options: [
      "Faire plaisir aux créateurs",
      "Garder l'utilisateur le plus longtemps possible sur l'application",
      "Vendre des publicités uniquement",
      "Trier les vidéos par date de publication"
    ],
    correct: 1,
    explanation: "L'algorithme est conçu pour maximiser le temps de rétention. Plus tu gardes les gens sur l'app, plus il te pousse."
  },
  {
    id: 2,
    category: "Viralité",
    text: "Quelle est la partie la plus importante d'une vidéo pour devenir viral ?",
    options: [
      "La qualité de la caméra",
      "La musique de fond",
      "Le 'Hook' (les 2 premières secondes)",
      "La description (légende)"
    ],
    correct: 2,
    explanation: "Tout se joue au début. Si tu ne captures pas l'attention en 2 secondes, l'utilisateur swipe et ton watchtime s'effondre."
  },
  {
    id: 3,
    category: "Architecture de Marque",
    text: "À quoi sert principalement ton profil (Bio + Photo) ?",
    options: [
      "À montrer que tu es beau/belle",
      "À transformer un visiteur curieux en abonné fidèle",
      "À mettre un lien vers ton site uniquement",
      "À décorer l'application"
    ],
    correct: 1,
    explanation: "Ton profil est ta vitrine. Il doit répondre en 3 secondes à : 'Qui es-tu et qu'est-ce que tu m'apportes ?'"
  },
  {
    id: 4,
    category: "Communauté",
    text: "Quelle est la différence entre une 'Audience' et une 'Communauté' ?",
    options: [
      "C'est la même chose",
      "L'audience est plus grande que la communauté",
      "La communauté repose sur la confiance et l'interaction réelle",
      "La communauté coûte plus cher à entretenir"
    ],
    correct: 2,
    explanation: "Une audience regarde, une communauté s'engage et achète parce qu'elle te fait confiance."
  },
  {
    id: 5,
    category: "Monétisation",
    text: "Quelle est la meilleure stratégie pour monétiser une petite audience ?",
    options: [
      "Attendre d'avoir 100 000 abonnés",
      "Compter uniquement sur les vues (Fonds créateurs)",
      "Vendre un produit ou service à haute valeur ajoutée",
      "Demander des dons"
    ],
    correct: 2,
    explanation: "Avec 1000 abonnés qualifiés, tu peux gagner plus qu'un influenceur à 1M d'abonnés si tu vends le bon produit."
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
  if (percent === 100) return { title: "ÉLITE ABSOLUE", msg: "Tu maîtrises parfaitement les codes de 2026. Tu es prêt à dominer.", color: "var(--gold)" }
  if (percent >= 70) return { title: "STRATÈGE CONFIRMÉ", msg: "Excellentes bases. Encore quelques détails et tu seras imparable.", color: "#22D3EE" }
  return { title: "APPRENTI CRÉATEUR", msg: "Reprends les chapitres sur l'algorithme et la psychologie. L'action t'attend.", color: "#A1A1AA" }
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
            <Brain :size="48" class="amber-text" />
          </div>
        </div>
        <h1 class="luxury-title">Test de Maîtrise <span class="amber-text">Sociale</span></h1>
        <p class="subtitle">Validez vos connaissances et prouvez que vous faites partie de l'élite des créateurs.</p>

        <div class="quiz-info-grid">
          <div class="info-item">
            <Target :size="20" class="amber-text" />
            <span>{{ questions.length }} Questions Stratégiques</span>
          </div>
          <div class="info-item">
            <Zap :size="20" class="amber-text" />
            <span>Validation des acquis 2026</span>
          </div>
        </div>

        <button @click="startQuiz" class="btn-luxury start-btn">
          Commencer l'Examen <ArrowRight :size="20" />
        </button>
        <router-link to="/" class="back-link">Retour à l'eBook</router-link>
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
            Valider la réponse
          </button>
          <button v-else @click="nextQuestion" class="btn-luxury">
            {{ currentQuestionIndex === questions.length - 1 ? 'Voir les résultats' : 'Question suivante' }}
          </button>
        </div>
      </div>

      <!-- STEP 2: RESULTS -->
      <div v-else-if="currentStep === 2" class="quiz-card glass-card results-screen">
        <div class="result-header">
          <Trophy :size="64" class="amber-text animate-float" />
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
            Retourner à la Formation
          </router-link>
        </div>

        <div class="share-box">
          <p>Partage ton score avec le tag <span class="amber-text">#SocialMasteryElite</span></p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.quiz-layout {
  min-height: 100vh;
  min-height: 100dvh;
  background-color: var(--bg-dark);
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
  border-radius: 24px;
  text-align: center;
}

.icon-header { margin-bottom: 2rem; display: flex; justify-content: center; }
.brain-circle {
  width: 100px;
  height: 100px;
  background: rgba(245, 158, 11, 0.06);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.luxury-title { font-size: 2.5rem; margin-bottom: 1rem; }
.amber-text { color: var(--gold); }
.subtitle { color: var(--text-secondary); margin-bottom: 3rem; }

.quiz-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.info-item {
  background: var(--bg-card);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.start-btn { width: 100%; }
.back-link { display: block; margin-top: 2rem; color: var(--text-secondary); text-decoration: none; font-weight: 600; }
.back-link:hover { color: var(--gold); }

/* Quiz Main Style */
.quiz-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.category-badge {
  background: rgba(245, 158, 11, 0.1);
  color: var(--gold);
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
}

.progress-container { flex-grow: 1; height: 6px; background: #222; border-radius: 10px; overflow: hidden; }
.progress-bar { height: 100%; background: var(--gold); transition: width 0.4s ease; }
.q-counter { font-size: 0.8rem; font-weight: 800; color: var(--text-secondary); }

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
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  padding: 1.2rem 1.5rem;
  border-radius: 14px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: left;
}

.option-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(245, 158, 11, 0.3);
  transform: translateX(5px);
}

.option-btn.selected {
  background: rgba(245, 158, 11, 0.06);
  border-color: var(--gold);
  color: white;
}

.option-btn.correct { background: rgba(34, 211, 238, 0.1); border-color: #22D3EE; color: #22D3EE; }
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
  border-radius: 16px;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: left;
}
.explanation-box.success { background: rgba(34, 211, 238, 0.05); color: #22D3EE; border-left: 4px solid #22D3EE; }
.explanation-box.error { background: rgba(239, 68, 68, 0.05); color: #ef4444; border-left: 4px solid #ef4444; }

.quiz-footer { margin-top: 2rem; }

/* Results */
.result-header { margin-bottom: 2rem; }
.verdict-title { font-family: 'Playfair Display', serif; font-size: 2.5rem; margin: 1.5rem 0; }
.score-circle { display: inline-block; margin-bottom: 2rem; }
.final-score { font-size: 4rem; font-weight: 900; color: var(--gold); }
.total-q { font-size: 1.5rem; color: #555; font-weight: 800; }
.verdict-msg { font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 3rem; line-height: 1.6; }

.results-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.share-box { font-size: 0.85rem; color: var(--text-secondary); border-top: 1px solid var(--glass-border); padding-top: 2rem; }

@media (max-width: 640px) {
  .quiz-layout { padding: 1rem; }
  .quiz-card { padding: 1.5rem; border-radius: 16px; }
  .luxury-title { font-size: 1.8rem; line-height: 1.2; }
  .question-text { font-size: 1.3rem; margin-bottom: 2rem; }
  .quiz-info-grid { grid-template-columns: 1fr; gap: 0.75rem; margin-bottom: 2rem; }
  .results-actions { flex-direction: column; gap: 1rem; }
  .option-btn { padding: 1rem; font-size: 0.95rem; gap: 1rem; border-radius: 12px; }
  .option-index { width: 28px; height: 28px; font-size: 0.75rem; }
  .final-score { font-size: 3rem; }
  .verdict-title { font-size: 1.8rem; margin: 1rem 0; }
  .verdict-msg { font-size: 1rem; margin-bottom: 2rem; }
  .back-link { margin-top: 1.5rem; font-size: 0.85rem; }

  .watermark-overlay { opacity: 0.03; font-size: 8px; }
}

@media (max-width: 375px) {
  .quiz-layout { padding: 0.75rem; }
  .quiz-card { padding: 1.25rem; border-radius: 14px; }
  .luxury-title { font-size: 1.5rem; }
  .subtitle { font-size: 0.85rem; margin-bottom: 2rem; }

  .question-text { font-size: 1.1rem; margin-bottom: 1.5rem; }
  .option-btn { padding: 0.85rem; font-size: 0.85rem; gap: 0.75rem; border-radius: 10px; min-height: 48px; }
  .option-index { width: 24px; height: 24px; font-size: 0.7rem; }
  .option-label { font-size: 0.85rem; }

  .category-badge { font-size: 0.65rem; padding: 0.3rem 0.75rem; }
  .q-counter { font-size: 0.7rem; }
  .progress-container { height: 4px; }

  .explanation-box { padding: 1rem; font-size: 0.8rem; border-radius: 12px; }
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
  .quiz-card { padding: 1rem; border-radius: 12px; }
  .luxury-title { font-size: 1.3rem; }
  .subtitle { font-size: 0.8rem; margin-bottom: 1.5rem; }
  .question-text { font-size: 1rem; margin-bottom: 1.25rem; }
  .option-btn { padding: 0.7rem; font-size: 0.8rem; gap: 0.6rem; border-radius: 10px; min-height: 44px; }
  .option-index { width: 22px; height: 22px; font-size: 0.65rem; }
  .option-label { font-size: 0.8rem; }
  .category-badge { font-size: 0.6rem; padding: 0.25rem 0.6rem; }
  .q-counter { font-size: 0.65rem; }
  .explanation-box { padding: 0.85rem; font-size: 0.78rem; border-radius: 10px; }
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
