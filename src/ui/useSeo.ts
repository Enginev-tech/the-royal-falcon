import { useEffect } from 'react'
import { site } from './content/site'

function upsertMeta(name: string, content: string) {
  const selector = `meta[name="${name}"]`
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertProperty(property: string, content: string) {
  const selector = `meta[property="${property}"]`
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export function useSeo(meta: {
  title: string
  description: string
  path?: string
}) {
  useEffect(() => {
    const fullTitle = `${meta.title} | ${site.name}`
    document.title = fullTitle

    upsertMeta('description', meta.description)

    upsertProperty('og:site_name', site.name)
    upsertProperty('og:title', fullTitle)
    upsertProperty('og:description', meta.description)
    upsertProperty('og:type', 'website')

    if (meta.path) {
      const url = `${window.location.origin}${meta.path.startsWith('/') ? meta.path : `/${meta.path}`}`
      upsertProperty('og:url', url)
    }

    upsertMeta('twitter:card', 'summary_large_image')
    upsertMeta('twitter:title', fullTitle)
    upsertMeta('twitter:description', meta.description)
  }, [meta.title, meta.description, meta.path])
}
