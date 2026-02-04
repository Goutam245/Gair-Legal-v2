import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/gair-legal-logo.jpg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Expertise", href: "/expertise" },
  { name: "Our Team", href: "/our-team" },
  { name: "Community & Sustainability", href: "/community" },
  { name: "Contact Us", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Gair Legal - Legal Provider for Insurers & Employers"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative font-medium text-sm tracking-wide uppercase transition-colors duration-300 ${
                  isActive(link.href) 
                    ? "text-interactive" 
                    : "text-primary hover:text-interactive"
                } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-interactive after:transition-transform after:duration-300 ${
                  isActive(link.href) 
                    ? "after:scale-x-100" 
                    : "after:scale-x-0 hover:after:scale-x-100"
                } after:origin-left`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:+61299169600"
            className="hidden lg:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-secondary hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-interactive transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="container-custom py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl font-medium transition-colors ${
                isActive(link.href) ? "text-interactive" : "text-primary hover:text-interactive"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+61299169600"
            className="bg-primary text-white px-6 py-4 rounded-lg font-medium text-center mt-4 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
