const fs = require('fs');
const path = 'd:/Ebook/src/views/EbookReader.vue';
let content = fs.readFileSync(path, 'utf8');

const chapter7Html = `
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
`;

const startMarker = 'const chapters = ref([';
const endMarker = '])\n\nconst activeChapter';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

const beforeChapters = content.substring(0, startIndex + startMarker.length);
const afterChapters = content.substring(endIndex);

let chaptersStr = content.substring(startIndex + startMarker.length, endIndex);

// Chapters 0 to 7 are Intro + Chap 1-6. (id 0 to 7)
// I want to replace EVERYTHING after id: 7 object, but keep the "Module Bonus" and "Pack de Ressources".
// "Module Bonus" original id was 10. Now it's id 14.
// "Pack de Ressources" original id was 11. Now it's id 15.

// Let's find where id: 8 starts.
const chap8Start = chaptersStr.indexOf('id: 8,');
// Let's find where "Module Bonus" starts (id: 14).
const moduleBonusStart = chaptersStr.indexOf('id: 14,');

const chap7Object = `
  {
    id: 8,
    title: "Chapitre 7 : Monétiser ses réseaux",
    module: "Business",
    content: \`${chapter7Html}\`
  },`;

const moduleBonus = `
  {
    id: 9,
    title: "Module Bonus : L'Empire",
    module: "Business",
    content: \`${chaptersStr.substring(chaptersStr.indexOf('content: \`', moduleBonusStart) + 10, chaptersStr.indexOf('\`', chaptersStr.indexOf('content: \`', moduleBonusStart) + 11))}\`
  },`;

const packRessourcesStart = chaptersStr.indexOf('id: 15,');
const packRessources = `
  {
    id: 10,
    title: "Pack de Ressources & Bonus",
    module: "BONUS ELITE",
    content: \`${chaptersStr.substring(chaptersStr.indexOf('content: \`', packRessourcesStart) + 10, chaptersStr.indexOf('\`', chaptersStr.indexOf('content: \`', packRessourcesStart) + 11))}\`
  },`;

const newChaptersStr = chaptersStr.substring(0, chap8Start - 4) + chap7Object + moduleBonus + packRessources;

const newContent = beforeChapters + newChaptersStr + afterChapters;

fs.writeFileSync(path, newContent);
console.log('Finalized eBook structure successfully');
