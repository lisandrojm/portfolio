/* src/app/_components/_shared/ThemeSwitcher.tsx */

'use client';

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = (checked: boolean) => {
    const nextTheme = checked ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <div className="cursor-scale small transform transition-transform duration-300 ease-in-out hover:scale-95 hover:opacity-70">
      <DarkModeSwitch checked={currentTheme === 'dark'} onChange={toggleTheme} size={26} moonColor="white" sunColor="black"></DarkModeSwitch>
    </div>
  );
}
