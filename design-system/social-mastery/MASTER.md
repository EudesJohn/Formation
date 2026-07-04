# Design System Master — Social Mastery

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Social Mastery — Réseaux Sociaux de Zéro à 10 000 Abonnés
**Stack:** Vue 3 + Vite + GSAP + Lucide Icons
**Style:** Dark Mode OLED — Modern Glass — Violet/Amber Premium — Social Media Vibe

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Background | `#08080A` | `--bg-dark` | Fond de page OLED riche |
| Card BG | `rgba(255,255,255,0.02)` | `--bg-card` | Glass cards subtils |
| Primary | `#8B5CF6` | `--accent-primary` | Boutons, hover, icônes |
| Secondary | `#22D3EE` | `--accent-secondary` | Checklist, badges |
| Pink Accent | `#EC4899` | `--accent-pink` | Gradient text, accents |
| Amber/Gold | `#F59E0B` | `--gold` | Titres premium, quiz, activation |
| Text Main | `#FAFAFA` | `--text-main` | Titres, texte principal |
| Text Muted | `#D4D4D8` | `--text-muted` | Paragraphes lisibles |
| Text Secondary | `#A1A1AA` | `--text-secondary` | Sous-titres, descriptions |
| Glass Border | `rgba(255,255,255,0.06)` | `--glass-border` | Bordures glass subtiles |

**Color Notes:** Deep dark OLED fond (#08080A) avec accents violet (#8B5CF6), cyan (#22D3EE), et amber (#F59E0B) pour un rendu moderne, dynamique et social-media. Le remplacement du gold (#D4AF37) par l'amber (#F59E0B) donne une vibe plus actuelle et chaleureuse.

### Typography

| Type | Font | Weight | Source |
|------|------|--------|--------|
| Headings (Reader) | Playfair Display | 700, 900 | Google Fonts |
| Body | Inter | 300, 400, 600, 800 | Google Fonts |
| UI Text | Outfit | 300, 400, 600, 800 | Google Fonts |

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;600;800&display=swap');
```

**Line Height:** 1.6 (body), 1.1 (headings)
**Line Length:** Max 75ch (contenu de lecture)
**Font Size Body:** 16px minimum sur mobile

### Breakpoints

| Name | Width | Adjustments |
|------|-------|-------------|
| Desktop | > 1024px | Layout normal |
| Tablet | 768px - 1024px | Sidebar fixed, grid column 1fr |
| Mobile large | 480px - 640px | Padding réduit, boutons full-width |
| Mobile small | 375px - 480px | Font sizes réduits |
| Ultra mobile | 320px - 360px | Touch targets min 44px |

### Touch Targets

- **Minimum:** 44x44px (boutons interactifs, icônes cliquables)
- **Recommandé:** 48x48px pour les CTA primaires
- **Mobile:** 52px pour les éléments de navigation

---

## Component Specs

### Glass Card

```css
.glass-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}
```

### Buttons

| Variant | BG | Usage |
|---------|-----|-------|
| `.btn-primary` | Violet gradient `#8B5CF6 → #A78BFA` | CTA principal |
| `.btn-secondary` | Cyan gradient `#22D3EE → #06b6d4` | Actions secondaires |
| `.btn-luxury` | Amber gradient `#F59E0B → #D97706` | Premium/examen |
| `.btn-glass` | `rgba(255,255,255,0.05)` | Actions légères |
| `.btn-pink` | Pink gradient `#EC4899 → #fb7185` | Accent spécial |
| `.btn-bonus` | Colored variants | Liens ressources |
| `.btn-small` | Violet gradient | Mini boutons |
| `.menu-toggle` | Glass circle 48x48px | Bouton menu |

**Règles :**
- `border-radius: 14px` sur tous les boutons (modern rounded-rect)
- `min-height: 52px` sur tous les boutons principaux
- `min-height: 48px` sur mobile small
- `cursor: pointer` sur tous
- Transitions 300-400ms, cubic-bezier fluide
- Hover: `translateY(-2px)` seulement (pas de scale — évite le layout shift)

---

## Anti-Patterns (Do NOT Use)

- ❌ **Emojis comme icônes UI** — Utiliser Lucide SVG (sauf dans le contenu texte des chapitres)
- ❌ **`user-select: none` sur le texte du reader** — Permettre la sélection
- ❌ **Texte gris clair `#888` ou `#94a3b8` pour contenu lisible** — WCAG AA 4.5:1 minimum
- ❌ **Transform scale qui décale le layout au hover** — Utiliser scale sur `transform-origin`
- ❌ **Hover states actifs sur mobile** — Désactiver les hover transforms sur touch devices
- ❌ **Barrière anti-vol bloquant les outils d'accessibilité** — Garder `contextmenu` et F12 pour les utilisateurs légitimes

---

## Checklist Pré-Livraison

### Visual Quality
- [ ] Pas d'emojis utilisés comme icônes UI (SVG Lucide uniquement)
- [ ] Icônes consistentes (même set, même taille)
- [ ] Hover states stables (pas de layout shift)
- [ ] `cursor-pointer` sur tous les éléments cliquables
- [ ] Transitions fluides (150-400ms)

### Contrast & Accessibility
- [ ] Texte normal : ratio 4.5:1 minimum (--text-muted: #cbd5e1)
- [ ] Texte secondaire : 3:1 minimum (--text-secondary: #94a3b8)
- [ ] Focus states visibles (:focus-visible)
- [ ] `prefers-reduced-motion` respecté
- [ ] `prefers-color-scheme` si light mode implémenté

### Mobile Responsive
- [ ] Testé à 320px, 375px, 480px, 640px, 768px, 1024px
- [ ] Touch targets minimum 44x44px
- [ ] Pas de débordement horizontal
- [ ] Pas de contenu caché derrière des fixed elements
- [ ] Hover transforms désactivés sur mobile

### Performance
- [ ] Images optimisées (WebP, lazy loading)
- [ ] Animations GSAP non-bloquantes
- [ ] Watermark désactivée sur mobile (max-width: 768px)
