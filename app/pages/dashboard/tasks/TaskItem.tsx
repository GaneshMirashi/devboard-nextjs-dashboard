import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TaskItem({ task, onDelete, onToggle }: any) {
  return (
    <Card>
      <CardContent className="flex justify-between items-center p-4">
        <span
          className={`${
            task.done ? "line-through text-muted-foreground" : ""
          }`}
        >
          {task.title}
        </span>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={onToggle}>
            ✔
          </Button>
          <Button size="sm" variant="destructive" onClick={onDelete}>
            ✖
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}