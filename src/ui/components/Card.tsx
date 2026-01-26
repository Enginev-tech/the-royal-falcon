import type { ReactNode } from 'react'

export function Card(props: {
  title: string
  description?: string
  icon?: ReactNode
  footer?: ReactNode
  /** Large image displayed above card content */
  image?: string
  /** Image alt text */
  imageAlt?: string
  /** Price tag for menu items */
  price?: string
  /** Highlight badge */
  badge?: string
}) {
  // Featured card with large image
  if (props.image) {
    return (
      <article className="card-featured group">
        {props.badge && (
          <span className="card-badge">{props.badge}</span>
        )}
        <div className="card-image-wrapper">
          <img
            src={props.image}
            alt={props.imageAlt ?? ''}
            className="card-image"
            loading="lazy"
          />
          <div className="card-image-overlay" />
        </div>
        <div className="card-body">
          <div className="card-header">
            <h3 className="card-title">{props.title}</h3>
            {props.price && <span className="card-price">{props.price}</span>}
          </div>
          {props.description && (
            <p className="card-description">{props.description}</p>
          )}
          {props.footer && <div className="card-footer">{props.footer}</div>}
        </div>
      </article>
    )
  }

  // Standard card with icon
  return (
    <article className="card-standard group">
      <div className="card-icon-row">
        {props.icon && (
          <div className="card-icon">{props.icon}</div>
        )}
        <div className="card-content">
          <h3 className="card-title">{props.title}</h3>
          {props.description && (
            <p className="card-description">{props.description}</p>
          )}
        </div>
      </div>
      {props.footer && <div className="card-footer">{props.footer}</div>}
    </article>
  )
}
