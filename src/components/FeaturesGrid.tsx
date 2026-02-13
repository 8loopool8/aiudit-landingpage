import { motion } from "framer-motion";
import { FileCheck, GitBranch, Lock, Zap, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Compliance as Code",
    description: "Automate audit trails with deterministic, version-controlled compliance workflows.",
    span: "md:col-span-2",
  },
  {
    icon: Lock,
    title: "GAMP5 Ready",
    description: "Built for automated manufacturing validation and clinical study compliance out of the box.",
    span: "",
  },
  {
    icon: GitBranch,
    title: "Modular Architecture",
    description: "Swap regulatory databases without touching the UI. Law-Interface decoupling at its finest.",
    span: "",
  },
  {
    icon: Zap,
    title: "Real-Time Auditing",
    description: "Continuous monitoring with instant compliance scoring and deviation alerts.",
    span: "md:col-span-2",
  },
  {
    icon: Globe,
    title: "Data Residency",
    description: "Full control over data sovereignty with region-specific deployment and compliance guarantees.",
    span: "md:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Compliance Scoring",
    description: "AI-generated compliance scores with granular breakdowns per regulation.",
    span: "",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const FeaturesGrid = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            The Modular Advantage
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Enterprise-grade compliance tools built on a foundation of flexibility and security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`glass-card p-6 rounded-xl group hover:glow-border transition-all duration-300 ${feature.span}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
