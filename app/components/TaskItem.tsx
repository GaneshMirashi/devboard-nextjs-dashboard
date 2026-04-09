export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow">
      <div>
        <h3 className={`font-semibold ${task.done ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </h3>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onToggle}
          className="text-green-600"
        >
          ✔
        </button>

        <button
          onClick={onDelete}
          className="text-red-600"
        >
          ✖
        </button>
      </div>
    </div>
  );
}