import { motion } from "framer-motion";
import { Leaf, Zap, Lightbulb } from "lucide-react";

const dataPoints = [
  {
    icon: Leaf,
    label: "Lean Processing",
    value: "~1,000 Tokens",
    description: "Average per audited page.",
  },
  {
    icon: Zap,
    label: "Minimal Footprint",
    value: "0.0003 kWh",
    description: "Approx. ~1,080 Joules per audit cycle.",
  },
  {
    icon: Lightbulb,
    label: "Real-World Impact",
    value: "2 Minutes",
    description: "Equivalent to powering a 10W LED bulb.",
  },
];

const SustainableSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-medium mb-4">
            <Leaf className="h-3 w-3" />
            Eco-Conscious Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Efficiency by Design:{" "}
            <span className="gradient-text">Sustainable AI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our sovereign engine is built for ultra-low environmental impact — delivering enterprise-grade compliance audits with a fraction of the energy footprint.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dataPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center group hover:border-green-500/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/15 transition-colors">
                <point.icon className="h-7 w-7 text-green-400" />
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">
                {point.label}
              </p>
              <p className="text-3xl font-bold text-foreground mb-2">
                {point.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainableSection;
