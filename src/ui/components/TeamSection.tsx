import { Section } from './Section'

interface TeamMember {
  name: string
  role: string
  department: string
  image: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Linda',
    role: 'Host & Service',
    department: 'BAR',
    image: '/team/Linda.png',
    description:
      'Met een warm welkom en oog voor detail zorgt Linda ervoor dat je je meteen thuis voelt. Of het nu je eerste bezoek is of je honderdste.',
  },
  {
    name: 'Rachel',
    role: 'Bar & Events',
    department: 'RESTAURANT',
    image: '/team/Rachel.png',
    description:
      'De magie achter de bar. Rachel mixt de perfecte cocktails en organiseert events die je niet snel vergeet.',
  },
  {
    name: 'Volker',
    role: 'Kitchen & Operations',
    department: 'KEUKEN',
    image: '/team/Volker.png',
    description:
      'De smaakmaker van The Royal Falcon. Volker zorgt voor de flow in de keuken en dat elk gerecht precies goed is.',
  },
]

function GameControllerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 11H10M8 9V13M15 12H15.01M18 10H18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.32 5H6.68C5.55 5 4.56 5.63 4.07 6.6L2.07 10.6C1.58 11.58 1.98 12.76 2.97 13.25L3.69 13.61C4.54 14.03 5.56 13.84 6.2 13.13L7.5 11.67C7.89 11.23 8.45 11 9.03 11H14.97C15.55 11 16.11 11.23 16.5 11.67L17.8 13.13C18.44 13.84 19.46 14.03 20.31 13.61L21.03 13.25C22.02 12.76 22.42 11.58 21.93 10.6L19.93 6.6C19.44 5.63 18.45 5 17.32 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 19L8 15M18 19L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function TeamCard(props: { member: TeamMember; index: number }) {
  const { member, index } = props

  return (
    <div className="team-card-v2" data-delay={index}>
      {/* Department */}
      <div className="team-card-v2-department">{member.department}</div>

      {/* Photo Frame */}
      <div className="team-card-v2-frame">
        <div className="team-card-v2-photo-container">
          <img
            src={member.image}
            alt={member.name}
            className="team-card-v2-photo"
            loading="lazy"
          />
        </div>
        {/* Name Banner */}
        <div className="team-card-v2-name-banner">
          <span className="team-card-v2-name">{member.name}</span>
        </div>
      </div>

      {/* Divider with icon */}
      <div className="team-card-v2-divider">
        <span className="team-card-v2-divider-line" />
        <GameControllerIcon />
        <span className="team-card-v2-divider-line" />
      </div>

      {/* Description */}
      <p className="team-card-v2-description">{member.description}</p>

      {/* Contact */}
      <button className="team-card-v2-contact" aria-label={`Contact ${member.name}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </button>
    </div>
  )
}

export function TeamSection() {
  return (
    <Section id="team" title="" subtitle="" variant="plain">
      <div className="team-section-v2">
        {/* Background Elements */}
        <div className="team-v2-bg-accent" aria-hidden="true" />

        {/* Hexagon Logo */}
        <div className="team-v2-hexagon">
          <div className="team-v2-hexagon-inner">
            <img src="/logo/falcon-logo.svg" alt="Royal Falcon" className="team-v2-hexagon-logo" />
          </div>
        </div>

        {/* Title */}
        <h2 className="team-v2-title">TEAM</h2>

        {/* Cards */}
        <div className="team-v2-cards">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
