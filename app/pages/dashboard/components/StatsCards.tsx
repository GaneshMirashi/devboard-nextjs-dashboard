interface StatsCardsProps {
  total: number;
  completed: number;
}

export default function StatsCards({ total, completed }: StatsCardsProps) {
  const productivity = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      <div className="bg-[#020617] p-6 rounded-2xl border border-[#1e293b]">
        <p className="text-gray-400 text-sm">Total Tasks</p>
        <h2 className="text-4xl font-bold mt-3 text-white">{total}</h2>
      </div>

      <div className="bg-[#020617] p-6 rounded-2xl border border-[#1e293b]">
        <p className="text-gray-400 text-sm">Completed</p>
        <h2 className="text-4xl font-bold mt-3 text-green-400">{completed}</h2>
      </div>

      <div className="bg-[#020617] p-6 rounded-2xl border border-[#1e293b]">
        <p className="text-gray-400 text-sm">Productivity</p>
        <h2 className="text-4xl font-bold mt-3 text-blue-400">{productivity}%</h2>
      </div>
    </div>
  );
}