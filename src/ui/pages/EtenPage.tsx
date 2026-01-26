import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { ParallaxSection } from '../components/ParallaxSection'
import { Section } from '../components/Section'
import { useSeo } from '../useSeo'
import { menuData } from '../content/menus'

// Solid Icon
function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[var(--primary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  )
}

function MenuBlock(props: {
  categories: Array<{
    name: string
    items: Array<{ name: string; description?: string; price: string }>
  }>
}) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Categories */}
      <div className="space-y-12">
        {props.categories.map((category) => (
          <div key={category.name} className="glass-card rounded-[var(--radius-card)] p-8 md:p-12">
            {/* Category Header */}
            <h4 className="text-xl text-[var(--primary)] text-center tracking-widest uppercase mb-10">
              {category.name}
            </h4>
            
            {/* Menu Items */}
            <ul className="space-y-8">
              {category.items.map((item) => (
                <li key={item.name} className="group">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <span className="text-lg text-[var(--foreground)] font-medium tracking-wide">
                          {item.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-[var(--border)] min-w-[40px]" />
                        <span className="text-lg text-[var(--primary)] font-semibold whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-[var(--muted-foreground)] mt-2 max-w-lg leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function EtenPage() {
  useSeo({
    title: 'Eten in Arendonk – lunch, diner & chef specials',
    description:
      'Eten bij The Royal Falcon in Arendonk: chef specials, lunchmenu, dinermenu, kids menu en borrel menu. Combineer met cocktails en reserveer je tafel.',
    path: '/eten',
  })

  return (
    <div>
      {/* Hero section met chef specials */}
      <Section
        id="chef-specials"
        title="Chef Specials"
        subtitle="Onze signature gerechten — seizoensgebonden specials met een Royal Falcon twist. Perfect voor een culinaire avond uit in Arendonk."
        variant="decorated"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Proef de meest populaire gerechten van Arendonk met lokale seizoensproducten en een moderne twist.
          Onze chef specials combineren klassieke smaken met creatieve presentaties — ideaal voor foodies en levensgenieters.
        </p>
        <CardGrid columns={4}>
          <Card
            title="Steak Royal"
            description="Onze signature steak: malse entrecote van 300g, gebakken zoals jij het wilt. Geserveerd met seizoensgroenten, huisgemaakte frieten en een saus naar keuze."
            image="/cards/card-steak.png"
            imageAlt="Royal steak special"
          />
          <Card
            title="Caesar Salad"
            description="De klassieker die nooit verveelt. Knapperige romaine sla, huisgemaakte Caesar dressing, verse parmezaan en krokante croutons."
            image="/cards/card-ceasar.png"
            imageAlt="Caesar salad"
          />
          <Card
            title="Charcuterie Platter"
            description="Ideaal om te delen: een selectie van de beste vleeswaren, kazen, olijven, huisgemaakte dips en vers brood."
            image="/cards/card-chacutrie.png"
            imageAlt="Charcuterie plank"
          />
          <Card
            title="Pasta del Giorno"
            description="Dagverse pasta met seizoensgebonden ingrediënten. Vraag onze server naar de pasta van vandaag."
            image="/cards/landscape-food.png"
            imageAlt="Pasta special"
          />
        </CardGrid>
      </Section>

      <ParallaxSection id="eten-parallax" imageSrc="/parallax/para-5.png" height="md" />

      {/* Lunch Menu */}
      <Section
        id="lunch"
        title="Lunch Menu"
        subtitle="Lunchen in Arendonk? Van snelle broodjes tot verwarmende soepen — onze lunchkaart heeft voor elk wat wils. Geserveerd van 12:00 tot 15:00."
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Zoek je een snelle lunch in Arendonk of liever uitgebreid tafelen? Onze lunchkaart biedt frisse salades,
          artisanale broodjes en huisgemaakte soepen, perfect voor een zakelijke afspraak of een gezellige pauze.
        </p>
        <MenuBlock categories={menuData.lunch.categories} />
      </Section>

      {/* Diner Menu */}
      <Section
        id="diner"
        title="Diner Menu"
        subtitle="Diner in Arendonk met sfeer en smaak. Van sappige steaks tot verse pasta — onze keuken draait vanaf 17:00."
        variant="muted"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Geniet van een sfeervol diner in Arendonk met onze signature steaks, pasta’s en seizoensgerechten.
          We werken met verse ingrediënten en serveren elk gerecht met zorg en gastvrijheid.
        </p>
        <MenuBlock categories={menuData.diner.categories} />
      </Section>

      <ParallaxSection id="eten-parallax-2" imageSrc="/parallax/para-3.png" height="sm" />

      {/* Kids Menu */}
      <Section
        id="kids"
        title="Kids Menu"
        subtitle="Voor onze kleine gasten tot 12 jaar. Kindvriendelijke gerechten die ook de ouders goedkeuren."
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Ook voor gezinnen is The Royal Falcon een topadres. Het kids menu bevat herkenbare favorieten,
          zodat kinderen en ouders allebei ontspannen kunnen genieten van een lunch of diner.
        </p>
        <MenuBlock categories={menuData.kids.categories} />
      </Section>

      {/* Bar Bites */}
      <Section
        id="borrel"
        title="Bar Bites"
        subtitle="Snacks en platters voor bij je cocktail. Ideaal tijdens een potje snooker, een avond met vrienden of gewoon omdat het kan."
        variant="decorated"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Deelbare bar bites maken elke avond compleet. Kies uit borrelplanken, warme snacks en kleine gerechten
          die perfect passen bij cocktails, speciaalbier of een goed glas wijn.
        </p>
        <MenuBlock categories={menuData.borrel.categories} />
      </Section>

      {/* Reservation CTA */}
      <Section
        id="reservation"
        title="Reserveer je tafel"
        subtitle="Zeker zijn van je plekje? Reserveer eenvoudig via WhatsApp of mail."
        variant="muted"
      >
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl tracking-wider">Boek een tafel</h3>
              <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                Of je nu komt voor een uitgebreid diner, een snelle lunch of gewoon wat hapjes bij je cocktail — 
                we maken graag een plekje vrij. Voor grotere gezelschappen of events neem je best even contact op.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--muted-foreground)]">
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  Lunch: 12:00 – 15:00 (weekend)
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  Diner: vanaf 17:00
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon />
                  Bar bites: de hele avond
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/contact#booking">
                  Reserveer nu
                  <span aria-hidden>→</span>
                </a>
                <a
                  className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                  href="https://wa.me/32468303077"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="/hero/hero-food.png"
                alt="Tafel setting bij The Royal Falcon"
                className="w-full h-full object-cover rounded-[var(--radius-card)] aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[var(--radius-card)]" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
