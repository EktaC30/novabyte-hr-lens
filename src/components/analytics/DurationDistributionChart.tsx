import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from "recharts";
import { AnalyticsEmployee } from "@/data/mockAnalyticsEmployees";

const ChartTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card px-3 py-2 text-xs">
      <p className="text-muted-foreground">{label}</p>
      <p className="text-foreground font-medium">{payload[0].value} days</p>
    </div>
  );
};

const DurationDistributionChart = ({ employees }: { employees: AnalyticsEmployee[] }) => {
  const data = employees.map((e) => ({ name: e.name, days: e.onboardingDays }));
  const expectedDays = employees[0]?.expectedDays ?? 5;

  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <h3 className="text-sm font-medium text-foreground mb-5">Onboarding Duration</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" strokeOpacity={0.3} vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} axisLine={false} tickLine={false} width={24} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: "hsl(var(--primary) / 0.05)" }} />
            <ReferenceLine y={expectedDays} stroke="hsl(var(--primary))" strokeDasharray="4 4" strokeOpacity={0.5} />
            <defs>
              <linearGradient id="durationGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(217, 91%, 65%)" stopOpacity={0.8} />
                <stop offset="100%" stopColor="hsl(217, 91%, 50%)" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <Bar dataKey="days" fill="url(#durationGrad)" radius={[4, 4, 0, 0]} maxBarSize={36} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DurationDistributionChart;
