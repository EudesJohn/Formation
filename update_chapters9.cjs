const fs = require('fs');
const path = 'd:/Ebook/src/views/EbookReader.vue';
let content = fs.readFileSync(path, 'utf8');

const chapter6Html = `
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

// Find Chapter 6 (id: 7) and REPLACE its content.
const chap7Start = chaptersStr.indexOf('id: 7,');
const chap7End = chaptersStr.indexOf('  },', chap7Start) + 4;

const chap7Object = `
  {
    id: 7,
    title: "Chapitre 6 : Construire une communauté engagée",
    module: "Audience",
    content: \`${chapter6Html}\`
  },`;

const newChaptersStr = chaptersStr.substring(0, chap7Start - 4) + chap7Object + chaptersStr.substring(chap7End);

const newContent = beforeChapters + newChaptersStr + afterChapters;

fs.writeFileSync(path, newContent);
console.log('Replaced Chapter 6 successfully');
