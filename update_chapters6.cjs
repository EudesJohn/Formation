const fs = require('fs');
const path = 'd:/Ebook/src/views/EbookReader.vue';
let content = fs.readFileSync(path, 'utf8');

const chapter3Html = `
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

// Find Chapter 3 (id: 4) and REPLACE its content.
// Actually, it's easier to find the object with id: 4 and replace it.
// Wait, I should also check if "L'Architecture de Marque" was id: 4. Yes it was.

const chap4Start = chaptersStr.indexOf('id: 4,');
const chap4End = chaptersStr.indexOf('  },', chap4Start) + 4;

const chap4Object = `
  {
    id: 4,
    title: "Chapitre 3 : Créer un profil qui attire et qui convertit",
    module: "Fondations",
    content: \`${chapter3Html}\`
  },`;

const newChaptersStr = chaptersStr.substring(0, chap4Start - 4) + chap4Object + chaptersStr.substring(chap4End);

const newContent = beforeChapters + newChaptersStr + afterChapters;

fs.writeFileSync(path, newContent);
console.log('Replaced Chapter 3 successfully');
