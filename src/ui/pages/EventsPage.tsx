import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { Section } from '../components/Section'
import { ParallaxSection } from '../components/ParallaxSection'
import { useSeo } from '../useSeo'
import { SportsSm01Widget } from '../../components/sports-01'

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

// Week Agenda Data
const weekAgenda = [
  { day: 'Maandag', date: '13 jan', events: ['Happy Hour 17:00-19:00'], special: false },
  { day: 'Dinsdag', date: '14 jan', events: ['SV Valkenhof Training 19:00', 'Quiz Night 21:00'], special: true },
  { day: 'Woensdag', date: '15 jan', events: ['Champions League Live', 'Cocktail Wednesday'], special: true },
  { day: 'Donderdag', date: '16 jan', events: ['SV Valkenhof Competitie 19:00'], special: false },
  { day: 'Vrijdag', date: '17 jan', events: ['Live DJ 21:00', 'Extended Happy Hour'], special: true },
  { day: 'Zaterdag', date: '18 jan', events: ['Premier League Marathon', 'Snooker Toernooi 14:00'], special: true },
  { day: 'Zondag', date: '19 jan', events: ['Sunday Brunch 11:00-15:00', 'Eredivisie Live'], special: false },
]

const calendarMonth = 'Januari 2026'

const calendarWeeks: Array<Array<{ day: number | null; events?: string[] }>> = [
  [
    { day: null },
    { day: null },
    { day: null },
    { day: 1, events: ['Nieuwjaarsbrunch 11:00'] },
    { day: 2, events: ['Afterwork Cocktails 18:00'] },
    { day: 3, events: ['DJ Night 21:00'] },
    { day: 4 },
  ],
  [
    { day: 5 },
    { day: 6, events: ['Quiz Night 21:00'] },
    { day: 7, events: ['Champions League Live'] },
    { day: 8 },
    { day: 9, events: ['Happy Hour 17:00-19:00'] },
    { day: 10, events: ['Live Sport Special'] },
    { day: 11, events: ['Sunday Brunch'] },
  ],
  [
    { day: 12 },
    { day: 13, events: ['SV Valkenhof Training 19:00'] },
    { day: 14, events: ['Quiz Night 21:00'] },
    { day: 15, events: ['Cocktail Wednesday'] },
    { day: 16, events: ['Live DJ 21:00'] },
    { day: 17, events: ['Premier League Marathon'] },
    { day: 18, events: ['Eredivisie Live'] },
  ],
  [
    { day: 19 },
    { day: 20, events: ['SV Valkenhof Competitie 19:00'] },
    { day: 21, events: ['Champions League Live'] },
    { day: 22 },
    { day: 23, events: ['Live DJ 21:00'] },
    { day: 24, events: ['Snooker Toernooi 14:00'] },
    { day: 25, events: ['Sunday Brunch'] },
  ],
  [
    { day: 26 },
    { day: 27, events: ['Quiz Night 21:00'] },
    { day: 28, events: ['Cocktail Wednesday'] },
    { day: 29 },
    { day: 30, events: ['Happy Hour 17:00-19:00'] },
    { day: 31, events: ['DJ Night 21:00'] },
    { day: null },
  ],
]

const calendarHighlights = [
  {
    date: '6 jan · 21:00',
    title: 'Quiz Night',
    desc: 'Test je kennis met vrienden en win prijzen. Teams tot 6 personen.',
  },
  {
    date: '10 jan · 15:00',
    title: 'Live Sport Special',
    desc: 'Premier League en Champions League live op groot scherm.',
  },
  {
    date: '17 jan · 14:00',
    title: 'Snooker Toernooi',
    desc: 'Open toernooi voor alle niveaus, inschrijven aan de bar.',
  },
  {
    date: '23 jan · 21:00',
    title: 'Weekend DJ Night',
    desc: 'Cocktails, bar bites en DJ sets tot laat.',
  },
]

// Upcoming Live Sports
const liveMatches = [
  { time: '20:45', competition: 'Champions League', home: 'Arsenal', away: 'Bayern München', channel: 'VTM 2' },
  { time: '21:00', competition: 'Champions League', home: 'Real Madrid', away: 'Napoli', channel: 'Play Sports' },
  { time: '15:00', competition: 'Premier League', home: 'Liverpool', away: 'Man United', channel: 'Play Sports' },
  { time: '17:30', competition: 'Premier League', home: 'Arsenal', away: 'Chelsea', channel: 'Play Sports' },
  { time: '14:30', competition: 'Eredivisie', home: 'PSV', away: 'Ajax', channel: 'ESPN' },
  { time: '20:00', competition: 'Jupiler Pro League', home: 'Club Brugge', away: 'Anderlecht', channel: 'Eleven Sports' },
]

// Recent Results
const recentResults = [
  { competition: 'Champions League', home: 'Bayern München', homeScore: 3, away: 'Man United', awayScore: 0 },
  { competition: 'Champions League', home: 'Real Madrid', homeScore: 1, away: 'RB Leipzig', awayScore: 1 },
  { competition: 'Premier League', home: 'Liverpool', homeScore: 4, away: 'Chelsea', awayScore: 1 },
  { competition: 'Eredivisie', home: 'Ajax', homeScore: 2, away: 'Feyenoord', awayScore: 3 },
]

// Standings
const standings = {
  'Premier League': [
    { pos: 1, team: 'Liverpool', pts: 46 },
    { pos: 2, team: 'Arsenal', pts: 44 },
    { pos: 3, team: 'Chelsea', pts: 40 },
    { pos: 4, team: 'Man City', pts: 38 },
    { pos: 5, team: 'Nottingham', pts: 37 },
  ],
  'Jupiler Pro League': [
    { pos: 1, team: 'KRC Genk', pts: 45 },
    { pos: 2, team: 'Club Brugge', pts: 42 },
    { pos: 3, team: 'Union SG', pts: 38 },
    { pos: 4, team: 'Anderlecht', pts: 36 },
    { pos: 5, team: 'Antwerp', pts: 33 },
  ],
}

export function EventsPage() {
  useSeo({
    title: 'Events: live sport, quiz night & meer',
    description:
      'Bekijk onze agenda voor live sport, quiz nights en speciale events bij The Royal Falcon in Arendonk. Elke week iets nieuws te beleven!',
    path: '/events',
  })

  return (
    <div>
      {/* Week Agenda Overview */}
      <Section
        id="agenda"
        title="Week Agenda"
        subtitle="Deze week bij The Royal Falcon — plan je bezoek!"
        variant="decorated"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Ontdek de vaste events in Arendonk, van quiz night en live sport tot DJ-sets en snookertoernooien.
          Combineer je bezoek met diner, cocktails en bar bites voor een complete avond uit.
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
          <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/contact">
            <CalendarIcon />
            Bekijk volledige kalender
            <span aria-hidden>→</span>
          </a>
        </div>
      </Section>

      <Section
        id="kalender"
        title="Volledige Kalender"
        subtitle="Een volledig maandoverzicht met alle events, live sport en special nights."
        variant="plain"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="glass-card rounded-[var(--radius-card)] overflow-hidden">
            <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between">
              <h3 className="text-lg tracking-wider">{calendarMonth}</h3>
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
              {calendarWeeks.map((week, row) => (
                <div key={row} className="grid grid-cols-7 border-b border-[var(--border)] last:border-b-0">
                  {week.map((day, col) => (
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
              <h3 className="text-lg tracking-wider">Highlights deze maand</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Van live sport tot quiz night: plan je avond op basis van jouw favoriete event.
              </p>
              <ul className="mt-4 space-y-4">
                {calendarHighlights.map((item) => (
                  <li key={item.title} className="border-b border-[var(--border)] pb-3 last:border-b-0">
                    <p className="text-xs text-[var(--muted-foreground)]">{item.date}</p>
                    <p className="text-sm text-[var(--foreground)] font-medium">{item.title}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-[var(--radius-card)] p-6">
              <h3 className="text-lg tracking-wider">Plan je bezoek</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Reserveer op tijd voor drukke matchdagen of events. Wij houden graag een tafel voor je vrij.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/contact#booking">
                  Reserveer nu
                  <span aria-hidden>→</span>
                </a>
                <a className="cta-link bg-[var(--muted)] text-[var(--foreground)]" href="/contact">
                  Vraag info
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
        title="Live Sport op TV"
        subtitle="Alle grote wedstrijden op onze grote schermen — met bier, bites en sfeer!"
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Beleef live sport in Arendonk met topcompetities zoals Champions League, Premier League en de Jupiler Pro League.
          Reserveer een tafel en geniet van de beste matchen met bar bites en cocktails.
        </p>
        <div className="grid gap-6 lg:grid-cols-[260px_1fr] items-center mb-8">
          <div className="flex justify-center lg:justify-start">
            <SportsSm01Widget />
          </div>
          <div className="glass-card rounded-[var(--radius-card)]">
            <h3 className="text-lg tracking-wider">Live Highlights</h3>
            <p className="mt-3 text-sm text-[var(--muted-foreground)]">
              Elke week een mix van topwedstrijden, derby’s en toernooien. Op grote schermen, met perfecte zichtlijnen
              en een bar die klaarstaat met cocktails, speciaalbieren en bar bites.
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
                  <h3 className="text-lg font-medium tracking-wide">Komende Wedstrijden</h3>
                  <p className="text-xs text-[var(--muted-foreground)]">Live op onze schermen</p>
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
                  <h3 className="text-lg font-medium tracking-wide">Recente Uitslagen</h3>
                  <p className="text-xs text-[var(--muted-foreground)]">Afgelopen wedstrijden</p>
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
                <h3 className="text-lg font-medium tracking-wide">Standen</h3>
                <p className="text-xs text-[var(--muted-foreground)]">Top 5 per competitie</p>
              </div>

              <div className="p-6 grid gap-6 sm:grid-cols-2">
                {Object.entries(standings).map(([league, teams]) => (
                  <div key={league} className="space-y-2">
                    <h4 className="text-sm font-semibold text-[var(--primary)] flex items-center gap-2">
                      <span className="w-1 h-4 bg-[var(--primary)] rounded-full" />
                      {league}
                    </h4>
                    <div className="space-y-1">
                      {teams.map((team) => (
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
        title="Vaste Events"
        subtitle="Elke week terugkerende highlights bij The Royal Falcon."
        variant="muted"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Onze vaste events zorgen elke week voor sfeer in Arendonk: quiz night, live sport en weekend vibes.
          Kom langs met vrienden of collega’s en maak van je avond een beleving.
        </p>
        <CardGrid columns={3}>
          <Card
            title="Quiz Night"
            description="Elke dinsdag om 21:00. Stel je team samen en win mooie prijzen!"
            image="/events/quiz.png"
            imageAlt="Quiz Night"
            footer={
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <CheckIcon />
                  <span>Teams van max 6 personen</span>
                </li>
                <li className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <CheckIcon />
                  <span>Gratis deelname</span>
                </li>
                <li className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <CheckIcon />
                  <span>Prijzen voor top 3</span>
                </li>
              </ul>
            }
          />

          <Card
            title="Live Sport"
            description="Champions League, Premier League, Eredivisie en meer op grote schermen."
            image="/events/sport.png"
            imageAlt="Live Sport"
            footer={
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <CheckIcon />
                  <span>Meerdere grote schermen</span>
                </li>
                <li className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <CheckIcon />
                  <span>Speciale match menu's</span>
                </li>
                <li className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <CheckIcon />
                  <span>Reserveren aanbevolen</span>
                </li>
              </ul>
            }
          />

          <Card
            title="Weekend Vibes"
            description="Vrijdag en zaterdag: DJ sets, cocktails en een fantastische sfeer."
            image="/events/dj.png"
            imageAlt="Weekend DJ"
            footer={
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <CheckIcon />
                  <span>DJ vanaf 21:00</span>
                </li>
                <li className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <CheckIcon />
                  <span>Cocktail specials</span>
                </li>
                <li className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <CheckIcon />
                  <span>Dansen toegestaan</span>
                </li>
              </ul>
            }
          />
        </CardGrid>
      </Section>

      {/* Special Events CTA */}
      <Section
        id="special-events"
        title="Speciale Events"
        subtitle="Van privéfeesten tot bedrijfsevenementen — wij maken het mogelijk."
        variant="plain"
      >
        <p className="text-sm text-[var(--muted-foreground)] max-w-3xl mx-auto text-center mb-8">
          Organiseer een privéfeest, verjaardagsdiner of bedrijfsborrel in Arendonk. Wij verzorgen ruimte, catering,
          entertainment en een team dat alles tot in de puntjes regelt.
        </p>
        <div className="glass-card rounded-[var(--radius-card)] p-8 text-center">
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto mb-6">
            Wil je een privéfeest, bedrijfsevenement of sporttoernooi organiseren bij The Royal Falcon? 
            We hebben ruimte, faciliteiten en een team dat klaarstaat om je event onvergetelijk te maken.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/contact">
              Neem contact op
              <span aria-hidden>→</span>
            </a>
            <a 
              className="cta-link bg-[var(--muted)] text-[var(--foreground)]" 
              href="https://www.facebook.com/theroyalfalcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Volg ons op Facebook
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}
