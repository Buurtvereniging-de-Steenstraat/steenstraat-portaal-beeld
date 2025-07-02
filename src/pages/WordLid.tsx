import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { sendMembershipEmail } from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const WordLid = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    iban: "",
    accountHolder: "",
    registrationDate: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendMembershipEmail(formData);
      
      if (result.success) {
        toast({
          title: "Aanmelding verzonden!",
          description: "Uw aanmelding is succesvol verzonden. We nemen binnen 24 uur contact met u op.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          address: "",
          phone: "",
          iban: "",
          accountHolder: "",
          registrationDate: "",
          message: ""
        });
      } else {
        toast({
          title: "Fout bij verzenden",
          description: "Er is een fout opgetreden bij het verzenden van uw aanmelding. Probeer het later opnieuw.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Fout bij verzenden",
        description: "Er is een fout opgetreden bij het verzenden van uw aanmelding. Probeer het later opnieuw.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Membership Information */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-orange-600" />
                  Waarom lid worden?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Als lid van Buurtvereniging de Steenstraat maak je deel uit van een actieve gemeenschap die zich inzet voor een gezellige en leefbare buurt.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Neem deel aan gezellige buurtactiviteiten en evenementen
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Ontmoet je buren en bouw nieuwe vriendschappen op
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Draag bij aan de verbetering van je directe leefomgeving
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Blijf op de hoogte van het laatste nieuws en ontwikkelingen
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Heb inspraak in buurtprojecten en activiteiten
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Lidmaatschap
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Jaarlijkse contributie</h3>
                  <p className="text-2xl font-bold text-orange-600">€ 22,50</p>
                  <p className="text-sm text-gray-600">per huishouden per jaar</p>
                </div>
                <p className="text-gray-700">
                  Voor slechts € 22,50 per jaar per huishouden ben je lid van onze buurtvereniging. 
                  Dit bedrag wordt gebruikt voor het organiseren van activiteiten, evenementen en 
                  andere buurtprojecten.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Aanmelden als lid
                </CardTitle>
                <CardDescription>
                  Vul het formulier in om je aan te melden als lid van Buurtvereniging de Steenstraat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Jouw naam"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="jouw@email.nl"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Adres *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Straatnaam en huisnummer"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="06 12345678"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="iban" className="block text-sm font-medium text-gray-700 mb-1">
                      Rekening (IBAN NR) *
                    </label>
                    <input
                      type="text"
                      id="iban"
                      name="iban"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="NL91 ABNA 0417 1643 00"
                      value={formData.iban}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-700 mb-1">
                      T.N.V. *
                    </label>
                    <input
                      type="text"
                      id="accountHolder"
                      name="accountHolder"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Naam van de rekeninghouder"
                      value={formData.accountHolder}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Inschrijfdatum *
                    </label>
                    <input
                      type="date"
                      id="registrationDate"
                      name="registrationDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={formData.registrationDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Opmerkingen
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Eventuele opmerkingen of vragen..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Versturen..." : "Aanmelden als lid"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-orange-600" />
                  Vragen?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Heb je vragen over het lidmaatschap? Neem gerust contact met ons op.
                </p>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-105"
                >
                  <Link to="/contact">
                    Contact opnemen
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-500 to-green-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Buurtvereniging de Steenstraat</h3>
              <p className="text-orange-100">
                Samen maken we onze buurt gezelliger en leefbaarder.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-orange-100">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:buurtverenigingdesteenstraat@outlook.com" className="hover:text-white transition-colors">
                    buurtverenigingdesteenstraat@outlook.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigatie</h3>
              <ul className="space-y-2 text-orange-100">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">Laatste nieuws</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Fotogalerij</Link></li>
                <li><Link to="/calendar" className="hover:text-white transition-colors">Buurtactiviteiten</Link></li>
                <li><Link to="/word-lid" className="hover:text-white transition-colors">Word Lid</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-400 mt-8 pt-8 text-center text-orange-100">
            <p>&copy; {currentYear} Buurtvereniging de Steenstraat. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WordLid;