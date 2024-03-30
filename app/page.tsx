"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  console.log("theme", theme);
  return (
    <>
      <Button
        className="dark:decoration-sky-300"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span className="scale-100 dark:scale-0">라이트</span>
        <span className="scale-0 dark:scale-100">다크</span>
      </Button>
    </>
  );
}
