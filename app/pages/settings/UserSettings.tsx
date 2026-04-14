"use client";

import { useEffect, useState } from "react";

export default function UserSettings() {
  const [name, setName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("username");
    if (saved) setName(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem("username", name);
  };

  return (
    <div className="p-4 rounded-2xl border bg-[#020617] space-y-3">
      <h2 className="text-lg font-medium">User Profile</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded-lg bg-black border"
      />

      <button
        onClick={handleSave}
        className="px-4 py-2 bg-indigo-500 rounded-lg"
      >
        Save
      </button>
    </div>
  );
}