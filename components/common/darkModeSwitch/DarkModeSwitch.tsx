"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
}
