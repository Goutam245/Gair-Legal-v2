import { useState } from "react";
import { ArrowRight, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import heroImage from "@/assets/hero-team-meeting.jpg";
import workersCompImg from "@/assets/practice-workers-comp.jpg";
import injuryImg from "@/assets/practice-injury.jpg";
import catastrophicImg from "@/assets/practice-catastrophic.jpg";
import employmentImg from "@/assets/practice-employment.jpg";
import publicImg from "@/assets/practice-public.jpg";
import motorImg from "@/assets/practice-motor.jpg";

const practiceAreas = [
  {
    id: "workers-compensation",
    title: "Workers Compensation",
    image: workersCompImg,
    description: `We make it a priority to understand and meet the needs of the workers compensation insurer and their insured. Gair Legal acts as an advocate in contested disputes and we proactively pursue strategic, cost effective and commercially sound resolution of claims.

We are leaders in this area of law and have a reputation of defending and resolving the more difficult and complex matters. Gair Legal provides comprehensive matter management and reporting to insurers and employers. We provide value added services and support, focusing on the reduction and avoidance of workers compensation claims and associated costs.`,
    expert: {
      name: "Alice Davis",
      role: "Partner",
    },
  },
  {
    id: "work-injury-damages",
    title: "Work Injury Damages & Recoveries",
    image: injuryImg,
    description: `Our Work Injury Damages team provides expert legal services in defending claims for damages arising from workplace injuries. We have extensive experience in managing complex litigation and achieving cost-effective resolutions.

We work closely with our clients to develop comprehensive defense strategies and ensure that all available defenses are properly considered and pursued.`,
    expert: {
      name: "Stephen Hodges",
      role: "Partner",
    },
  },
  {
    id: "catastrophic-injuries",
    title: "Catastrophic Injuries & Death Claims",
    image: catastrophicImg,
    description: `Gair Legal has significant experience in managing catastrophic injury claims and death claims. We provide compassionate yet thorough management of these sensitive matters.

Our experienced team understands the complexities involved in these claims and works diligently to ensure fair outcomes while maintaining the highest standards of professionalism.`,
    expert: {
      name: "Christie Blake",
      role: "Partner",
    },
  },
  {
    id: "employment-law",
    title: "Employment Law / Workplace Health & Safety",
    image: employmentImg,
    description: `We provide comprehensive employment law services to employers and insurers, including advice on unfair dismissal claims, general protections claims, and workplace health and safety matters.

Our team has extensive experience in defending WHS prosecutions and providing proactive workplace safety advice to minimize risks and ensure compliance.`,
    expert: {
      name: "Dennis Kim",
      role: "Partner",
    },
  },
  {
    id: "public-liability",
    title: "Public Liability",
    image: publicImg,
    description: `Our public liability practice involves the defense of claims arising from alleged negligence in public spaces, premises liability, and occupiers' liability claims.

We have extensive experience in defending a wide range of public liability claims and work closely with our insurer clients to achieve cost-effective resolutions.`,
    expert: {
      name: "Nadia Toller",
      role: "Partner",
    },
  },
  {
    id: "motor-vehicle",
    title: "Motor Vehicle",
    image: motorImg,
    description: `Gair Legal has extensive experience in defending motor vehicle accident claims on behalf of CTP insurers. We provide comprehensive claim management services and strategic advice throughout the claims process.

Our team is experienced in all aspects of motor vehicle accident litigation and is committed to achieving the best possible outcomes for our clients.`,
    expert: {
      name: "Louis Raft",
      role: "Senior Counsel",
    },
  },
];

const Expertise = () => {
  const [activeArea, setActiveArea] = useState(practiceAreas[0].id);
  const currentArea = practiceAreas.find((area) => area.id === activeArea) || practiceAreas[0];

  return (
    <Layout>
      <PageHero
        title="Gair Legal Expertise"
        subtitle="Highly competent and experienced lawyers guiding you through complex legal issues"
        backgroundImage={heroImage}
      />

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-28 space-y-2">
                {practiceAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(area.id)}
                    className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-300 ${
                      activeArea === area.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-muted text-foreground hover:bg-accent"
                    }`}
                  >
                    <span className="font-medium">{area.title}</span>
                    {activeArea === area.id && (
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2">
              <div className="animate-fade-up" key={currentArea.id}>
                <h2 className="mb-6">{currentArea.title}</h2>
                <div className="prose prose-lg max-w-none">
                  {currentArea.description.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <img
                  src={currentArea.image}
                  alt={currentArea.title}
                  className="w-full h-80 object-cover rounded-2xl mt-8 shadow-lg"
                />
              </div>
            </div>

            {/* Expert Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-primary rounded-2xl p-6 text-primary-foreground">
                <p className="text-sm uppercase tracking-wider mb-4 opacity-80">
                  Meet our experts
                </p>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                    <User className="w-12 h-12 opacity-60" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary-foreground mb-1">
                    {currentArea.expert.name}
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    {currentArea.expert.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Expertise;
