"use client";

import { useEffect, useState } from "react";

export default function ThemeSettings() {
  const [dark, setDark] = useState(false);

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
  };

  return (
    <div className="p-4 rounded-2xl border bg-[#020617]">
      <h2 className="text-lg font-medium mb-3">Theme</h2>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-indigo-500 rounded-lg"
      >
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}