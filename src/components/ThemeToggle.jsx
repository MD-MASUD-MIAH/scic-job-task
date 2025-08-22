"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="toggle"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <span className={`${isDark ? "text-white" : "text-black"}`}>
        {isDark ? "🌙 Dark" : "☀️ Light"}
      </span>
    </label>
  );
};

export default ThemeToggle;