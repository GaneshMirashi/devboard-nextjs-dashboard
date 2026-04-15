"use client";

import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DangerZone() {
  const handleClear = () => {
    localStorage.removeItem("tasks");
    toast.success("All tasks cleared successfully");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Danger Zone</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          This will permanently delete all your tasks.
        </p>

        <Button variant="destructive" onClick={handleClear}>
          Clear All Tasks
        </Button>
      </CardContent>
    </Card>
  );
}