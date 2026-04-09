"use client";

import { useState } from "react";
import StatsCard from "./cards/StatsCard";
import TaskInput from "./tasks/TaskInput";
import TaskList from "./tasks/TaskList";


export default function DashboardPage() {
  const [tasks, setTasks] = useState<any[]>([]);

  const addTask = (title: string) => {
    setTasks([...tasks, { title, done: false }]);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const completed = tasks.filter((t) => t.done).length;

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <StatsCard title="Total Tasks" value={tasks.length} />
        <StatsCard title="Completed" value={completed} />
        <StatsCard
          title="Productivity %"
          value={tasks.length ? Math.round((completed / tasks.length) * 100) : 0}
        />
      </div>

      {/* Input */}
      <TaskInput onAdd={addTask} />

      {/* List */}
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </>
  );
}