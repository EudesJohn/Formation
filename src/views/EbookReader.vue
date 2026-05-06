<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { 
  BookOpen, ChevronLeft, ChevronRight, Menu, X, 
  Download, ShoppingBag, CheckCircle, Lightbulb, 
  Star, Target, Award, PlayCircle, FileText, Lock
} from 'lucide-vue-next'
import gsap from 'gsap'

const isSidebarOpen = ref(true)
const currentChapter = ref(0)
const contentBody = ref(null)

const chapters = ref([
  {
    id: 0,
    title: "Bienvenue à l'Élite",
    module: "Introduction",
    content: `
      <div class="elite-header">
        <div class="welcome-cover">
          <img src="/images/cover_elite.png" alt="Elite Cover" class="reader-cover-img" />
        </div>
        <h1 class="luxury-title">Social Mastery <span class="gold-text">Elite</span></h1>
        <p class="subtitle">La Masterclass définitive pour dominer l'économie de l'attention en 2026.</p>
      </div>
      
      <div class="learning-objectives glass-card">
        <h3><Award :size="20"/> Ce que vous allez accomplir :</h3>
        <ul>
          <li>Bâtir une marque personnelle indestructible.</li>
          <li>Maîtriser les rouages psychologiques de la viralité.</li>
          <li>Générer vos premiers 5 000€ de revenus récurrents.</li>
        </ul>
      </div>

      <div class="content-block">
        <p>Vous n'avez pas acheté un simple livre. Vous avez investi dans un système. Ce portail interactif est conçu pour vous transformer. Ne lisez pas seulement : <strong>Agissez</strong>.</p>
      </div>
    `
  },
  {
    id: 1,
    title: "Introduction : Le Monde en 2026",
    module: "Introduction",
    content: `
      <div class="elite-header">
        <h1 class="luxury-title">Pourquoi les réseaux sociaux changent <span class="gold-text">tout en 2026</span></h1>
      </div>
      
      <div class="content-block">
        <p>Les réseaux sociaux ne sont plus un simple divertissement. Ils sont devenus une véritable révolution.</p>
        <p>Aujourd’hui, presque tout le monde possède un téléphone. Et presque tout le monde utilise Internet. Chaque jour, des millions de personnes ouvrent des applications. Elles regardent des vidéos. Elles lisent des publications. Elles découvrent de nouvelles choses.</p>

        <p>Avant, pour réussir, il fallait beaucoup d’argent. Il fallait avoir des relations. Il fallait avoir un diplôme.</p>
        <p><strong>Aujourd’hui, ce n’est plus obligatoire.</strong></p>

        <p>Avec un simple téléphone, tu peux créer ton propre chemin. Tu peux parler au monde entier. Tu peux montrer une idée. Tu peux vendre un produit.</p>
        <p>Les réseaux sociaux ont supprimé les barrières.</p>
      </div>

      <div class="elite-box">
        <h4>🌍 Le monde à ta portée</h4>
        <p>Tu n’as plus besoin d’être connu.<br>Tu n’as plus besoin d’être riche.<br>Tu n’as plus besoin d’être parfait.</p>
        <p>Tu peux commencer maintenant. C’est ça le changement.</p>
      </div>

      <div class="content-block">
        <p>Avant, une seule télévision contrôlait ce que les gens voyaient. Aujourd’hui, toi aussi tu peux être vu.</p>
        <p>Avant, seules les grandes entreprises pouvaient faire de la publicité. Aujourd’hui, toi aussi tu peux attirer des clients.</p>
        <p>Avant, il fallait des années pour construire une audience. Aujourd’hui, cela peut prendre quelques jours.</p>

        <p>Un simple contenu peut devenir viral. Une simple vidéo peut changer ta vie.</p>
        <p>Des inconnus deviennent célèbres. Des débutants deviennent experts. Des personnes sans argent deviennent entrepreneurs.</p>
        <p>Tout ça grâce aux réseaux sociaux.</p>

        <h2>Mais attention. Ce n’est pas magique.</h2>
        <p>Beaucoup de personnes regardent. Peu de personnes agissent.</p>
        <p>Ceux qui réussissent sont ceux qui passent à l'action. Les réseaux sociaux récompensent la constance.</p>
      </div>

      <div class="checklist">
        <div class="check-item"><input type="checkbox" checked disabled/> Si tu publies régulièrement, tu progresses.</div>
        <div class="check-item"><input type="checkbox" checked disabled/> Si tu testes, tu apprends.</div>
        <div class="check-item"><input type="checkbox" checked disabled/> Si tu continues, tu gagnes.</div>
      </div>

      <div class="content-block">
        <p>C’est un jeu de répétition. Plus tu joues, plus tu deviens bon.</p>
        <p>Tu n’as pas besoin d’être intelligent. Tu n’as pas besoin d’être créatif.</p>
        <p><strong>Tu dois juste être actif.</strong></p>

        <p>Regarde autour de toi. Des gens comme toi réussissent déjà. Ils ne sont pas différents. Ils ont juste commencé. Et ils ont continué.</p>
      </div>

      <div class="learning-objectives glass-card">
        <h3>L'Opportunité de 2026</h3>
        <p>Les réseaux sociaux sont une opportunité énorme. Une opportunité de :</p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Gagner de l’argent</li>
          <li>Construire une audience</li>
          <li>Créer un business</li>
          <li>Devenir libre</li>
        </ul>
        <p>Mais cette opportunité ne dure pas éternellement. Chaque année, la concurrence augmente. Ceux qui commencent tôt ont un avantage.</p>
      </div>

      <div class="tip-box gold">
        <strong>💡 Pourquoi 2026 est une année clé :</strong>
        <ul style="text-align: left; display: inline-block; margin: 0.5rem 0 0 0;">
          <li>Le contenu court explose.</li>
          <li>Les algorithmes favorisent les débutants.</li>
          <li>Les opportunités sont encore accessibles.</li>
        </ul>
        <p>Mais dans quelques années, ce sera plus difficile. <strong>C’est maintenant qu’il faut agir.</strong></p>
      </div>

      <div class="content-block">
        <h2>Le Système de l'Attention</h2>
        <p>Tu dois comprendre une chose très importante. Les réseaux sociaux ne sont pas une mode. C’est un système.</p>
        <p>Un système basé sur l’attention. L’attention est la nouvelle richesse.</p>
        <p>Celui qui capte l’attention gagne. Celui qui ne capte rien reste invisible.</p>

        <p>Ton objectif est simple : Attirer l’attention. La garder. Et la transformer.</p>
        <p>Transformer en abonnés. Transformer en clients. Transformer en argent.</p>

        <p>C’est une compétence. Et comme toute compétence, ça s’apprend.</p>

        <h2>Bienvenue dans ton nouveau départ 🚀</h2>
        <p>Bonne nouvelle : Tu peux apprendre. Même si tu pars de zéro. Même si tu n’as jamais publié. Même si tu ne comprends rien aujourd’hui.</p>

        <p>Ce guide est là pour toi. Il va te montrer : Quoi faire, Comment faire, Pourquoi ça marche.</p>

        <p>Tout sera expliqué simplement. Pas de mots compliqués. Pas de stratégie confuse. Juste des actions claires.</p>

        <p>Tu vas avancer étape par étape. Tu vas comprendre progressivement. Tu vas tester. Tu vas améliorer.</p>
        <p><strong>Et surtout, tu vas agir.</strong> Parce que lire ne suffit pas. Tu dois appliquer.</p>
      </div>

      <div class="glass-card">
        <h3>Ta décision commence aujourd'hui</h3>
        <p>Chaque page de ce guide est une opportunité. Une opportunité d’apprendre. Une opportunité de progresser.</p>
        <p>Mais seulement si tu passes à l’action.</p>
        <p>Alors prends une décision maintenant. Décide de commencer. Décide de ne pas abandonner. Décide de te donner une chance.</p>
        <p>Parce que personne ne va le faire à ta place. Ton futur dépend de tes actions. Pas de tes idées. Pas de tes excuses. Mais de ce que tu fais aujourd’hui.</p>
        <p>Les réseaux sociaux peuvent changer ta vie. Mais seulement si tu les utilises correctement.</p>
        <p><strong>Et c’est exactement ce que tu vas apprendre ici.</strong></p>
      </div>
`
  },
  {
    id: 2,
    title: "Chapitre 1 : Comprendre les réseaux sociaux",
    module: "Fondations",
    content: `
      <div class="elite-header">
        <h1 class="luxury-title">Chapitre 1 <span class="gold-text">Comprendre les réseaux sociaux</span></h1>
      </div>

      <div class="content-block">
        <h2>1.1 — C’est quoi un réseau social ?</h2>
        <p>Un réseau social est une application. Une application que tu installes sur ton téléphone.</p>
        <p>Cette application permet aux gens de :</p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Regarder du contenu</li>
          <li>Partager du contenu</li>
          <li>Communiquer</li>
          <li>Découvrir des choses</li>
        </ul>
        <p>Exemples : TikTok, Instagram, Facebook, YouTube.</p>
        <p>Mais derrière ces applications, il y a une réalité très importante :</p>
        <div class="elite-box" style="margin-top: 2rem;">
          <p>👉 Ce ne sont pas juste des applications.<br>👉 Ce sont des <strong>machines à attention</strong>.</p>
        </div>
      </div>

      <div class="content-block">
        <h2>1.2 — Comprendre le mot le plus important : L’ATTENTION</h2>
        <p>L’attention est la chose la plus précieuse aujourd’hui.</p>
        <p>Quand quelqu’un regarde une vidéo…</p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>👉 Il donne son temps.</li>
          <li>👉 Il donne son cerveau.</li>
          <li>👉 Il donne son énergie.</li>
        </ul>
        <p>Et ça, ça a de la valeur.</p>
        
        <h3>Exemple simple :</h3>
        <p>Imagine que tu es dans un marché. Tu cries fort. Les gens te regardent.</p>
        <p>👉 Tu as leur attention.</p>
        <p>Si tu parles bien… 👉 Tu peux vendre.</p>
        <p>Sur les réseaux sociaux, c’est exactement pareil.</p>
      </div>

      <div class="glass-card">
        <h2>1.3 — Pourquoi les réseaux sociaux sont puissants ?</h2>
        <p><strong>Avant Internet :</strong></p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Tu ne pouvais pas parler à beaucoup de gens</li>
          <li>Tu avais besoin d’argent</li>
          <li>Tu avais besoin de relations</li>
        </ul>
        <p><strong>Aujourd’hui :</strong></p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>👉 Tu peux toucher 1000 personnes avec une seule vidéo</li>
          <li>👉 Tu peux toucher 1 million avec une vidéo virale</li>
        </ul>
        <p>Sans argent. Sans diplôme. Sans expérience.</p>
      </div>

      <div class="content-block">
        <h2>1.4 — Le nouveau monde (2026)</h2>
        <p>Nous sommes dans une nouvelle époque. Une époque où :</p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Le téléphone = outil de travail</li>
          <li>Internet = marché mondial</li>
          <li>Contenu = richesse</li>
        </ul>
        <div class="tip-box gold">
          <p>👉 <strong>Celui qui crée du contenu gagne.</strong></p>
        </div>
      </div>

      <div class="content-block">
        <h2>1.5 — Comment les gens utilisent les réseaux ?</h2>
        <p>Les gens ouvrent TikTok pour : Se divertir, Apprendre, S’évader, Tuer le temps.</p>
        <p>👉 Ils ne viennent pas pour toi.<br>👉 Ils viennent pour eux.</p>
        <p>Donc ton travail est simple : <strong>Leur donner ce qu’ils veulent.</strong></p>
      </div>

      <div class="content-block">
        <h2>1.6 — Les 4 raisons pour lesquelles les gens regardent du contenu</h2>
        <h3>1. Le plaisir</h3>
        <p>Ils veulent rire, sourire, se détendre</p>
        <h3>2. L’apprentissage</h3>
        <p>Ils veulent apprendre quelque chose</p>
        <h3>3. L’émotion</h3>
        <p>Ils veulent ressentir quelque chose</p>
        <h3>4. L’intérêt</h3>
        <p>Ils veulent gagner quelque chose</p>
        <p>👉 <strong>Si ton contenu touche un de ces points → il marche.</strong></p>
      </div>

      <div class="content-block">
        <h2>1.7 — Pourquoi certains deviennent viraux ?</h2>
        <p>Ce n’est pas la chance. C’est une combinaison de facteurs : Bonne accroche, Sujet intéressant, Vidéo courte, Rythme rapide.</p>
        <p>👉 Mais surtout : <strong>Ils comprennent les gens.</strong></p>

        <h2>1.8 — La plus grosse erreur des débutants</h2>
        <p>Penser : 👉 “Je vais faire ce que j’aime”</p>
        <p>❌ Mauvaise approche</p>
        <p>👉 <strong>Tu dois faire ce que les gens aiment.</strong></p>

        <h2>1.9 — La vérité simple</h2>
        <p>Les réseaux sociaux sont simples. Très simples.</p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>👉 Tu postes</li>
          <li>👉 Les gens regardent</li>
          <li>👉 Tu analyses</li>
          <li>👉 Tu recommences</li>
        </ul>

        <h2>1.10 — Le secret que personne ne dit</h2>
        <p>Tu n’as pas besoin d’être original.</p>
        <p>👉 <strong>Tu dois copier ce qui marche.</strong></p>
        <p>Regarde les vidéos qui font des millions de vues. Inspire-toi. Reproduis. Améliore.</p>

        <h2>1.11 — Le pouvoir de la répétition</h2>
        <p>Tu ne vas pas réussir avec une vidéo. Ni avec 5. Ni avec 10.</p>
        <p>👉 Mais avec 30, 50, 100 vidéos… Tu vas comprendre.</p>
      </div>

      <div class="elite-box">
        <h2>1.12 — Le cerveau humain et les réseaux</h2>
        <p>Le cerveau aime : La nouveauté, La surprise, La simplicité, La rapidité.</p>
        <p>👉 Donc ton contenu doit être : <strong>Court, Clair, Direct.</strong></p>
      </div>

      <div class="content-block">
        <h2>1.13 — Le rôle de l’algorithme</h2>
        <p>L’algorithme est un robot. Il décide : 👉 Qui voit ta vidéo</p>
        <p>Il regarde : Temps de visionnage, Likes, Commentaires, Partages.</p>
        <p>👉 Si c’est bon → il montre à plus de gens.</p>

        <h2>1.14 — Ce que tu dois comprendre absolument</h2>
        <p>Tu ne contrôles pas : ❌ L’algorithme, ❌ Les gens</p>
        <p>Mais tu contrôles : ✔️ Ton contenu, ✔️ Ta régularité, ✔️ Ton effort</p>
      </div>

      <div class="glass-card">
        <h2>1.15 — Pourquoi 90% des gens échouent</h2>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Parce qu’ils abandonnent trop vite</li>
          <li>Parce qu’ils réfléchissent trop</li>
          <li>Parce qu’ils ne postent pas</li>
        </ul>
        
        <h2>1.16 — Pourquoi toi tu peux réussir</h2>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>👉 Tu lis ce guide</li>
          <li>👉 Tu veux apprendre</li>
          <li>👉 Tu veux agir</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>1.17 — Les 3 piliers du succès</h2>
        <h3>1. Régularité</h3>
        <p>Poster souvent</p>
        <h3>2. Simplicité</h3>
        <p>Ne pas compliquer</p>
        <h3>3. Observation</h3>
        <p>Analyser ce qui marche</p>

        <h2>1.18 — La vérité finale</h2>
        <p>Les réseaux sociaux ne sont pas difficiles.</p>
        <p>👉 <strong>Ils demandent juste de l’action.</strong></p>
      </div>

      <div class="tip-box gold">
        <h2>1.19 — Exercice simple (TRÈS IMPORTANT)</h2>
        <p>Aujourd’hui :</p>
        <ol style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Ouvre TikTok</li>
          <li>Regarde 10 vidéos</li>
          <li>Note ce que tu comprends</li>
        </ol>
        <p>👉 C’est comme ça que tu apprends.</p>
      </div>

      <div class="elite-box">
        <h2>1.20 — Conclusion du chapitre</h2>
        <p>Tu sais maintenant :</p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>✔️ Ce qu’est un réseau social</li>
          <li>✔️ Pourquoi c’est puissant</li>
          <li>✔️ Comment les gens pensent</li>
          <li>✔️ Ce que tu dois faire</li>
        </ul>
        <br>
        <p>👉 Dans le prochain chapitre, tu vas apprendre :</p>
        <p><strong>Comment choisir la bonne plateforme et commencer intelligemment.</strong></p>
      </div>
`
  },
  {
    id: 3,
    title: "Chapitre 2 : Stratégie & Plateformes",
    module: "Fondations",
    content: `
      <div class="elite-header">
        <h1 class="luxury-title">Chapitre 2 <span class="gold-text">Stratégie & Plateformes</span></h1>
        <p class="subtitle">Choisir son terrain de jeu pour dominer en 2026.</p>
      </div>

      <div class="content-block">
        <h2>2.1 — Choisir son terrain de jeu</h2>
        <p>Tous les réseaux ne se valent pas. En 2026, essayer d'être partout, c'est être nulle part.</p>
        <div class="elite-box">
          <p>👉 <strong>Règle d'Or :</strong> Choisis une plateforme principale, maîtrise-la, puis développe le reste.</p>
        </div>
      </div>

      <div class="glass-card">
        <h2>2.2 — TikTok : La Machine à Viralité</h2>
        <p>TikTok est la plateforme la plus démocratique. Un compte avec 0 abonné peut faire 1 million de vues demain.</p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>✅ <strong>Avantage :</strong> Portée organique massive.</li>
          <li>❌ <strong>Inconvénient :</strong> Audience volatile, difficile à fidéliser.</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>2.3 — Instagram : La Vitrine Esthétique</h2>
        <p>Instagram est devenu une plateforme de "Lifestyle" et de "Confiance". C'est là que tu convertis tes abonnés en clients.</p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>✅ <strong>Avantage :</strong> Stories pour créer du lien, DM pour vendre.</li>
          <li>❌ <strong>Inconvénient :</strong> Difficile de percer en partant de zéro sans Reels.</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>2.4 — YouTube : Le Coffre-fort de Confiance</h2>
        <p>YouTube est le deuxième moteur de recherche mondial. C'est du contenu "Long Terme".</p>
        <div class="tip-box gold">
          <p>💡 Une vidéo YouTube travaille pour toi pendant des années, contrairement à un TikTok qui meurt en 48h.</p>
        </div>
      </div>

      <div class="content-block">
        <h2>2.5 — Créer un Profil "Elite"</h2>
        <p>Ta biographie est ta page de vente. Tu as 3 secondes pour convaincre quelqu'un de s'abonner.</p>
        <div class="checklist">
          <div class="check-item"><input type="checkbox" checked disabled/> <strong>Qui es-tu ?</strong> (Clarté)</div>
          <div class="check-item"><input type="checkbox" checked disabled/> <strong>Que fais-tu pour eux ?</strong> (Valeur)</div>
          <div class="check-item"><input type="checkbox" checked disabled/> <strong>Quelle est la prochaine étape ?</strong> (Appel à l'action)</div>
        </div>
      </div>

      <div class="elite-box">
        <h2>2.6 — L'Art de la Niche</h2>
        <p>Ne sois pas "Coach Fitness". Sois "Le coach qui aide les cadres de 40 ans à perdre 5kg sans cardio".</p>
        <p>👉 <strong>Plus c'est spécifique, plus c'est rentable.</strong></p>
      </div>

      <div class="content-block">
        <h2>2.7 — Analyser sans Copier</h2>
        <p>Regarde les 5 plus gros créateurs de ta niche. Note :</p>
        <ul>
          <li>Leurs 3 vidéos les plus virales.</li>
          <li>Les commentaires les plus fréquents (leurs problèmes).</li>
          <li>Leur structure de montage.</li>
        </ul>
      </div>

      <div class="glass-card">
        <h2>2.8 — Premier Post : Briser la Glace</h2>
        <p>Ta première vidéo ne sera pas parfaite. Et c'est normal.</p>
        <p>👉 <strong>Fait est mieux que parfait.</strong></p>
        <p>Poste ta première vidéo aujourd'hui. Peu importe la qualité. Brise la barrière psychologique.</p>
      </div>

      <div class="tip-box gold">
        <h2>2.9 — Exercice : Ton Plan 7 Jours</h2>
        <ol style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Jour 1 : Choisir sa plateforme.</li>
          <li>Jour 2 : Optimiser sa Bio et sa Photo.</li>
          <li>Jour 3 : Lister 10 idées de vidéos basées sur la concurrence.</li>
          <li>Jour 4 : Écrire 3 scripts.</li>
          <li>Jour 5 : Filmer.</li>
          <li>Jour 6 : Monter.</li>
          <li>Jour 7 : POSTER.</li>
        </ol>
      </div>

      <div class="elite-box">
        <h2>Conclusion du chapitre 2</h2>
        <p>Tu as maintenant ton terrain de jeu et ton plan de bataille.</p>
        <br>
        <p>👉 Dans le prochain chapitre, tu vas apprendre :</p>
        <p><strong>L'Architecture de Marque : Bâtir une identité indestructible.</strong></p>
      </div>
`
  },
  {
    id: 4,
    title: "Chapitre 3 : Créer un profil qui attire et qui convertit",
    module: "Fondations",
    content: `
      <div class="elite-header">
        <h1 class="luxury-title">Chapitre 3 <span class="gold-text">Créer un profil qui attire et qui convertit</span></h1>
        <p class="subtitle">Optimise ta vitrine pour transformer chaque visiteur en abonné fidèle.</p>
      </div>

      <div class="content-block">
        <h2>3.1 — Pourquoi ton profil est CRUCIAL</h2>
        <p>Ton profil est la première impression. Quand quelqu’un voit ta vidéo… 👉 Il clique sur ton profil.</p>
        <p>Et en quelques secondes, il décide : 👉 <strong>“Je m’abonne ou je pars”</strong></p>
        
        <div class="elite-box">
          <h4>⚠️ Vérité importante :</h4>
          <p>Tu peux avoir une vidéo virale… Mais si ton profil est mauvais, tu perds tous tes abonnés potentiels.</p>
        </div>
      </div>

      <div class="content-block">
        <h2>3.2 — Le rôle réel de ton profil</h2>
        <p>Ton profil sert à Attirer, Convaincre et surtout Transformer un visiteur en abonné.</p>
        
        <h2>3.3 — Les 4 éléments clés d’un profil</h2>
        <ol>
          <li><strong>Nom :</strong> Ta marque.</li>
          <li><strong>Photo :</strong> Ton visage ou ton logo.</li>
          <li><strong>Bio :</strong> Ta promesse.</li>
          <li><strong>Contenu :</strong> Ta preuve sociale.</li>
        </ol>
        <p>👉 Si un seul est mauvais → tu perds des abonnés.</p>
      </div>

      <div class="glass-card">
        <h2>3.4 — Le test des 3 secondes</h2>
        <p>Quand quelqu’un arrive sur ton profil, il doit comprendre en 3 secondes :</p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Qui tu es ?</li>
          <li>Ce que tu fais ?</li>
          <li>Ce qu’il gagne ?</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>3.5 — Le NOM (très important)</h2>
        <p>Ton nom doit être Simple, Clair et Mémorisable.</p>
        <div class="tip-box gold">
          <p>✔️ <strong>Bons exemples :</strong> ArgentFacile, BusinessMobile, MotivationSimple.</p>
          <p>❌ <strong>Mauvais exemples :</strong> john_12345, bossking_officiel_x (trop complexe).</p>
        </div>
        <p>👉 Ton nom doit parler de ton contenu. Quand quelqu’un le lit, il doit comprendre ton thème.</p>
      </div>

      <div class="content-block">
        <h2>3.8 — La PHOTO DE PROFIL</h2>
        <p>C’est ce que les gens voient en premier. Tu as 2 choix :</p>
        <h3>1. Ton visage</h3>
        <p>Plus humain, crée plus de confiance. Utilise une bonne lumière et un fond simple.</p>
        <h3>2. Un logo</h3>
        <p>Plus professionnel, plus anonyme. Utilise des couleurs fortes et un design simple.</p>
      </div>

      <div class="elite-box">
        <h2>3.11 — La BIO (le point clé)</h2>
        <p>Ta bio est la partie la plus importante. Elle doit être courte et percutante.</p>
        <h3>La structure parfaite : Résultat + Simplicité</h3>
        <p>👉 <strong>“Je t’aide à [résultat] avec [méthode simple]”</strong></p>
        <p>Exemple : <em>“Je t’aide à gagner 1000€/mois avec TikTok 🚀”</em></p>
      </div>

      <div class="content-block">
        <h2>3.14 — Ajouter un appel à l’action</h2>
        <p>Ta bio doit dire : <strong>“Fais ça”</strong>.</p>
        <p>Exemple : <em>“Abonne-toi pour apprendre 🚀”</em> ou <em>“Clique sur le lien ci-dessous 👇”</em></p>
      </div>

      <div class="content-block">
        <h2>3.17 — Cohérence du contenu</h2>
        <p>Ton profil doit être cohérent. Toutes tes vidéos doivent parler du même sujet.</p>
        <div class="checklist">
          <div class="check-item"><input type="checkbox" checked disabled/> Même thème partout.</div>
          <div class="check-item"><input type="checkbox" checked disabled/> Même style de texte.</div>
          <div class="check-item"><input type="checkbox" checked disabled/> Même palette de couleurs.</div>
        </div>
        <p>👉 L'objectif est l'effet <strong>“Compte Sérieux”</strong>. Quand quelqu’un arrive, il doit penser : “Ce compte est propre”.</p>
      </div>

      <div class="glass-card">
        <h2>3.36 — Résumé & Action Immédiate</h2>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>✔️ Nom simple et thématique.</li>
          <li>✔️ Photo claire et lisible.</li>
          <li>✔️ Bio avec promesse forte + Appel à l'action.</li>
          <li>✔️ Contenu visuellement cohérent.</li>
        </ul>
        <h3>Exercice pratique :</h3>
        <p>Ouvre TikTok maintenant et corrige ton profil selon ces règles. C'est ta base pour tout le reste.</p>
      </div>

      <div class="tip-box gold">
        <h2>Conclusion du chapitre</h2>
        <p>Ton profil est ton arme. Utilise-le bien pour transformer tes vues en une véritable audience.</p>
        <br>
        <p>👉 Dans le prochain chapitre, tu vas apprendre :</p>
        <p><strong>Créer du contenu qui devient viral.</strong></p>
      </div>
`
  },
  {
    id: 5,
    title: "Chapitre 4 : L'Algorithme & La Viralité",
    module: "Fondations",
    content: `
      <div class="elite-header">
        <h1 class="luxury-title">Chapitre 4 <span class="gold-text">L'Algorithme & La Viralité</span></h1>
        <p class="subtitle">Comprendre le robot pour faire exploser tes vues.</p>
      </div>

      <div class="content-block">
        <h2>4.1 — C’est quoi l’algorithme ?</h2>
        <p>L’algorithme est un robot, un programme informatique. Son travail est simple : montrer le bon contenu aux bonnes personnes.</p>
        <div class="elite-box">
          <h4>👉 Son objectif réel :</h4>
          <p>L’algorithme veut garder les gens sur l’application le plus longtemps possible. Si ton contenu aide l'application à retenir ses utilisateurs, l'algorithme va te propulser.</p>
        </div>
      </div>

      <div class="content-block">
        <h2>4.4 — Le fonctionnement du test</h2>
        <p>Quand tu postes une vidéo, elle suit un parcours précis :</p>
        <ol>
          <li><strong>Test initial :</strong> Elle est montrée à un petit groupe.</li>
          <li><strong>Observation :</strong> L'algorithme analyse les réactions.</li>
          <li><strong>Expansion :</strong> Si les signaux sont bons, elle est montrée à un groupe plus large, et ainsi de suite.</li>
        </ol>
      </div>

      <div class="glass-card">
        <h2>4.8 — Les 4 piliers de la viralité</h2>
        <ol>
          <li><strong>Temps de visionnage (Watch Time) :</strong> Le critère n°1.</li>
          <li><strong>Likes :</strong> Validation sociale.</li>
          <li><strong>Commentaires :</strong> Engagement actif.</li>
          <li><strong>Partages :</strong> Le signal de valeur suprême.</li>
        </ol>
        <p>👉 Si quelqu’un regarde jusqu’à la fin, c’est que ton contenu est <strong>excellent</strong>.</p>
      </div>

      <div class="content-block">
        <h2>4.12 — Le Secret n°1 : Le Hook (L'accroche)</h2>
        <p>Tout se joue dans les 3 premières secondes. Si tu rates le début, l'utilisateur scroll et ta vidéo meurt.</p>
        <div class="tip-box gold">
          <h4>Exemples de Hooks puissants :</h4>
          <ul>
            <li>👉 “Tu fais cette erreur sans le savoir...”</li>
            <li>👉 “Personne ne parle de ça, mais...”</li>
            <li>👉 “Regarde ça avant qu’il soit trop tard !”</li>
          </ul>
        </div>
      </div>

      <div class="content-block">
        <h2>4.18 — Structure d’une vidéo virale</h2>
        <div class="checklist">
          <div class="check-item"><input type="checkbox" checked disabled/> <strong>HOOK :</strong> Capte l'attention immédiatement.</div>
          <div class="check-item"><input type="checkbox" checked disabled/> <strong>CONTENU :</strong> Simple, clair et rapide.</div>
          <div class="check-item"><input type="checkbox" checked disabled/> <strong>CTA :</strong> Dis-leur quoi faire (Abonne-toi, Like).</div>
        </div>
      </div>

      <div class="elite-box">
        <h2>4.25 — Les formats qui cartonnent</h2>
        <p>Le cerveau humain aime la nouveauté et la simplicité. Privilégie ces formats :</p>
        <ul>
          <li>Astuces & Secrets</li>
          <li>Erreurs courantes à éviter</li>
          <li>Listes (Top 3, Top 5)</li>
          <li>Avant / Après</li>
        </ul>
        <p>👉 <strong>Règle d'or :</strong> Plus c’est simple, plus ça marche. Ne fais pas réfléchir ton audience.</p>
      </div>

      <div class="content-block">
        <h2>4.32 — Maximiser l'attention</h2>
        <p>Utilise du texte à l'écran pour renforcer ton message et maintiens un rythme rapide (cuts fréquents) pour éviter l'ennui.</p>
        <p>👉 <strong>Format idéal :</strong> 7 à 20 secondes pour un maximum de re-visionnages.</p>
      </div>

      <div class="glass-card">
        <h2>4.51 — Exercice Pratique & Action</h2>
        <p>Ne reste pas dans la théorie. Fais ceci aujourd'hui :</p>
        <ol style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Trouve 5 vidéos virales dans ta thématique.</li>
          <li>Analyse leur Hook et leur structure.</li>
          <li>Reproduis-les avec ta propre touche (Améliore, ne copie pas bêtement).</li>
        </ol>
        <p>👉 <strong>Poste une vidéo dès aujourd'hui.</strong> L'algorithme récompense le volume et la régularité.</p>
      </div>

      <div class="tip-box gold">
        <h2>Conclusion du chapitre</h2>
        <p>L’algorithme n’est pas ton ennemi, c’est ton partenaire. Donne-lui ce qu’il veut (de l'attention) et il te donnera ce que tu veux (de la visibilité).</p>
        <br>
        <p>👉 Dans le prochain chapitre, tu vas apprendre :</p>
        <p><strong>Créer du contenu viral sans budget.</strong></p>
      </div>
`
  },
  {
    id: 6,
    title: "Chapitre 5 : Créer du contenu viral sans budget",
    module: "Contenu",
    content: `
      <div class="elite-header">
        <h1 class="luxury-title">Chapitre 5 <span class="gold-text">Contenu Viral sans Budget</span></h1>
        <p class="subtitle">La créativité bat le budget. Toujours.</p>
      </div>

      <div class="content-block">
        <h2>5.1 — La plus grande erreur des débutants</h2>
        <p>Beaucoup pensent qu'il faut un studio, un iPhone 15 Pro ou du matériel coûteux. ❌ <strong>C'est faux.</strong></p>
        <div class="elite-box">
          <h4>👉 La vérité :</h4>
          <p>Tu peux devenir viral avec un téléphone simple, une idée forte et une exécution claire. Ce qui compte vraiment, ce n’est pas la qualité technique, c’est <strong>l’attention</strong>.</p>
        </div>
      </div>

      <div class="glass-card">
        <h2>5.7 — Le Recyclage Intelligent</h2>
        <p>Tu n’as pas besoin de tout créer de zéro. Tu peux recycler ce qui marche déjà.</p>
        <p>👉 Trouve une vidéo virale, change le texte, apporte ta propre valeur et reposte. <strong>N'oublie pas : Améliore, ne copie pas bêtement.</strong></p>
      </div>

      <div class="content-block">
        <h2>5.12 — Les formats qui explosent</h2>
        <ul>
          <li><strong>Vidéos Texte :</strong> Simple, percutant, facile à consommer.</li>
          <li><strong>Slides :</strong> Idéal pour l'apprentissage étape par étape.</li>
          <li><strong>Avant / Après :</strong> La preuve sociale ultime.</li>
          <li><strong>Listes :</strong> “3 erreurs que tu fais sans le savoir”.</li>
        </ul>
      </div>

      <div class="elite-box">
        <h2>5.16 — Structure simple d’une vidéo</h2>
        <div class="checklist">
          <div class="check-item"><input type="checkbox" checked disabled/> <strong>HOOK (80% du succès) :</strong> “Voici la vérité”, “Personne ne parle de ça”.</div>
          <div class="check-item"><input type="checkbox" checked disabled/> <strong>MESSAGE :</strong> Court, direct et clair.</div>
          <div class="check-item"><input type="checkbox" checked disabled/> <strong>ACTION (CTA) :</strong> “Abonne-toi”, “Like”, “Commente”.</div>
        </div>
      </div>

      <div class="content-block">
        <h2>5.22 — Tes outils gratuits indispensables</h2>
        <div class="resource-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
          <div class="glass-card" style="margin: 0; padding: 1.5rem;">
            <h3>🎨 Canva</h3>
            <p>Pour tes visuels et tes templates.</p>
          </div>
          <div class="glass-card" style="margin: 0; padding: 1.5rem;">
            <h3>✂️ CapCut</h3>
            <p>Pour un montage rapide et pro.</p>
          </div>
        </div>
      </div>

      <div class="content-block">
        <h2>5.27 — Le Rythme Elite</h2>
        <p>La constance est la clé. Poste 1 à 3 vidéos par jour pour maximiser tes chances de viralité.</p>
        <div class="tip-box gold">
          <p>💡 <strong>Le volume bat la perfection.</strong> Tu apprends en postant. Tes premières vidéos ne seront pas parfaites, et c'est normal. Continue.</p>
        </div>
      </div>

      <div class="glass-card">
        <h2>5.51 — Exercice Pratique</h2>
        <p>Fais ça maintenant :</p>
        <ol style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Trouve 3 vidéos virales dans ta niche (Argent, Motivation, Business).</li>
          <li>Reproduis-les avec tes propres mots.</li>
          <li><strong>POSTE MAINTENANT.</strong></li>
        </ol>
      </div>

      <div class="tip-box gold">
        <h2>Conclusion du chapitre</h2>
        <p>Le contenu viral est simple, mais il demande de l'action. Arrête de réfléchir, commence à poster.</p>
        <br>
        <p>👉 Dans le prochain chapitre, tu vas apprendre :</p>
        <p><strong>Construire une communauté engagée.</strong></p>
      </div>
`
  },
  {
    id: 7,
    title: "Chapitre 6 : Construire une communauté engagée",
    module: "Audience",
    content: `
      <div class="elite-header">
        <h1 class="luxury-title">Chapitre 6 <span class="gold-text">Construire une Communauté</span></h1>
        <p class="subtitle">Transforme tes abonnés en ambassadeurs fidèles.</p>
      </div>

      <div class="content-block">
        <h2>6.1 — La vérité que 90% des gens ne comprennent pas</h2>
        <p>Avoir des abonnés ne sert à rien si personne ne réagit, si personne ne t’écoute, et si personne ne te fait confiance.</p>
        <div class="elite-box">
          <h4>👉 Audience vs Communauté :</h4>
          <p><strong>Audience =</strong> Des chiffres sur un écran.<br><strong>Communauté =</strong> Des humains engagés qui croient en toi.</p>
        </div>
      </div>

      <div class="content-block">
        <h2>6.7 — Comment créer la confiance ?</h2>
        <p>La confiance se construit, elle ne s’achète pas. Elle repose sur trois piliers :</p>
        <ul>
          <li><strong>La Régularité :</strong> Si tu disparais, on t'oublie.</li>
          <li><strong>La Clarté :</strong> Ton message doit être simple et direct.</li>
          <li><strong>L'Utilité :</strong> Apporte de la valeur avant de demander quoi que ce soit.</li>
        </ul>
      </div>

      <div class="glass-card">
        <h2>6.16 — Booster l’engagement (Action !)</h2>
        <p>L’engagement (likes, commentaires, partages) est le carburant de l’algorithme.</p>
        <div class="tip-box gold">
          <h4>Technique PRO : Provoque l'interaction</h4>
          <p>Pose des questions : “Tu es d’accord ?”, “Tu préfères être riche ou libre ?”. Les gens adorent donner leur avis.</p>
        </div>
        <p>👉 <strong>Important :</strong> Réponds toujours aux commentaires. Tu montres que tu es humain et actif.</p>
      </div>

      <div class="content-block">
        <h2>6.30 — Storytelling & Proximité</h2>
        <p>Ne parle pas comme une machine. Raconte ton parcours, tes échecs (“Au début, je ne savais rien...”) et tes victoires.</p>
        <p>👉 <strong>L’authenticité gagne toujours.</strong> Les gens s'identifient à ton humanité, pas à ta perfection.</p>
      </div>

      <div class="elite-box">
        <h2>6.38 — La Règle d'Or</h2>
        <p><strong>Donne avant de demander.</strong></p>
        <p>Offre des astuces, des conseils et de l'inspiration gratuitement. C'est ainsi que tu crées un lien indestructible qui mènera plus tard à la vente.</p>
      </div>

      <div class="content-block">
        <h2>6.46 — La puissance des Lives</h2>
        <p>Les directs sont l'outil de connexion le plus puissant en 2026. Ils permettent une interaction instantanée et créent une habitude chez tes abonnés les plus fidèles.</p>
      </div>

      <div class="glass-card">
        <h2>6.61 — Exercice Pratique</h2>
        <p>Passe à l'action dès maintenant :</p>
        <ol style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>Pose une question ouverte dans ta prochaine vidéo ou story.</li>
          <li>Réponds à TOUS les commentaires des dernières 24h.</li>
          <li>Analyse quel sujet a suscité le plus de débats.</li>
        </ol>
      </div>

      <div class="tip-box gold">
        <h2>Conclusion du chapitre</h2>
        <p>Une communauté se nourrit et se respecte. Sois humain, sois présent, et tes abonnés feront ton succès.</p>
        <br>
        <p>👉 Dans le prochain chapitre, tu vas apprendre :</p>
        <p><strong>Monétiser ses réseaux (Gagner de l'argent).</strong></p>
      </div>
`
  },
  {
    id: 8,
    title: "Chapitre 7 : Monétiser ses réseaux",
    module: "Business",
    content: `
      <div class="elite-header">
        <h1 class="luxury-title">Chapitre 7 <span class="gold-text">Monétiser ses Réseaux</span></h1>
        <p class="subtitle">Transformer l'attention en revenus concrets.</p>
      </div>

      <div class="content-block">
        <h2>7.1 — La vérité que personne ne dit</h2>
        <p>Avoir des abonnés ne veut pas dire gagner de l’argent. Tu peux avoir 10 000 abonnés et 0 FCFA si tu ne sais pas transformer cette attention.</p>
        <div class="elite-box">
          <h4>👉 Le système simple :</h4>
          <p><strong>1. Attirer</strong> (Contenu) → <strong>2. Engager</strong> (Relation) → <strong>3. Vendre</strong> (Offre).</p>
          <p>Sans vente, il n'y a pas de business. N'aie pas peur de proposer tes solutions.</p>
        </div>
      </div>

      <div class="content-block">
        <h2>7.11 — Les 5 méthodes de monétisation Élite</h2>
        <ol>
          <li><strong>L’Affiliation :</strong> Recommande des produits et gagne une commission. Simple pour débuter.</li>
          <li><strong>Produits Digitaux :</strong> eBooks, formations, packs. 100% de profit pour toi.</li>
          <li><strong>Services & Coaching :</strong> Vends ton expertise. Revenus très élevés.</li>
          <li><strong>Sponsoring :</strong> Les marques te paient pour ta visibilité.</li>
          <li><strong>Revente (PVA/PLR) :</strong> Acheter des droits et revendre. Rapide et efficace.</li>
        </ol>
      </div>

      <div class="glass-card">
        <h2>7.36 — Où et comment vendre ?</h2>
        <p>Utilise des canaux directs comme <strong>WhatsApp</strong> ou <strong>Telegram</strong>. Ils offrent une conversion bien plus élevée que n'importe quel site web complexe.</p>
        <div class="tip-box gold">
          <h4>Le Tunnel de Vente Express :</h4>
          <p>Vidéo virale → Appel à l'action (“Écris-moi ‘GO’ en DM”) → Vente directe sur WhatsApp.</p>
        </div>
        <p>👉 <strong>Utilise l'urgence :</strong> "Offre limitée aux 10 premiers" pour pousser à l'action immédiate.</p>
      </div>

      <div class="elite-box">
        <h2>7.55 — Résumé du Succès</h2>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>✔️ Attire l'attention avec du contenu simple.</li>
          <li>✔️ Engage ton audience avec de la valeur gratuite.</li>
          <li>✔️ Vends une solution accessible (ex: 5000 FCFA) pour créer du volume.</li>
        </ul>
        <p><strong>Tu es là pour bâtir un empire, pas juste pour poster des vidéos.</strong></p>
      </div>

      <div class="glass-card">
        <h2>🎯 Conclusion Finale</h2>
        <p>Tu as maintenant toutes les clés :</p>
        <ul>
          <li>Comprendre les réseaux.</li>
          <li>Créer un profil qui convertit.</li>
          <li>Maîtriser la viralité et l'algorithme.</li>
          <li>Bâtir une communauté fidèle.</li>
          <li>Monétiser ton influence.</li>
        </ul>
        <p>👉 <strong>Commence aujourd'hui.</strong> Tu n’as pas besoin d’être parfait, tu dois juste AGIR.</p>
      </div>

      <div class="bonus-box" style="text-align: center; margin-top: 4rem;">
        <h2 class="gold-text">FIN DU GUIDE</h2>
        <p>Mais ce n'est que le début de ton aventure.</p>
        <p>Passe maintenant aux <strong>Modules Bonus</strong> et au <strong>Pack de Ressources</strong> pour accélérer tes résultats.</p>
      </div>
`
  },
  {
    id: 9,
    title: "Conclusion : Ton nouveau départ",
    module: "Conclusion",
    content: `
      <div class="elite-header">
        <h1 class="luxury-title">Conclusion <span class="gold-text">Ton nouveau départ</span></h1>
        <p class="subtitle">Le moment de vérité. L'action bat la théorie.</p>
      </div>

      <div class="content-block">
        <p>Tu es arrivé jusqu’ici. Et ça, ce n’est pas un hasard. Beaucoup commencent, mais peu terminent. Toi, tu as continué. Tu as lu, tu as appris, tu as compris.</p>
        <p>Maintenant, une seule chose compte : <strong>Passer à l’action.</strong></p>
        <div class="elite-box">
          <p>👉 Lire ne change rien. Comprendre ne change rien. <strong>Agir change tout.</strong></p>
        </div>
      </div>

      <div class="glass-card">
        <h2>Un récapitulatif de ta puissance</h2>
        <p>Tu as maintenant les bases. Tu sais :</p>
        <ul style="text-align: left; display: inline-block; margin: 1rem 0;">
          <li>✔️ Comment fonctionnent les réseaux.</li>
          <li>✔️ Comment créer un profil irrésistible.</li>
          <li>✔️ Comment poster et devenir visible.</li>
          <li>✔️ Comment construire une audience fidèle.</li>
          <li>✔️ Comment gagner de l’argent concrètement.</li>
        </ul>
        <p>Tout est là. Mais rien ne va se faire tout seul. Tu dois décider aujourd'hui. Pas demain, pas plus tard. <strong>Maintenant.</strong></p>
      </div>

      <div class="content-block">
        <h2>La peur est normale, l'action est nécessaire</h2>
        <p>Décide de commencer, même si tu as peur, même si tu doutes, même si tu ne te sens pas prêt. Personne n’est prêt au début.</p>
        <p>Tous ceux qui réussissent ont commencé comme toi : sans expérience, sans stratégie parfaite, sans confiance. Mais ils ont fait une chose différente : <strong>Ils ont commencé.</strong> Et ils n’ont pas abandonné.</p>
      </div>

      <div class="tip-box gold">
        <h2>La Constance bat le Talent</h2>
        <p>Tu vas faire des erreurs. Tu vas poster des vidéos qui ne marchent pas. Tu vas douter. C'est normal. Mais si tu continues, tu progresses.</p>
        <p>👉 <strong>Chaque vidéo est une leçon. Chaque erreur est une amélioration.</strong></p>
      </div>

      <div class="content-block">
        <h2>Imagine ton futur</h2>
        <p>Imagine dans 30 jours, 3 mois, 6 mois... Ton compte grandit, les gens te suivent, tu commences à gagner de l'argent. Ce n'est pas un rêve, c'est un résultat mathématique de la constance.</p>
        <p>Ne cherche pas la perfection, cherche le progrès. Une vidéo aujourd’hui vaut mieux que 10 idées demain. Le bon moment, c’est <strong>maintenant</strong>.</p>
      </div>

      <div class="elite-box" style="text-align: center;">
        <h2>🚀 À toi de jouer</h2>
        <p>Tu es responsable de ton succès. Tu peux rester spectateur, ou devenir acteur. Choisis d'être celui qui fait.</p>
        <br>
        <p><strong>Ouvre TikTok. Crée ton contenu. Poste.</strong></p>
        <p>Même si c'est imparfait. C'est comme ça que tout commence.</p>
      </div>

      <div class="final-message" style="text-align: center; margin-top: 4rem;">
        <h3 class="gold-text">BIENVENUE DANS L'ÉLITE.</h3>
        <p>On se retrouve de l'autre côté.</p>
      </div>
`
  },
  {
    id: 10,
    title: "Module Bonus : L'Empire",
    module: "Business",
    content: `
      <h2>Automatisation & Délégation</h2>
      <p>Comment sortir de l'opérationnel et devenir le CEO de votre propre média. Recrutement de monteurs, gestion de communauté, et scalabilité.</p>
      
      <div class="cta-elite glass-card">
        <h3>Passez à l'étape supérieure</h3>
        <p>Rejoignez notre réseau privé de créateurs élites et accédez à nos outils exclusifs.</p>
        <button class="btn-luxury" @click="window.open('https://fooocsof.mychariow.shop', '_blank')">Accéder à l'Espace Premium <ShoppingBag :size='18'/></button>
      </div>
    `
  },
  {
    id: 11,
    title: "Pack de Ressources & Bonus",
    module: "BONUS ELITE",
    content: `
      <div class="bonus-header">
        <h1 class="luxury-title"><span class="gold-text">VOS BONUS</span> EXCLUSIFS</h1>
        <div class="warning-box">
          <p><strong>⚠️ A LIRE AVANT DE CLIQUER :</strong></p>
          <p>Le premier lien vous redirige vers un PDF contenant des liens et les autres vous redirigent vers Google Drive.</p>
          <p>Dans un premier temps, vous devez télécharger le PDF. Ensuite, sur chaque page vous avez des listes sur lesquelles vous devez cliquer pour être redirigé(e).</p>
        </div>
      </div>

      <div class="bonus-grid">
        <div class="resource-card glass-card">
          <h3>📘 Guide Stratégique</h3>
          <p><strong>RÉSEAUX SOCIAUX : DE ZÉRO À 10 000 ABONNÉS</strong><br>Le Guide Complet & Professionnel pour Débutants</p>
          <a href="https://drive.google.com/file/d/1JTospX7gQt_G-Sef9sqI3xeP3Z_FCW5B/view?usp=sharing" target="_blank" class="btn-bonus gold">Accéder au Guide</a>
        </div>

        <div class="resource-card glass-card">
          <h3>✅ Compte TikTok monétisé</h3>
          <p>Accédez aux dossiers pour configurer votre compte.</p>
          <a href="https://drive.google.com/drive/folders/1cGN31mFcRZIA9rCHzA5ksdEmpy0bWYpw" target="_blank" class="btn-bonus red">Ouvrir Google Drive</a>
        </div>

        <div class="resource-card glass-card">
          <h3>🚨 +10 000 Vidéos TikTok</h3>
          <p>Téléchargez le catalogue complet au format PDF.</p>
          <a href="https://drive.google.com/file/d/11E8yGFPpKREa5X0TjM4ys8yAVzfjo1J_/view" target="_blank" class="btn-bonus yellow">Télécharger le PDF (Canva)</a>
        </div>

        <div class="resource-card glass-card">
          <h3>🔥 +600 Réels Tendances</h3>
          <p>Pack de vidéos virales prêtes à l'emploi.</p>
          <a href="https://drive.google.com/drive/folders/1lFGkYkg7Yoc8F1g_1A4bQwSmGny-WrcR" target="_blank" class="btn-bonus red">Accéder aux Réels</a>
        </div>

        <div class="resource-card glass-card">
          <h3>✨ Pack Lifestyle Premium</h3>
          <p>Vidéos esthétiques pour vos fonds de vidéos.</p>
          <a href="https://drive.google.com/drive/folders/1vPDxi26HoMc26uR6lqPaQUPOdHnIxIgx" target="_blank" class="btn-bonus red">Ouvrir le Pack</a>
        </div>

        <div class="resource-card glass-card">
          <h3>🎯 300 Super Hooks</h3>
          <p>Les accroches qui font exploser la rétention.</p>
          <a href="https://drive.google.com/drive/folders/1y0tI1NkUtJIdVgXiE9JHnVz7sYA1lPu4" target="_blank" class="btn-bonus red">Voir les Hooks</a>
        </div>

        <div class="resource-card glass-card">
          <h3>🚀 Booster son Live</h3>
          <p>Guide complet pour maximiser vos sessions en direct.</p>
          <a href="https://drive.google.com/file/d/1R9GX68m5vmMHhD22IPj9rixw78xYJnrB/view" target="_blank" class="btn-bonus red">Ouvrir le Guide</a>
        </div>
      </div>

      <div class="tip-box gold">
        <p><strong>💡 Note :</strong> Vous pouvez utiliser Canva ou Capcut pour modifier ces vidéos. Ajoutez simplement vos textes et votre musique pour vous démarquer !</p>
      </div>
    `
  },])

const activeChapter = computed(() => chapters.value[currentChapter.value] || chapters.value[0])

const selectChapter = (index) => {
  if (index >= 0 && index < chapters.value.length) {
    currentChapter.value = index
    if (window.innerWidth < 1024) isSidebarOpen.value = false
    
    gsap.fromTo('.content-container', 
      { opacity: 0, scale: 0.98, y: 20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "expo.out" }
    )
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  gsap.from('.sidebar', { x: -50, opacity: 0, duration: 1.2, ease: "expo.out" })
  gsap.from('.content-header', { y: -20, opacity: 0, duration: 1, delay: 0.5, ease: "expo.out" })
})
</script>

<template>
  <div class="elite-layout">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ 'closed': !isSidebarOpen }">
      <div class="sidebar-header">
        <div class="logo">ELITE<span>ACADEMY</span></div>
        <button @click="isSidebarOpen = false" class="close-mobile"><X :size="24" /></button>
      </div>
      
      <div class="sidebar-scroll">
        <div v-for="(module, mIndex) in [...new Set(chapters.map(c => c.module))]" :key="mIndex" class="module-group">
          <div class="module-title">{{ module }}</div>
          <nav class="chapter-nav">
            <button 
              v-for="chapter in chapters.filter(c => c.module === module)" 
              :key="chapter.id"
              @click="selectChapter(chapter.id)"
              class="chapter-link"
              :class="{ 'active': currentChapter === chapter.id }"
            >
              <div class="chapter-status" :class="{ 'completed': currentChapter > chapter.id }">
                <CheckCircle v-if="currentChapter > chapter.id" :size="14" />
                <div v-else class="status-dot"></div>
              </div>
              <span class="chapter-title">{{ chapter.title }}</span>
            </button>
          </nav>
        </div>
      </div>

      <div class="sidebar-footer">
        <a href="https://fooocsof.mychariow.shop" target="_blank" class="luxury-footer-btn">
          <ShoppingBag :size="18" /> Marketplace Elite
        </a>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="content-area">
      <header class="content-header">
        <div class="header-left">
          <button @click="isSidebarOpen = !isSidebarOpen" class="menu-toggle">
            <Menu :size="24" v-if="!isSidebarOpen" />
            <X :size="24" v-else />
          </button>
          <div class="breadcrumb">
            <span class="module-name">{{ activeChapter.module }}</span>
            <ChevronRight :size="14" />
            <span class="chapter-name">{{ activeChapter.title }}</span>
          </div>
        </div>
        
        <div class="progress-box">
          <div class="progress-bar-container">
            <div class="progress-bar-fill" :style="{ width: ((currentChapter + 1) / chapters.length * 100) + '%' }"></div>
          </div>
          <span class="progress-percent">{{ Math.round(((currentChapter + 1) / chapters.length) * 100) }}%</span>
        </div>
      </header>

      <article class="content-body">
        <div class="content-container">
          <div v-html="activeChapter.content" class="rich-elite-content"></div>
          
          <div class="nav-controls">
            <button 
              @click="selectChapter(currentChapter - 1)" 
              :disabled="currentChapter === 0"
              class="elite-btn-prev"
            >
              <ChevronLeft :size="20" /> Précédent
            </button>
            
            <button 
              @click="selectChapter(currentChapter + 1)" 
              v-if="currentChapter < chapters.length - 1"
              class="elite-btn-next"
            >
              Suivant <ChevronRight :size="20" />
            </button>
            <a v-else href="https://fooocsof.mychariow.shop" target="_blank" class="elite-btn-final">
              Terminer la Masterclass <Award :size="20" />
            </a>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;600;800&display=swap');

.elite-layout {
  display: flex;
  height: 100vh;
  background-color: #050505;
  color: #e5e5e5;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

/* Sidebar Elite */
.sidebar {
  width: 360px;
  background: #0a0a0a;
  border-right: 1px solid rgba(212, 175, 55, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.sidebar.closed { width: 0; transform: translateX(-100%); }

.sidebar-header {
  padding: 3rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.logo { font-size: 1.2rem; font-weight: 800; letter-spacing: 2px; }
.logo span { color: #D4AF37; }

.sidebar-scroll {
  flex-grow: 1;
  overflow-y: auto;
  padding: 2rem 1rem;
}

.module-group { margin-bottom: 2.5rem; }
.module-title { 
  font-size: 0.7rem; 
  font-weight: 800; 
  text-transform: uppercase; 
  letter-spacing: 2px; 
  color: #D4AF37; 
  margin-bottom: 1rem;
  padding-left: 1rem;
}

.chapter-nav { display: flex; flex-direction: column; gap: 0.25rem; }

.chapter-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1rem;
  background: transparent;
  border: none;
  border-radius: 16px;
  color: #888;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s;
}

.chapter-link:hover { background: rgba(255, 255, 255, 0.02); color: white; transform: translateX(5px); }
.chapter-link.active { background: rgba(212, 175, 55, 0.05); color: #D4AF37; }

.chapter-status { width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; }
.status-dot { width: 6px; height: 6px; background: #333; border-radius: 50%; }
.completed { color: #D4AF37; }

.sidebar-footer { padding: 2rem; }

.luxury-footer-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1.25rem;
  background: linear-gradient(135deg, #D4AF37, #f1c40f);
  color: black;
  text-decoration: none;
  border-radius: 100px;
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
}

.luxury-footer-btn:hover { 
  transform: scale(1.02) translateY(-3px); 
  box-shadow: 0 15px 30px rgba(212, 175, 55, 0.4); 
}

/* Main Content Area */
.content-area {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.content-header {
  margin: 1.5rem;
  padding: 1.2rem 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 30px !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left { display: flex; align-items: center; gap: 2rem; }
.breadcrumb { display: flex; align-items: center; gap: 0.75rem; font-size: 0.8rem; font-weight: 600; color: #555; }
.module-name { color: #D4AF37; text-transform: uppercase; }

.progress-box { display: flex; align-items: center; gap: 1rem; width: 250px; }
.progress-bar-container { flex-grow: 1; height: 4px; background: #222; border-radius: 10px; overflow: hidden; }
.progress-bar-fill { height: 100%; background: #D4AF37; border-radius: 10px; transition: width 1s cubic-bezier(0.16, 1, 0.3, 1); }
.progress-percent { font-size: 0.8rem; font-weight: 800; color: #D4AF37; }

.content-body { flex-grow: 1; overflow-y: auto; padding: 5rem 3rem; }
.content-container { max-width: 900px; margin: 0 auto; }

/* Luxury Content Styling */
.luxury-title { font-family: 'Playfair Display', serif; font-size: 5rem; margin-bottom: 1rem; line-height: 1.1; }
.gold-text { color: #D4AF37; }

.subtitle { font-size: 1.5rem; color: #888; margin-bottom: 4rem; font-weight: 300; }

.rich-elite-content :deep(h2) { font-family: 'Playfair Display', serif; font-size: 3.5rem; margin-bottom: 2rem; color: #D4AF37; }
.rich-elite-content :deep(p) { font-size: 1.3rem; line-height: 2; color: #bbb; margin-bottom: 2rem; }

.reader-cover-img { max-width: 500px; width: 100%; border-radius: 40px; box-shadow: 0 40px 80px rgba(0,0,0,0.8); }

.glass-card { 
  background: rgba(255, 255, 255, 0.02); 
  border: 1px solid rgba(255, 255, 255, 0.05); 
  padding: 3rem; 
  border-radius: 40px; 
  margin: 4rem 0; 
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  text-align: center;
  overflow: hidden;
}

.elite-box {
  padding: 2.5rem !important;
  margin: 2rem 0 !important;
  border-left: 4px solid #D4AF37 !important;
  background: rgba(212, 175, 55, 0.03) !important;
  border-radius: 24px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.elite-box h4 {
  color: #D4AF37;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
}

.elite-box p {
  text-align: center;
  margin-bottom: 0 !important;
}

.checklist { display: flex; flex-direction: column; gap: 1.5rem; margin: 3rem 0; align-items: center; }
.check-item { display: flex; align-items: center; justify-content: center; gap: 1.5rem; font-size: 1.2rem; color: #eee; width: 100%; text-align: left; }
.check-item input { width: 20px; height: 20px; accent-color: #D4AF37; flex-shrink: 0; }

.resource-box {
  background: #111;
  padding: 2rem;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 3rem 0;
  border: 1px solid #222;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  text-align: center;
}

/* Bonus Page Specifics */
.warning-box {
  background: rgba(212, 175, 55, 0.05);
  border: 1px solid #D4AF37;
  padding: 2.5rem;
  border-radius: 32px;
  margin-bottom: 4rem;
  color: #D4AF37;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  text-align: center;
}

.bonus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
  width: 100%;
  box-sizing: border-box;
}

.resource-card {
  padding: 2.5rem !important;
  border-radius: 40px !important;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.resource-card h3 { font-size: 1.4rem; color: white; margin: 0; text-align: center; }
.resource-card p { font-size: 1rem !important; color: #888 !important; margin: 0; text-align: center; }

.btn-bonus {
  padding: 1.2rem;
  border-radius: 100px;
  text-align: center;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  width: 100%;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-bonus.red { background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; }
.btn-bonus.yellow { background: linear-gradient(135deg, #f1c40f, #f39c12); color: black; }
.btn-bonus:hover { transform: scale(1.05) translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.3); }

.btn-small { 
  background: rgba(212, 175, 55, 0.1); 
  border: 1px solid rgba(212, 175, 55, 0.3); 
  color: #D4AF37; 
  padding: 0.8rem 2rem; 
  border-radius: 100px; 
  cursor: pointer; 
  text-decoration: none;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.8rem;
  transition: all 0.3s;
  display: inline-block;
}
.btn-small:hover { background: #D4AF37; color: black; transform: scale(1.05); }

.btn-luxury {
  background: linear-gradient(135deg, #D4AF37, #f1c40f);
  color: black;
  text-decoration: none;
  padding: 1.2rem 3rem;
  border-radius: 100px;
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
  margin-top: 1.5rem;
}
.btn-luxury:hover {
  transform: scale(1.05) translateY(-3px);
  box-shadow: 0 15px 30px rgba(212, 175, 55, 0.5);
}

.cta-elite { text-align: center; }

.video-placeholder {
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background: radial-gradient(circle, #1a1a1a 0%, #0a0a0a 100%);
  color: #D4AF37;
  cursor: pointer;
  border-radius: 24px;
}

.nav-controls { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  gap: 2rem; 
  margin-top: 8rem; 
  padding-bottom: 5rem; 
  flex-wrap: wrap;
}

.elite-btn-prev { 
  background: rgba(255, 255, 255, 0.02); 
  color: #888; 
  border: 1px solid rgba(255, 255, 255, 0.05); 
  padding: 1.5rem 3rem; 
  border-radius: 100px; 
  font-weight: 800; 
  font-size: 0.9rem; 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  gap: 1rem; 
  text-transform: uppercase; 
  transition: all 0.4s;
}

.elite-btn-prev:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  transform: scale(1.05);
}

.elite-btn-next { 
  background: #D4AF37; 
  color: black; 
  border: none; 
  padding: 1.5rem 3rem; 
  border-radius: 100px; 
  font-weight: 900; 
  cursor: pointer; 
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.4s;
}

.elite-btn-next:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4); }

.elite-btn-final {
  background: white;
  color: black;
  text-decoration: none;
  padding: 1.5rem 4rem;
  border-radius: 100px;
  font-weight: 900;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  transition: all 0.4s;
}

.elite-btn-final:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.4);
}

.menu-toggle, .close-mobile {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #D4AF37;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.menu-toggle:hover, .close-mobile:hover {
  background: rgba(212, 175, 55, 0.15);
  border-color: rgba(212, 175, 55, 0.4);
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
}

.close-mobile { display: none; margin-right: -1rem; }

@media (max-width: 1024px) {
  .sidebar { position: absolute; height: 100%; z-index: 1000; box-shadow: 50px 0 100px rgba(0,0,0,0.9); }
  .close-mobile { display: flex; }
  .content-header { padding: 1rem; margin: 1rem; border-radius: 20px !important; }
  .glass-card { padding: 1.5rem; margin: 2rem 0; border-radius: 24px; }
  .content-body { padding: 2rem 1.5rem; }
  .luxury-title { font-size: 3rem; }
  .rich-elite-content :deep(h2) { font-size: 2.2rem; }
  .resource-card { padding: 2rem !important; border-radius: 24px !important; }
}

@media (max-width: 640px) {
  .nav-controls { flex-direction: column; align-items: center; }
  .elite-btn-prev, .elite-btn-next, .elite-btn-final { width: 100%; justify-content: center; text-align: center; }
  .progress-box { width: 150px; }
}
</style>
