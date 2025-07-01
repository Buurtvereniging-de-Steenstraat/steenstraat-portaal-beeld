import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/data/newsData";

const News = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.jpg" alt="Logo" className="h-24 w-24 mr-3 rounded-full border border-gray-200" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-orange-600 hover:text-orange-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/news" className="text-orange-700 hover:text-orange-900 px-3 py-2 rounded-md text-sm font-medium">
                  Laatste nieuws
                </Link>
                <Link to="/gallery" className="text-orange-600 hover:text-orange-900 px-3 py-2 rounded-md text-sm font-medium">
                  Fotogalerij
                </Link>
                <Link to="/calendar" className="text-orange-600 hover:text-orange-900 px-3 py-2 rounded-md text-sm font-medium">
                  Buurtactiviteiten
                </Link>
                <Link to="/contact" className="text-orange-600 hover:text-orange-900 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

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

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Buurtvereniging de Steenstraat</h3>
              <p className="text-orange-100">
                Samen maken we onze buurt een fijne plek om te wonen.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Snel navigeren</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-orange-100 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/news" className="text-orange-100 hover:text-white transition-colors">Laatste nieuws</Link></li>
                <li><Link to="/gallery" className="text-orange-100 hover:text-white transition-colors">Fotogalerij</Link></li>
                <li><Link to="/calendar" className="text-orange-100 hover:text-white transition-colors">Agenda</Link></li>
                <li><Link to="/contact" className="text-orange-100 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-orange-100">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>buurtverenigingdesteenstraat@outlook.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-500 mt-8 pt-8 text-center text-orange-200">
            <p>&copy; {new Date().getFullYear()} Buurtvereniging de Steenstraat. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
