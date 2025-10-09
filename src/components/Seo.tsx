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

    return () => {
      document.title = prevTitle
    }
  }, [title, description, url, image])

  return null
}
