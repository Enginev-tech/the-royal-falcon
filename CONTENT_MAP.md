# Content Map (voor CMS)

## Globale site-instellingen

- `src/ui/content/site.ts`
  - Naam, adres, contactgegevens, socials.

## Media (globale assets)

- `public/video/`
  - Hero videos per pagina.
- `public/hero/`
  - Hero/card imagery (bar, cocktails, wijn, staff).
- `public/cards/`
  - Card images (menu, chefs, specials).
- `public/events/`
  - Event cards + sports imagery.
- `public/parallax/`
  - Parallax achtergronden.
- `public/team/`
  - Team foto’s.
- `public/logo/`
  - Logo’s en brand assets.

## Menu’s

- `src/ui/content/menus.ts`
  - Lunch, diner, kids, borrel.
  - Cocktails, wijnen, bieren.

## Pagina’s (content blokken + data arrays)

- `src/ui/pages/HomePage.tsx`
  - Main Event, Services, Menu’s (tekst + card content).
  - **Media**: event image, services/menu card images.

- `src/ui/pages/EtenPage.tsx`
  - Chef Specials cards.
  - Menu sections: lunch/diner/kids/borrel via `menus.ts`.
  - Reservatie CTA blok.
  - **Media**: chef specials card images, reservatie image.

- `src/ui/pages/DrinkenPage.tsx`
  - Bartenders Choice cards.
  - Cocktail/Wijn/Bier menu via `menus.ts`.
  - Bar sfeer gallery.
  - Desserts lijst.
  - **Media**: bartender cards + bar gallery images.

- `src/ui/pages/EntertainmentPage.tsx`
  - Games cards.
  - Spelregels data (`gameRules` object).
  - Tarieven & reserveren.
  - SV Valkenhof club info + form.
  - **Media**: games card images, club image.

- `src/ui/pages/EventsPage.tsx`
  - Week agenda (`weekAgenda`).
  - Kalender maand + highlights (`calendarMonth`, `calendarWeeks`, `calendarHighlights`).
  - Live sports data (`liveMatches`, `recentResults`, `standings`).
  - Vaste events cards.
  - Special events CTA.
  - **Media**: event card images + sports widget images.

- `src/ui/pages/OverOnsPage.tsx`
  - Over ons tekst.
  - Values cards.
  - Locatie + openingstijden.
  - **Media**: interieur image.

- `src/ui/pages/ContactPage.tsx`
  - Contact cards.
  - Adres + openingstijden.
  - Reservatie formulier.
  - Social links.

## Componenten met content

- `src/ui/components/HeroVideo.tsx`
  - Hero titel + CTA’s per pagina.
  - **Media**: video per route (mapping in component).

- `src/ui/components/Footer.tsx`
  - Footer tekst, navlinks, socials.

## Suggestie CMS mapping

- **Site settings** → `site.ts`
- **Menu’s** → `menus.ts`
- **Events kalender** → `EventsPage.tsx` arrays
- **Page teksten** → elke page component (titels/subtitles/paragraphs)

## CMS-velden (voorstel per type)

### Site Settings

- name
- address
- phone
- email
- whatsapp
- socials (facebook, instagram, tiktok)

### Menu’s

- title
- subtitle
- categories[]
  - name
  - items[]
    - name
    - description
    - price

### Hero (per pagina)

- title
- subtitle/line
- video
- ctaPrimary { label, href }
- ctaSecondary { label, href }

### Cards (herbruikbaar)

- title
- description
- image
- imageAlt
- badge (optioneel)
- footerItems[] (optioneel)

### Events kalender

- monthTitle
- weeks[]
  - days[] { dayNumber, events[] }
- highlights[] { date, title, description }

### Live Sports

- matches[] { time, competition, home, away, channel }
- results[] { competition, home, homeScore, away, awayScore }
- standings[] { league, teams[] { pos, team, pts } }

### Over ons

- intro
- values[] { title, description, icon }
- locationText
- openingHours[] { day, hours }
- image

### Contact

- infoCards[] { title, description, value, link }
- address
- openingHours[] { day, hours }
- bookingFormLabels
