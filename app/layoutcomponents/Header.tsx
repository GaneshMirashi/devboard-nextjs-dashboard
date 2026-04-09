"use client";

export default function Header() {
  const date = new Date().toDateString();

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-background">
      <div>
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>

      <div className="text-sm font-medium">
        Ganesh 👋
      </div>
    </header>
  );
}