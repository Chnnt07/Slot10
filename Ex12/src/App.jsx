import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h2>1. Counter</h2>
      <p>Current count: <strong>{count}</strong></p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </section>
  )
}

function ControlledInput() {
  const [text, setText] = useState('')

  return (
    <section>
      <h2>2. Controlled Input</h2>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Type something..."
      />
      <p>Typed text: <strong>{text}</strong></p>
    </section>
  )
}

function ToggleVisibility() {
  const [visible, setVisible] = useState(false)

  return (
    <section>
      <h2>3. Toggle Visibility</h2>
      <button onClick={() => setVisible((prev) => !prev)}>
        {visible ? 'Hide' : 'Show'} text
      </button>
      {visible && <p>This text is now visible.</p>}
    </section>
  )
}

function TodoList() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  const addTodo = () => {
    const trimmed = task.trim()
    if (!trimmed) return
    setTodos((current) => [...current, trimmed])
    setTask('')
  }

  const removeTodo = (index) => {
    setTodos((current) => current.filter((_, i) => i !== index))
  }

  return (
    <section>
      <h2>4. Todo List</h2>
      <div>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="New todo item"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.length === 0 ? (
          <li>No todos yet.</li>
        ) : (
          todos.map((todo, index) => (
            <li key={`${todo}-${index}`}>
              {todo}
              <button onClick={() => removeTodo(index)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

function ColorSwitcher() {
  const [color, setColor] = useState('red')
  const options = ['red', 'blue', 'green', 'yellow']

  return (
    <section>
      <h2>5. Color Switcher</h2>
      <label>
        Pick a color:{' '}
        <select value={color} onChange={(event) => setColor(event.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <div
        style={{
          marginTop: 12,
          minHeight: 80,
          border: '1px solid #999',
          backgroundColor: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color === 'yellow' ? '#000' : '#fff',
        }}
      >
        Background color: {color}
      </div>
    </section>
  )
}

function SearchFilter() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']
  const [query, setQuery] = useState('')

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <section>
      <h2>6. Search Filter</h2>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search items"
      />
      <ul>
        {filtered.length === 0 ? (
          <li>No matching items.</li>
        ) : (
          filtered.map((item) => <li key={item}>{item}</li>)
        )}
      </ul>
    </section>
  )
}

function DragAndDropList() {
  const [items, setItems] = useState([
    'First item',
    'Second item',
    'Third item',
    'Fourth item',
  ])
  const [draggingItem, setDraggingItem] = useState(null)

  const handleDragStart = (index) => {
    setDraggingItem(index)
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (index) => {
    if (draggingItem === null || draggingItem === index) {
      setDraggingItem(null)
      return
    }

    setItems((current) => {
      const nextItems = [...current]
      const [removed] = nextItems.splice(draggingItem, 1)
      nextItems.splice(index, 0, removed)
      return nextItems
    })
    setDraggingItem(null)
  }

  const handleDragEnd = () => {
    setDraggingItem(null)
  }

  return (
    <section>
      <h2>7. Drag and Drop List</h2>
      <p>Drag an item and drop it in a new position.</p>
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            style={{
              opacity: draggingItem === index ? 0.5 : 1,
              border: '1px solid #ccc',
              padding: '8px 12px',
              marginBottom: 8,
              cursor: 'move',
              background: '#f9f9f9',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

function App() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1>React Exercise Examples</h1>
      <Counter />
      <ControlledInput />
      <ToggleVisibility />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragAndDropList />
    </main>
  )
}

export default App
