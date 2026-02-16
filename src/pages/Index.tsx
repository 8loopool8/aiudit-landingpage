import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StrategicServicesSection from "@/components/StrategicServicesSection";
import SustainableSection from "@/components/SustainableSection";
import EngineSection from "@/components/EngineSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import CertificateSection from "@/components/CertificateSection";
import AwsSection from "@/components/AwsSection";
import TrustCenter from "@/components/TrustCenter";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <h1 className="sr-only">Sovereign AI Audit Solutions for European and Global Pharma Compliance</h1>
      <Navbar />
      <Hero />
      <StrategicServicesSection />
      <SustainableSection />
      <EngineSection />
      <FeaturesGrid />
      <CertificateSection />
      <AwsSection />
      <TrustCenter />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
