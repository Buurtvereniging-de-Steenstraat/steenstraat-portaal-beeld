import { Link } from "react-router-dom";
import { Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-green-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Buurtvereniging de Steenstraat</h3>
            <p className="text-orange-100">Samen maken we onze buurt een fijne plek om te wonen.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Snel navigeren</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-orange-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/news" className="text-orange-100 hover:text-white transition-colors">Laatste nieuws</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-orange-100 hover:text-white transition-colors">Fotogalerij</Link>
              </li>
              <li>
                <Link to="/calendar" className="text-orange-100 hover:text-white transition-colors">Buurtactiviteiten</Link>
              </li>
              <li>
                <Link to="/word-lid" className="text-orange-100 hover:text-white transition-colors">Word Lid</Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-100 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-orange-100">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>buurtverenigingdesteenstraat@outlook.com</span>
              </div>
              <div className="flex items-center">
                <Facebook className="h-4 w-4 mr-2" />
                <a
                  href="https://www.facebook.com/groups/396194063895407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Volg ons op Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-orange-500 mt-8 pt-8 text-center text-orange-200">
          <p>&copy; {new Date().getFullYear()} Buurtvereniging de Steenstraat. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
