
import { useState } from 'react'
import Home from './pages/Home'

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  return (
    <>
    <Home showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
    </>
  )
}

export default App
