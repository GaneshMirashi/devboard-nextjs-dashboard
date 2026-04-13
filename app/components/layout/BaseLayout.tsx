"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  

  return (
    <div className="flex min-h-screen">
      
      {/* SIDEBAR */}
      <div className="w-56 bg-[#020617] text-white p-5 border-r border-[#1e293b]">
        <h1 className="text-xl font-bold mb-8 text-blue-500">DevBoard</h1>

        <div className="flex flex-col gap-2">
          <Link
            href="/pages/dashboard"
            className={`px-3 py-2 rounded-md cursor-pointer transition ${
              pathname === "/pages/dashboard"
                ? "bg-[#1e293b] text-white"
                : "hover:bg-[#1e293b] text-gray-400"
            }`}
          >
            Dashboard
          </Link>

          <Link
            href="/pages/tasks"
            className={`px-3 py-2 rounded-md cursor-pointer transition ${
              pathname === "/pages/tasks"
                ? "bg-[#1e293b] text-white"
                : "hover:bg-[#1e293b] text-gray-400"
            }`}
          >
            Tasks
          </Link>

          <Link
            href="/pages/analytics"
            className={`px-3 py-2 rounded-md cursor-pointer transition ${
              pathname === "/pages/analytics"
                ? "bg-[#1e293b] text-white"
                : "hover:bg-[#1e293b] text-gray-400"
            }`}
          >
            Analytics
          </Link>

          <Link
            href="/pages/settings"
            className={`px-3 py-2 rounded-md cursor-pointer transition ${
              pathname === "/pages/settings"
                ? "bg-[#1e293b] text-white"
                : "hover:bg-[#1e293b] text-gray-400"
            }`}
          >
            Settings
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        
        {/* HEADER */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-[#1e293b] bg-[#0f172a] text-white">
          <div>
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <p className="text-xs text-gray-400">
              {new Date().toDateString()}
            </p>
          </div>

          <div className="text-sm">Ganesh 👋</div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-8 bg-[#0f172a] min-h-screen text-white">
          {children}
        </div>
      </div>
    </div>
  );
}