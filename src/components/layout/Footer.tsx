import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/gair-legal-logo.jpg";

const offices = [
  {
    name: "Northern Beaches Office",
    phone: "+61 2 9916 9600",
    email: "sydneyoffice@gairlegal.com.au",
  },
  {
    name: "Newcastle Office",
    phone: "+61 2 9916 9650",
    email: "newcastleoffice@gairlegal.com.au",
  },
  {
    name: "Chatswood Office",
    phone: "+61 2 9916 9675",
    email: "chatswoodoffice@gairlegal.com.au",
  },
  {
    name: "Melbourne Office",
    phone: "+61 3 8637 9950",
    email: "melbourneoffice@gairlegal.com.au",
  },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Expertise", href: "/expertise" },
  { name: "Our Team", href: "/our-team" },
  { name: "Community & Sustainability", href: "/community" },
  { name: "Contact Us", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="navy-gradient text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Gair Legal"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Legal Provider for Insurers & Employers
            </p>
            <p className="text-primary-foreground/60 text-sm mt-4">
              Established 2011
            </p>
          </div>

          {/* Offices */}
          {offices.map((office) => (
            <div key={office.name} className="space-y-3">
              <h4 className="font-semibold text-primary-foreground text-sm uppercase tracking-wider">
                {office.name.replace(" Office", "")}
              </h4>
              <div className="space-y-2">
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {office.phone}
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-start gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  {office.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Legal */}
            <div className="text-center lg:text-right">
              <p className="text-primary-foreground/60 text-xs">
                Gair Legal is a corporation and not a partnership.
              </p>
              <p className="text-primary-foreground/60 text-xs">
                Limited Liability by a scheme approved under Professional Standards Legislation.
              </p>
              <p className="text-primary-foreground/50 text-xs mt-2">
                © Gair Legal {new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
