import { ParallaxSection } from '../components/ParallaxSection'
import { Section } from '../components/Section'
import { TeamSection } from '../components/TeamSection'
import { useSeo } from '../useSeo'

// Solid Icons
function QualityIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"/>
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
    </svg>
  )
}

function GameIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 9.172a4 4 0 015.656 0L10 8.343l-.828-.829a4 4 0 00-5.656 0 4 4 0 000 5.656l.828.83.829-.829a4 4 0 000-5.657zM14.828 9.172a4 4 0 00-5.656 0L10 8.343l.828-.829a4 4 0 015.656 0 4 4 0 010 5.656l-.828.83-.829-.829a4 4 0 000-5.657z"/>
      <path d="M7 9H5v2h2V9zM15 9h-2v2h2V9zM9 11H7v2h2v-2zM13 11h-2v2h2v-2z"/>
    </svg>
  )
}

function CommunityIcon() {
  return (
    <svg className="w-10 h-10 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
    </svg>
  )
}

export function OverOnsPage() {
  useSeo({
    title: 'Over ons – The Royal Falcon Arendonk',
    description:
      'The Royal Falcon in Arendonk: restaurant, bar en entertainment onder één dak. Ontdek ons verhaal, leer het team kennen en ervaar onze unieke sfeer.',
    path: '/over-ons',
  })

  return (
    <div>
      {/* About Section */}
      <Section
        id="about"
        title="Ons Verhaal"
        subtitle="The Royal Falcon is meer dan een restaurant — het is een plek waar eten, drinken en entertainment samenkomen tot één beleving."
        variant="decorated"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          In het hart van Arendonk bouwen we elke dag aan een warme plek voor locals en bezoekers.
          Van culinair dineren tot live sport en ontspanning: The Royal Falcon is jouw vaste adres.
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <article className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                <p>
                  In het hart van Arendonk, aan De Valken 11, vind je The Royal Falcon — een plek 
                  waar je terecht kunt voor alles. Of je nu komt voor een uitgebreid diner, een 
                  snelle lunch, een cocktailavond met vrienden of een potje snooker: wij hebben 
                  het allemaal onder één dak.
                </p>
                <p>
                  Onze keuken serveert van signature steaks tot verse salades, van huisgemaakte 
                  pasta tot kindvriendelijke gerechten. Aan de bar vind je handgemaakte cocktails, 
                  een zorgvuldig geselecteerde wijnkaart en de beste Belgische bieren.
                </p>
                <p>
                  Maar wat ons écht uniek maakt? De combinatie met entertainment. Na je diner 
                  schuif je door naar een potje snooker, daag je vrienden uit bij darts of 
                  blijf je hangen voor live sports op groot scherm. Dat is The Royal Falcon.
                </p>
              </article>
            </div>
            <div className="relative">
              <img
                src="/hero/hero-bar01.png"
                alt="The Royal Falcon bar interieur"
                className="w-full rounded-[var(--radius-card)] aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[var(--radius-card)]" />
            </div>
          </div>
        </div>
      </Section>

      <ParallaxSection id="about-parallax" imageSrc="/parallax/para-6.png" height="md" />

      {/* Values */}
      <Section
        id="values"
        title="Waar We Voor Staan"
        subtitle="De pijlers van The Royal Falcon — wat ons drijft en wat je mag verwachten."
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Gastvrijheid, kwaliteit en beleving vormen de basis van onze service. We streven ernaar om elke gast
          in Arendonk een onvergetelijke avond uit te bezorgen.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <QualityIcon />,
              title: 'Kwaliteit',
              desc: 'Verse ingrediënten, met zorg bereid. Van steak tot cocktail — alles is van topkwaliteit.',
            },
            {
              icon: <HeartIcon />,
              title: 'Gastvrijheid',
              desc: 'Een warm welkom voor iedereen. Of je nu alleen komt of met een groep — je bent thuis.',
            },
            {
              icon: <GameIcon />,
              title: 'Beleving',
              desc: 'Meer dan eten en drinken. Entertainment, events en sfeer maken je bezoek compleet.',
            },
            {
              icon: <CommunityIcon />,
              title: 'Community',
              desc: 'Verbonden met Arendonk. Van lokale clubs tot vaste gasten — we zijn er voor iedereen.',
            },
          ].map((value) => (
            <div key={value.title} className="glass-card rounded-[var(--radius-card)] p-6 text-center">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl tracking-wider">{value.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] mt-3 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team - Custom Design */}
      <TeamSection />

      <ParallaxSection id="team-parallax" imageSrc="/parallax/para-1.png" height="sm" />

      {/* Location */}
      <Section
        id="location"
        title="Waar Je Ons Vindt"
        subtitle="Centraal gelegen in Arendonk, met ruime parking vlakbij."
        variant="decorated"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          The Royal Falcon ligt centraal in Arendonk en is ideaal voor een avond uit met familie, vrienden of collega’s.
          Plan je bezoek en combineer diner, bar en entertainment op één locatie.
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl tracking-wider">The Royal Falcon</h3>
              <address className="not-italic mt-4 space-y-2 text-[var(--muted-foreground)]">
                <p className="text-[var(--foreground)] font-medium">De Valken 11</p>
                <p>2360 Arendonk</p>
                <p>België</p>
              </address>
              <div className="mt-6 space-y-2 text-sm text-[var(--muted-foreground)]">
                <p>
                  <span className="text-[var(--foreground)]">Tel:</span>{' '}
                  <a href="tel:+32468303077" className="hover:text-[var(--foreground)]">+32 468 30 30 77</a>
                </p>
                <p>
                  <span className="text-[var(--foreground)]">Email:</span>{' '}
                  <a href="mailto:info@theroyalfalcon.be" className="hover:text-[var(--foreground)]">info@theroyalfalcon.be</a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl tracking-wider">Openingstijden</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--muted-foreground)]">Maandag</span>
                  <span className="text-[var(--foreground)]">Gesloten</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--muted-foreground)]">Dinsdag - Donderdag</span>
                  <span className="text-[var(--foreground)]">17:00 - 01:00</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--muted-foreground)]">Vrijdag</span>
                  <span className="text-[var(--foreground)]">17:00 - 02:00</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--muted-foreground)]">Zaterdag</span>
                  <span className="text-[var(--foreground)]">12:00 - 02:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Zondag</span>
                  <span className="text-[var(--foreground)]">12:00 - 00:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
