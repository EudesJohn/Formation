const fs = require('fs');
const path = 'd:/Ebook/src/views/EbookReader.vue';
let content = fs.readFileSync(path, 'utf8');

const conclusionHtml = `
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
`;

const startMarker = 'const chapters = ref([';
const endMarker = '])\n\nconst activeChapter';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

const beforeChapters = content.substring(0, startIndex + startMarker.length);
const afterChapters = content.substring(endIndex);

let chaptersStr = content.substring(startIndex + startMarker.length, endIndex);

// Find id: 9 (Module Bonus) and id: 10 (Pack Ressources)
const chap9Start = chaptersStr.indexOf('id: 9,');
const chap10Start = chaptersStr.indexOf('id: 10,');

// Get Module Bonus and Pack Ressources objects
const moduleBonusStr = chaptersStr.substring(chap9Start - 4, chaptersStr.indexOf('  },', chap9Start) + 4);
const packRessourcesStr = chaptersStr.substring(chap10Start - 4, chaptersStr.indexOf('  },', chap10Start) + 4);

// Shift Module Bonus and Pack Ressources IDs
const updatedModuleBonus = moduleBonusStr.replace('id: 9,', 'id: 10,');
const updatedPackRessources = packRessourcesStr.replace('id: 10,', 'id: 11,');

const conclusionObject = `
  {
    id: 9,
    title: "Conclusion : Ton nouveau départ",
    module: "Conclusion",
    content: \`${conclusionHtml}\`
  },`;

const newChaptersStr = chaptersStr.substring(0, chap9Start - 4) + conclusionObject + updatedModuleBonus + updatedPackRessources;

const newContent = beforeChapters + newChaptersStr + afterChapters;

fs.writeFileSync(path, newContent);
console.log('Added Conclusion chapter successfully');
