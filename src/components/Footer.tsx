import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-bold text-foreground">
            ai<span className="text-primary">udit</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} aiudit. AI-Driven Compliance for Regulated Industries.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
