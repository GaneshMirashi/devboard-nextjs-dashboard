import "./globals.css";
import { ToastProvider } from "./components/toast/ToastProvider";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <Toaster />
        {children}
        </ToastProvider>  
        </body>
    </html>
  );
}