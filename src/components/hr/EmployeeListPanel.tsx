import { Employee } from "@/data/mockEmployees";
import EmployeeCard from "./EmployeeCard";

interface EmployeeListPanelProps {
  employees: Employee[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const EmployeeListPanel = ({ employees, selectedId, onSelect }: EmployeeListPanelProps) => {
  return (
    <aside className="w-96 shrink-0 border-r border-border bg-card/50 dark:bg-black/20 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-border">
        <h1 className="text-lg font-semibold text-foreground tracking-tight">NovaByte HR</h1>
        <p className="text-label mt-1">Onboarding Intelligence</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {employees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            active={selectedId === emp.id}
            onClick={() => onSelect(emp.id)}
          />
        ))}
      </div>
    </aside>
  );
};

export default EmployeeListPanel;
