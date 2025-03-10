import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function ThemeToggle({ isDark, setIsDark }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}