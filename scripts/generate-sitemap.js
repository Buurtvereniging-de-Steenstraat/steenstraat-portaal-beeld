
import { readFile, writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Config
const repoRoot = path.resolve(__dirname, '..')
const newsFile = path.join(repoRoot, 'src', 'data', 'newsData.ts')
const outDir = path.join(repoRoot, 'public')
const outFile = path.join(outDir, 'sitemap.xml')
const baseUrl = process.env.SITE_URL || 'https://bvdesteenstraat.nl'

function parseNews(text) {
  const items = []
  // Match objects with id and title. This is a lightweight parser tolerant to simple TS object syntax.
  const re = /\{([\s\S]*?)\}/g
  let m
  while ((m = re.exec(text)) !== null) {
    const block = m[1]
    const idMatch = /\bid\s*:\s*(\d+)/.exec(block)
    const titleMatch = /\btitle\s*:\s*"([^"]+)"/.exec(block)
    if (idMatch && titleMatch) {
      const id = idMatch[1]
      const title = titleMatch[1]
      items.push({ id: id, title: title })
    }
  }
  return items
}

function buildSitemap(newsItems) {
  const urls = [
    '/',
    '/news',
    '/contact',
    '/gallery',
    '/calendar',
    '/word-lid'
  ]

  const now = new Date().toISOString()

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  urls.forEach(u => {
    xml += '  <url>\n'
    xml += `    <loc>${baseUrl}${u}</loc>\n`
    xml += `    <lastmod>${now}</lastmod>\n`
    xml += '    <changefreq>monthly</changefreq>\n'
    xml += '  </url>\n'
  })

  // Add news items
  newsItems.forEach(item => {
    xml += '  <url>\n'
    xml += `    <loc>${baseUrl}/news/${item.id}</loc>\n`
    xml += `    <lastmod>${now}</lastmod>\n`
    xml += '    <changefreq>monthly</changefreq>\n'
    xml += '  </url>\n'
  })

  xml += '</urlset>\n'
  return xml
}

async function main() {
  try {
    if (!existsSync(outDir)) await mkdir(outDir, { recursive: true })
    const txt = await readFile(newsFile, 'utf8')
    const news = parseNews(txt)
    const sitemap = buildSitemap(news)
    await writeFile(outFile, sitemap, 'utf8')
    console.log(`Wrote sitemap with ${news.length} news entries to ${outFile}`)
  } catch (err) {
    console.error('Failed to generate sitemap:', err)
    process.exitCode = 1
  }
}

main()
