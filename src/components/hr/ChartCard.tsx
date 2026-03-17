import { motion } from "framer-motion";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartCardProps {
  title: string;
  type: "bar" | "line";
  data: { day: string; [key: string]: string | number }[];
  dataKey: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card px-3 py-2 text-xs">
      <p className="text-muted-foreground">{label}</p>
      <p className="text-foreground font-medium">{payload[0].value}</p>
    </div>
  );
};

const ChartCard = ({ title, type, data, dataKey }: ChartCardProps) => {
  const gridColor = "hsl(var(--border))";
  const tickColor = "hsl(var(--muted-foreground))";

  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <h3 className="text-sm font-medium text-foreground mb-5">{title}</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} strokeOpacity={0.3} vertical={false} />
              <XAxis dataKey="day" tick={{ fill: tickColor, fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: tickColor, fontSize: 10 }} axisLine={false} tickLine={false} width={24} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--primary) / 0.05)" }} />
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="hsl(217, 91%, 45%)" stopOpacity={0.6} />
                </linearGradient>
              </defs>
              <Bar dataKey={dataKey} fill="url(#blueGradient)" radius={[4, 4, 0, 0]} maxBarSize={32} />
            </BarChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} strokeOpacity={0.3} vertical={false} />
              <XAxis dataKey="day" tick={{ fill: tickColor, fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: tickColor, fontSize: 10 }} axisLine={false} tickLine={false} width={24} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke="hsl(217, 91%, 60%)"
                strokeWidth={2}
                dot={{ fill: "hsl(217, 91%, 60%)", r: 3, strokeWidth: 0 }}
                activeDot={{ r: 5, fill: "hsl(217, 91%, 60%)", stroke: "hsl(var(--background))", strokeWidth: 2 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ChartCard;
