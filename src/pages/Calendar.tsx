
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Calendar = () => {
  const events = [
    {
      id: 1,
      title: "Bestuursvergadering",
      date: "2024-07-15",
      time: "19:30",
      location: "Buurthuis de Steenstraat",
      type: "Vergadering",
      description: "Maandelijkse bestuursvergadering, iedereen welkom"
    },
    {
      id: 2,
      title: "Buurtbarbecue",
      date: "2024-07-22",
      time: "17:00",
      location: "Steenstraatspeelplein",
      type: "Evenement",
      description: "Gezamenlijke barbecue voor alle buurtbewoners"
    },
    {
      id: 3,
      title: "Wandelgroep",
      date: "2024-07-28",
      time: "10:00",
      location: "Vertrek bij het buurthuis",
      type: "Activiteit",
      description: "Wekelijkse wandeling door het Vondelpark"
    },
    {
      id: 4,
      title: "Spelletjesavond",
      date: "2024-08-05",
      time: "19:00",
      location: "Buurthuis de Steenstraat",
      type: "Activiteit",
      description: "Gezellige spelletjesavond voor alle leeftijden"
    },
    {
      id: 5,
      title: "Buurtschoonmaak",
      date: "2024-08-12",
      time: "09:00",
      location: "Verzamelen bij de Steenstraat 1",
      type: "Activiteit",
      description: "Samen maken we onze buurt nog mooier"
    },
    {
      id: 6,
      title: "Zomerfeest",
      date: "2024-08-25",
      time: "15:00",
      location: "Steenstraatspeelplein",
      type: "Evenement",
      description: "Groot buurtfeest met muziek, eten en spelletjes"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Vergadering":
        return "bg-blue-100 text-blue-800";
      case "Evenement":
        return "bg-green-100 text-green-800";
      case "Activiteit":
        return "bg-purple-100 text-purple-800";
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
                <Link to="/" className="text-gray-600 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/gallery" className="text-gray-600 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                  Fotogalerij
                </Link>
                <Link to="/calendar" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug naar home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agenda</h1>
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
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/contact">Deel je idee</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
