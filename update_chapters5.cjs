const fs = require('fs');
const path = 'd:/Ebook/src/views/EbookReader.vue';
let content = fs.readFileSync(path, 'utf8');

const chapter3Html = `
      <div class="elite-header">
        <h1 class="luxury-title">Chapitre 3 <span class="gold-text">L'Architecture de Marque</span></h1>
        <p class="subtitle">Bâtir une identité indestructible qui attire l'élite.</p>
      </div>

      <div class="content-block">
        <h2>3.1 — Ta Marque est ton Empire</h2>
        <p>En 2026, ta marque n'est pas ton logo. C'est ce que les gens disent de toi quand tu n'es pas dans la pièce.</p>
        <div class="elite-box">
          <p>👉 <strong>La Perception est la Réalité.</strong> Si tu as l'air d'un amateur, tu seras payé comme un amateur.</p>
        </div>
      </div>

      <div class="glass-card">
        <h2>3.2 — Le Mirroring : La Connexion Émotionnelle</h2>
        <p>Le Mirroring consiste à refléter les problèmes, les désirs et le langage de ton audience.</p>
        <p>Quand quelqu'un se dit "Cette personne me comprend parfaitement", tu as gagné.</p>
      </div>

      <div class="content-block">
        <h2>3.3 — Ton "Avatar Client" (L'Elite Target)</h2>
        <p>Si tu parles à tout le monde, tu ne parles à personne. Tu dois définir ta cible avec une précision chirurgicale.</p>
        <ul>
          <li>Quels sont leurs 3 plus grands cauchemars ?</li>
          <li>Quels sont leurs 3 rêves les plus fous ?</li>
          <li>Quels mots utilisent-ils pour décrire leur situation ?</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>3.4 — Ton Message Unique de Vente (MUV)</h2>
        <p>Tu dois pouvoir expliquer ce que tu fais en une phrase simple et impactante.</p>
        <div class="tip-box gold">
          <p><strong>Formule :</strong> "J'aide [CIBLE] à obtenir [RÉSULTAT] sans [DOULEUR/OBSTACLE]."</p>
        </div>
      </div>

      <div class="content-block">
        <h2>3.5 — Storytelling : Ton Histoire est ta Force</h2>
        <p>Les gens n'achètent pas ce que tu fais, ils achètent pourquoi tu le fais. Partage ton parcours, tes échecs et tes victoires.</p>
        <p>👉 <strong>La vulnérabilité calculée crée une confiance instantanée.</strong></p>
      </div>

      <div class="elite-box">
        <h2>3.6 — La Psychologie de l'Identité Visual</h2>
        <p>Choisis 2 couleurs et 1 police. Pas plus. La cohérence visuelle crée la reconnaissance de marque.</p>
        <p>En 2026, le minimalisme premium est la norme pour l'élite.</p>
      </div>

      <div class="glass-card">
        <h2>3.7 — Exercice : Rédiger ta Mission Elite</h2>
        <p>Prends une feuille et écris ta mission en suivant la formule du MUV.</p>
        <p>Exemple : "J'aide les entrepreneurs à automatiser leur contenu pour gagner 10h par semaine."</p>
      </div>

      <div class="tip-box gold">
        <h2>Conclusion du chapitre 3</h2>
        <p>Ta marque est maintenant solide. Tu es prêt à attirer l'attention.</p>
        <br>
        <p>👉 Dans le prochain chapitre, tu vas apprendre :</p>
        <p><strong>La Psychologie des Hooks : Capter l'attention en 1.5 seconde.</strong></p>
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

// Chapter 3 ends at the fourth '  },' (id 0, id 1, id 2, id 3)
let currentPos = 0;
for (let i = 0; i < 4; i++) {
  currentPos = chaptersStr.indexOf('  },', currentPos) + 4;
}

const beforeNewChapter = chaptersStr.substring(0, currentPos);
const restOfChaptersStr = chaptersStr.substring(currentPos);

// Shift IDs of the rest of the chapters by +1
// Existing id 4 becomes 5, etc.
let updatedRest = restOfChaptersStr;
for (let i = 14; i >= 4; i--) {
  updatedRest = updatedRest.replace(new RegExp('id: ' + i + ',', 'g'), 'id: ' + (i + 1) + ',');
}

// Update titles "Chapitre X" to "Chapitre X+1" for existing chapters
for (let i = 11; i >= 3; i--) {
  updatedRest = updatedRest.replace(new RegExp('Chapitre ' + i + ' :', 'g'), 'Chapitre ' + (i + 1) + ' :');
}

const newChapterDef = `
  {
    id: 4,
    title: "Chapitre 3 : L'Architecture de Marque",
    module: "Fondations",
    content: \`${chapter3Html}\`
  },`;

const newContent = beforeChapters + beforeNewChapter + newChapterDef + updatedRest + afterChapters;

fs.writeFileSync(path, newContent);
console.log('Updated chapters with Chapter 3 successfully');
