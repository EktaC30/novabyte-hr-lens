import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { analyticsEmployees, categoryBottleneckData, weeklyTrendData } from "@/data/mockAnalyticsEmployees";
import ThemeToggle from "@/components/hr/ThemeToggle";
import AggregateKPIRow from "@/components/analytics/AggregateKPIRow";
import EmployeeComparisonTable from "@/components/analytics/EmployeeComparisonTable";
import BottleneckChart from "@/components/analytics/BottleneckChart";
import WeeklyTrendChart from "@/components/analytics/WeeklyTrendChart";
import CompletionComparisonChart from "@/components/analytics/CompletionComparisonChart";
import DurationDistributionChart from "@/components/analytics/DurationDistributionChart";
import RiskInsightsCard from "@/components/analytics/RiskInsightsCard";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const OnboardingAnalytics = () => {
  const [roleFilter, setRoleFilter] = useState<string>("All");

  const roles = useMemo(() => {
    const unique = Array.from(new Set(analyticsEmployees.map((e) => e.role)));
    return ["All", ...unique];
  }, []);

  const filtered = useMemo(() => {
    if (roleFilter === "All") return analyticsEmployees;
    return analyticsEmployees.filter((e) => e.role === roleFilter);
  }, [roleFilter]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen nova-gradient-bg text-foreground font-sans antialiased">
      <div className="absolute top-4 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 py-8 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={() => navigate("/hr-dashboard")}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary/50 border border-border hover:border-primary/40 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-foreground tracking-tight">Onboarding Analytics</h1>
            <p className="text-label mt-0.5">Multi-employee onboarding insights</p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setRoleFilter(role)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                roleFilter === role
                  ? "bg-primary/15 border-primary/30 text-primary"
                  : "bg-secondary/30 border-border text-muted-foreground hover:border-primary/20"
              }`}
            >
              {role}
            </button>
          ))}
        </motion.div>

        {/* KPI Row */}
        <AggregateKPIRow employees={filtered} />

        {/* Table */}
        <EmployeeComparisonTable employees={filtered} />

        {/* Charts Row 1 */}
        <div className="grid grid-cols-2 gap-6">
          <CompletionComparisonChart employees={filtered} />
          <DurationDistributionChart employees={filtered} />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-2 gap-6">
          <BottleneckChart data={categoryBottleneckData} />
          <WeeklyTrendChart data={weeklyTrendData} />
        </div>

        {/* Risk Insights */}
        <RiskInsightsCard employees={filtered} />
      </div>
    </div>
  );
};

export default OnboardingAnalytics;
