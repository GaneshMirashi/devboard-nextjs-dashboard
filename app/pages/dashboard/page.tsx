"use client";

import BaseLayout from "@/app/components/BaseLayout";
import { useState } from "react";

export default function DashboardPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { title: input, done: false }]);
    setInput("");
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
    <BaseLayout>
      
      {/* CARDS */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        <div className="bg-[#020617] p-5 rounded-lg border border-[#1e293b]">
          <p className="text-gray-400 text-sm">Total Tasks</p>
          <h2 className="text-2xl font-bold mt-2">{tasks.length}</h2>
        </div>

        <div className="bg-[#020617] p-5 rounded-lg border border-[#1e293b]">
          <p className="text-gray-400 text-sm">Completed</p>
          <h2 className="text-2xl font-bold mt-2">{completed}</h2>
        </div>

        <div className="bg-[#020617] p-5 rounded-lg border border-[#1e293b]">
          <p className="text-gray-400 text-sm">Productivity %</p>
          <h2 className="text-2xl font-bold mt-2">
            {tasks.length
              ? Math.round((completed / tasks.length) * 100)
              : 0}
          </h2>
        </div>
      </div>

      {/* INPUT */}
      <div className="flex gap-3 mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 px-3 py-2 rounded-md border border-[#1e293b] bg-[#020617] text-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white transition"
        >
          Add
        </button>
      </div>

      {/* TASKS */}
      <div className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-[#020617] rounded-md border border-[#1e293b]"
          >
            <span
              className={`${
                task.done
                  ? "line-through text-gray-500"
                  : "text-white"
              }`}
            >
              {task.title}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => toggleTask(index)}
                className="text-green-400 hover:scale-110 transition"
              >
                ✔
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-400 hover:scale-110 transition"
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>

    </BaseLayout>
  );
}