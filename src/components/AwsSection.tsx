import { motion } from "framer-motion";
import { Cloud, Server, ShieldCheck } from "lucide-react";

const AwsSection = () => {
  return (
    <section id="aws" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card glow-border rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
                <Cloud className="h-3.5 w-3.5" />
                Cloud-Native
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Built on AWS
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Optimized for cloud-native deployment with enterprise-grade security, auto-scaling, 
                and full data residency control. Leverage AWS Activate credits to get started.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Server, text: "Auto-scaling infrastructure for any workload" },
                  { icon: ShieldCheck, text: "SOC 2, HIPAA, and ISO 27001 ready" },
                  { icon: Cloud, text: "Multi-region deployment with data sovereignty" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-secondary-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-2xl glass-card flex flex-col items-center justify-center gap-3 animate-float">
                  <Cloud className="h-12 w-12 text-primary" />
                  <span className="text-sm font-semibold text-foreground">AWS Powered</span>
                  <span className="text-xs text-muted-foreground">Enterprise Ready</span>
                </div>
                <div className="absolute -inset-4 border border-primary/10 rounded-3xl -z-10" />
                <div className="absolute -inset-8 border border-primary/5 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwsSection;
