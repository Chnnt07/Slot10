import './App.css'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { CartProvider } from './contexts/CartContext'
import ThemeSection from './components/ThemeSection'
import DishesList from './components/DishesList'
import Cart from './components/Cart'

function AppContent() {
  const { themeName } = useTheme()

  return (
    <main className={`app theme-${themeName}`}>
      <header>
        <h1>React Context Demo</h1>
        <p>Theme switching and cart state update in real time without refreshing.</p>
      </header>
      <ThemeSection />
      <div className="cart-grid">
        <DishesList />
        <Cart />
      </div>
    </main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
