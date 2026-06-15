import { useTheme } from '../contexts/ThemeContext'

export default function ThemeSection() {
  const { themeName, toggleTheme } = useTheme()

  return (
    <section className={`theme-card theme-card--${themeName}`}>
      <div className="theme-header">
        <div>
          <h2>Theme switcher</h2>
          <p>
            Current theme: <strong>{themeName}</strong>
          </p>
        </div>
        <button className="theme-button" onClick={toggleTheme}>
          Switch to {themeName === 'light' ? 'dark' : 'light'}
        </button>
      </div>
    </section>
  )
}
