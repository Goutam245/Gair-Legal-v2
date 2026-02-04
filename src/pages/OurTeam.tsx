import { Mail, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import heroImage from "@/assets/hero-melbourne.jpg";

const teamMembers = [
  { name: "Jennifer Gair", role: "Managing Partner", email: "jennifer.gair@gairlegal.com.au" },
  { name: "Anthony Cummins", role: "Director", email: "anthony.cummins@gairlegal.com.au" },
  { name: "Alice Davis", role: "Partner", email: "alice.davis@gairlegal.com.au" },
  { name: "Stephen Hodges", role: "Partner", email: "stephen.hodges@gairlegal.com.au" },
  { name: "Christie Blake", role: "Partner", email: "christie.blake@gairlegal.com.au" },
  { name: "Dennis Kim", role: "Partner", email: "dennis.kim@gairlegal.com.au" },
  { name: "Nadia Toller", role: "Partner", email: "nadia.toller@gairlegal.com.au" },
  { name: "Phoebe Singer", role: "Senior Counsel", email: "phoebe.singer@gairlegal.com.au" },
  { name: "Louis Raft", role: "Senior Counsel", email: "louis.raft@gairlegal.com.au" },
  { name: "Anthony Pryer", role: "Senior Associate", email: "anthony.pryer@gairlegal.com.au" },
  { name: "Alisha Dyson", role: "Senior Associate", email: "alisha.dyson@gairlegal.com.au" },
  { name: "Olivia Leonard", role: "Senior Associate", email: "olivia.leonard@gairlegal.com.au" },
  { name: "Zac Simons", role: "Senior Associate", email: "zac.simons@gairlegal.com.au" },
  { name: "Declan O'Connor", role: "Senior Associate", email: "declan.oconnor@gairlegal.com.au" },
  { name: "Lauren Hose", role: "Associate", email: "lauren.hose@gairlegal.com.au" },
  { name: "Anastasia Milovic", role: "Associate", email: "anastasia.milovic@gairlegal.com.au" },
  { name: "Tenah Lungbok", role: "Associate", email: "tenah.lungbok@gairlegal.com.au" },
];

const OurTeam = () => {
  return (
    <Layout>
      <PageHero
        title="Our Team"
        subtitle="Exceptional customer service from experienced professionals"
        backgroundImage={heroImage}
      />

      {/* Intro Section */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-foreground mb-6">
              Our senior staff are supported by experienced lawyers, graduates, paralegals 
              and administrative professionals.
            </p>
            <p className="text-muted-foreground">
              Gair Legal is one of NSW's premier law firms. Our highly experienced Partners 
              are leaders in Workers Compensation and are supported by knowledgeable lawyers 
              and support professionals. We provide exceptional customer outcomes and service.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.email}
                className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Photo Placeholder */}
                <div className="h-64 bg-gradient-to-br from-accent to-muted flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-16 h-16 text-primary/40" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium text-sm mb-4">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-interactive hover:text-secondary transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default OurTeam;
