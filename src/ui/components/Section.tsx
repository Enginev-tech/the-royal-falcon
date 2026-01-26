import type { ReactNode } from 'react'

type SectionVariant = 'plain' | 'muted' | 'decorated'

export function Section(props: {
  id?: string
  title: string
  subtitle?: string
  children: ReactNode
  variant?: SectionVariant | (string & {})
  /** Center the title and subtitle */
  centered?: boolean
  /** Hide title if empty */
  hideTitle?: boolean
}) {
  const variant = props.variant as SectionVariant | undefined
  const variantClass =
    variant === 'muted'
      ? 'bg-muted'
      : variant === 'decorated'
        ? 'section-decorated'
        : ''

  const showHeader = !props.hideTitle && props.title

  return (
    <section id={props.id} className={`${variantClass} section-padding`}>
      <div className="container-main">
        {showHeader && (
          <header className={`section-header ${props.centered ? 'section-header-centered' : ''}`}>
            <h2 className="section-title">{props.title}</h2>
            {props.subtitle && (
              <p className="section-subtitle">{props.subtitle}</p>
            )}
            <div className="section-divider" aria-hidden="true">
              <span className="section-divider-line" />
              <span className="section-divider-diamond" />
              <span className="section-divider-line" />
            </div>
          </header>
        )}
        {props.children}
      </div>
    </section>
  )
}
