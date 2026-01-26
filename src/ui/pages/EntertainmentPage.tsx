import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { Section } from '../components/Section'
import { ParallaxSection } from '../components/ParallaxSection'
import { useSeo } from '../useSeo'
import { useState } from 'react'
import entertainmentContent from '../../../content/pages/entertainment.json'

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

type GameRule = (typeof entertainmentContent.gameRules)[number]
const gameRules = entertainmentContent.gameRules.reduce<Record<string, GameRule>>((acc, game) => {
  acc[game.key] = game
  return acc
}, {})

export function EntertainmentPage() {
  const [selectedGame, setSelectedGame] = useState<keyof typeof gameRules>(entertainmentContent.gameRules[0].key)
  const [memberFormOpen, setMemberFormOpen] = useState(false)

  useSeo({
    title: entertainmentContent.seo.title,
    description: entertainmentContent.seo.description,
    path: '/entertainment',
  })

  return (
    <div>
      {/* Games Intro */}
      <Section
        id="games"
        title={entertainmentContent.games.title}
        subtitle={entertainmentContent.games.subtitle}
        variant="decorated"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {entertainmentContent.games.intro}
        </p>
        <CardGrid columns={4}>
          <Card
            title="Snooker"
            description="Twee professionele snookertafels in perfecte conditie."
            image="/hero/hero-snooker.png"
            imageAlt="Professionele snooker tafel"
          />
          <Card
            title="Biljart"
            description="Klassiek poolbiljart voor iedereen — van beginners tot gevorderden."
            image="/footer/snooker-small-01.png"
            imageAlt="Biljart tafel"
          />
          <Card
            title="Darts"
            description="Van casual throws tot serieuze competitie."
            image="/footer/snooker-small-02.png"
            imageAlt="Darts bord"
          />
          <Card
            title="FIFA & Gaming"
            description="Daag je vrienden uit voor een potje FIFA op groot scherm."
            image="/footer/snooker-small-03.png"
            imageAlt="Gaming corner"
          />
        </CardGrid>
      </Section>

      <ParallaxSection id="entertainment-parallax" imageSrc="/parallax/para-9.png" height="md" />

      {/* Game Rules Section */}
      <Section
        id="spelregels"
        title={entertainmentContent.rules.title}
        subtitle={entertainmentContent.rules.subtitle}
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {entertainmentContent.rules.intro}
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
                <h4 className="text-lg mb-3">Hulp nodig?</h4>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                  Onze staff helpt je graag met de regels of geeft tips om je spel te verbeteren.
                </p>
                <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/contact">
                  Vraag aan de bar
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing & Booking */}
      <Section
        id="pricing"
        title={entertainmentContent.pricing.title}
        subtitle={entertainmentContent.pricing.subtitle}
        variant="muted"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {entertainmentContent.pricing.intro}
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl tracking-wider">Tarieven</h3>
              <ul className="mt-6 space-y-4">
                {entertainmentContent.pricing.items.map((item, index) => (
                  <li
                    key={item.name}
                    className={`flex justify-between items-start ${
                      index < entertainmentContent.pricing.items.length - 1
                        ? 'border-b border-[var(--border)] pb-3'
                        : ''
                    }`}
                  >
                    <div>
                      <span className="text-[var(--foreground)] font-medium">{item.name}</span>
                      <p className="text-sm text-[var(--muted-foreground)]">{item.note}</p>
                    </div>
                    <span
                      className={`font-semibold text-lg ${
                        item.accent === 'secondary' ? 'text-[var(--secondary)]' : 'text-[var(--primary)]'
                      }`}
                    >
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl tracking-wider">{entertainmentContent.pricing.bookingTitle}</h3>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                {entertainmentContent.pricing.bookingIntro}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {entertainmentContent.pricing.bookingCtas.map((cta) => (
                  <a
                    key={cta.label}
                    className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                    href={cta.href}
                    target={cta.href.startsWith('http') ? '_blank' : undefined}
                    rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {cta.label}
                    <span aria-hidden>→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ParallaxSection id="entertainment-parallax-2" imageSrc="/parallax/para-4.png" height="sm" />

      {/* SV Valkenhof Club Section */}
      <Section
        id="sv-valkenhof"
        title={entertainmentContent.club.title}
        subtitle={entertainmentContent.club.subtitle}
        variant="decorated"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {entertainmentContent.club.intro}
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Club Info */}
          <div className="glass-card rounded-[var(--radius-card)] overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="/hero/hero-snooker.png"
                alt="SV Valkenhof clubavond"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl tracking-wider">{entertainmentContent.club.aboutTitle}</h3>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                {entertainmentContent.club.aboutText}
              </p>
              
              <h4 className="text-lg text-[var(--primary)] mt-6 mb-3">{entertainmentContent.club.benefitsTitle}</h4>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                {entertainmentContent.club.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckIcon />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-[var(--muted)] rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[var(--foreground)] font-medium">{entertainmentContent.club.feeLabel}</span>
                    <p className="text-xs text-[var(--muted-foreground)]">{entertainmentContent.club.feeNote}</p>
                  </div>
                  <span className="text-[var(--primary)] font-bold text-2xl">{entertainmentContent.club.feeAmount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Membership Form */}
          <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
            <h3 className="text-2xl tracking-wider mb-6">{entertainmentContent.club.memberFormTitle}</h3>
            
            {!memberFormOpen ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-[var(--primary)] rounded-full flex items-center justify-center">
                  <UserIcon />
                </div>
                <p className="text-[var(--muted-foreground)] mb-6">
                  {entertainmentContent.club.memberFormIntro}
                </p>
                <button 
                  onClick={() => setMemberFormOpen(true)}
                  className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                >
                  {entertainmentContent.club.memberFormCta}
                  <span aria-hidden>→</span>
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-[var(--muted-foreground)] mb-2">Naam *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                    placeholder="Je volledige naam"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted-foreground)] mb-2">Email *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                    placeholder="je@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted-foreground)] mb-2">Telefoon</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                    placeholder="+32 ..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="voorkeur-spel" className="block text-sm text-[var(--muted-foreground)] mb-2">Voorkeur spel</label>
                    <select 
                      id="voorkeur-spel"
                      title="Selecteer je voorkeur spel"
                      className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                    >
                      <option value="">Selecteer...</option>
                      <option value="snooker">Snooker</option>
                      <option value="biljart">Biljart</option>
                      <option value="beide">Beide</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ervaring" className="block text-sm text-[var(--muted-foreground)] mb-2">Ervaring</label>
                    <select 
                      id="ervaring"
                      title="Selecteer je ervaringsniveau"
                      className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
                    >
                      <option value="">Selecteer...</option>
                      <option value="beginner">Beginner</option>
                      <option value="gemiddeld">Gemiddeld</option>
                      <option value="gevorderd">Gevorderd</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    type="submit"
                    className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)] flex-1 justify-center"
                  >
                    Verstuur aanmelding
                  </button>
                  <button 
                    type="button"
                    onClick={() => setMemberFormOpen(false)}
                    className="px-6 py-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  >
                    Annuleren
                  </button>
                </div>
              </form>
            )}

            {/* Club Schedule */}
            <div className="mt-8 pt-8 border-t border-[var(--border)]">
              <h4 className="text-lg text-[var(--primary)] mb-4">{entertainmentContent.club.scheduleTitle}</h4>
              <ul className="space-y-3 text-sm">
                {entertainmentContent.club.schedule.map((slot) => (
                  <li key={slot.day} className="flex justify-between">
                    <span className="text-[var(--muted-foreground)]">{slot.day}</span>
                    <span className="text-[var(--foreground)]">{slot.time}</span>
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
