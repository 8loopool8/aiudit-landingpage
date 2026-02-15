import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle, Server, FileText, Download, Loader2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Finding {
  id: string;
  title: string;
  severity: "critical" | "major" | "minor";
  confidence: number;
  regulationRef: string;
  suggestedCapa: string;
  agents: { auditor: boolean; lawyer: boolean; engineer: boolean };
}

const mockFindings: Finding[] = [
  {
    id: "F-001",
    title: "Audit trail not enabled for user management module",
    severity: "critical",
    confidence: 98.5,
    regulationRef: "21 CFR 11.10(e)",
    suggestedCapa: "Enable immutable audit trail logging for all CRUD operations in the user management module. Implement timestamp, user ID, and before/after value capture.",
    agents: { auditor: true, lawyer: true, engineer: true },
  },
  {
    id: "F-002",
    title: "Electronic signatures lack secondary authentication factor",
    severity: "critical",
    confidence: 97.2,
    regulationRef: "21 CFR 11.200(a)(1)",
    suggestedCapa: "Implement two-factor authentication for all electronic signature events. Add biometric or token-based verification as a second component.",
    agents: { auditor: true, lawyer: true, engineer: true },
  },
  {
    id: "F-003",
    title: "System validation documentation incomplete for LIMS upgrade",
    severity: "major",
    confidence: 94.8,
    regulationRef: "EU GMP Annex 11, §4.6",
    suggestedCapa: "Complete IQ/OQ/PQ documentation suite for the LIMS v3.2 upgrade. Include traceability matrix mapping requirements to test cases.",
    agents: { auditor: true, lawyer: false, engineer: true },
  },
  {
    id: "F-004",
    title: "Data backup recovery procedure not tested in 12 months",
    severity: "major",
    confidence: 91.3,
    regulationRef: "EU GMP Annex 11, §7.2",
    suggestedCapa: "Schedule and execute a full disaster recovery test. Document recovery time objectives (RTO) and recovery point objectives (RPO). Update SOP accordingly.",
    agents: { auditor: true, lawyer: true, engineer: true },
  },
  {
    id: "F-005",
    title: "Password policy allows fewer than 8 characters",
    severity: "minor",
    confidence: 99.1,
    regulationRef: "21 CFR 11.300(b)",
    suggestedCapa: "Update password policy to enforce minimum 12 characters, including uppercase, lowercase, numeric, and special characters. Implement account lockout after 5 failed attempts.",
    agents: { auditor: true, lawyer: true, engineer: true },
  },
];

const severityColors: Record<string, string> = {
  critical: "text-destructive bg-destructive/10 border-destructive/20",
  major: "text-primary bg-primary/10 border-primary/20",
  minor: "text-muted-foreground bg-secondary border-border",
};

const Dashboard = () => {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();

  const handleExportPdf = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      toast({
        title: "✅ Report Successfully Generated",
        description: "Encrypted with Blockchain Hash: 0x55ea3f…b7c9d2",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                Audit <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-muted-foreground">Sovereign multi-agent compliance analysis</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-500/30 bg-green-500/5"
            >
              <Server className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Sovereign Node Active</span>
              <span className="text-xs text-muted-foreground">(Local Mistral)</span>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Total Findings", value: mockFindings.length, icon: FileText, color: "text-foreground" },
              { label: "Critical", value: mockFindings.filter((f) => f.severity === "critical").length, icon: AlertTriangle, color: "text-destructive" },
              { label: "Avg Confidence", value: `${(mockFindings.reduce((a, f) => a + f.confidence, 0) / mockFindings.length).toFixed(1)}%`, icon: CheckCircle, color: "text-green-400" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="glass-card p-5 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Findings Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-5 border-b border-border/40">
              <h2 className="text-lg font-semibold text-foreground">Audit Findings</h2>
              <button
                onClick={handleExportPdf}
                disabled={isExporting}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors disabled:opacity-60"
              >
                {isExporting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating Sovereign Report…
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Export PDF
                  </>
                )}
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/40 text-muted-foreground text-left">
                    <th className="px-5 py-3 font-medium">ID</th>
                    <th className="px-5 py-3 font-medium">Finding</th>
                    <th className="px-5 py-3 font-medium">Severity</th>
                    <th className="px-5 py-3 font-medium">Confidence</th>
                    <th className="px-5 py-3 font-medium">Consensus</th>
                    <th className="px-5 py-3 font-medium">Regulation Ref.</th>
                    <th className="px-5 py-3 font-medium">Suggested CAPA</th>
                  </tr>
                </thead>
                <tbody>
                  {mockFindings.map((f) => (
                    <tr
                      key={f.id}
                      className="border-b border-border/20 hover:bg-secondary/30 transition-colors cursor-pointer"
                      onClick={() => setExpandedRow(expandedRow === f.id ? null : f.id)}
                    >
                      <td className="px-5 py-4 font-mono text-xs text-muted-foreground">{f.id}</td>
                      <td className="px-5 py-4 text-foreground font-medium max-w-xs">
                        {f.title}
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-semibold uppercase px-2.5 py-1 rounded-md border ${severityColors[f.severity]}`}>
                          {f.severity}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`font-semibold ${f.confidence >= 95 ? "text-green-400" : "text-primary"}`}>
                          {f.confidence}%
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5">
                          <span title="Auditor" className={f.agents.auditor ? "" : "opacity-30"}>👤</span>
                          <span title="Lawyer" className={f.agents.lawyer ? "" : "opacity-30"}>⚖️</span>
                          <span title="Engineer" className={f.agents.engineer ? "" : "opacity-30"}>🛠️</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 font-mono text-xs text-primary">{f.regulationRef}</td>
                      <td className="px-5 py-4 text-muted-foreground text-xs max-w-xs truncate" title={f.suggestedCapa}>
                        {expandedRow === f.id ? f.suggestedCapa : f.suggestedCapa.slice(0, 60) + "…"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
