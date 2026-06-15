import { createContext, useContext, useMemo, useState } from 'react'

const themes = {
  light: {
    foreground: '#111827',
    background: '#f4f6fb',
  },
  dark: {
    foreground: '#f8fbff',
    background: '#08101f',
  },
}

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('light')
  const theme = themes[themeName]
  const toggleTheme = () => setThemeName((current) => (current === 'light' ? 'dark' : 'light'))
  const value = useMemo(() => ({ themeName, theme, toggleTheme }), [themeName])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
