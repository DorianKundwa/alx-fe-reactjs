import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', padding: '16px' }}>
      <p style={{ fontSize: '18px', margin: 0 }}>Current Count: {count}</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
