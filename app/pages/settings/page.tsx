import BaseLayout from "@/app/components/layout/BaseLayout";
import UserSettings from "./UserSettings";
import ThemeSettings from "./ThemeSettings";
import DangerZone from "./DangerZone";

export default function SettingsPage() {
  return (
    <BaseLayout>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
        
        <UserSettings />
        <ThemeSettings />
        <DangerZone />
      </div>
    </BaseLayout>
  );
}