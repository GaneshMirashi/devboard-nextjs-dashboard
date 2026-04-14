"use client";

// import { useToast } from "@/app/components/toast/ToastProvider";

export default function DangerZone() {
  // const { showToast } = useToast();

  const handleClear = () => {
    localStorage.removeItem("tasks");
    alert("All tasks cleared");
  };

  return (
    <div className="p-4 rounded-2xl border bg-[#020617]">
      <h2 className="text-lg font-medium mb-3 text-red-400">
        Danger Zone
      </h2>

      <button
        onClick={handleClear}
        className="px-4 py-2 bg-red-500 rounded-lg"
      >
        Clear All Tasks
      </button>
    </div>
  );
}