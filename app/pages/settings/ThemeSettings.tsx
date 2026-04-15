"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/app/components/toast/ToastProvider";

export default function ThemeSettings() {
  const [dark, setDark] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);

    showToast(`Switched to ${newTheme ? "Dark" : "Light"} mode`, "info");
  };

  return (
    <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] space-y-4">
      
      <h2 className="text-lg font-medium">Appearance</h2>

      <p className="text-sm text-[var(--muted)]">
        Toggle between light and dark themes
      </p>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-[var(--primary)] hover:opacity-90 transition text-white text-sm"
      >
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}