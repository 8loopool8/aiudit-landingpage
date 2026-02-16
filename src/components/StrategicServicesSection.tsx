import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileCheck, ShieldCheck, Leaf, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ConsultationModal";

const services = [
  {
    icon: Search,
    badge: Leaf,
    title: "Pre-Audit Gap Analysis",
    description:
      "We scan your entire GxP infrastructure in 48 hours using the AIUDIT engine to identify exactly where you would fail an FDA or EMA inspection.",
    value: "Fast, objective, and exhaustive risk mapping.",
  },
  {
    icon: FileCheck,
    badge: Atom,
    title: "AI-Powered CMC Documentation Review",
    description:
      "Automated cross-referencing of Module 3 documentation for consistency and ALCOA+ integrity. We find the data gaps before the regulators do.",
    value: "Precision at scale for complex regulatory filings.",
  },
];

const StrategicServicesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Strategic Compliance Services
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16"
        >
          Expertise Meets Intelligence:{" "}
          <span className="text-primary">Our Strategic Services</span>
        </motion.h2>

        {/* Service Cards — Glassmorphism */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-xl p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Organic badge */}
              <div className="absolute top-4 right-4">
                <service.badge className="w-5 h-5 text-primary/40" />
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-sm font-medium text-primary/80 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                {service.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-14 border-l-0 border-t border-b border-border/50 py-8 mx-auto max-w-3xl"
        >
          <p className="text-2xl sm:text-3xl font-semibold text-foreground italic">
            "Our technology, your expertise,{" "}
            <span className="text-primary">everyone's safety.</span>"
          </p>
        </motion.blockquote>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-base px-8 rounded-2xl"
              onClick={() => setModalOpen(true)}
            >
              Schedule a Strategic Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 rounded-2xl"
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore the Platform
            </Button>
          </div>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            Guaranteed Results: 45-Day Money-Back Policy for Service Engagements
          </p>
        </motion.div>
      </div>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default StrategicServicesSection;
