const fs = require('fs');
const path = 'd:/Ebook/src/views/EbookReader.vue';
let content = fs.readFileSync(path, 'utf8');

const introHtml = `
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
`;

const chapter1Html = `
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
`;

const startMarker = 'const chapters = ref([';
const endMarker = '])\n\nconst activeChapter';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.log('Markers not found');
  process.exit(1);
}

const beforeChapters = content.substring(0, startIndex + startMarker.length);
const afterChapters = content.substring(endIndex);

let chaptersStr = content.substring(startIndex + startMarker.length, endIndex);

// Chapter 0 ends at the first '  },'
const chapter0End = chaptersStr.indexOf('  },') + 4;

const chapter0Str = chaptersStr.substring(0, chapter0End);
const restOfChaptersStr = chaptersStr.substring(chapter0End);

// Shift IDs of the rest of the chapters by +2
let updatedRest = restOfChaptersStr;
for (let i = 11; i >= 1; i--) {
  updatedRest = updatedRest.replace(new RegExp('id: ' + i + ',', 'g'), 'id: ' + (i + 2) + ',');
}
// update the titles "Chapitre X" to "Chapitre X+1"
for (let i = 9; i >= 1; i--) {
  updatedRest = updatedRest.replace(new RegExp('Chapitre ' + i + ' :', 'g'), 'Chapitre ' + (i + 1) + ' :');
}

const newChaptersDef = `
  {
    id: 1,
    title: "Introduction : Le Monde en 2026",
    module: "Introduction",
    content: \`${introHtml}\`
  },
  {
    id: 2,
    title: "Chapitre 1 : Comprendre les réseaux sociaux",
    module: "Fondations",
    content: \`${chapter1Html}\`
  },`;

const newContent = beforeChapters + chapter0Str + newChaptersDef + updatedRest + afterChapters;

fs.writeFileSync(path, newContent);
console.log('Updated chapters successfully');
