import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      src: "/BBQ.jpg",
      title: "BBQ 2024",
      description: "Onze jaarlijkse buurt BBQ was weer een groot succes"
    },
    {
      id: 2,
      src: "/Zonnebloem1.jpg",
      title: "Zonnebloemwedstrijd",
      description: "Wie kweekt de hoogste zonnebloem? Uitslag wordt bekend gemaakt op de BBQ"
    }
    // {
    //   id: 3,
    //   src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
    //   title: "Buurtschoonmaak",
    //   description: "Samen zorgen we voor een schone buurt"
    // },
    // {
    //   id: 4,
    //   src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
    //   title: "Huisdierendag",
    //   description: "Onze buurt huisdieren in de spotlight"
    // },
    // {
    //   id: 5,
    //   src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    //   title: "Gezamenlijke koffie",
    //   description: "Gezellig samenkomen in het buurthuis"
    // },
    // {
    //   id: 6,
    //   src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&h=600&fit=crop",
    //   title: "Kinderactiviteiten",
    //   description: "Leuke activiteiten voor de jongste buurtbewoners"
    // }
  ];

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
                <Link to="/gallery" className="text-orange-700 hover:text-orange-900 px-3 py-2 rounded-md text-sm font-medium">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fotogalerij</h1>
          <p className="text-lg text-gray-600">
            Bekijk foto's van onze activiteiten en evenementen
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{photo.title}</h3>
                <p className="text-gray-600 text-sm">{photo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wil je jouw foto's delen?
          </h2>
          <p className="text-gray-600 mb-6">
            Heb je mooie foto's van buurtactiviteiten? Stuur ze naar ons op en we plaatsen ze in de galerij!
          </p>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link to="/contact">Stuur foto's</Link>
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

export default Gallery;
