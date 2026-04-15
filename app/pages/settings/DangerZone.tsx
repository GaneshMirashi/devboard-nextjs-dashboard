"use client";

import { useToast } from "@/app/components/toast/ToastProvider";

export default function DangerZone() {
  const { showToast } = useToast();

  const handleClear = () => {
    localStorage.removeItem("tasks");
    showToast("All tasks cleared successfully", "success");
  };

  return (
    <div className="p-5 rounded-2xl border border-red-500/30 bg-red-500/5 space-y-4">
      
      <h2 className="text-lg font-medium text-red-400">
        Danger Zone
      </h2>

      <p className="text-sm text-[var(--muted)]">
        This action will permanently delete all your tasks. This cannot be undone.
      </p>

      <button
        onClick={handleClear}
        className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition text-white text-sm"
      >
        Clear All Tasks
      </button>
    </div>
  );
}