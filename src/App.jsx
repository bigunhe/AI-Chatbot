import { useState } from 'react'
import Chatbot from './AI/chatbot'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Chatbot />
    </div>
  )
}

export default App
