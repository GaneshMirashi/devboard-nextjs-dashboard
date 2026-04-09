import { useState } from "react";

export default function TaskInput({
  onAdd,
}: {
  onAdd: (title: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-3">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 px-4 py-2 rounded bg-[#020617] border border-[#1e293b]"
      />
      <button
        onClick={() => {
          onAdd(value);
          setValue("");
        }}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}