import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { ParallaxSection } from '../components/ParallaxSection'
import { Section } from '../components/Section'
import { useSeo } from '../useSeo'
import { menuData } from '../content/menus'
import eten from '../../content/pages/eten.json'

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
            <h3 className="text-xl text-[var(--primary)] text-center tracking-widest uppercase mb-10">
              {category.name}
            </h3>
            
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
  useSeo(eten.seo)

  return (
    <div>
      {/* Hero section met chef specials */}
      <Section
        id={eten.chefSpecials.section.id}
        title={eten.chefSpecials.section.title}
        subtitle={eten.chefSpecials.section.subtitle}
        variant={eten.chefSpecials.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {eten.chefSpecials.intro}
        </p>
        <CardGrid columns={4}>
          {eten.chefSpecials.cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              image={card.image}
              imageAlt={card.imageAlt}
            />
          ))}
        </CardGrid>
      </Section>

      <ParallaxSection
        id={eten.parallax[0].id}
        imageSrc={eten.parallax[0].imageSrc}
        height={eten.parallax[0].height}
      />

      {/* Lunch Menu */}
      <Section
        id={eten.lunch.section.id}
        title={eten.lunch.section.title}
        subtitle={eten.lunch.section.subtitle}
        variant={eten.lunch.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {eten.lunch.intro}
        </p>
        <MenuBlock categories={menuData.lunch.categories} />
      </Section>

      {/* Diner Menu */}
      <Section
        id={eten.diner.section.id}
        title={eten.diner.section.title}
        subtitle={eten.diner.section.subtitle}
        variant={eten.diner.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {eten.diner.intro}
        </p>
        <MenuBlock categories={menuData.diner.categories} />
      </Section>

      <ParallaxSection
        id={eten.parallax[1].id}
        imageSrc={eten.parallax[1].imageSrc}
        height={eten.parallax[1].height}
      />

      {/* Kids Menu */}
      <Section
        id={eten.kids.section.id}
        title={eten.kids.section.title}
        subtitle={eten.kids.section.subtitle}
        variant={eten.kids.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {eten.kids.intro}
        </p>
        <MenuBlock categories={menuData.kids.categories} />
      </Section>

      {/* Bar Bites */}
      <Section
        id={eten.borrel.section.id}
        title={eten.borrel.section.title}
        subtitle={eten.borrel.section.subtitle}
        variant={eten.borrel.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {eten.borrel.intro}
        </p>
        <MenuBlock categories={menuData.borrel.categories} />
      </Section>

      {/* Reservation CTA */}
      <Section
        id={eten.reservation.section.id}
        title={eten.reservation.section.title}
        subtitle={eten.reservation.section.subtitle}
        variant={eten.reservation.section.variant}
      >
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl tracking-wider">{eten.reservation.card.heading}</h3>
              <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                {eten.reservation.card.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--muted-foreground)]">
                {eten.reservation.card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <CheckIcon />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                {eten.reservation.card.ctas.map((cta) => {
                  const isExternal = cta.href.startsWith('http')
                  return (
                    <a
                      key={cta.href}
                      className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                      href={cta.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      {cta.label}
                      <span aria-hidden>→</span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <img
                src={eten.reservation.card.image.src}
                alt={eten.reservation.card.image.alt}
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
