import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { ParallaxSection } from '../components/ParallaxSection'
import { Section } from '../components/Section'
import { useSeo } from '../useSeo'
import { menuData } from '../content/menus'

function DrinkMenuBlock(props: {
  categories: Array<{
    name: string
    items: Array<{ name: string; description?: string; price: string }>
  }>
}) {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Categories Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {props.categories.map((category) => (
          <div key={category.name} className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
            {/* Category Header */}
            <h4 className="text-lg text-[var(--primary)] text-center tracking-widest uppercase mb-8 pb-4 border-b border-[var(--border)]">
              {category.name}
            </h4>
            
            {/* Drink Items */}
            <ul className="space-y-5">
              {category.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[var(--foreground)] font-medium">{item.name}</span>
                    <span className="flex-1 border-b border-dotted border-[var(--border)] min-w-[20px]" />
                    <span className="text-[var(--primary)] font-semibold whitespace-nowrap">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DrinkenPage() {
  useSeo({
    title: 'Cocktails & bar in Arendonk',
    description:
      'Drinken bij The Royal Falcon: signature cocktails, wijnen, speciaalbieren en mocktails. Dé bar in Arendonk voor afterwork, borrel en events.',
    path: '/drinken',
  })

  return (
    <div>
      {/* Signature Cocktails */}
      <Section
        id="bartenders-choice"
        title="Bartenders Choice"
        subtitle="Handgemaakte signature cocktails door onze bartenders. Van klassiekers tot creatieve creaties — elk drankje vertelt een verhaal."
        variant="decorated"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Op zoek naar de beste cocktails in Arendonk? Onze bartenders mixen met premium spirits,
          verse ingrediënten en een verfijnde afwerking die je proefnotities lang bijblijven.
        </p>
        <CardGrid columns={4}>
          <Card
            title="Royal Falcon"
            description="Onze huiscocktail: vodka, passievrucht en limoen, getopt met een vleugje prosecco. Verfrissend, fruitig en feestelijk."
            image="/hero/hero-cocktail-01.png"
            imageAlt="Royal Falcon signature cocktail"
          />
          <Card
            title="Smoky Old Fashioned"
            description="Voor de whiskyliefhebber: premium bourbon, gerookt met hickory hout, afgewerkt met bitters en een twist van sinaasappel."
            image="/hero/hero-cocktail-02.png"
            imageAlt="Smoky Old Fashioned cocktail"
          />
          <Card
            title="Espresso Martini"
            description="De perfecte pick-me-up: verse espresso, premium vodka en een vleugje Kahlua. Sterk, zoet en vol van smaak."
            image="/cards/cocktail-stuff.png"
            imageAlt="Espresso Martini cocktail"
          />
          <Card
            title="Mojito Royale"
            description="Een twist op de klassieker: verse munt, limoen, witte rum en een scheutje champagne. Verfrissend en elegant."
            image="/cards/cocktail-red.png"
            imageAlt="Mojito Royale cocktail"
          />
        </CardGrid>
      </Section>

      <ParallaxSection id="drinken-parallax" imageSrc="/parallax/para-2.png" height="md" />

      {/* Cocktail Menu */}
      <Section
        id="cocktail-menu"
        title="Cocktail Menu"
        subtitle="Van signature creaties tot tijdloze classics — en mocktails voor wie liever zonder alcohol geniet."
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Van een perfecte Espresso Martini tot een frisse Mojito Royale: ons cocktailmenu biedt voor elk moment
          de juiste sfeer, inclusief stijlvolle mocktails voor een alcoholvrije avond.
        </p>
        <DrinkMenuBlock categories={menuData.cocktails.categories} />
      </Section>

      {/* Wine Menu */}
      <Section
        id="wine-menu"
        title="Wijnen"
        subtitle="Een zorgvuldig geselecteerde wijnkaart — per glas of per fles. Van fris en fruitig tot rijk en complex."
        variant="muted"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Onze wijnkaart combineert toegankelijke klassiekers met verrassende ontdekkingen. Ideaal om te combineren
          met steak, pasta of bar bites tijdens je diner in Arendonk.
        </p>
        <DrinkMenuBlock categories={menuData.wines.categories} />
      </Section>

      <ParallaxSection id="drinken-parallax-2" imageSrc="/parallax/para-7.png" height="sm" />

      {/* Beer Menu */}
      <Section
        id="beer-menu"
        title="Bieren"
        subtitle="Belgische trots: van verfrissende pils tot krachtige trappisten. Van tap of fles."
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Proef de beste Belgische bieren in Arendonk, van frisse pils tot karaktervolle trappisten en specials.
          Perfect voor afterwork, live sports of een gezellige avond uit.
        </p>
        <DrinkMenuBlock categories={menuData.beers.categories} />
      </Section>

      {/* Bar Gallery */}
      <Section
        id="gallery"
        title="Bar Sfeer"
        subtitle="Een kijkje achter de bar — waar de magie gebeurt."
        variant="decorated"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Van sfeervolle verlichting tot ambachtelijke cocktails: onze bar in Arendonk is de perfecte setting
          voor een date night, afterwork of weekend vibes.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: '/hero/hero-bar01.png', alt: 'Bar interieur met ambient verlichting' },
            { src: '/hero/hero-bar02.png', alt: 'Gezellige barsfeer' },
            { src: '/hero/hero-bartender01.png', alt: 'Bartender aan het werk' },
            { src: '/hero/hero-bartender02.png', alt: 'Cocktails maken' },
            { src: '/hero/hero-wine-01.png', alt: 'Onze wijnselectie' },
            { src: '/hero/hero-wine-02.png', alt: 'Wijn proeven' },
          ].map((img, i) => (
            <div
              key={img.src}
              className="glass-card card-animate rounded-[var(--radius-card)] aspect-[4/3] overflow-hidden relative group"
              data-delay={i}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={img.src}
                alt={img.alt}
                loading={i < 2 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </Section>

      {/* Desserts */}
      <Section
        id="zoet"
        title="Zoetigheden"
        subtitle="De perfecte afsluiter: huisgemaakt gebak bij je koffie of als dessert."
        variant="muted"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Sluit je avond in Arendonk af met een klassiek dessert of huisgemaakt gebak, perfect te combineren
          met koffie, digestief of een zoete cocktail.
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'New York Cheesecake', desc: 'Romig, licht en onweerstaanbaar', price: '€ 8' },
              { name: 'Chocolate Brownie', desc: 'Warm geserveerd met vanille-ijs', price: '€ 8' },
              { name: 'Tiramisu', desc: 'Huisgemaakt, met mascarpone en espresso', price: '€ 9' },
              { name: 'Crème Brûlée', desc: 'Klassiek Frans, met knapperige suikerlaag', price: '€ 8' },
            ].map((dessert) => (
              <div key={dessert.name} className="text-center">
                <h4 className="text-[var(--foreground)] font-medium">{dessert.name}</h4>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">{dessert.desc}</p>
                <p className="text-[var(--primary)] font-medium mt-2">{dessert.price}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
