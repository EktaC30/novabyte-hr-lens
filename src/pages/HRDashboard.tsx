import { useState } from "react";
import { mockEmployees } from "@/data/mockEmployees";
import EmployeeListPanel from "@/components/hr/EmployeeListPanel";
import EmployeeDetailView from "@/components/hr/EmployeeDetailView";

const HRDashboard = () => {
  const [selectedId, setSelectedId] = useState(mockEmployees[0].id);
  const activeEmployee = mockEmployees.find((e) => e.id === selectedId)!;

  return (
    <div className="min-h-screen nova-gradient-bg text-foreground font-sans antialiased">
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
