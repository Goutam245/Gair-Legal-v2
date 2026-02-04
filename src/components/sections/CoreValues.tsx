import { 
  Award, 
  Shield, 
  Heart, 
  CheckCircle, 
  Target, 
  Star 
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality",
    description: "Delivering exceptional legal services with precision and expertise.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding the highest ethical standards in all our dealings.",
  },
  {
    icon: Heart,
    title: "Loyalty",
    description: "Building lasting partnerships with our clients and community.",
  },
  {
    icon: CheckCircle,
    title: "Accountability",
    description: "Taking responsibility for outcomes and maintaining transparency.",
  },
  {
    icon: Target,
    title: "Dedication",
    description: "Committed to achieving the best possible results for every client.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Striving for outstanding performance in everything we do.",
  },
];

export const CoreValues = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Our Core Values</h2>
          <p className="text-lg text-muted-foreground">
            The foundation of our practice is built on six core values that guide 
            every decision we make and every client we serve.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card-value bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
