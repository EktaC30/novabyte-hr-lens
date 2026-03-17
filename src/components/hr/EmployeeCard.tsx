import { Employee } from "@/data/mockEmployees";
import { motion } from "framer-motion";

interface EmployeeCardProps {
  employee: Employee;
  active: boolean;
  onClick: () => void;
}

const EmployeeCard = ({ employee, active, onClick }: EmployeeCardProps) => {
  const progress = Math.round((employee.checklistCompleted / employee.checklistTotal) * 100);

  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl transition-colors duration-200 ${
        active
          ? "glass-card-active"
          : "glass-card hover:bg-white/[0.08]"
      }`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-medium text-foreground">{employee.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{employee.role} {employee.level}</p>
        </div>
        <span
          className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${
            employee.status === "completed"
              ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
              : "text-blue-400 bg-blue-500/10 border-blue-500/20"
          }`}
        >
          {employee.status === "completed" ? "Completed" : "In Progress"}
        </span>
      </div>

      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
      <p className="text-[10px] text-muted-foreground mt-1.5">{progress}% complete</p>
    </motion.button>
  );
};

export default EmployeeCard;
