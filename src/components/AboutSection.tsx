import { motion } from "framer-motion";
import { Users, Award, Globe } from "lucide-react";
import teamImage from "@/assets/aiuditsite1.jpg";

const stats = [
  { icon: Users, label: "Expert Team", value: "Pharma & AI Specialists" },
  { icon: Award, label: "Standards", value: "GAMP5 · FDA · EMA · ICH" },
  { icon: Globe, label: "Reach", value: "EU-Sovereign, Globally Ready" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Where Pharma Meets <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aiudit brings together regulatory scientists, compliance engineers, and AI architects 
              to deliver sovereign audit infrastructure that the life sciences industry can trust.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our modular Law-Interface architecture decouples regulatory databases from the user interface — 
              enabling seamless transitions between GAMP5, FDA 21 CFR, EU GMP, and clinical study contexts 
              without rebuilding.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="text-sm font-semibold text-foreground">{s.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={teamImage}
              alt="Aiudit professionals reviewing audit analytics"
              className="rounded-2xl shadow-2xl shadow-primary/10 w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
