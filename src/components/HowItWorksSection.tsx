import { motion } from "framer-motion";
import { Clock, FileSearch, ShieldCheck, BarChart3, CheckCircle2 } from "lucide-react";
import auditTablet from "@/assets/aiuditsite.jpg";

const benefits = [
  { icon: FileSearch, text: "Full GxP infrastructure scan in 48 hours" },
  { icon: ShieldCheck, text: "FDA & EMA inspection readiness mapping" },
  { icon: BarChart3, text: "AI-generated compliance scoring per regulation" },
  { icon: CheckCircle2, text: "Actionable CAPA recommendations delivered" },
];

const HowItWorksSection = () => {
  return (
    <section id="audit" className="section-padding relative bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">
            <Clock className="h-3.5 w-3.5" />
            Express Service
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your 48-Hour <span className="gradient-text">Compliance Audit</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Fast, objective, and exhaustive risk mapping — before the regulators find it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={auditTablet}
              alt="AI-powered document audit on tablet"
              className="rounded-2xl shadow-2xl shadow-primary/10 w-full object-cover"
            />
          </motion.div>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-foreground">
              Express Audit Benefits
            </h3>
            <div className="space-y-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{b.text}</p>
                </motion.div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <Clock className="h-4 w-4" />
              Start Your 48-Hour Audit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
