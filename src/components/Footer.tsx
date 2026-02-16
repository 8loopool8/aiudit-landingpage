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
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Aiudit — Helping Global Life Sciences transition to Sovereign AI Governance.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            © {new Date().getFullYear()} Aiudit Systems. Remote-First, Global Standard.
          </p>
          <p className="text-xs text-muted-foreground/40 mt-2 max-w-lg mx-auto">
            Aiudit provides sovereign compliance infrastructure. Final certification is the responsibility of authorized human auditors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
