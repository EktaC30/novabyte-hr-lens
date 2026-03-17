import { Employee } from "@/data/mockEmployees";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const PersonaCard = ({ employee }: { employee: Employee }) => {
  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      key={employee.id}
    >
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)]">
          <User className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground tracking-tight">{employee.name}</h2>
          <p className="text-sm text-primary mt-0.5 tracking-wide">{employee.role} · {employee.level}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-5 flex-wrap">
        {employee.stack.map((tech) => (
          <span
            key={tech}
            className="bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-widest text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default PersonaCard;
