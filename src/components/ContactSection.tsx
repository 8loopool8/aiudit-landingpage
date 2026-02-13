import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "e3497a6a-595c-4b11-a9de-b1b875e77641");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch {
      // silently handle
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to automate your compliance workflow? Let's talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {submitted ? (
            <div className="glass-card glow-border rounded-2xl p-12 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <Send className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Thank you!</h3>
              <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <input type="hidden" name="subject" value="New Contact from aiudit.tech" />
              <input type="hidden" name="redirect" value="https://aiudit.lovable.app" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    required
                    maxLength={100}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={255}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Compliance Interest</label>
                <select
                  name="compliance_interest"
                  required
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                >
                  <option value="">Select area of interest</option>
                  <option value="GAMP5">GAMP5</option>
                  <option value="EU AI Act">EU AI Act</option>
                  <option value="FDA 21 CFR">FDA 21 CFR</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
