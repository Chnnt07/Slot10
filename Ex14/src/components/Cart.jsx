import { useCart } from '../contexts/CartContext'

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, totalItems, totalValue } = useCart()

  return (
    <article className="cart-card">
      <div className="section-title">
        <h2>Cart</h2>
        <span className="counter">Items: {totalItems}</span>
      </div>
      {cartItems.length === 0 ? (
        <div className="cart-empty">Your cart is empty. Add a dish to begin.</div>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <h3>{item.name}</h3>
                <p>
                  {item.quantity} × ${item.price}
                </p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove one</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <div>
          <strong>Total items:</strong> {totalItems}
        </div>
        <div>
          <strong>Total value:</strong> ${totalValue.toFixed(2)}
        </div>
        <button onClick={clearCart} disabled={cartItems.length === 0}>
          Clear Cart
        </button>
      </div>
    </article>
  )
}
