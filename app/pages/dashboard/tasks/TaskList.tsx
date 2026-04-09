import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onToggle }: any) {
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task: any, index: number) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          onToggle={() => onToggle(index)}
        />
      ))}
    </div>
  );
}