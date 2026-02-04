import { Check } from "lucide-react";

const reputationPoints = [
  "Exceeding client's expectations",
  "Outstanding legal knowledge and representation",
  "Dedicated and experienced legal practitioners",
  "Exceptional client relationships",
  "Expertise in effective dispute resolution",
  "Minimising costs and maximising results",
  "Commitment to excellence and a commitment to clients",
  "Modern and secure technology and systems",
  "Sustainable and socially responsible practices",
];

export const WhyGairLegal = () => {
  return (
    <section className="section-padding navy-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <div>
            <h2 className="text-primary-foreground mb-6">
              Gair Legal's Superior Reputation Is Built On:
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Our commitment to excellence has made us the preferred legal partner 
              for major insurers and employers across Australia.
            </p>
          </div>

          {/* Right - Points */}
          <div className="space-y-5">
            {reputationPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-interactive flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-primary-foreground/90 text-lg group-hover:text-primary-foreground transition-colors">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGairLegal;
