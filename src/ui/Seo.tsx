import { useSeo } from './useSeo'

/**
 * Lightweight SEO helper.
 * This is intentionally dependency-free (no react-helmet) and updates document/head tags.
 */
export function Seo(props: { title: string; description: string; path?: string }) {
  useSeo({ title: props.title, description: props.description, path: props.path })
  return null
}
