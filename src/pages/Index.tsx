import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import SecuritySection from "@/components/SecuritySection";
import StrategicServicesSection from "@/components/StrategicServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <h1 className="sr-only">Sovereign AI Audit Solutions for European and Global Pharma Compliance</h1>
      <Navbar />
      <Hero />
      <HowItWorksSection />
      <AboutSection />
      <SecuritySection />
      <StrategicServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
