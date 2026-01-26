import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../content/site'

type NavItem = { to: string; label: string; end?: boolean }

const nav: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/eten', label: 'Eten' },
  { to: '/drinken', label: 'Drinken' },
  { to: '/entertainment', label: 'Entertainment' },
  { to: '/events', label: 'Events' },
  { to: '/over-ons', label: 'Over ons' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="glass">
        <div className="container-main py-2 sm:py-3">
          {/* Main navbar row */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <NavLink to="/" className="shrink-0">
              <img
                src="/logo/falcon-logo.svg"
                alt={site.name}
                className="h-8 sm:h-9 w-auto"
              />
            </NavLink>

            {/* Desktop Navigation - directly after logo */}
            <nav className="hidden lg:flex items-center gap-3 flex-1 ml-6">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }: { isActive: boolean }) =>
                    `px-4 py-2 rounded-[var(--radius-sm)] text-base tracking-wide transition-colors ${
                      isActive
                        ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                        : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[color-mix(in_srgb,var(--accent)_60%,transparent)]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right side: CTA */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              <a className="cta-link cta-link--sm" href="/contact#booking">
                Reserveer
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* Mobile: spacer + menu button */}
            <div className="flex-1 lg:hidden" />
            
            <button
              type="button"
              className="lg:hidden p-2 -mr-2 text-[var(--foreground)]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Sluit menu' : 'Open menu'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden border-t border-[var(--border)] py-4">
            <div className="container-main flex flex-col gap-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }: { isActive: boolean }) =>
                    `px-4 py-3 rounded-[var(--radius-sm)] text-base tracking-wide transition-colors ${
                      isActive
                        ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                        : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[color-mix(in_srgb,var(--accent)_60%,transparent)]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-col gap-4">
                <a
                  className="cta-link w-full justify-center"
                  href="/contact#booking"
                  onClick={() => setIsOpen(false)}
                >
                  Reserveer
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
