import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (dish) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === dish.id)
      if (existing) {
        return current.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { ...dish, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((current) =>
      current.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 })
          }
        } else {
          acc.push(item)
        }
        return acc
      }, []),
    )
  }

  const clearCart = () => setCartItems([])

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalValue = cartItems.reduce((sum, item) => sum + item.quantity * Number(item.price), 0)
  const value = useMemo(
    () => ({ cartItems, addToCart, removeFromCart, clearCart, totalItems, totalValue }),
    [cartItems, totalItems, totalValue],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
