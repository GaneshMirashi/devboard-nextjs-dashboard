"use client";
 
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      
      {/* SIDEBAR */}
      <div className="w-56 bg-[#020617] text-white p-5 border-r border-[#1e293b]">
        <h1 className="text-xl font-bold mb-8">DevBoard</h1>

        <div className="flex flex-col gap-2">
          <div className="px-3 py-2 rounded-md cursor-pointer hover:bg-[#1e293b] transition">
            Dashboard
          </div>
          <div className="px-3 py-2 rounded-md cursor-pointer hover:bg-[#1e293b] transition">
            Tasks
          </div>
          <div className="px-3 py-2 rounded-md cursor-pointer hover:bg-[#1e293b] transition">
            Settings
          </div>
        </div>
      </div>

      {/* MAIN */}
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

        {/* CONTENT */}
        <div className="p-8 bg-[#0f172a] min-h-screen text-white">
          {children}
        </div>
      </div>
    </div>
  );
}
