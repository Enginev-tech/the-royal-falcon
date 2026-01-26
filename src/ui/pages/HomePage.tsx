import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { ParallaxSection } from '../components/ParallaxSection'
import { Section } from '../components/Section'
import { useSeo } from '../useSeo'

// Solid Icon for bullet points
function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[var(--primary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  )
}

export function HomePage() {
  useSeo({
    title: 'Restaurant, bar & entertainment in Arendonk',
    description:
      'The Royal Falcon in Arendonk: restaurant, cocktails en entertainment (snooker, biljart, darts). Reserveer een tafel of ontdek onze events en live sports.',
    path: '/',
  })

  return (
    <div>
      {/* Main Event - Featured Card with Image */}
      <Section
        id="main-event"
        title="Main Event"
        subtitle="Beleef een avond uit in Arendonk met chef specials, signature cocktails en entertainment."
        variant="decorated"
      >
        <div className="glass-card rounded-[var(--radius-card)] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px]">
              <img
                src="/events/championsleague.webp"
                alt="Royal Night bij The Royal Falcon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-medium tracking-wider rounded">
                  ELKE VRIJDAG & ZATERDAG
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl tracking-wider">Royal Night</h3>
              <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                Live entertainment, cocktails en specials - ideaal voor een avond met vrienden of collega's. 
                Van casual borrel tot main event: dit is The Royal Falcon.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--muted-foreground)]">
                <li className="flex items-center gap-3"><CheckIcon />Snooker, biljart, darts & FIFA</li>
                <li className="flex items-center gap-3"><CheckIcon />Signature cocktails & bar bites</li>
                <li className="flex items-center gap-3"><CheckIcon />Live sports op groot scherm</li>
                <li className="flex items-center gap-3"><CheckIcon />Events & feesten op maat</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/events">
                  Bekijk agenda
                  <span aria-hidden="true">&#8594;</span>
                </a>
                <a className="cta-link bg-[var(--muted)] text-[var(--foreground)]" href="/contact#booking">
                  Reserveer
                  <span aria-hidden="true">&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ParallaxSection
        id="home-parallax"
        imageSrc="/parallax/muppie-parallax.png"
        height="md"
      />

      <Section
        id="services"
        title="Services"
        subtitle="Alles onder een dak in Arendonk: restaurant, bar, entertainment en events."
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          The Royal Falcon is de all‑in‑one hotspot in Arendonk: kom eten, drink een cocktail aan de bar
          en geniet van entertainment zoals snooker en darts. Ideaal voor dates, groepen en bedrijfsuitjes.
        </p>
        <CardGrid columns={4}>
          <Card
            title="Eten"
            description="Chef specials, lunch en diner - ideaal voor een gezellige avond uit in Arendonk."
            image="/cards/landscape-food.png"
            imageAlt="Chef special gerecht"
            footer={
              <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/eten">
                Bekijk menu
                <span aria-hidden="true">&#8594;</span>
              </a>
            }
          />
          <Card
            title="Drinken"
            description="Cocktails, wijnen en bar classics. Perfect voor afterwork of borrel met stijl."
            image="/cards/cocktail-red.png"
            imageAlt="Signature cocktail"
            footer={
              <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/drinken">
                Ontdek bar
                <span aria-hidden="true">&#8594;</span>
              </a>
            }
          />
          <Card
            title="Entertainment"
            description="Snooker, biljart, darts en FIFA: game night met sfeer in Arendonk."
            image="/hero/hero-snooker.png"
            imageAlt="Snooker tafel"
            footer={
              <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/entertainment">
                Bekijk activiteiten
                <span aria-hidden="true">&#8594;</span>
              </a>
            }
          />
          <Card
            title="Events"
            description="Week agenda, live sports en main events. Van UFC tot Champions League."
            image="/events/championsleague.webp"
            imageAlt="Champions League event"
            footer={
              <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/events">
                Bekijk events
                <span aria-hidden="true">&#8594;</span>
              </a>
            }
          />
        </CardGrid>
      </Section>

      <Section
        id="menus"
        title="Menu's"
        subtitle="Ontdek ons eten, onze cocktails en bar bites."
        variant="muted"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Van lunch en diner tot cocktails en desserts: onze menu’s zijn samengesteld voor elke smaak.
          Perfect voor een avond uit in Arendonk of een ontspannen borrel met vrienden.
        </p>
        <CardGrid columns={4}>
          <Card
            title="Eten"
            description="Lunch - Diner - Kids - Borrel (bar bites)"
            image="/cards/card-steak.png"
            imageAlt="Steak gerecht"
            footer={
              <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/eten">
                Naar eten
                <span aria-hidden="true">&#8594;</span>
              </a>
            }
          />
          <Card
            title="Drinken"
            description="Cocktails - Drankkaart - Zoetigheden"
            image="/cards/card-wine.png"
            imageAlt="Wijnen en cocktails"
            footer={
              <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/drinken">
                Naar drinken
                <span aria-hidden="true">&#8594;</span>
              </a>
            }
          />
          <Card
            title="Snacks"
            description="Bar bites & small plates - ideaal om te delen"
            image="/cards/card-chacutrie.png"
            imageAlt="Charcuterie plank"
            footer={
              <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/eten#borrel">
                Bekijk snacks
                <span aria-hidden="true">&#8594;</span>
              </a>
            }
          />
          <Card
            title="Desserts"
            description="Huisgemaakte desserts & zoete verwennerijen"
            image="/cards/card-ceasar.png"
            imageAlt="Dessert"
            footer={
              <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/drinken#zoet">
                Bekijk desserts
                <span aria-hidden="true">&#8594;</span>
              </a>
            }
          />
        </CardGrid>
      </Section>

      <ParallaxSection
        id="home-parallax-2"
        imageSrc="/parallax/para-1.png"
        height="sm"
      />
    </div>
  )
}
