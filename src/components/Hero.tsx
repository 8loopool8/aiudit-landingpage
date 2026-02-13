import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-8"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Enterprise Compliance Platform
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Sovereign AI Compliance</span>
            <br />
            <span className="gradient-text">Infrastructure for Global Life Sciences.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Seamlessly transition from GAMP5 manufacturing guidelines to Clinical Studies.
            Auditing powered by a modular{" "}
            <span className="text-foreground font-medium">Law-Interface architecture</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#engine"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-lg hover:bg-primary/90 transition-all animate-pulse-glow"
            >
              <Cpu className="h-4 w-4" />
              View Technical Architecture
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 glass-card px-6 py-3.5 font-medium text-foreground hover:bg-secondary transition-all group"
            >
              Request Enterprise Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 border border-primary/10 rounded-2xl rotate-12 animate-float" />
            <div className="absolute inset-4 border border-primary/20 rounded-2xl -rotate-6 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute inset-8 glass-card rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
              <ShieldCheck className="h-16 w-16 text-primary/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
