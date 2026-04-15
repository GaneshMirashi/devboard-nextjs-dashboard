"use client";

import { createContext, useContext, useState } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

const ToastContext = createContext<any>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType = "success") => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getStyles = (type: ToastType) => {
    switch (type) {
      case "success":
        return "border-green-500 bg-green-500/10 text-green-400";
      case "error":
        return "border-red-500 bg-red-500/10 text-red-400";
      default:
        return "border-blue-500 bg-blue-500/10 text-blue-400";
    }
  };

  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return "✔";
      case "error":
        return "✖";
      default:
        return "ℹ";
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`min-w-[260px] px-4 py-3 rounded-xl border backdrop-blur-md shadow-lg 
              flex items-start gap-3 animate-slideIn ${getStyles(toast.type)}`}
          >
            {/* Icon */}
            <div className="text-lg">{getIcon(toast.type)}</div>

            {/* Message */}
            <div className="flex-1 text-sm">{toast.message}</div>

            {/* Close Button */}
            <button
              onClick={() => removeToast(toast.id)}
              className="text-xs opacity-70 hover:opacity-100"
            >
              ✕
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/20 overflow-hidden rounded-b-xl">
              <div className="h-full bg-white animate-progress"></div>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);