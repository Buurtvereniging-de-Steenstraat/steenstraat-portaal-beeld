import React from "react"

type SeoProps = {
  title: string
  description?: string
  url?: string
  image?: string
}

export function Seo({ title, description, url, image }: SeoProps) {
  React.useEffect(() => {
    const prevTitle = document.title
    document.title = title

    const setMeta = (name: string, content?: string | null) => {
      if (!content) return
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute("name", name)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    const setOg = (prop: string, content?: string | null) => {
      if (!content) return
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute("property", prop)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    setMeta("description", description ?? "Buurtvereniging de Steenstraat - Samen bouwen we aan een sterke, gezellige buurt waar iedereen zich thuis voelt.")
    setOg("og:title", title)
    setOg("og:description", description ?? "Buurtvereniging de Steenstraat - Samen bouwen we aan een sterke, gezellige buurt waar iedereen zich thuis voelt.")
    setOg("og:type", "website")
    if (url) setOg("og:url", url)
    if (image) setOg("og:image", image)

    // Twitter card
    setMeta("twitter:card", image ? "summary_large_image" : "summary")
    setMeta("twitter:title", title)
    if (description) setMeta("twitter:description", description)
    if (image) setMeta("twitter:image", image)

    // Site-wide meta
    setMeta("keywords", "Buurtvereniging de Steenstraat, Buurtvereniging, De Steenstraat, Eersel, buurtvereniging de steenstraat")
    setOg("og:site_name", "Buurtvereniging De Steenstraat")

    // Canonical link
    let canonicalEl: HTMLLinkElement | null = null
    try {
      const href = url ?? window.location.href
      canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!canonicalEl) {
        canonicalEl = document.createElement("link")
        canonicalEl.setAttribute("rel", "canonical")
        document.head.appendChild(canonicalEl)
      }
      canonicalEl.setAttribute("href", href)
    } catch (e) {
      // ignore in non-browser environments
    }

    // JSON-LD Organization + WebSite
    const ld = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Buurtvereniging De Steenstraat",
          "url": url ?? (typeof window !== "undefined" ? window.location.origin : "https://bvdesteenstraat.nl"),
          "logo": "https://bvdesteenstraat.nl/logo.jpg",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "buurtverenigingdesteenstraat@outlook.com",
              "availableLanguage": ["Dutch"]
            }
          ],
          "sameAs": ["https://www.facebook.com/groups/396194063895407"]
        },
        {
          "@type": "WebSite",
          "url": url ?? (typeof window !== "undefined" ? window.location.origin : "https://bvdesteenstraat.nl"),
          "name": title,
          "publisher": {
            "@type": "Organization",
            "name": "Buurtvereniging De Steenstraat"
          }
        }
      ]
    }

    const scriptId = "seo-jsonld"
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!scriptEl) {
      scriptEl = document.createElement("script")
      scriptEl.type = "application/ld+json"
      scriptEl.id = scriptId
      document.head.appendChild(scriptEl)
    }
    scriptEl.text = JSON.stringify(ld)

    return () => {
      document.title = prevTitle
      // cleanup: remove created canonical and script if we added them
      if (canonicalEl && canonicalEl.parentNode) canonicalEl.parentNode.removeChild(canonicalEl)
      const existing = document.getElementById("seo-jsonld")
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing)
    }
  }, [title, description, url, image])

  return null
}
