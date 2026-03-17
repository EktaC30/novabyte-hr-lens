import { Ticket } from "@/data/mockEmployees";
import { motion } from "framer-motion";

const steps = ["Unassigned", "Picked Up", "PR Submitted", "Merged"] as const;

const TicketStatusCard = ({ ticket }: { ticket: Ticket }) => {
  const activeIndex = steps.indexOf(ticket.status);

  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <h3 className="text-sm font-medium text-foreground mb-1">Starter Ticket</h3>
      <p className="text-xs text-muted-foreground mb-1">{ticket.id}</p>
      <p className="text-xs text-primary mb-6">{ticket.title}</p>

      <div className="relative flex items-center justify-between">
        {/* Connecting line */}
        <div className="absolute top-[6px] left-0 right-0 h-[2px] bg-white/10" />
        <div
          className="absolute top-[6px] left-0 h-[2px] bg-primary transition-all duration-500"
          style={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, i) => (
          <div key={step} className="relative flex flex-col items-center z-10">
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i <= activeIndex
                  ? "bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  : "bg-slate-800 border border-white/10"
              }`}
            />
            <span className="text-[10px] mt-2 text-center text-muted-foreground whitespace-nowrap">
              {step}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TicketStatusCard;
