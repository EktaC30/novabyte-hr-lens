import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const ChartTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card px-3 py-2 text-xs">
      <p className="text-muted-foreground">{label}</p>
      <p className="text-foreground font-medium">{payload[0].value} days avg</p>
    </div>
  );
};

const BottleneckChart = ({ data }: { data: { category: string; avgDays: number }[] }) => {
  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
    >
      <h3 className="text-sm font-medium text-foreground mb-5">Category Bottlenecks</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" strokeOpacity={0.3} horizontal={false} />
            <XAxis type="number" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis dataKey="category" type="category" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} axisLine={false} tickLine={false} width={80} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: "hsl(var(--primary) / 0.05)" }} />
            <defs>
              <linearGradient id="bottleneckGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(217, 91%, 50%)" stopOpacity={0.7} />
                <stop offset="100%" stopColor="hsl(217, 91%, 65%)" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <Bar dataKey="avgDays" fill="url(#bottleneckGrad)" radius={[0, 4, 4, 0]} maxBarSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default BottleneckChart;
