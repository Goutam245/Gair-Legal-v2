import { Building2, Calendar, Award } from "lucide-react";
import corporateImage from "@/assets/hero-corporate.jpg";

const stats = [
  { icon: Calendar, label: "Established", value: "2011" },
  { icon: Building2, label: "Offices", value: "4" },
  { icon: Award, label: "Practice Areas", value: "6" },
];

export const FirmOverview = () => {
  return (
    <section id="firm-overview" className="section-padding bg-background scroll-mt-header">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="mb-6">Welcome to Gair Legal</h2>
            <p className="text-lg text-foreground mb-6">
              Gair Legal was established in 2011 and has quickly become one of NSW's 
              premier law firms. We are a progressive and highly specialised firm 
              providing strategic and proactive dispute resolutions for insurers and employers.
            </p>
            <p className="text-muted-foreground mb-8">
              Gair Legal acts on behalf of and in partnership with icare, general insurers, 
              corporate and government self-insurers, and small and large corporations. Our 
              reputation for exceptional service has resulted in the firm being nominated by 
              major organisations as the preferred law firm to handle their claims.
            </p>
            <p className="text-muted-foreground">
              The firm is founded on outstanding legal knowledge and experience with 
              core values of quality, integrity, loyalty, accountability and dedication 
              to a superior legal service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-value"
                >
                  <stat.icon className="w-8 h-8 text-interactive mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={corporateImage}
                alt="Gair Legal Corporate Office"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-interactive/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirmOverview;
