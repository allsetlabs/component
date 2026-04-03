import { useState, useEffect, ReactNode, useCallback } from 'react';
import { ThemeContext, Theme, ResolvedTheme, ThemeContextType } from './context';

interface ThemeProviderProps {
  children: ReactNode;
  /**
   * The target element where theme classes should be applied.
   * Can be either the container div or body element.
   */
  targetElement: HTMLElement | null;
}

const STORAGE_KEY = 'theme';

/**
 * Get the system's preferred color scheme
 */
function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Get the stored theme from localStorage
 */
function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
}

/**
 * Resolve the actual theme based on preference
 */
function resolveTheme(theme: Theme): ResolvedTheme {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
}

export function ThemeProvider({ children, targetElement }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(getStoredTheme())
  );

  // Apply theme class to target element
  const applyTheme = useCallback(
    (resolved: ResolvedTheme) => {
      if (!targetElement) return;
      if (resolved === 'dark') {
        targetElement.classList.add('dark');
      } else {
        targetElement.classList.remove('dark');
      }
    },
    [targetElement]
  );

  // Listen for system theme changes when theme is 'system'
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent): void => {
      const newResolved: ResolvedTheme = e.matches ? 'dark' : 'light';
      setResolvedTheme(newResolved);
      applyTheme(newResolved);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme]);

  // Apply theme when resolvedTheme changes
  useEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme, applyTheme]);

  /**
   * Set theme and update the resolved theme
   */
  const setTheme = useCallback(
    (newTheme: Theme): void => {
      setThemeState(newTheme);
      localStorage.setItem(STORAGE_KEY, newTheme);
      const newResolved = resolveTheme(newTheme);
      setResolvedTheme(newResolved);
      applyTheme(newResolved);
    },
    [applyTheme]
  );

  const value: ThemeContextType = {
    theme,
    resolvedTheme,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
