"use client";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-5">
      <h1 className="text-2xl font-bold mb-8">DevBoard</h1>

      <nav className="flex flex-col gap-4">
        <button className="text-left hover:text-blue-600">Dashboard</button>
        <button className="text-left hover:text-blue-600">Tasks</button>
        <button className="text-left hover:text-blue-600">Settings</button>
      </nav>
    </div>
  );
}