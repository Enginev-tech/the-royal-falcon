import { useSeo } from './useSeo'

/**
 * Lightweight SEO helper.
 * This is intentionally dependency-free (no react-helmet) and updates document/head tags.
 */
export function Seo(props: { title: string; description: string; path?: string; image?: string }) {
  useSeo({ title: props.title, description: props.description, path: props.path, image: props.image })
  return null
}
