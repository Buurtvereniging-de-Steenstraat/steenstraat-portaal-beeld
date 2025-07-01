
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Buurtfeest 2024 was een groot succes!",
      date: "15 december 2024",
      author: "Bestuur Steenstraat",
      excerpt: "Ons jaarlijkse buurtfeest heeft weer vele bewoners samen gebracht voor een gezellige dag vol activiteiten.",
      content: "Het buurtfeest van dit jaar was een fantastisch succes met meer dan 200 bezoekers. Er waren activiteiten voor alle leeftijden, van spelletjes voor kinderen tot muziek en dans voor volwassenen."
    },
    {
      id: 2,
      title: "Nieuwe buurtschoonmaak gepland",
      date: "8 december 2024",
      author: "Milieucommissie",
      excerpt: "Op zaterdag 21 december organiseren we een grote buurtschoonmaak. Alle bewoners zijn welkom om mee te helpen.",
      content: "We komen samen om 9:00 bij het buurthuis. Handschoenen en materialen worden verstrekt. Na afloop is er koffie en taart voor alle vrijwilligers."
    },
    {
      id: 3,
      title: "Winteractiviteiten voor kinderen",
      date: "1 december 2024",
      author: "Jeugdcommissie",
      excerpt: "Tijdens de kerstvakantie organiseren we leuke winteractiviteiten voor alle kinderen uit de buurt.",
      content: "Van 27 december tot 30 december zijn er dagelijks activiteiten in het buurthuis. Denk aan knutselen, spelletjes en een speciale filmmiddag."
    }
  ];

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
                <Link to="/news" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                  Laatste nieuws
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
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/contact">Stuur nieuws</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
