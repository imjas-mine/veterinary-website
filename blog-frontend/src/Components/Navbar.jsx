import { useState } from "react";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 bg-white shadow-sm fixed top-0 left-0 z-50">

      <div onClick={() => navigate("/")} className="text-lg md:text-xl font-bold text-sky-600 cursor-pointer">
        Dr. Simran Kaur
      </div>

      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-sky-600">
            {link.label}
          </a>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Phone size={18} className="text-sky-600" />
          <span>(555) 533-8833</span>
        </div>
        <a
          href="#Appointment"
          className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
        >
          Book Appointment
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        {isOpen ? (
          <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col md:hidden border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center justify-between px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
            >
              <span className="font-medium">{link.label}</span>
              <ChevronRight size={18} className="text-gray-400" />
            </a>
          ))}

          <div className="px-6 py-4 space-y-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone size={18} className="text-sky-600" />
              <span>(555) 533-8833</span>
            </div>
            <a
              href="#Appointment"
              onClick={handleLinkClick}
              className="block w-full text-center bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
