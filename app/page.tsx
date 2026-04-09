"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Card from "./components/Card";
import TaskItem from "./components/TaskItem";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { title: input, done: false }]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Header />

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card title="Total Tasks" value={tasks.length} />
          <Card title="Completed" value={tasks.filter(t => t.done).length} />
          <Card title="Pending" value={tasks.filter(t => !t.done).length} />
        </div>

        {/* TASK INPUT */}
        <div className="mb-6 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Add new task..."
          />
          <button
            onClick={addTask}
            className="bg-black text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {/* TASK LIST */}
        <div className="flex flex-col gap-4">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onDelete={() => deleteTask(index)}
              onToggle={() => toggleTask(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}