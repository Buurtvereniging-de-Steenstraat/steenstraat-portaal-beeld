
import { Link } from "react-router-dom";
import { Calendar, Users, Camera, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-green-800">Buurtvereniging de Steenstraat</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/gallery" className="text-gray-600 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                  Fotogalerij
                </Link>
                <Link to="/calendar" className="text-gray-600 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                  Agenda
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welkom bij Buurtvereniging de Steenstraat
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Samen bouwen we aan een sterke, gezellige buurt waar iedereen zich thuis voelt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link to="/contact">Word lid</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Link to="/calendar">Bekijk agenda</Link>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Buurtactiviteiten</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regelmatige evenementen zoals buurtfeesten, spelletjesavonden en gezamenlijke maaltijden.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Camera className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Fotogalerij</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bekijk foto's van onze activiteiten en evenementen uit het verleden.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Blijf op de hoogte van komende vergaderingen en buurtactiviteiten.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Neem contact met ons op voor vragen, suggesties of om lid te worden.
                </CardDescription>
              </CardContent>
            </Card>
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
                Van het jaarlijkse straatfeest tot gezellige koffieochtenden, er is altijd wel iets 
                te doen. Word lid en ontmoet je buren!
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/contact">Meer informatie</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg h-64 flex items-center justify-center">
              <Users className="h-24 w-24 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Buurtvereniging de Steenstraat</h3>
              <p className="text-gray-300">
                Samen maken we onze buurt een fijne plek om te wonen.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Snel navigeren</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-white">Fotogalerij</Link></li>
                <li><Link to="/calendar" className="text-gray-300 hover:text-white">Agenda</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@steenstraat.nl</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>06-12345678</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Steenstraat, Amsterdam</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Buurtvereniging de Steenstraat. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
