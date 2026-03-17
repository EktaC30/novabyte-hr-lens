import { useState } from "react";
import { mockEmployees } from "@/data/mockEmployees";
import EmployeeListPanel from "@/components/hr/EmployeeListPanel";
import EmployeeDetailView from "@/components/hr/EmployeeDetailView";
import ThemeToggle from "@/components/hr/ThemeToggle";

const HRDashboard = () => {
  const [selectedId, setSelectedId] = useState(mockEmployees[0].id);
  const activeEmployee = mockEmployees.find((e) => e.id === selectedId)!;

  return (
    <div className="min-h-screen nova-gradient-bg text-foreground font-sans antialiased">
      <div className="absolute top-4 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="flex h-screen overflow-hidden">
        <EmployeeListPanel
          employees={mockEmployees}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <EmployeeDetailView employee={activeEmployee} />
      </div>
    </div>
  );
};

export default HRDashboard;
