import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("novabyte-theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("novabyte-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary/50 border border-border hover:border-primary/40 hover:shadow-[0_0_12px_hsl(var(--primary)/0.2)] transition-all duration-200"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {dark ? (
        <Sun className="w-4 h-4 text-muted-foreground" />
      ) : (
        <Moon className="w-4 h-4 text-muted-foreground" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
