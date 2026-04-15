"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function UserSettings() {
  const [name, setName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("username");
    if (saved) setName(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem("username", name);
    toast.success("Profile updated successfully");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Your Name</Label>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Button onClick={handleSave}>
          Save Changes
        </Button>
      </CardContent>
    </Card>
  );
}