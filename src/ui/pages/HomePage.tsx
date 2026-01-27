import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { ParallaxSection } from '../components/ParallaxSection'
import { Section } from '../components/Section'
import { useSeo } from '../useSeo'
import home from '../../content/pages/home.json'

// Solid Icon for bullet points
function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[var(--primary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  )
}

export function HomePage() {
  useSeo(home.seo)

  return (
    <div>
      {/* Main Event - Featured Card with Image */}
      <Section
        id={home.mainEvent.section.id}
        title={home.mainEvent.section.title}
        subtitle={home.mainEvent.section.subtitle}
        variant={home.mainEvent.section.variant}
      >
        <div className="glass-card rounded-[var(--radius-card)] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px]">
              <img
                src={home.mainEvent.image.src}
                alt={home.mainEvent.image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-medium tracking-wider rounded">
                  {home.mainEvent.image.badge}
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl tracking-wider">{home.mainEvent.content.heading}</h3>
              <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                {home.mainEvent.content.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--muted-foreground)]">
                {home.mainEvent.content.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                {home.mainEvent.content.ctas.map((cta) => (
                  <a
                    key={cta.href}
                    className={`cta-link ${
                      cta.style === 'secondary'
                        ? 'bg-[var(--secondary)] text-[var(--secondary-foreground)]'
                        : 'bg-[var(--muted)] text-[var(--foreground)]'
                    }`}
                    href={cta.href}
                  >
                    {cta.label}
                    <span aria-hidden="true">&#8594;</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ParallaxSection
        id={home.parallax[0].id}
        imageSrc={home.parallax[0].imageSrc}
        height={home.parallax[0].height}
      />

      <Section
        id={home.services.section.id}
        title={home.services.section.title}
        subtitle={home.services.section.subtitle}
        variant={home.services.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {home.services.intro}
        </p>
        <CardGrid columns={4}>
          {home.services.cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              image={card.image}
              imageAlt={card.imageAlt}
              footer={
                <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href={card.cta.href}>
                  {card.cta.label}
                  <span aria-hidden="true">&#8594;</span>
                </a>
              }
            />
          ))}
        </CardGrid>
      </Section>

      <Section
        id={home.menus.section.id}
        title={home.menus.section.title}
        subtitle={home.menus.section.subtitle}
        variant={home.menus.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {home.menus.intro}
        </p>
        <CardGrid columns={4}>
          {home.menus.cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              image={card.image}
              imageAlt={card.imageAlt}
              footer={
                <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href={card.cta.href}>
                  {card.cta.label}
                  <span aria-hidden="true">&#8594;</span>
                </a>
              }
            />
          ))}
        </CardGrid>
      </Section>

      <ParallaxSection
        id={home.parallax[1].id}
        imageSrc={home.parallax[1].imageSrc}
        height={home.parallax[1].height}
      />
    </div>
  )
}
