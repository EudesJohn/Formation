const fs = require('fs');
const path = 'd:/Ebook/src/views/EbookReader.vue';
let content = fs.readFileSync(path, 'utf8');

const chapter4Html = `
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

// Find Chapter 4 (id: 5) and REPLACE its content.
const chap5Start = chaptersStr.indexOf('id: 5,');
const chap5End = chaptersStr.indexOf('  },', chap5Start) + 4;

const chap5Object = `
  {
    id: 5,
    title: "Chapitre 4 : L'Algorithme & La Viralité",
    module: "Fondations",
    content: \`${chapter4Html}\`
  },`;

const newChaptersStr = chaptersStr.substring(0, chap5Start - 4) + chap5Object + chaptersStr.substring(chap5End);

const newContent = beforeChapters + newChaptersStr + afterChapters;

fs.writeFileSync(path, newContent);
console.log('Replaced Chapter 4 successfully');
