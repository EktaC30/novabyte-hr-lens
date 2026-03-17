import { TaskItem } from "@/data/mockEmployees";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

interface ChecklistProgressCardProps {
  tasks: TaskItem[];
  completed: number;
  total: number;
}

const ChecklistProgressCard = ({ tasks, completed, total }: ChecklistProgressCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const progress = Math.round((completed / total) * 100);

  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-foreground">Checklist Progress</h3>
          <p className="text-xs text-muted-foreground mt-1">{completed} / {total} tasks completed</p>
        </div>
        <span className="text-2xl font-medium text-primary tabular-nums">{progress}%</span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors w-full"
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
        {expanded ? "Collapse checklist" : "Expand checklist"}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-2">
              {tasks.map((task) => (
                <div key={task.id} className="grid grid-cols-[24px_1fr_auto] items-center gap-3 py-1.5">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                      task.completed
                        ? "bg-primary glow-blue"
                        : "border border-white/20"
                    }`}
                  >
                    {task.completed && <Check className="w-3 h-3 text-primary-foreground" />}
                  </div>
                  <span className={`text-sm ${task.completed ? "text-foreground" : "text-muted-foreground"}`}>
                    {task.name}
                  </span>
                  <span className={`text-[10px] uppercase tracking-widest ${task.completed ? "text-primary" : "text-slate-600"}`}>
                    {task.completed ? "Done" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChecklistProgressCard;
