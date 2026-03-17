import { ActivityEvent } from "@/data/mockEmployees";
import { motion } from "framer-motion";
import { CheckCircle2, GitPullRequest, Ticket } from "lucide-react";

const iconMap = {
  checklist: CheckCircle2,
  pr: GitPullRequest,
  ticket: Ticket,
};

const ActivityTimeline = ({ events }: { events: ActivityEvent[] }) => {
  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <h3 className="text-sm font-medium text-foreground mb-5">Recent Activity</h3>
      <div className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />
        <div className="space-y-5">
          {events.map((event, i) => {
            const Icon = iconMap[event.type];
            return (
              <motion.div
                key={event.id}
                className="flex items-start gap-4 relative"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 z-10">
                  <Icon className="w-3 h-3 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{event.action}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{event.timestamp}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityTimeline;
