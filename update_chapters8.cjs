const fs = require('fs');
const path = 'd:/Ebook/src/views/EbookReader.vue';
let content = fs.readFileSync(path, 'utf8');

const chapter5Html = `
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

// Find Chapter 5 (id: 6) and REPLACE its content.
const chap6Start = chaptersStr.indexOf('id: 6,');
const chap6End = chaptersStr.indexOf('  },', chap6Start) + 4;

const chap6Object = `
  {
    id: 6,
    title: "Chapitre 5 : Créer du contenu viral sans budget",
    module: "Contenu",
    content: \`${chapter5Html}\`
  },`;

const newChaptersStr = chaptersStr.substring(0, chap6Start - 4) + chap6Object + chaptersStr.substring(chap6End);

const newContent = beforeChapters + newChaptersStr + afterChapters;

fs.writeFileSync(path, newContent);
console.log('Replaced Chapter 5 successfully');
