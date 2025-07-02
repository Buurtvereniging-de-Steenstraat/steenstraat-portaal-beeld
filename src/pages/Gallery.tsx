import { Link } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/Header";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      src: "/BBQ.jpg",
      title: "BuurtBBQ 2025",
      description: "Onze jaarlijkse BBQ was weer een groot succes"
    },
    {
      id: 2,
      src: "/pasen.jpg",
      title: "Paaseieren zoeken",
      description: "De jaarlijkse traditie van paaseieren zoeken in de buurt"
    },
    {
      id: 3,
      src: "/zonnebloem.jpg",
      title: "Zonnebloem",
      description: "Wie kweekt de grootste zonnebloem in de buurt?"
    }
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
      <Header />

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
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/contact">Stuur foto's</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
