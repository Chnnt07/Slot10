import { useCart } from '../contexts/CartContext'

const dishes = [
  {
    id: 0,
    name: 'Uthappizza',
    category: 'mains',
    label: 'Hot',
    price: '4.99',
    description:
      'A unique combination of Indian Uthappam and Italian pizza, topped with olives, cherry tomatoes and paneer.',
  },
  {
    id: 1,
    name: 'Zucchipakoda',
    category: 'appetizer',
    label: '',
    price: '1.99',
    description:
      'Deep fried zucchini coated with mildly spiced chickpea flour batter, served with tamarind sauce.',
  },
  {
    id: 2,
    name: 'Vadonut',
    category: 'appetizer',
    label: 'New',
    price: '1.99',
    description: 'A quintessential ConFusion experience — is it a vada or is it a donut?',
  },
  {
    id: 3,
    name: 'ElaiCheese Cake',
    category: 'dessert',
    label: '',
    price: '2.99',
    description:
      'A delectable semi-sweet New York style cheesecake with graham cracker crust and cardamom spice.',
  },
]

export default function DishesList() {
  const { addToCart, totalItems } = useCart()

  return (
    <article className="dishes-list">
      <div className="section-title">
        <h2>Menu</h2>
        <span className="counter">Cart count: {totalItems}</span>
      </div>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} className="dish-card">
            <div className="dish-meta">
              <div>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
              <div>
                <div className="dish-price">${dish.price}</div>
                {dish.label && <span className="dish-label">{dish.label}</span>}
              </div>
            </div>
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </article>
  )
}
