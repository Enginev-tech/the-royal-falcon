import { useLocation } from 'react-router-dom'
import { site } from '../content/site'

const pageTitleByPath: Record<string, string> = {
  '/': 'Welkom bij The Royal Falcon',
  '/eten': 'Eten',
  '/drinken': 'Drinken',
  '/entertainment': 'Entertainment',
  '/events': 'Events',
  '/over-ons': 'Over ons',
  '/contact': 'Contact',
}

const heroVideoByPath: Record<string, string> = {
  '/': '/video/drinken2.mp4',
  '/eten': '/video/eten2.mp4',
  '/drinken': '/video/drinken1.mp4',
  '/entertainment': '/video/entertainment.mp4',
  '/events': '/video/events2.mp4',
  '/over-ons': '/video/events1.mp4',
  '/contact': '/video/drinken1.mp4',
}

export function HeroVideo() {
  const location = useLocation()
  const title = pageTitleByPath[location.pathname] ?? site.name
  const videoSrc = heroVideoByPath[location.pathname] ?? '/video/events.mp4'

  return (
    <section className="relative overflow-hidden h-[100vh] flex items-center justify-center">
      {/* Video achtergrond */}
      <div className="absolute inset-0" aria-hidden>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src={videoSrc}
        />
        {/* Dark overlay voor leesbaarheid */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Fade naar achtergrondkleur onderaan */}
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-56 md:h-64 bg-gradient-to-t from-[#080a0d] via-[#080a0d]/90 to-transparent" />
      </div>

      {/* Content overlay - gecentreerd */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 md:px-8 -mt-8 sm:-mt-12">
          <img
            src="/logo/falcon-logo.svg"
            alt="The Royal Falcon"
            className="h-12 sm:h-16 md:h-20 w-auto mx-auto mb-4 sm:mb-6 drop-shadow-lg"
          />
          <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-widest drop-shadow-lg">{title}</h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[var(--muted-foreground)] drop-shadow-md">
            {site.address} • WhatsApp {site.whatsapp}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="cta-link bg-[var(--secondary)] text-[var(--secondary-foreground)]" href="/contact#booking">
              Boek een tafel
              <span aria-hidden>→</span>
            </a>
            <a className="cta-link bg-[var(--primary-foreground)] text-[var(--primary)]" href="/eten#reservation">
              Bekijk menu's
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
