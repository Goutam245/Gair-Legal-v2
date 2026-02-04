import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/sections/PageHero";
import heroImage from "@/assets/hero-sydney.jpg";

const offices = [
  {
    name: "Northern Beaches Office",
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
    name: "Newcastle Office",
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
    name: "Chatswood Office",
    address: [
      "Level 5, South Tower",
      "Suite 503, 1-5 Railway Street",
      "Chatswood NSW 2067",
    ],
    phone: "+61 2 9916 9675",
    email: "chatswoodoffice@gairlegal.com.au",
  },
  {
    name: "Melbourne Office",
    address: [
      "Level 50, 120 Collins Street",
      "Melbourne VIC 3000",
    ],
    phone: "+61 3 8637 9950",
    email: "melbourneoffice@gairlegal.com.au",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Client relationships are our priority"
        backgroundImage={heroImage}
      />

      {/* Intro */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-foreground">
              Contact details for Sydney Northern Beaches, Newcastle, Chatswood 
              and Melbourne Offices are:
            </p>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {offices.map((office) => (
              <div
                key={office.name}
                className="bg-background rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-interactive mb-4">
                  {office.name.replace(" Office", "")}
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
                    <span className="text-sm break-all">{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-center mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-interactive focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-interactive focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-interactive focus:border-transparent transition-all"
                      placeholder="+61 2 9999 9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-interactive focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-interactive focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
