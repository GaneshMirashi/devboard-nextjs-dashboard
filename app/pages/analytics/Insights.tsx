export default function Insights() {
  return (
    <div className="p-4 rounded-2xl border bg-[#020617]">
      <h3 className="text-lg font-medium mb-3">Insights</h3>

      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
        <li>🔥 You completed 5 tasks today</li>
        <li>📈 Productivity increased by 10% this week</li>
        <li>⚡ Most active day: Monday</li>
      </ul>
    </div>
  );
}