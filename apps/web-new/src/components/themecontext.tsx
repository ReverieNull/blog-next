// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark' | 'eye';

interface ThemeContextType {
  mode: ThemeMode;
  toggleDark: () => void;
  toggleEye: () => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme) {
      setMode(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  const applyTheme = (theme: ThemeMode) => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  };

  const toggleDark = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    applyTheme(newMode);
  };

  const toggleEye = () => {
    const newMode = mode === 'eye' ? 'light' : 'eye';
    setMode(newMode);
    applyTheme(newMode);
  };

  const resetTheme = () => {
    setMode('light');
    applyTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleDark, toggleEye, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};