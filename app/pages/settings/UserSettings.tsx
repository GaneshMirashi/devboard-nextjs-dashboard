"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/app/components/toast/ToastProvider";

export default function UserSettings() {
  const [name, setName] = useState("");
  const { showToast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("username");
    if (saved) setName(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem("username", name);
    showToast("Profile updated successfully", "success");
  };

  return (
    <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] space-y-4">
      
      <h2 className="text-lg font-medium">User Profile</h2>

      <div className="space-y-2">
        <label className="text-sm text-[var(--muted)]">
          Your Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-transparent border border-[var(--border)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>

      <button
        onClick={handleSave}
        className="px-4 py-2 rounded-lg bg-[var(--primary)] hover:opacity-90 transition text-white text-sm"
      >
        Save Changes
      </button>
    </div>
  );
}