
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Bericht verzonden!",
      description: "Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
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
                <Link to="/calendar" className="text-gray-600 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                  Agenda
                </Link>
                <Link to="/contact" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-lg text-gray-600">
            Neem contact met ons op voor vragen, suggesties of om lid te worden
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Contactgegevens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@steenstraat.nl</p>
                    <p className="text-sm text-gray-500">We reageren binnen 24 uur</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefoon</h3>
                    <p className="text-gray-600">06-12345678</p>
                    <p className="text-sm text-gray-500">Bereikbaar op werkdagen 18:00-20:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adres</h3>
                    <p className="text-gray-600">Buurthuis de Steenstraat</p>
                    <p className="text-gray-600">Steenstraat 25</p>
                    <p className="text-gray-600">1000 AA Amsterdam</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Bestuur</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Jan Jansen</h4>
                  <p className="text-gray-600">Voorzitter</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Marie de Wit</h4>
                  <p className="text-gray-600">Secretaris</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Piet van Dam</h4>
                  <p className="text-gray-600">Penningmeester</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Stuur ons een bericht</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="uw.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Telefoon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="06-12345678"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Onderwerp *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Waar gaat uw bericht over?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Bericht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tot uw bericht hier..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  <Send className="h-4 w-4 mr-2" />
                  Verstuur bericht
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
