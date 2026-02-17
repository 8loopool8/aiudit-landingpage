import { motion } from "framer-motion";
import { Shield, Lock, Server, Container } from "lucide-react";
import secureServer from "@/assets/aiuditsite2.jpg";

const SecuritySection = () => {
  return (
    <section id="security" className="section-padding relative bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium mb-4">
            <Shield className="h-3.5 w-3.5" />
            EU Sovereign Cloud
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Airtight Security. <span className="gradient-text">Full Sovereignty.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Your data never leaves your infrastructure. Zero external API calls. Full GDPR compliance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={secureServer}
              alt="Sovereign EU cloud server with European shield"
              className="rounded-2xl shadow-2xl shadow-accent/10 w-full object-cover"
            />
          </motion.div>

          {/* Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              {
                icon: Container,
                title: "On-Premise Docker Containers",
                desc: "Mistral 7B engine runs inside isolated containers within your infrastructure. No cloud dependency.",
              },
              {
                icon: Lock,
                title: "Zero Data Exfiltration",
                desc: "All processing happens locally. Documents, findings, and CAPA reports never leave the client perimeter.",
              },
              {
                icon: Server,
                title: "EU Data Residency",
                desc: "Full compliance with GDPR and upcoming EU AI Act requirements. Sovereign processing guaranteed.",
              },
              {
                icon: Shield,
                title: "SOC 2 & ISO 27001 Ready",
                desc: "Enterprise-grade security controls with comprehensive audit trails and access management.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
