# 🚀 DevBoard – Task Management Dashboard

A modern **task management dashboard** built using **Next.js (App Router)** and **shadcn/ui**, designed to help developers track tasks, analyze productivity, and manage workflows efficiently.

---

## ✨ Features

- ✅ Create, edit, delete tasks  
- 🔁 Mark tasks as completed / pending  
- 📊 Analytics dashboard (charts + insights)  
- 📅 Last 7 days productivity tracking  
- 🎯 Real-time stats (total, completed, pending, productivity %)  
- 🌙 Light / Dark mode support  
- 🔔 Toast notifications (success, error, info)  
- 💾 LocalStorage-based persistence (no backend required)

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router)  
- **UI:** shadcn/ui + Tailwind CSS  
- **Charts:** Recharts  
- **State:** React Hooks  
- **Storage:** Browser LocalStorage  

---

## 📁 Project Structure


app/
├── pages/
│ ├── dashboard/
│ ├── tasks/
│ ├── analytics/
│ └── settings/
├── components/
│ ├── layout/
│ ├── tasks/
│ ├── analytics/
│ └── toast/
├── hooks/
│ ├── useTasks.ts
│ └── useAnalytics.ts
└── globals.css

components/
└── ui/ # shadcn components

lib/
└── utils.ts


---

## ⚙️ Getting Started

### 1. Install dependencies
```bash
npm install
2. Run development server
npm run dev

Open 👉 http://localhost:3000

🧠 How It Works
Tasks are stored in localStorage
Analytics is calculated using:
completed tasks
task creation timestamps
Dashboard and analytics update automatically
📊 Modules Overview
🏠 Dashboard
Overview of all tasks
Read-only task list
Quick stats
✅ Tasks
Add, edit, delete tasks
Mark as completed/pending
Real-time updates
📈 Analytics
Area chart → last 7 days productivity
Pie chart → completed vs pending
Insights section
⚙️ Settings
Update user name
Toggle dark/light mode
Clear all tasks (danger zone)
⚠️ Notes
This project currently uses localStorage
Data will be lost if browser storage is cleared
No backend/database integration yet