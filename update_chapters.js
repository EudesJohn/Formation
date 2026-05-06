const fs = require('fs');
const path = 'd:/Ebook/src/views/EbookReader.vue';
let content = fs.readFileSync(path, 'utf8');

const newChapterHtml = `
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
        <div class="check-item"><input type="checkbox" checked disabled/> Si tu continues, tu gagnnes.</div>
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

const chapter0End = chaptersStr.indexOf('  },') + 4;

const chapter0Str = chaptersStr.substring(0, chapter0End);
const restOfChaptersStr = chaptersStr.substring(chapter0End);

let updatedRest = restOfChaptersStr;
for (let i = 11; i >= 1; i--) {
  updatedRest = updatedRest.replace(new RegExp('id: ' + i + ',', 'g'), 'id: ' + (i + 1) + ',');
}

const newChapterDef = `
  {
    id: 1,
    title: "Introduction : Le Monde en 2026",
    module: "Introduction",
    content: \`${newChapterHtml}\`
  },`;

const newContent = beforeChapters + chapter0Str + newChapterDef + updatedRest + afterChapters;

fs.writeFileSync(path, newContent);
console.log('Updated chapters successfully');
