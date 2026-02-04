import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import workersCompImg from "@/assets/practice-workers-comp.jpg";
import injuryImg from "@/assets/practice-injury.jpg";
import catastrophicImg from "@/assets/practice-catastrophic.jpg";
import employmentImg from "@/assets/practice-employment.jpg";
import publicImg from "@/assets/practice-public.jpg";
import motorImg from "@/assets/practice-motor.jpg";

const practiceAreas = [
  {
    title: "Workers Compensation",
    description: "Strategic advocacy in contested disputes for insurers and their insured.",
    image: workersCompImg,
    slug: "workers-compensation",
  },
  {
    title: "Work Injury Damages & Recoveries",
    description: "Expert handling of complex work injury claims and recovery matters.",
    image: injuryImg,
    slug: "work-injury-damages",
  },
  {
    title: "Catastrophic Injuries & Death Claims",
    description: "Compassionate and thorough management of serious injury and death claims.",
    image: catastrophicImg,
    slug: "catastrophic-injuries",
  },
  {
    title: "Employment Law / Workplace Health & Safety",
    description: "Comprehensive workplace solutions for employers and insurers.",
    image: employmentImg,
    slug: "employment-law",
  },
  {
    title: "Public Liability",
    description: "Defending public liability claims with expertise and efficiency.",
    image: publicImg,
    slug: "public-liability",
  },
  {
    title: "Motor Vehicle",
    description: "Specialized motor vehicle accident claim management and defense.",
    image: motorImg,
    slug: "motor-vehicle",
  },
];

export const PracticeAreas = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Gair Legal Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Gair Legal has proven expertise in a range of legal fields utilising 
            highly competent and experienced lawyers. We can guide you through 
            complex legal issues to find an effective and cost-efficient business solution.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              to={`/expertise#${area.slug}`}
              className="card-premium group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-primary-foreground">
                  {area.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <span className="inline-flex items-center text-interactive font-medium group-hover:gap-3 gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
