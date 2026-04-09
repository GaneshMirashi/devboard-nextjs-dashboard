import { Task } from "@/app/hooks/useTasks";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
  readOnly = false,
}: {
  tasks: Task[];
  onToggle?: (id: number) => void;
  onDelete?: (id: number) => void;
  onEdit?: (id: number, title: string) => void;
  readOnly?: boolean;
}) {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 text-center py-10">
        No tasks found
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          readOnly={readOnly}
        />
      ))}
    </div>
  );
}