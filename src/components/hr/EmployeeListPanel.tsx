import { Employee } from "@/data/mockEmployees";
import EmployeeCard from "./EmployeeCard";
import { useNavigate } from "react-router-dom";
import { BarChart3 } from "lucide-react";

interface EmployeeListPanelProps {
  employees: Employee[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const EmployeeListPanel = ({ employees, selectedId, onSelect }: EmployeeListPanelProps) => {
  const navigate = useNavigate();

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
      <div className="p-4 border-t border-border">
        <button
          onClick={() => navigate("/analytics")}
          className="w-full flex items-center justify-center gap-2 text-xs px-3 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/15 transition-all duration-200"
        >
          <BarChart3 className="w-3.5 h-3.5" />
          Onboarding Analytics
        </button>
      </div>
    </aside>
  );
};

export default EmployeeListPanel;
