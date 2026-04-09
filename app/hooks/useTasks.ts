"use client";

import { useEffect, useState } from "react";

export interface Task {
  id: number;
  title: string;
  done: boolean;
  createdAt: string;
  createdBy: string;
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // ✅ Load initially
  const loadTasks = () => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks([]);
    }
  };

  useEffect(() => {
    loadTasks();

    // ✅ THIS FIXES YOUR ISSUE
    const handleFocus = () => loadTasks();

    window.addEventListener("focus", handleFocus);

    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      done: false,
      createdAt: new Date().toISOString(),
      createdBy: "Ganesh",
    };

    setTasks((prev) => [...prev, newTask]);
    alert("✅ Task created");
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    alert("🗑️ Deleted");
  };

  const editTask = (id: number, title: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, title } : t
      )
    );
    alert("✏️ Updated");
  };

  return { tasks, addTask, toggleTask, deleteTask, editTask };
}