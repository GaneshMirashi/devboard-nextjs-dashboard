"use client";

import BaseLayout from "@/app/components/BaseLayout";
import { useState } from "react";

export default function DashboardPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { title: input, done: false }]);
    setInput("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const completed = tasks.filter((t) => t.done).length;

  return (
    <BaseLayout>
      
      {/* CARDS */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <p>Total Tasks</p>
          <h2>{tasks.length}</h2>
        </div>

        <div style={styles.card}>
          <p>Completed</p>
          <h2>{completed}</h2>
        </div>

        <div style={styles.card}>
          <p>Productivity %</p>
          <h2>
            {tasks.length
              ? Math.round((completed / tasks.length) * 100)
              : 0}
          </h2>
        </div>
      </div>

      {/* INPUT */}
      <div style={styles.inputBox}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Add
        </button>
      </div>

      {/* TASKS */}
      <div style={styles.taskList}>
        {tasks.map((task, index) => (
          <div key={index} style={styles.taskItem}>
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                color: task.done ? "#94a3b8" : "#fff",
              }}
            >
              {task.title}
            </span>

            <div>
              <button onClick={() => toggleTask(index)}>✔</button>
              <button onClick={() => deleteTask(index)}>✖</button>
            </div>
          </div>
        ))}
      </div>
    </BaseLayout>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "30px",
  },
  card: {
    background: "#020617",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #1e293b",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#fff",
  },
  button: {
    padding: "10px 15px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
  },
  taskList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    background: "#020617",
    borderRadius: "6px",
  },
};