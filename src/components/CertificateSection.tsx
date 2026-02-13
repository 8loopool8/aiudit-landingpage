import { motion } from "framer-motion";
import { FileCheck, Shield } from "lucide-react";

const CertificateSection = () => {
  return (
    <section id="certificate" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Neural Audit Certificate
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            AI-generated compliance certificates with full traceability and risk scoring.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          {/* Certificate Document */}
          <div className="bg-white rounded-2xl shadow-2xl shadow-primary/5 p-8 md:p-12 text-gray-900">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-gray-200 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-[hsl(43,76%,52%)]" />
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">
                    ai<span className="text-[hsl(43,76%,52%)]">udit</span>
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Neural Audit Certificate</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Certificate ID</p>
                <p className="text-sm font-mono font-semibold text-gray-700">NAC-2026-00847</p>
              </div>
            </div>

            {/* Reference */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-sm">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Regulatory Ref</p>
                <p className="font-semibold text-gray-800">21 CFR Part 11</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Framework</p>
                <p className="font-semibold text-gray-800">GAMP5 Cat. 5</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Issue Date</p>
                <p className="font-semibold text-gray-800">2026-02-13</p>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 mb-8">
              <FileCheck className="h-5 w-5 text-green-600" />
              <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">COMPLIANT</span>
            </div>

            {/* Risk / Confidence Table */}
            <div className="border border-gray-200 rounded-xl overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Audit Domain</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Risk Level</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { domain: "Electronic Records", risk: "Low", confidence: "98.2%", riskColor: "text-green-600 bg-green-50" },
                    { domain: "Electronic Signatures", risk: "Low", confidence: "97.5%", riskColor: "text-green-600 bg-green-50" },
                    { domain: "Audit Trail Integrity", risk: "Medium", confidence: "94.1%", riskColor: "text-amber-600 bg-amber-50" },
                    { domain: "Access Control", risk: "Low", confidence: "99.0%", riskColor: "text-green-600 bg-green-50" },
                    { domain: "Data Integrity (ALCOA+)", risk: "Low", confidence: "96.8%", riskColor: "text-green-600 bg-green-50" },
                  ].map((row) => (
                    <tr key={row.domain} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 text-gray-800">{row.domain}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${row.riskColor}`}>{row.risk}</span>
                      </td>
                      <td className="px-4 py-3 text-center font-mono font-semibold text-gray-700">{row.confidence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-200 pt-4">
              <span>Ref: 21 CFR Part 11 · EU GMP Annex 11 · GAMP5</span>
              <span>Aiudit Systems — Sovereign Compliance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;
