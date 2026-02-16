import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck, Send, CheckCircle } from "lucide-react";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationModal = ({ open, onOpenChange }: ConsultationModalProps) => {
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

  const handleClose = (value: boolean) => {
    onOpenChange(value);
    if (!value) {
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md rounded-2xl border-border/60 bg-card backdrop-blur-xl">
        {submitted ? (
          <div className="text-center py-8 px-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Expertise is on the way.
            </h3>
            <p className="text-muted-foreground">
              We will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">
                Schedule a Strategic Consultation
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Tell us about your compliance needs and we'll get back to you within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <input type="hidden" name="subject" value="Strategic Consultation Request – aiudit.tech" />

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <Input name="name" required maxLength={100} placeholder="Your full name" className="rounded-xl" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Work Email</label>
                <Input name="email" type="email" required maxLength={255} placeholder="you@company.com" className="rounded-xl" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                <Input name="company" required maxLength={100} placeholder="Company name" className="rounded-xl" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">How can we help?</label>
                <Textarea name="message" required maxLength={1000} placeholder="Briefly describe your compliance challenge…" className="rounded-xl min-h-[80px]" />
              </div>

              <Button type="submit" disabled={loading} className="w-full rounded-xl text-base py-5">
                <Send className="h-4 w-4 mr-2" />
                {loading ? "Sending..." : "Send Request"}
              </Button>

              <p className="text-xs text-muted-foreground flex items-center gap-1.5 justify-center pt-1">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                Guaranteed Results: 45-Day Money-Back Policy
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
