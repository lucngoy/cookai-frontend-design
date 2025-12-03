import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-secondary border border-border transition-all duration-300 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/30"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 w-6 h-6 rounded-full bg-card shadow-soft transition-all duration-300 flex items-center justify-center ${
          theme === "dark" ? "left-7" : "left-1"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="w-3.5 h-3.5 text-primary" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-accent" />
        )}
      </div>
    </button>
  );
}
