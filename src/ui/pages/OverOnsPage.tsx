import { ParallaxSection } from '../components/ParallaxSection'
import { Section } from '../components/Section'
import { TeamSection } from '../components/TeamSection'
import { useSeo } from '../useSeo'
import overOns from '../../content/pages/over-ons.json'

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
  useSeo(overOns.seo)

  const valueIcons = {
    quality: <QualityIcon />,
    hospitality: <HeartIcon />,
    experience: <GameIcon />,
    community: <CommunityIcon />,
  }

  return (
    <div>
      {/* About Section */}
      <Section
        id={overOns.about.section.id}
        title={overOns.about.section.title}
        subtitle={overOns.about.section.subtitle}
        variant={overOns.about.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {overOns.about.intro}
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <article className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                {overOns.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            </div>
            <div className="relative">
              <img
                src={overOns.about.image.src}
                alt={overOns.about.image.alt}
                className="w-full rounded-[var(--radius-card)] aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[var(--radius-card)]" />
            </div>
          </div>
        </div>
      </Section>

      <ParallaxSection
        id={overOns.parallax[0].id}
        imageSrc={overOns.parallax[0].imageSrc}
        height={overOns.parallax[0].height}
      />

      {/* Values */}
      <Section
        id={overOns.values.section.id}
        title={overOns.values.section.title}
        subtitle={overOns.values.section.subtitle}
        variant={overOns.values.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {overOns.values.intro}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {overOns.values.items.map((value) => (
            <div key={value.title} className="glass-card rounded-[var(--radius-card)] p-6 text-center">
              <div className="flex justify-center mb-4">{valueIcons[value.key as keyof typeof valueIcons]}</div>
              <h3 className="text-xl tracking-wider">{value.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] mt-3 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team - Custom Design */}
      <TeamSection />

      <ParallaxSection
        id={overOns.parallax[1].id}
        imageSrc={overOns.parallax[1].imageSrc}
        height={overOns.parallax[1].height}
      />

      {/* Location */}
      <Section
        id={overOns.location.section.id}
        title={overOns.location.section.title}
        subtitle={overOns.location.section.subtitle}
        variant={overOns.location.section.variant}
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {overOns.location.intro}
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl tracking-wider">{overOns.location.address.name}</h3>
              <address className="not-italic mt-4 space-y-2 text-[var(--muted-foreground)]">
                <p className="text-[var(--foreground)] font-medium">{overOns.location.address.street}</p>
                <p>{overOns.location.address.city}</p>
                <p>{overOns.location.address.country}</p>
              </address>
              <div className="mt-6 space-y-2 text-sm text-[var(--muted-foreground)]">
                <p>
                  <span className="text-[var(--foreground)]">Tel:</span>{' '}
                  <a href={`tel:${overOns.location.address.phone}`} className="hover:text-[var(--foreground)]">
                    {overOns.location.address.phone}
                  </a>
                </p>
                <p>
                  <span className="text-[var(--foreground)]">Email:</span>{' '}
                  <a href={`mailto:${overOns.location.address.email}`} className="hover:text-[var(--foreground)]">
                    {overOns.location.address.email}
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl tracking-wider">Openingstijden</h3>
              <ul className="mt-4 space-y-3">
                {overOns.location.hours.map((hour, index) => (
                  <li
                    key={hour.label}
                    className={`flex justify-between ${
                      index === overOns.location.hours.length - 1
                        ? ''
                        : 'border-b border-[var(--border)] pb-2'
                    }`}
                  >
                    <span className="text-[var(--muted-foreground)]">{hour.label}</span>
                    <span className="text-[var(--foreground)]">{hour.value}</span>
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
