import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo"
import { ArrowLeft, Calendar, User, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/data/newsData";
// Header is provided globally by App

const News = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Seo title="Nieuws | Buurtvereniging De Steenstraat" description="Laatste nieuws en updates van Buurtvereniging De Steenstraat in Eersel." url="https://bvdesteenstraat.nl/news" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug naar home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Laatste nieuws</h1>
          <p className="text-lg text-gray-600">
            Blijf op de hoogte van het laatste nieuws uit onze buurt
          </p>
        </div>

        {/* News Items */}
        <div className="space-y-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {item.author}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">{item.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                {item.image && (
                  <div className="mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full max-h-64 object-contain rounded-lg"
                    />
                  </div>
                )}
                <p className="text-gray-700">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Heb je nieuws te delen?
          </h2>
          <p className="text-gray-600 mb-6">
            Stuur ons je nieuws en we plaatsen het op onze website!
          </p>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link to="/contact">Stuur nieuws</Link>
          </Button>
        </div>
      </div>

      {/* Footer is provided globally by App */}
    </div>
  );
};

export default News;
