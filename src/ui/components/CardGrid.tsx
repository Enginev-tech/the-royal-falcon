import type { ReactNode } from 'react'

export function CardGrid(props: {
  children: ReactNode
  /** Number of columns on large screens: 2, 3, or 4 */
  columns?: 2 | 3 | 4
}) {
  const cols = props.columns ?? 3
  const gridClass =
    cols === 2
      ? 'card-grid card-grid-2'
      : cols === 4
        ? 'card-grid card-grid-4'
        : 'card-grid card-grid-3'

  return <div className={gridClass}>{props.children}</div>
}
