import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const offices = [
  {
    name: "Northern Beaches",
    address: [
      "Suite 1, 635 Pittwater Road",
      "Dee Why NSW 2099",
      "P.O. Box 1277",
    ],
    additionalAddress: [
      "Suite 6 & 7, 635 Pittwater Road",
      "Dee Why NSW 2099",
    ],
    phone: "+61 2 9916 9600",
    email: "sydneyoffice@gairlegal.com.au",
  },
  {
    name: "Newcastle",
    address: [
      "Suite 14, 123 Scott Street",
      "Newcastle NSW 2300",
    ],
    additionalAddress: [
      "Suite 1, 123 Scott Street",
      "Newcastle NSW 2300",
    ],
    phone: "+61 2 9916 9650",
    email: "newcastleoffice@gairlegal.com.au",
  },
  {
    name: "Chatswood",
    address: [
      "Level 5, South Tower",
      "Suite 503, 1-5 Railway Street",
      "Chatswood NSW 2067",
    ],
    phone: "+61 2 9916 9675",
    email: "chatswoodoffice@gairlegal.com.au",
  },
  {
    name: "Melbourne",
    address: [
      "Level 50, 120 Collins Street",
      "Melbourne VIC 3000",
    ],
    phone: "+61 3 8637 9950",
    email: "melbourneoffice@gairlegal.com.au",
  },
];

export const OfficeLocations = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Our Offices</h2>
          <p className="text-lg text-muted-foreground">
            Client relationships are our priority. Contact our offices across 
            Sydney Northern Beaches, Newcastle, Chatswood and Melbourne.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office) => (
            <div
              key={office.name}
              className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-interactive" />
                {office.name}
              </h3>

              {/* Main Address */}
              <div className="space-y-1 mb-4">
                {office.address.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-sm">{line}</p>
                ))}
              </div>

              {/* Additional Address */}
              {office.additionalAddress && (
                <div className="space-y-1 mb-4 pt-3 border-t border-border">
                  {office.additionalAddress.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{line}</p>
                  ))}
                </div>
              )}

              {/* Contact */}
              <div className="space-y-3 pt-4 border-t border-border">
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-interactive hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{office.phone}</span>
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-2 text-interactive hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm truncate">{office.email}</span>
                </a>
              </div>

              {/* Get Directions */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(office.address.join(", "))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 btn-secondary w-full text-center text-sm py-3 flex items-center justify-center gap-2"
              >
                Get Directions <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
