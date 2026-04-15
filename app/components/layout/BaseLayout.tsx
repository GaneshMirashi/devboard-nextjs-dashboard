"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/pages/dashboard" },
    { name: "Tasks", path: "/pages/tasks" },
    { name: "Analytics", path: "/pages/analytics" },
    { name: "Settings", path: "/pages/settings" },
  ];

  const getTitle = () => {
    const current = navItems.find((item) => item.path === pathname);
    return current?.name || "Dashboard";
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-card border-r border-border p-6">
        
        {/* Logo */}
        <h1 className="text-xl text-black  font-semibold mb-8">
          DevBoard
        </h1>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm text-black transition
                  ${
                    isActive
                      ? "bg-neutral-500 text-primary"
                      : "text-black hover:bg-neutral-500"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
          
          <div>
            <h2 className="text-base font-medium">
              {getTitle()}
            </h2>
            <p className="text-xs text-muted-foreground">
              {new Date().toDateString()}
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Ganesh
            </span>

            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
              G
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}