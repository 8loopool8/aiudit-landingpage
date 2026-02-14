import { motion } from "framer-motion";
import { Container, Server, ShieldCheck, Lock, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const glossary = [
  {
    term: "GAMP5",
    definition:
      "Good Automated Manufacturing Practice, 5th edition. An industry framework for risk-based validation of computerised systems in pharmaceutical manufacturing.",
  },
  {
    term: "ALCOA+",
    definition:
      "A data integrity framework: Attributable, Legible, Contemporaneous, Original, Accurate — plus Complete, Consistent, Enduring, and Available.",
  },
  {
    term: "Akoma Ntoso",
    definition:
      "An XML-based standard for legal and legislative documents, enabling machine-readable regulatory text and cross-referencing between jurisdictions.",
  },
  {
    term: "CAPA",
    definition:
      "Corrective and Preventive Action — a systematic approach to investigating, correcting, and preventing recurrence of quality issues.",
  },
  {
    term: "RAG",
    definition:
      "Retrieval-Augmented Generation — an AI pattern that grounds LLM outputs in verified, vectorized knowledge bases for factual accuracy.",
  },
];

const GlossaryItem = ({ term, definition }: { term: string; definition: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/30 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          {term}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-sm text-muted-foreground pb-4 leading-relaxed">{definition}</p>
      )}
    </div>
  );
};

const TrustCenter = () => {
  return (
    <section id="trust" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            The Sovereignty <span className="gradient-text">Proof</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Your data never leaves your infrastructure. Here's the architecture that guarantees it.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass-card glow-border p-8 md:p-12 rounded-2xl mb-16"
        >
          <div className="grid md:grid-cols-4 gap-6 items-center">
            {/* Client Side */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Client Perimeter</h3>
              <p className="text-xs text-muted-foreground">Documents uploaded within the client's secure network boundary.</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="h-px w-full bg-gradient-to-r from-primary/40 to-primary" />
                <Lock className="h-4 w-4 text-primary shrink-0" />
                <div className="h-px w-full bg-gradient-to-l from-primary/40 to-primary" />
              </div>
            </div>

            {/* Docker Container */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20">
                <Container className="h-7 w-7 text-green-400" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Local Docker Container</h3>
              <p className="text-xs text-muted-foreground">Mistral engine runs inside an isolated container on-premise. Zero external API calls.</p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {["Mistral 7B", "RAG Layer", "Audit Logic"].map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20">
                <Server className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Compliance Report</h3>
              <p className="text-xs text-muted-foreground">Findings, CAPA, and regulation references — all generated and stored locally.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Lock className="h-3 w-3 text-green-400" />
              No data exits the client infrastructure at any point in the pipeline.
            </p>
          </div>
        </motion.div>

        {/* Glossary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Glossary</h3>
          </div>
          <div className="glass-card rounded-xl p-6">
            {glossary.map((item) => (
              <GlossaryItem key={item.term} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustCenter;
