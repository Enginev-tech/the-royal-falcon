import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { Section } from '../components/Section'
import { ParallaxSection } from '../components/ParallaxSection'
import { useSeo } from '../useSeo'
import { useState } from 'react'
import entertainment from '../../content/pages/entertainment.json'

// Solid Icons
function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[var(--primary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-[var(--secondary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  )
}

function UserIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--primary-foreground)]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
    </svg>
  )
}

const gameRules = entertainment.gameRules as Record<
  string,
  { title: string; intro: string; rules: string[]; tips: string[] }
>

export function EntertainmentPage() {
  const [selectedGame, setSelectedGame] = useState<keyof typeof gameRules>(
    Object.keys(gameRules)[0] as keyof typeof gameRules,
  )
  const [memberFormOpen, setMemberFormOpen] = useState(false)

  useSeo(entertainment.seo)

  return (
    <div>
      {/* Games Intro */}
      <Section
        id={entertainment.gamesIntro.section.id}
        title={entertainment.gamesIntro.section.title}
        subtitle={entertainment.gamesIntro.section.subtitle}
        variant={entertainment.gamesIntro.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {entertainment.gamesIntro.intro}
        </p>
        <CardGrid columns={4}>
          {entertainment.gamesIntro.cards.map((card) => (
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
        id={entertainment.parallax[0].id}
        imageSrc={entertainment.parallax[0].imageSrc}
        height={entertainment.parallax[0].height}
      />

      {/* Game Rules Section */}
      <Section
        id={entertainment.gameRulesSection.section.id}
        title={entertainment.gameRulesSection.section.title}
        subtitle={entertainment.gameRulesSection.section.subtitle}
        variant={entertainment.gameRulesSection.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {entertainment.gameRulesSection.intro}
        </p>
        {/* Game Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(Object.keys(gameRules) as Array<keyof typeof gameRules>).map((game) => (
            <button
              key={game}
              onClick={() => setSelectedGame(game)}
              className={`px-6 py-3 rounded-lg font-medium tracking-wide transition-all ${
                selectedGame === game
                  ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                  : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--accent)]'
              }`}
            >
              {gameRules[game].title}
            </button>
          ))}
        </div>

        {/* Selected Game Rules */}
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl tracking-wider mb-4">{gameRules[selectedGame].title}</h3>
              <p className="text-[var(--muted-foreground)] mb-6">
                {gameRules[selectedGame].intro}
              </p>
              
              <h4 className="text-lg text-[var(--primary)] mb-4">Regels</h4>
              <ul className="space-y-3">
                {gameRules[selectedGame].rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--muted-foreground)]">
                    <CheckIcon />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg text-[var(--primary)] mb-4">Pro Tips</h4>
              <div className="space-y-4">
                {gameRules[selectedGame].tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[var(--muted)] rounded-lg">
                    <StarIcon />
                    <span className="text-[var(--foreground)]">{tip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[var(--accent)] rounded-lg">
                <h4 className="text-lg mb-3">{entertainment.gameRulesSection.helpCard.title}</h4>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                  {entertainment.gameRulesSection.helpCard.description}
                </p>
                <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href={entertainment.gameRulesSection.helpCard.cta.href}>
                  {entertainment.gameRulesSection.helpCard.cta.label}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing & Booking */}
      <Section
        id={entertainment.pricing.section.id}
        title={entertainment.pricing.section.title}
        subtitle={entertainment.pricing.section.subtitle}
        variant={entertainment.pricing.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {entertainment.pricing.intro}
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl tracking-wider">Tarieven</h3>
              <ul className="mt-6 space-y-4">
                {entertainment.pricing.items.map((item, index) => {
                  const isLast = index === entertainment.pricing.items.length - 1
                  const isFree = item.price === 'Gratis'
                  return (
                    <li
                      key={item.name}
                      className={`flex justify-between items-start ${
                        isLast ? '' : 'border-b border-[var(--border)] pb-3'
                      }`}
                    >
                      <div>
                        <span className="text-[var(--foreground)] font-medium">{item.name}</span>
                        <p className="text-sm text-[var(--muted-foreground)]">{item.description}</p>
                      </div>
                      <span
                        className={`font-semibold text-lg ${
                          isFree ? 'text-[var(--secondary)]' : 'text-[var(--primary)]'
                        }`}
                      >
                        {item.price}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl tracking-wider">{entertainment.pricing.booking.title}</h3>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                {entertainment.pricing.booking.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {entertainment.pricing.booking.ctas.map((cta) => {
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
          </div>
        </div>
      </Section>

      <ParallaxSection
        id={entertainment.parallax[1].id}
        imageSrc={entertainment.parallax[1].imageSrc}
        height={entertainment.parallax[1].height}
      />

      {/* SV Valkenhof Club Section */}
      <Section
        id={entertainment.club.section.id}
        title={entertainment.club.section.title}
        subtitle={entertainment.club.section.subtitle}
        variant={entertainment.club.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {entertainment.club.intro}
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Club Info */}
          <div className="glass-card rounded-[var(--radius-card)] overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={entertainment.club.info.image.src}
                alt={entertainment.club.info.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl tracking-wider">{entertainment.club.info.title}</h3>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                {entertainment.club.info.description}
              </p>
              
              <h4 className="text-lg text-[var(--primary)] mt-6 mb-3">{entertainment.club.info.benefitsTitle}</h4>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                {entertainment.club.info.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckIcon />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-[var(--muted)] rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[var(--foreground)] font-medium">{entertainment.club.info.fee.label}</span>
                    <p className="text-xs text-[var(--muted-foreground)]">{entertainment.club.info.fee.note}</p>
                  </div>
                  <span className="text-[var(--primary)] font-bold text-2xl">{entertainment.club.info.fee.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Membership Form */}
          <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
            <h3 className="text-2xl tracking-wider mb-6">{entertainment.club.membership.title}</h3>
            
            {!memberFormOpen ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-[var(--primary)] rounded-full flex items-center justify-center">
                  <UserIcon />
                </div>
                <p className="text-[var(--muted-foreground)] mb-6">
                  {entertainment.club.membership.intro}
                </p>
                <button 
                  onClick={() => setMemberFormOpen(true)}
                  className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                >
                  {entertainment.club.membership.ctaLabel}
                  <span aria-hidden>→</span>
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-[var(--muted-foreground)] mb-2">
                    {entertainment.club.membership.form.fields.name} *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                    placeholder="Je volledige naam"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted-foreground)] mb-2">
                    {entertainment.club.membership.form.fields.email} *
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                    placeholder="je@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted-foreground)] mb-2">
                    {entertainment.club.membership.form.fields.phone}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                    placeholder="+32 ..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="voorkeur-spel" className="block text-sm text-[var(--muted-foreground)] mb-2">
                      {entertainment.club.membership.form.fields.gamePreference}
                    </label>
                    <select 
                      id="voorkeur-spel"
                      title="Selecteer je voorkeur spel"
                      className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                    >
                      {entertainment.club.membership.form.options.gamePreference.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ervaring" className="block text-sm text-[var(--muted-foreground)] mb-2">
                      {entertainment.club.membership.form.fields.experience}
                    </label>
                    <select 
                      id="ervaring"
                      title="Selecteer je ervaringsniveau"
                      className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                    >
                      {entertainment.club.membership.form.options.experience.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    type="submit"
                    className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)] flex-1 justify-center"
                  >
                    {entertainment.club.membership.form.submitLabel}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setMemberFormOpen(false)}
                    className="px-6 py-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  >
                    {entertainment.club.membership.form.cancelLabel}
                  </button>
                </div>
              </form>
            )}

            {/* Club Schedule */}
            <div className="mt-8 pt-8 border-t border-[var(--border)]">
              <h4 className="text-lg text-[var(--primary)] mb-4">{entertainment.club.schedule.title}</h4>
              <ul className="space-y-3 text-sm">
                {entertainment.club.schedule.items.map((item) => (
                  <li key={item.day} className="flex justify-between">
                    <span className="text-[var(--muted-foreground)]">{item.day}</span>
                    <span className="text-[var(--foreground)]">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
