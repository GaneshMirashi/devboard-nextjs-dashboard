"use client";

import { Task } from "@/app/hooks/useTasks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card>
      <CardContent className="p-4 space-y-3">

        {/* Top Row */}
        <div className="flex items-center justify-between">
          <p
            className={`text-sm ${
              task.done
                ? "line-through text-muted-foreground"
                : ""
            }`}
          >
            {task.title}
          </p>

          <Badge variant={task.done ? "default" : "secondary"}>
            {task.done ? "Completed" : "Pending"}
          </Badge>
        </div>

        {/* Info */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>Created by: {task.createdBy}</p>
          <p>{new Date(task.createdAt).toLocaleString()}</p>
        </div>

        {/* Actions */}
        {!readOnly && (
          <div className="flex gap-2 pt-2 flex-wrap">

            {/* ✅ Toggle Button */}
            <Button
              size="sm"
              variant={task.done ? "outline" : "default"}
              onClick={() => onToggle?.(task.id)}
            >
              {task.done ? "Undo" : "Mark Complete"}
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                const newTitle = prompt("Edit task", task.title);
                if (newTitle && onEdit) {
                  onEdit(task.id, newTitle);
                }
              }}
            >
              Edit
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete?.(task.id)}
            >
              Delete
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}