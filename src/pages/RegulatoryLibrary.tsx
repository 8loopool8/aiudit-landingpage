import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileText, Scale, Brain, Database, Lock, X, ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Regulation {
  id: string;
  name: string;
  category: string;
  icon: typeof Shield;
  description: string;
  details: string;
}

const regulations: Regulation[] = [
  {
    id: "fda-21-cfr",
    name: "FDA 21 CFR Part 11",
    category: "Pharma / US",
    icon: Shield,
    description: "Electronic Records & Signatures",
    details:
      "Title 21 CFR Part 11 establishes the United States FDA regulations on electronic records and electronic signatures. It defines the criteria under which electronic records and signatures are considered trustworthy, reliable, and equivalent to paper records and handwritten signatures. Key areas include audit trails, system validation, access controls, and authority checks.",
  },
  {
    id: "eu-gmp-annex-11",
    name: "EU GMP Annex 11",
    category: "Pharma / EU",
    icon: FileText,
    description: "Computerised Systems in GMP",
    details:
      "Annex 11 of the EU Guidelines to Good Manufacturing Practice covers computerised systems used in pharmaceutical manufacturing. It addresses risk management, personnel qualifications, supplier and service provider management, validation, data integrity, storage, printouts, and business continuity. It complements 21 CFR Part 11 with a European regulatory perspective.",
  },
  {
    id: "eu-ai-act",
    name: "EU AI Act — Annex VII",
    category: "AI Governance",
    icon: Brain,
    description: "High-Risk AI System Compliance",
    details:
      "Annex VII of the EU AI Act specifies the conformity assessment procedure for high-risk AI systems. It mandates technical documentation, risk management systems, data governance, transparency obligations, human oversight, and post-market monitoring. Critical for any AI deployed in healthcare, legal, or financial contexts within the EU.",
  },
  {
    id: "gamp5",
    name: "GAMP 5 — 2nd Edition",
    category: "Systems Validation",
    icon: Database,
    description: "Risk-Based Computerised System Validation",
    details:
      "GAMP 5 provides a risk-based approach to compliant computerised systems in the pharmaceutical industry. The 2nd Edition (2022) introduces Critical Thinking concepts, updated software categories, and modern approaches to cloud, AI/ML, and agile development. It is the global standard for CSV (Computer System Validation) and CSA (Computer Software Assurance).",
  },
  {
    id: "alcoa-plus",
    name: "ALCOA+ Principles",
    category: "Data Integrity",
    icon: Scale,
    description: "Attributable, Legible, Contemporaneous, Original, Accurate +",
    details:
      "ALCOA+ is the gold standard framework for data integrity in regulated environments. The core ALCOA principles (Attributable, Legible, Contemporaneous, Original, Accurate) are extended with Complete, Consistent, Enduring, and Available. These principles apply to all data types — electronic, paper, and hybrid — across GxP environments.",
  },
  {
    id: "gdpr-hipaa",
    name: "GDPR / HIPAA",
    category: "Privacy",
    icon: Lock,
    description: "Data Protection & Health Information Privacy",
    details:
      "GDPR (General Data Protection Regulation) governs personal data protection in the EU. HIPAA (Health Insurance Portability and Accountability Act) sets US standards for protecting sensitive patient health information. Together they form the dual-standard for privacy compliance in global life sciences, covering consent management, data minimisation, breach notification, and cross-border data transfers.",
  },
];

const RegulatoryLibrary = () => {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    "fda-21-cfr": true,
    "eu-gmp-annex-11": true,
    "gamp5": true,
    "alcoa-plus": false,
    "eu-ai-act": false,
    "gdpr-hipaa": true,
  });
  const [selectedReg, setSelectedReg] = useState<Regulation | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Regulatory <span className="gradient-text">Library</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Manage the regulatory standards loaded into the sovereign Mistral engine.
              Enable or disable standards per audit context.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regulations.map((reg, i) => (
              <motion.div
                key={reg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`glass-card p-6 rounded-xl transition-all duration-300 ${
                  enabled[reg.id] ? "glow-border" : "opacity-70"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <reg.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Switch
                    checked={enabled[reg.id]}
                    onCheckedChange={(v) =>
                      setEnabled((prev) => ({ ...prev, [reg.id]: v }))
                    }
                  />
                </div>
                <span className="text-[11px] uppercase tracking-wider text-primary font-semibold">
                  {reg.category}
                </span>
                <h3 className="text-base font-semibold text-foreground mt-1 mb-1">
                  {reg.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {reg.description}
                </p>
                <button
                  onClick={() => setSelectedReg(reg)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                >
                  View Details
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Side Panel */}
      <AnimatePresence>
        {selectedReg && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedReg(null)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                    {selectedReg.category}
                  </span>
                  <button
                    onClick={() => setSelectedReg(null)}
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <selectedReg.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedReg.name}
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  {selectedReg.description}
                </p>
                <div className="h-px bg-border mb-6" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {selectedReg.details}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <span
                    className={`text-sm font-medium ${
                      enabled[selectedReg.id] ? "text-green-400" : "text-muted-foreground"
                    }`}
                  >
                    {enabled[selectedReg.id] ? "● Active" : "○ Inactive"}
                  </span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default RegulatoryLibrary;
