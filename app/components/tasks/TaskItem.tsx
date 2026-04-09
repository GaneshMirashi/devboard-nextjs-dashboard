"use client";

import { Task } from "@/app/hooks/useTasks";


export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onEdit,
  readOnly = false,
}: {
  task: Task;
  onToggle?: (id: number) => void;
  onDelete?: (id: number) => void;
  onEdit?: (id: number, title: string) => void;
  readOnly?: boolean;
}) {
  return (
    <div className="p-3 border border-[#1e293b] bg-[#020617] rounded">
      
      {/* TITLE */}
      <p
        onClick={() => !readOnly && onToggle?.(task.id)}
        className={`${
          task.done ? "line-through text-gray-500" : ""
        } ${!readOnly ? "cursor-pointer" : ""}`}
      >
        {task.title}
      </p>

      {/* INFO */}
      <p className="text-xs text-gray-500 mt-2">
        Created by: {task.createdBy}
      </p>

      <p className="text-xs text-gray-500">
        {new Date(task.createdAt).toLocaleString()}
      </p>

      {/* ACTIONS (only in Tasks page) */}
      {!readOnly && (
        <div className="flex gap-3 mt-2 text-sm">
          <button
            onClick={() => {
              const newTitle = prompt("Edit task", task.title);
              if (newTitle && onEdit) {
                onEdit(task.id, newTitle);
              }
            }}
            className="text-yellow-400"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete?.(task.id)}
            className="text-red-400"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}