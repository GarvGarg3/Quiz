import { useState } from 'react'
import Quiz from './components/Quiz.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quiz/>
    </>
  )
}

export default App
