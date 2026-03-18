import { motion } from "framer-motion";
import { AnalyticsEmployee } from "@/data/mockAnalyticsEmployees";

const AggregateKPIRow = ({ employees }: { employees: AnalyticsEmployee[] }) => {
  const avgCompletion = Math.round(employees.reduce((s, e) => s + e.completionPercent, 0) / employees.length);
  const avgDuration = (employees.reduce((s, e) => s + e.onboardingDays, 0) / employees.length).toFixed(1);
  const active = employees.filter((e) => e.status !== "completed").length;
  const completed = employees.filter((e) => e.status === "completed").length;
  const atRisk = employees.filter((e) => e.status === "at-risk").length;

  const kpis = [
    { label: "Avg Completion", value: `${avgCompletion}%`, sub: "across all employees" },
    { label: "Avg Duration", value: `${avgDuration}d`, sub: "onboarding time" },
    { label: "Active", value: `${active}`, sub: "in progress" },
    { label: "Completed", value: `${completed}`, sub: "fully onboarded" },
    { label: "At Risk", value: `${atRisk}`, sub: "need attention", highlight: atRisk > 0 },
  ];

  return (
    <motion.div
      className="grid grid-cols-5 gap-4"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
    >
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className={`glass-card p-5 text-center ${
            kpi.highlight ? "border-amber-500/30 dark:border-amber-400/20" : ""
          }`}
        >
          <p className={`text-stat ${kpi.highlight ? "text-amber-600 dark:text-amber-400" : "text-foreground"}`}>
            {kpi.value}
          </p>
          <p className="text-label mt-1">{kpi.label}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">{kpi.sub}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default AggregateKPIRow;
