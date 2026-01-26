import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { ParallaxSection } from '../components/ParallaxSection'
import { Section } from '../components/Section'
import { useSeo } from '../useSeo'
import { menuData } from '../content/menus'
import drinken from '../../content/pages/drinken.json'

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
  useSeo(drinken.seo)

  return (
    <div>
      {/* Signature Cocktails */}
      <Section
        id={drinken.bartendersChoice.section.id}
        title={drinken.bartendersChoice.section.title}
        subtitle={drinken.bartendersChoice.section.subtitle}
        variant={drinken.bartendersChoice.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {drinken.bartendersChoice.intro}
        </p>
        <CardGrid columns={4}>
          {drinken.bartendersChoice.cards.map((card) => (
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
        id={drinken.parallax[0].id}
        imageSrc={drinken.parallax[0].imageSrc}
        height={drinken.parallax[0].height}
      />

      {/* Cocktail Menu */}
      <Section
        id={drinken.cocktails.section.id}
        title={drinken.cocktails.section.title}
        subtitle={drinken.cocktails.section.subtitle}
        variant={drinken.cocktails.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {drinken.cocktails.intro}
        </p>
        <DrinkMenuBlock categories={menuData.cocktails.categories} />
      </Section>

      {/* Wine Menu */}
      <Section
        id={drinken.wines.section.id}
        title={drinken.wines.section.title}
        subtitle={drinken.wines.section.subtitle}
        variant={drinken.wines.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {drinken.wines.intro}
        </p>
        <DrinkMenuBlock categories={menuData.wines.categories} />
      </Section>

      <ParallaxSection
        id={drinken.parallax[1].id}
        imageSrc={drinken.parallax[1].imageSrc}
        height={drinken.parallax[1].height}
      />

      {/* Beer Menu */}
      <Section
        id={drinken.beers.section.id}
        title={drinken.beers.section.title}
        subtitle={drinken.beers.section.subtitle}
        variant={drinken.beers.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {drinken.beers.intro}
        </p>
        <DrinkMenuBlock categories={menuData.beers.categories} />
      </Section>

      {/* Bar Gallery */}
      <Section
        id={drinken.gallery.section.id}
        title={drinken.gallery.section.title}
        subtitle={drinken.gallery.section.subtitle}
        variant={drinken.gallery.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {drinken.gallery.intro}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drinken.gallery.images.map((img, i) => (
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
        id={drinken.desserts.section.id}
        title={drinken.desserts.section.title}
        subtitle={drinken.desserts.section.subtitle}
        variant={drinken.desserts.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {drinken.desserts.intro}
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {drinken.desserts.items.map((dessert) => (
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
