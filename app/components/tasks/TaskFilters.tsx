export default function TaskFilters({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (f: string) => void;
}) {
  return (
    <div className="flex gap-3 mt-4">
      {["all", "completed", "pending"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${
            filter === f ? "bg-blue-600" : "bg-[#020617]"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}