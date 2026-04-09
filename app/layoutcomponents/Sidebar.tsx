"use client";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background p-6">
      <h1 className="text-2xl font-bold mb-8">DevBoard</h1>

      <nav className="flex flex-col gap-2">
        {["Dashboard", "Tasks", "Settings"].map((item) => (
          <button
            key={item}
            className="text-left px-3 py-2 rounded-md hover:bg-muted transition"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}