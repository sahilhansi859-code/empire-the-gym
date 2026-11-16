import { useEffect } from 'react'

function upsertMeta(selector, attributes) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) el.setAttribute(key, value)
  })
  return el
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  if (href) el.setAttribute('href', href)
  return el
}

export default function Seo({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  robots = 'index, follow',
  schema,
  lang = 'en',
}) {
  useEffect(() => {
    const prevLang = document.documentElement.lang
    if (lang) document.documentElement.lang = lang
    if (title) document.title = title

    upsertMeta('meta[name="description"]', { name: 'description', content: description || '' })
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords || '' })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })
    upsertLink('canonical', canonical)

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: ogType })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical || '' })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: ogTitle || title || '' })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: ogDescription || description || '' })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage || '' })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'hi' ? 'hi_IN' : 'en_IN' })

    upsertMeta('meta[property="twitter:card"]', { property: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[property="twitter:url"]', { property: 'twitter:url', content: canonical || '' })
    upsertMeta('meta[property="twitter:title"]', { property: 'twitter:title', content: ogTitle || title || '' })
    upsertMeta('meta[property="twitter:description"]', { property: 'twitter:description', content: ogDescription || description || '' })
    upsertMeta('meta[property="twitter:image"]', { property: 'twitter:image', content: ogImage || '' })

    const schemaId = 'page-schema-jsonld'
    let schemaEl = document.getElementById(schemaId)
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement('script')
        schemaEl.id = schemaId
        schemaEl.type = 'application/ld+json'
        document.head.appendChild(schemaEl)
      }
      schemaEl.textContent = JSON.stringify(schema)
    } else if (schemaEl) {
      schemaEl.remove()
    }

    return () => {
      document.documentElement.lang = prevLang
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, robots, schema, lang])

  return null
}
