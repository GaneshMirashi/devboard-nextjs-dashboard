import BaseLayout from "@/app/components/layout/BaseLayout";
import UserSettings from "./UserSettings";
import ThemeSettings from "./ThemeSettings";
import DangerZone from "./DangerZone";

export default function SettingsPage() {
  return (
    <BaseLayout>
      <div className="px-8 py-6 space-y-6">

        {/* Title */}
        <div>
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="text-sm text-[var(--muted)]">
            Manage your preferences and account settings
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">

          <UserSettings />
          <ThemeSettings />

        </div>

        {/* Danger Zone full width */}
        <DangerZone />

      </div>
    </BaseLayout>
  );
}