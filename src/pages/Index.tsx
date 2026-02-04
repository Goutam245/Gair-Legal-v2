import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FirmOverview from "@/components/sections/FirmOverview";
import CoreValues from "@/components/sections/CoreValues";
import PracticeAreas from "@/components/sections/PracticeAreas";
import WhyGairLegal from "@/components/sections/WhyGairLegal";
import OfficeLocations from "@/components/sections/OfficeLocations";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FirmOverview />
      <CoreValues />
      <PracticeAreas />
      <WhyGairLegal />
      <OfficeLocations />
      <CTASection />
    </Layout>
  );
};

export default Index;
