"use client";

import BaseLayout from "@/app/components/layout/BaseLayout";
import { useState, useEffect } from "react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: number;
  title: string;
  done: boolean;
  createdAt: string;
  createdBy: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [value, setValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load tasks
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
    setIsLoaded(true); // ✅ mark loaded
  }, []);

  // Save tasks
  useEffect(() => {
    if (!isLoaded) return; // 🚨 prevent overwrite
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, isLoaded]);

  // ➕ Add
  const addTask = () => {
    if (!value.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: value,
      done: false,
      createdAt: new Date().toISOString(),
      createdBy: "Ganesh",
    };

    setTasks((prev) => [...prev, newTask]);
    setValue("");
    toast.success("Task created");
  };

  // 🔁 Toggle
  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  // ❌ Delete
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    toast.success("Task deleted");
  };

  // ✏️ Edit
  const editTask = (id: number) => {
    const newTitle = prompt("Edit task");
    if (!newTitle) return;

    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      )
    );

    toast.success("Task updated");
  };

  return (
    <BaseLayout>
      <div className="space-y-6">

        {/* Header */}
        <h1 className="text-2xl font-semibold">Tasks</h1>

        {/* Add Task */}
        <div className="flex gap-3">
          <Input
            placeholder="Enter task..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No tasks yet
            </p>
          ) : (
            tasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="p-4 space-y-3">

                  {/* Top Row */}
                  <div className="flex items-center justify-between">
                    <p
                      onClick={() => toggleTask(task.id)}
                      className={`cursor-pointer text-sm ${task.done
                        ? "line-through text-muted-foreground"
                        : ""
                        }`}
                    >
                      {task.title}
                    </p>

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => editTask(task.id)}
                      >
                        Edit
                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>By {task.createdBy}</span>

                    <span>
                      {new Date(task.createdAt).toLocaleString()}
                    </span>
                  </div>

                  {/* Status */}
                  <Badge variant={task.done ? "default" : "secondary"}>
                    {task.done ? "Completed" : "Pending"}
                  </Badge>

                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </BaseLayout>
  );
}