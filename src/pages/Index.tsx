import { Link } from "react-router-dom";
import { Calendar, Users, Camera, Mail, MapPin, Phone, Newspaper, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { newsItems } from "@/data/newsData";
import { useState } from "react";
import Header from "@/components/Header";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welkom bij Buurtvereniging De Steenstraat in Eersel
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Samen bouwen we aan een sterke, gezellige buurt waar iedereen zich thuis voelt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Link to="/word-lid">Word lid</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-orange-600">
                <Link to="/calendar">Bekijk Buurtactiviteiten</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wat wij doen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Onze buurtvereniging organiseert diverse activiteiten en zorgt voor een sterke gemeenschap.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/calendar" className="block">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle>Buurtactiviteiten</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Regelmatige evenementen zoals buurtfeesten, spelletjesavonden en gezamenlijke maaltijden.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/gallery" className="block">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Camera className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle>Fotogalerij</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Bekijk foto's van onze activiteiten en evenementen uit het verleden.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/contact" className="block">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Mail className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Neem contact met ons op voor vragen, suggesties of om lid te worden.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Laatste nieuws</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Blijf op de hoogte van het laatste nieuws uit onze buurt
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.slice(0, 3).map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  {item.image && (
                    <img src={item.image} alt={item.title} className="w-full max-h-48 object-contain rounded mb-4" />
                  )}
                  <div className="flex items-center mb-2">
                    <Newspaper className="h-5 w-5 text-orange-600 mr-2" />
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {item.excerpt || item.content.substring(0, 150) + (item.content.length > 150 ? '...' : '')}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link to="/news">Bekijk al het nieuws</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Over onze buurt</h2>
              <p className="text-lg text-gray-600 mb-6">
                De Steenstraat is een levendige wijk waar buren elkaar kennen en voor elkaar zorgen. 
                Onze buurtvereniging bestaat al meer dan 20 jaar en organiseert het hele jaar door 
                activiteiten voor jong en oud.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Van jaarlijkse buurt BBQ tot schaatsen, van kerststukjes maken tot sieraden maken , van paaseieren zoeken tot pepernoten rapen en garage-sale, er is altijd wel iets 
                te doen. Word lid en ontmoet je buren!
              </p>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link to="/contact">Meer informatie</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-green-500 rounded-lg h-64 flex items-center justify-center">
              <Users className="h-24 w-24 text-white" />
            </div>
          </div>
        </div>
      </section>

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
                <li><Link to="/calendar" className="text-orange-100 hover:text-white transition-colors">Buurtactiviteiten</Link></li>
                <li><Link to="/word-lid" className="text-orange-100 hover:text-white transition-colors">Word Lid</Link></li>
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

export default Index;
