import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: "How it Works", href: "/#audit" },
    { label: "About", href: "/#about" },
    { label: "Security", href: "/#security" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = useCallback(
    (href: string) => {
      setIsOpen(false);
      if (href.startsWith("/#")) {
        const hash = href.slice(1);
        if (location.pathname === "/") {
          const el = document.querySelector(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/");
          setTimeout(() => {
            const el = document.querySelector(hash);
            el?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else {
        navigate(href);
      }
    },
    [location.pathname, navigate]
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-full bg-gold flex items-center justify-center overflow-hidden shadow-sm">
            <img src={logo} alt="Aiudit" className="h-7 w-7 object-contain" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            ai<span className="gradient-text">udit</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/#audit")}
            className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
          >
            Start 48h Audit
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-muted-foreground"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border/40 bg-white/95 backdrop-blur-xl"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/#audit")}
              className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-center"
            >
              Start 48h Audit
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
