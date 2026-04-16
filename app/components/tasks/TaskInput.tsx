"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TaskInput({
  onAdd,
}: {
  onAdd: (title: string) => void;
}) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <div className="flex gap-3">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter task..."
      />

      <Button onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}