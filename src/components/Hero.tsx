import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-8 tracking-wide"
            >
              <Clock className="h-3.5 w-3.5" />
              48-Hour Express Audit Available
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground">Sovereign AI Compliance</span>
              <br />
              <span className="gradient-text">for Life Sciences.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              From GAMP5 manufacturing audits to clinical studies — powered by airtight, EU-sovereign AI infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#audit"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <Clock className="h-4 w-4" />
                Start Your 48-Hour Audit
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-border bg-white/60 backdrop-blur px-7 py-3.5 rounded-lg font-medium text-foreground hover:bg-white transition-all group"
              >
                Request Demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                EU AI Act Aligned
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                100% EU Data Residency
              </span>
            </motion.div>
          </motion.div>

          {/* Logo with subtle sun glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex lg:col-span-2 items-center justify-center"
          >
            <div className="relative">
              {/* Sun glow radial */}
              <div className="absolute -inset-16 sun-glow rounded-full" />
              <div className="relative w-48 h-48 rounded-full bg-gold flex items-center justify-center animate-float shadow-xl shadow-gold/25">
                <img src={logo} alt="Aiudit" className="h-28 w-28 object-contain" />
              </div>
              <div className="absolute -inset-4 border border-gold/10 rounded-full -z-10" />
              <div className="absolute -inset-8 border border-gold/5 rounded-full -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
