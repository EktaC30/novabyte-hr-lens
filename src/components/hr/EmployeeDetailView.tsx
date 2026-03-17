import { Employee } from "@/data/mockEmployees";
import PersonaCard from "./PersonaCard";
import KPIStatsCard from "./KPIStatsCard";
import ChecklistProgressCard from "./ChecklistProgressCard";
import TicketStatusCard from "./TicketStatusCard";
import ChartCard from "./ChartCard";
import ActivityTimeline from "./ActivityTimeline";
import { AnimatePresence, motion } from "framer-motion";

const EmployeeDetailView = ({ employee }: { employee: Employee }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={employee.id}
        className="flex-1 overflow-y-auto p-8 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Top Row */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <PersonaCard employee={employee} />
          </div>
          <KPIStatsCard stats={employee.stats} />
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3">
            <ChecklistProgressCard
              tasks={employee.tasks}
              completed={employee.checklistCompleted}
              total={employee.checklistTotal}
            />
          </div>
          <div className="col-span-2">
            <TicketStatusCard ticket={employee.ticket} />
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6">
          <ChartCard title="Task Velocity" type="bar" data={employee.velocityData} dataKey="tasks" />
          <ChartCard title="Onboarding Trend" type="line" data={employee.trendData} dataKey="progress" />
        </div>

        {/* Activity */}
        <ActivityTimeline events={employee.activity} />
      </motion.div>
    </AnimatePresence>
  );
};

export default EmployeeDetailView;
