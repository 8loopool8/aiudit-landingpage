import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center overflow-hidden">
            <img src={logo} alt="Aiudit" className="h-6 w-6 object-contain" />
          </div>
          <span className="font-bold text-foreground">
            ai<span className="gradient-text">udit</span>
          </span>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Sovereign AI Compliance Infrastructure for Global Life Sciences.
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
