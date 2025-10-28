import React from "react"
import { useParams, Link } from "react-router-dom"
import { newsItems } from "@/data/newsData"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const itemId = Number(id)
  const item = newsItems.find((n) => n.id === itemId)

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Bericht niet gevonden</h1>
          <p className="text-gray-600 mb-4">Het gevraagde nieuwsbericht bestaat niet of is verwijderd.</p>
          <Button asChild>
            <Link to="/news">Terug naar nieuws</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Seo title={`${item.title} | Buurtvereniging De Steenstraat`} description={item.excerpt ?? item.content.substring(0, 160)} url={`https://bvdesteenstraat.nl/news/${item.id}`} image={item.image} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Button asChild variant="ghost">
            <Link to="/news">Terug naar nieuws</Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{item.title}</CardTitle>
            <CardDescription className="text-sm text-gray-500">{item.date} — {item.author}</CardDescription>
          </CardHeader>
          <CardContent>
            {item.image && (
              <div className="mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className={"w-full rounded " + (item.image === "/clubkas2025.jpg" ? "rotate-90" : "")}
                />
              </div>
            )}
            <div className="prose prose-sm max-w-none text-gray-800">{item.content}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default NewsDetail
