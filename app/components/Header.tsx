"use client";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <div className="flex gap-4">
        <span className="text-gray-600">Ganesh 👋</span>
      </div>
    </div>
  );
}