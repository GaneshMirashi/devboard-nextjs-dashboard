export default function ChartsSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="h-64 rounded-2xl border p-4 bg-white dark:bg-gray-900">
        <h3 className="text-sm text-gray-500 mb-2">
          Tasks Completed (Last 7 Days)
        </h3>
        <div className="flex items-center justify-center h-full text-gray-400">
          Bar Chart Placeholder
        </div>
      </div>

      {/* Pie Chart */}
      <div className="h-64 rounded-2xl border p-4 bg-white dark:bg-gray-900">
        <h3 className="text-sm text-gray-500 mb-2">
          Task Distribution
        </h3>
        <div className="flex items-center justify-center h-full text-gray-400">
          Pie Chart Placeholder
        </div>
      </div>
    </div>
  );
}