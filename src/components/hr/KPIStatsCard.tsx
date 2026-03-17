import { KPIStats } from "@/data/mockEmployees";
import { motion } from "framer-motion";

const KPIStatsCard = ({ stats }: { stats: KPIStats }) => {
  const items = [
    { label: "Avg Completion", value: `${stats.avgCompletionDays}d`, sub: `of ${stats.expectedDays}d expected` },
    { label: "Efficiency", value: `${stats.efficiencyScore}%`, sub: "performance score" },
    { label: "Early Tasks", value: `${stats.tasksCompletedEarly}%`, sub: "completed ahead" },
  ];

  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-stat text-foreground">{item.value}</p>
            <p className="text-label mt-1">{item.label}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{item.sub}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default KPIStatsCard;
