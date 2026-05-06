const fs = require('fs');
const path = 'd:/Ebook/src/views/EbookReader.vue';
let content = fs.readFileSync(path, 'utf8');

const chapter2Html = `
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

// Chapter 2 ends at the third '  },' (id 0, id 1, id 2)
let currentPos = 0;
for (let i = 0; i < 3; i++) {
  currentPos = chaptersStr.indexOf('  },', currentPos) + 4;
}

const beforeNewChapter = chaptersStr.substring(0, currentPos);
const restOfChaptersStr = chaptersStr.substring(currentPos);

// Shift IDs of the rest of the chapters by +1 (they were already shifted by +2 before, now they are id 3, 4, etc.)
// Existing id 3 becomes 4, etc.
let updatedRest = restOfChaptersStr;
for (let i = 13; i >= 3; i--) {
  updatedRest = updatedRest.replace(new RegExp('id: ' + i + ',', 'g'), 'id: ' + (i + 1) + ',');
}

// Update titles "Chapitre X" to "Chapitre X+1" for existing chapters
for (let i = 10; i >= 2; i--) {
  updatedRest = updatedRest.replace(new RegExp('Chapitre ' + i + ' :', 'g'), 'Chapitre ' + (i + 1) + ' :');
}

const newChapterDef = `
  {
    id: 3,
    title: "Chapitre 2 : Stratégie & Plateformes",
    module: "Fondations",
    content: \`${chapter2Html}\`
  },`;

const newContent = beforeChapters + beforeNewChapter + newChapterDef + updatedRest + afterChapters;

fs.writeFileSync(path, newContent);
console.log('Updated chapters with Chapter 2 successfully');
