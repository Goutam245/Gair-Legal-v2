import { useState } from "react";
import { ArrowRight, Heart, Leaf, Users, Shield, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import heroImage from "@/assets/hero-coast.jpg";

const tabs = [
  {
    id: "pro-bono",
    title: "Pro Bono Work",
    icon: Heart,
    content: `Gair Legal is committed to being a responsible firm and provides a positive social and economic contribution to the community. We provide pro bono legal assistance and the use of our office facilities for pro bono clients.

Our pro bono program reflects our commitment to access to justice and our belief that everyone deserves quality legal representation regardless of their financial circumstances.`,
  },
  {
    id: "environment",
    title: "Environment/Sustainability",
    icon: Leaf,
    content: `Gair Legal is committed to sustainable business practices and minimizing our environmental footprint. We have implemented various initiatives including paperless office operations, energy-efficient technologies, and sustainable procurement practices.

We regularly review our environmental performance and seek opportunities to improve our sustainability outcomes.`,
  },
  {
    id: "charities",
    title: "Charities",
    icon: Users,
    content: `Gair Legal actively supports various charitable organizations through financial contributions, volunteer work, and pro bono legal services. Our staff are encouraged to participate in community activities and charitable initiatives.

We partner with local and national charities that align with our values and commitment to making a positive difference in the community.`,
  },
  {
    id: "diversity",
    title: "Diversity and Inclusion",
    icon: Shield,
    content: `At Gair Legal, we believe that diversity and inclusion are fundamental to our success. We are committed to creating a workplace that is inclusive, respectful, and free from discrimination.

We actively promote equal opportunity and strive to attract, retain, and develop talented individuals from diverse backgrounds.`,
  },
  {
    id: "privacy",
    title: "Privacy Note",
    icon: FileText,
    content: `Gair Legal is committed to protecting the privacy of our clients and ensuring the confidentiality of all personal information. We comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.

We only collect personal information that is necessary for providing our legal services and handle all information in accordance with our privacy obligations.`,
  },
];

const Community = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <Layout>
      <PageHero
        title="Community & Sustainability"
        subtitle="Integrity, loyalty and dedication to our community"
        backgroundImage={heroImage}
      />

      {/* Intro */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Gair Legal actively supports the community and is committed to sustainable 
              work and life practices.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Content */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-background text-foreground hover:bg-accent"
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.title}</span>
                    {activeTab === tab.id && (
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg" key={currentTab.id}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                    <currentTab.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl">{currentTab.title}</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  {currentTab.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  ))}
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

export default Community;
