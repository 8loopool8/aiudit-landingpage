import { motion } from "framer-motion";
import { Database, MonitorSmartphone, ArrowRight, Layers } from "lucide-react";

const EngineSection = () => {
  return (
    <section id="engine" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">The </span>
            <span className="gradient-text">Engine</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A modular RAG system that decouples regulatory knowledge from the user interface.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card glow-border p-8 md:p-12 rounded-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Laws / RAG */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">The Laws</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Regulatory databases (GAMP5, FDA 21 CFR, EU GMP Annex) stored in a vectorized RAG layer. Updated independently.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["GAMP5", "FDA", "EU GMP", "ICH"].map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-primary/40 to-primary" />
                <Layers className="h-6 w-6 text-primary animate-pulse" />
                <div className="h-px w-12 bg-gradient-to-l from-primary/40 to-primary" />
              </div>
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-xs font-medium text-primary">Law-Interface Decoupling</span>
              </div>
              <p className="text-xs text-muted-foreground text-center max-w-[200px]">
                Same UI, different regulatory context. Swap use cases without rebuilding.
              </p>
            </div>

            {/* Interface */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 border border-accent/20">
                <MonitorSmartphone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">The Interface</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A unified audit dashboard that adapts to any compliance context. One interface, every regulation.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Dashboard", "Reports", "Trails", "Alerts"].map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineSection;
