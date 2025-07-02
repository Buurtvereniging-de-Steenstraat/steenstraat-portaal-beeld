import { Link } from "react-router-dom";
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Calendar = () => {
  const events = [
    {
      id: 1,
      title: "Paaseieren Zoeken",
      date: "2025-05-19",
      time: "10:30-12:00",
      location: "Locatie crossbaan",
      type: "Activiteit",
      description: "Paaseieren zoeken voor kinderen van 4-12 jaar samen met buurtvereniging de Kraanvogel"
    },
    {
      id: 2,
      title: "Zonnebloemactie",
      date: "2025-05-01",
      time: "-",
      location: "-",
      type: "Activiteit",
      description: "Zonnebloemactie voor leden en buurtbewoners"
    },
    {
      id: 3,
      title: "Garage Sale",
      date: "2025-05-24",
      time: "10:00-12:30",
      location: "Garage van de Steenstraat / Kraanvogel",
      type: "Activiteit",
      description: "Garage Sale voor leden en buurtbewoners. Verkoop je spullen of kom snuffelen. Samen met buurtvereniging de Kraanvogel" 
    },
    {
      id: 4,
      title: "Jaarlijkse Buurt barbecue",
      date: "2025-08-30",
      time: "17:00-23:00",
      location: "Heibloempark",
      type: "Activiteit",
      description: "Jaarlijkse buurt barbecue voor leden en buurtbewoners"
    },
        {
      id: 5,
      title: "Tieneractiviteit",
      date: "2025-09-06",
      time: "19:00",
      location: "",
      type: "Activiteit",
      description: "Tiener activiteit voor alleen leden van de buurtvereniging"
    },
        {
      id: 6,
      title: "Vrouwenavond",
      date: "2025-09-27",
      time: "19:00-24:00",
      location: "",
      type: "Activiteit",
      description: "Alleen voor leden van de buurtvereniging"
    },
    ,
        {
      id: 7,
      title: "Mannenavond",
      date: "2025-10-04",
      time: "19:00-24:00",
      location: "",
      type: "Activiteit",
      description: "Alleen voor leden van de buurtvereniging"
    },
      {
      id: 8,
      title: "Halloween",
      date: "2025-10-25",
      time: "18:00-21:00",
      location: "Eersel",
      type: "Activiteit",
      description: "Voor leden en buurtbewoners"
    },
            {
      id: 9,
      title: "Bikken bij de buuf",
      date: "2025-11-08",
      time: "18:00-23:00",
      location: "Steenstraat",
      type: "Activiteit",
      description: "Alleen voor leden van de buurtvereniging"
    },
            {
      id: 10,
      title: "Sinterklaas",
      date: "2025-11-23",
      time: "10:00-12:00",
      location: "",
      type: "Activiteit",
      description: "Alleen voor leden van de buurtvereniging"
    },
            {
      id: 11,
      title: "Kerstbomen plaatsen",
      date: "2025-12-06",
      time: "10:00-11:00",
      location: "",
      type: "Activiteit",
      description: "Bestuursleden"
    },
                {
      id: 12,
      title: "Kerstworkshop",
      date: "2025-12-09",
      time: "19:00-23:00",
      location: "",
      type: "Activiteit",
      description: "Alleen voor leden van de buurtvereniging"
    }             

  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Vergadering":
        return "bg-blue-100 text-blue-800";
      case "Evenement":
        return "bg-orange-100 text-orange-800";
      case "Activiteit":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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
                <Link to="/news" className="text-orange-600 hover:text-orange-900 px-3 py-2 rounded-md text-sm font-medium">
                  Laatste nieuws
                </Link>
                <Link to="/gallery" className="text-orange-600 hover:text-orange-900 px-3 py-2 rounded-md text-sm font-medium">
                  Fotogalerij
                </Link>
                <Link to="/calendar" className="text-orange-700 hover:text-orange-900 px-3 py-2 rounded-md text-sm font-medium">
                  Buurtactiviteiten
                </Link>
                <Link to="/word-lid" className="text-orange-600 hover:text-orange-900 px-3 py-2 rounded-md text-sm font-medium">
                  Word Lid
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Buurtactiviteiten</h1>
          <p className="text-lg text-gray-600">
            Kom naar onze activiteiten en vergaderingen
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{event.title}</CardTitle>
                    <div className="flex items-center text-gray-600 mt-2 text-sm">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                  </div>
                  <Badge className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Suggesties voor activiteiten?
          </h2>
          <p className="text-gray-600 mb-6">
            Heb je ideeën voor nieuwe buurtactiviteiten? Laat het ons weten!
          </p>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link to="/contact">Deel je idee</Link>
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

export default Calendar;
