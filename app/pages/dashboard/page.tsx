"use client";

import BaseLayout from "@/app/components/layout/BaseLayout";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: number;
  title: string;
  done: boolean;
  createdAt: string;
  createdBy: string;
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const pathname = usePathname();

  // Load tasks
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks([]);
    }
  }, [pathname]);

  const completed = tasks.filter((t) => t.done).length;
  const pending = tasks.length - completed;

  return (
    <BaseLayout>
      <div className="space-y-6">

        {/* Title */}
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          
          <Card>
            <CardHeader>
              <CardTitle>Total Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{tasks.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{completed}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{pending}</p>
            </CardContent>
          </Card>

        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No tasks available
            </p>
          ) : (
            tasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="p-4 space-y-2">

                  {/* Title */}
                  <p
                    className={`text-sm ${
                      task.done
                        ? "line-through text-muted-foreground"
                        : ""
                    }`}
                  >
                    {task.title}
                  </p>

                  {/* Meta */}
                  <div className="text-xs text-muted-foreground">
                    <p>By {task.createdBy}</p>
                    <p>{new Date(task.createdAt).toLocaleString()}</p>
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