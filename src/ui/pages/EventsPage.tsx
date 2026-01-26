import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { Section } from '../components/Section'
import { ParallaxSection } from '../components/ParallaxSection'
import { useSeo } from '../useSeo'
import { SportsSm01Widget } from '../../components/sports-01'
import eventsContent from '../../../content/pages/events.json'

// Solid Icons
function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[var(--primary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
    </svg>
  )
}

function TvIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 5a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm3 10h8a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1a1 1 0 011-1z"/>
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v.5A1.5 1.5 0 001.5 7H1v1h.5A1.5 1.5 0 003 9.5V10a2 2 0 002 2h1.05a2.5 2.5 0 004.9 0H12a2 2 0 002-2v-.5A1.5 1.5 0 0015.5 8H16V7h-.5A1.5 1.5 0 0014 5.5V5a2 2 0 00-2-2H5zm5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
    </svg>
  )
}

const {
  agenda,
  weekAgenda,
  calendar,
  liveSport,
  liveMatches,
  recentResults,
  standings,
  mainEvents,
  specialEvents,
} = eventsContent

export function EventsPage() {
  useSeo({
    title: eventsContent.seo.title,
    description: eventsContent.seo.description,
    path: '/events',
  })

  return (
    <div>
      {/* Week Agenda Overview */}
      <Section
        id="agenda"
        title={agenda.title}
        subtitle={agenda.subtitle}
        variant="decorated"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {agenda.intro}
        </p>
        <div className="glass-card rounded-[var(--radius-card)] overflow-hidden">
          <div className="grid md:grid-cols-7">
            {weekAgenda.map((day, i) => (
              <div 
                key={i}
                className={`p-4 border-b md:border-b-0 md:border-r border-[var(--border)] last:border-r-0 ${
                  day.special ? 'bg-[var(--accent)]' : ''
                }`}
              >
                <div className="text-center mb-3">
                  <span className="text-xs text-[var(--muted-foreground)] uppercase tracking-wider">{day.day}</span>
                  <p className="text-lg font-medium text-[var(--foreground)]">{day.date}</p>
                </div>
                <ul className="space-y-2">
                  {day.events.map((event, j) => (
                    <li key={j} className="text-xs text-[var(--muted-foreground)] flex items-start gap-1">
                      <CheckIcon />
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href={agenda.ctaHref}>
            <CalendarIcon />
            {agenda.ctaLabel}
            <span aria-hidden>→</span>
          </a>
        </div>
      </Section>

      <Section
        id="kalender"
        title={calendar.title}
        subtitle={calendar.subtitle}
        variant="plain"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="glass-card rounded-[var(--radius-card)] overflow-hidden">
            <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between">
              <h3 className="text-lg tracking-wider">{calendar.month}</h3>
              <span className="text-xs text-[var(--muted-foreground)]">Arendonk · The Royal Falcon</span>
            </div>
            <div className="grid grid-cols-7 text-xs text-[var(--muted-foreground)] border-b border-[var(--border)]">
              {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map((label) => (
                <div key={label} className="py-3 text-center font-medium">
                  {label}
                </div>
              ))}
            </div>
            <div className="grid grid-rows-5">
              {calendar.weeks.map((week, row) => (
                <div key={row} className="grid grid-cols-7 border-b border-[var(--border)] last:border-b-0">
                  {week.days.map((day, col) => (
                    <div key={`${row}-${col}`} className="min-h-[88px] border-r border-[var(--border)] last:border-r-0 p-2">
                      {day.day ? (
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium text-[var(--foreground)]">{day.day}</span>
                          {day.events?.map((event) => (
                            <span key={event} className="text-[10px] text-[var(--primary)] bg-[var(--accent)] px-2 py-0.5 rounded">
                              {event}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-sm text-[var(--muted-foreground)]"> </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass-card rounded-[var(--radius-card)] p-6">
              <h3 className="text-lg tracking-wider">{calendar.highlightsTitle}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{calendar.highlightsIntro}</p>
              <ul className="mt-4 space-y-4">
                {calendar.highlights.map((item) => (
                  <li key={item.title} className="border-b border-[var(--border)] pb-3 last:border-b-0">
                    <p className="text-xs text-[var(--muted-foreground)]">{item.date}</p>
                    <p className="text-sm text-[var(--foreground)] font-medium">{item.title}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-[var(--radius-card)] p-6">
              <h3 className="text-lg tracking-wider">{calendar.planTitle}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{calendar.planIntro}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href={calendar.planPrimaryCta.href}>
                  {calendar.planPrimaryCta.label}
                  <span aria-hidden>→</span>
                </a>
                <a className="cta-link bg-[var(--muted)] text-[var(--foreground)]" href={calendar.planSecondaryCta.href}>
                  {calendar.planSecondaryCta.label}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ParallaxSection id="events-parallax-1" imageSrc="/parallax/para-6.png" height="md" />

      {/* Live TV Sports Section - Wigggle UI inspired */}
      <Section
        id="live-sport"
        title={liveSport.title}
        subtitle={liveSport.subtitle}
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {liveSport.intro}
        </p>
        <div className="grid gap-6 lg:grid-cols-[260px_1fr] items-center mb-8">
          <div className="flex justify-center lg:justify-start">
            <SportsSm01Widget />
          </div>
          <div className="glass-card rounded-[var(--radius-card)]">
            <h3 className="text-lg tracking-wider">{liveSport.highlightsTitle}</h3>
            <p className="mt-3 text-sm text-[var(--muted-foreground)]">
              {liveSport.highlightsIntro}
            </p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Upcoming Matches - Widget Style */}
          <div className="glass-card rounded-[var(--radius-card)] overflow-hidden">
            {/* Widget Header */}
            <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white shadow-lg">
                  <TvIcon />
                </div>
                <div>
                  <h3 className="text-lg font-medium tracking-wide">{liveSport.upcomingTitle}</h3>
                  <p className="text-xs text-[var(--muted-foreground)]">{liveSport.upcomingSubtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-[var(--muted-foreground)]">Live</span>
              </div>
            </div>

            {/* Match List */}
            <div className="divide-y divide-[var(--border)]">
              {liveMatches.map((match, i) => (
                <div 
                  key={i}
                  className="px-6 py-4 hover:bg-[var(--accent)] transition-colors"
                >
                  {/* Competition Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-[var(--primary)] bg-[var(--accent)] px-2 py-1 rounded-full">
                      {match.competition}
                    </span>
                    <div className="flex items-center gap-2">
                      <ClockIcon />
                      <span className="text-sm font-semibold text-[var(--foreground)]">{match.time}</span>
                    </div>
                  </div>
                  
                  {/* Teams - Wigggle UI inspired layout */}
                  <div className="flex items-center justify-between gap-4">
                    {/* Home Team */}
                    <div className="flex-1 text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-[var(--muted)] flex items-center justify-center">
                        <span className="text-lg font-bold text-[var(--foreground)]">{match.home.slice(0, 3).toUpperCase()}</span>
                      </div>
                      <p className="text-sm text-[var(--foreground)] truncate">{match.home}</p>
                    </div>
                    
                    {/* VS Badge */}
                    <div className="shrink-0">
                      <span className="px-3 py-1.5 text-xs font-medium text-[var(--muted-foreground)] bg-[var(--muted)] rounded-full">
                        VS
                      </span>
                    </div>
                    
                    {/* Away Team */}
                    <div className="flex-1 text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-[var(--muted)] flex items-center justify-center">
                        <span className="text-lg font-bold text-[var(--foreground)]">{match.away.slice(0, 3).toUpperCase()}</span>
                      </div>
                      <p className="text-sm text-[var(--foreground)] truncate">{match.away}</p>
                    </div>
                  </div>
                  
                  {/* Channel */}
                  <div className="mt-3 text-center">
                    <span className="text-xs text-[var(--secondary)] font-medium">{match.channel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Standings */}
          <div className="space-y-6">
            {/* Recent Results - Widget Style */}
            <div className="glass-card rounded-[var(--radius-card)] overflow-hidden">
              {/* Widget Header */}
              <div className="px-6 py-4 border-b border-[var(--border)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] flex items-center justify-center text-white shadow-lg">
                  <TrophyIcon />
                </div>
                <div>
                  <h3 className="text-lg font-medium tracking-wide">{liveSport.recentTitle}</h3>
                  <p className="text-xs text-[var(--muted-foreground)]">{liveSport.recentSubtitle}</p>
                </div>
              </div>

              {/* Results List */}
              <div className="divide-y divide-[var(--border)]">
                {recentResults.map((result, i) => (
                  <div key={i} className="px-6 py-4">
                    <span className="text-xs text-[var(--primary)] font-medium">{result.competition}</span>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-[var(--foreground)] flex-1 truncate">{result.home}</span>
                      <div className="shrink-0 mx-3 flex items-center gap-1">
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-bold rounded-lg bg-[var(--muted)] text-[var(--foreground)]">
                          {result.homeScore}
                        </span>
                        <span className="text-[var(--muted-foreground)]">-</span>
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-bold rounded-lg bg-[var(--muted)] text-[var(--foreground)]">
                          {result.awayScore}
                        </span>
                      </div>
                      <span className="text-sm text-[var(--foreground)] flex-1 text-right truncate">{result.away}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Standings - Widget Style */}
            <div className="glass-card rounded-[var(--radius-card)] overflow-hidden">
              {/* Widget Header */}
              <div className="px-6 py-4 border-b border-[var(--border)]">
                <h3 className="text-lg font-medium tracking-wide">{liveSport.standingsTitle}</h3>
                <p className="text-xs text-[var(--muted-foreground)]">{liveSport.standingsSubtitle}</p>
              </div>

              <div className="p-6 grid gap-6 sm:grid-cols-2">
                {standings.map((league) => (
                  <div key={league.league} className="space-y-2">
                    <h4 className="text-sm font-semibold text-[var(--primary)] flex items-center gap-2">
                      <span className="w-1 h-4 bg-[var(--primary)] rounded-full" />
                      {league.league}
                    </h4>
                    <div className="space-y-1">
                      {league.teams.map((team) => (
                        <div 
                          key={team.pos} 
                          className={`flex justify-between items-center text-xs py-2 px-3 rounded-lg ${
                            team.pos <= 2 ? 'bg-[var(--accent)]' : ''
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold ${
                              team.pos === 1 ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 
                              team.pos === 2 ? 'bg-[var(--secondary)] text-[var(--secondary-foreground)]' : 
                              'text-[var(--muted-foreground)]'
                            }`}>
                              {team.pos}
                            </span>
                            <span className="text-[var(--foreground)]">{team.team}</span>
                          </div>
                          <span className="font-bold text-[var(--foreground)]">{team.pts}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ParallaxSection id="events-parallax-2" imageSrc="/parallax/para-8.png" height="sm" />

      {/* Main Events */}
      <Section
        id="main-events"
        title={mainEvents.title}
        subtitle={mainEvents.subtitle}
        variant="muted"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {mainEvents.intro}
        </p>
        <CardGrid columns={3}>
          {mainEvents.items.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              imageAlt={item.imageAlt}
              footer={
                <ul className="space-y-2 text-sm">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <CheckIcon />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </CardGrid>
      </Section>

      {/* Special Events CTA */}
      <Section
        id="special-events"
        title={specialEvents.title}
        subtitle={specialEvents.subtitle}
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          {specialEvents.intro}
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-8 text-center">
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto mb-6">
            {specialEvents.cardText}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href={specialEvents.primaryCta.href}>
              {specialEvents.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a 
              className="cta-link bg-[var(--muted)] text-[var(--foreground)]" 
              href={specialEvents.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {specialEvents.secondaryCta.label}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}
