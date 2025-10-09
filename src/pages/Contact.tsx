import { useState } from "react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo"
import { ArrowLeft, Mail, Phone, MapPin, Send, Facebook } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/emailjs";
// Header is provided globally by App

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        toast({
          title: "Bericht verzonden!",
          description: "Uw bericht is succesvol verzonden. We nemen binnen 24 uur contact met u op.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        toast({
          title: "Fout bij verzenden",
          description: "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Fout bij verzenden",
        description: "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Seo title="Contact | Buurtvereniging De Steenstraat" description="Neem contact op met Buurtvereniging De Steenstraat voor vragen, nieuws of lidmaatschap." url="https://bvdesteenstraat.nl/contact" />

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
                  <Mail className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">buurtverenigingdesteenstraat@outlook.com</p>
                    <p className="text-sm text-gray-500">We reageren binnen 24 uur</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Facebook className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Facebook</h3>
                    <a 
                      href="https://www.facebook.com/groups/396194063895407" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      Volg ons op Facebook
                    </a>
                    <p className="text-sm text-gray-500">Blijf op de hoogte van onze activiteiten</p>
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
                  <h4 className="font-semibold text-gray-900">Stijn van de Ven</h4>
                  <p className="text-gray-600">Voorzitter</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Edwina Treebusch</h4>
                  <p className="text-gray-600">Secretaris</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ivo Beerens</h4>
                  <p className="text-gray-600">Penningmeester</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Nina Romme</h4>
                  <p className="text-gray-600">Algemeen bestuurslid</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rik Bosvelt</h4>
                  <p className="text-gray-600">Algemeen bestuurslid</p>
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

                <Button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Versturen..." : "Verstuur bericht"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer is provided globally by App */}
    </div>
  );
};

export default Contact;
