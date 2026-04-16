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

        {/* Title */}
        <p
          onClick={() => !readOnly && onToggle?.(task.id)}
          className={`text-sm ${
            task.done
              ? "line-through text-muted-foreground"
              : ""
          } ${!readOnly ? "cursor-pointer" : ""}`}
        >
          {task.title}
        </p>

        {/* Info */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>Created by: {task.createdBy}</p>
          <p>{new Date(task.createdAt).toLocaleString()}</p>
        </div>

        {/* Status */}
        <Badge variant={task.done ? "default" : "secondary"}>
          {task.done ? "Completed" : "Pending"}
        </Badge>

        {/* Actions */}
        {!readOnly && (
          <div className="flex gap-2 pt-2">
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