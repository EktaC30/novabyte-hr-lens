import { motion } from "framer-motion";
import { AnalyticsEmployee } from "@/data/mockAnalyticsEmployees";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const statusStyles = {
  "on-track": "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "at-risk": "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
  completed: "text-primary bg-primary/10 border-primary/20",
};

const statusLabels = {
  "on-track": "On Track",
  "at-risk": "At Risk",
  completed: "Completed",
};

const EmployeeComparisonTable = ({ employees }: { employees: AnalyticsEmployee[] }) => {
  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h3 className="text-sm font-medium text-foreground mb-4">Employee Comparison</h3>
      <div className="max-h-[320px] overflow-y-auto rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-label">Name</TableHead>
              <TableHead className="text-label">Role</TableHead>
              <TableHead className="text-label">Stack</TableHead>
              <TableHead className="text-label">Stage</TableHead>
              <TableHead className="text-label">Progress</TableHead>
              <TableHead className="text-label text-right">Tasks</TableHead>
              <TableHead className="text-label text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((emp) => (
              <TableRow
                key={emp.id}
                className="border-border hover:bg-muted/30 dark:hover:bg-white/[0.04] transition-colors"
              >
                <TableCell className="font-medium text-foreground text-sm">{emp.name}</TableCell>
                <TableCell className="text-muted-foreground text-xs">{emp.role} {emp.level}</TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {emp.stack.slice(0, 2).join(", ")}
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">{emp.currentStage}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${emp.completionPercent}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground tabular-nums">{emp.completionPercent}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right text-xs text-muted-foreground tabular-nums">
                  {emp.tasksCompleted}/{emp.totalTasks}
                </TableCell>
                <TableCell className="text-right">
                  <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border ${statusStyles[emp.status]}`}>
                    {statusLabels[emp.status]}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default EmployeeComparisonTable;
