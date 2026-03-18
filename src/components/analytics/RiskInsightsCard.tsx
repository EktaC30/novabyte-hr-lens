import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { AnalyticsEmployee } from "@/data/mockAnalyticsEmployees";

const RiskInsightsCard = ({ employees }: { employees: AnalyticsEmployee[] }) => {
  const atRisk = employees.filter((e) => e.status === "at-risk");
  const lowProgress = employees.filter((e) => e.completionPercent < 40 && e.status !== "completed");
  const overdue = employees.filter((e) => e.onboardingDays > e.expectedDays && e.status !== "completed");

  if (atRisk.length === 0 && lowProgress.length === 0 && overdue.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="glass-card p-6 border-amber-500/20 dark:border-amber-400/15"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.45 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400" />
        <h3 className="text-sm font-medium text-foreground">Risk Insights</h3>
      </div>
      <div className="space-y-3">
        {atRisk.map((emp) => (
          <div key={emp.id} className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-1.5 shrink-0" />
            <div>
              <p className="text-sm text-foreground font-medium">{emp.name}</p>
              <p className="text-xs text-muted-foreground">{emp.riskReason || `${emp.completionPercent}% completion after ${emp.onboardingDays} days`}</p>
            </div>
          </div>
        ))}
        {overdue.filter((e) => e.status !== "at-risk").map((emp) => (
          <div key={emp.id} className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-1.5 shrink-0" />
            <div>
              <p className="text-sm text-foreground font-medium">{emp.name}</p>
              <p className="text-xs text-muted-foreground">Exceeded expected onboarding duration ({emp.onboardingDays}d vs {emp.expectedDays}d expected)</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RiskInsightsCard;
