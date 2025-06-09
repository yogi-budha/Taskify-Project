
import { lazy, Suspense, useState } from 'react'
import Loader from './components/Loader'

const Home = lazy(()=>import("./pages/Home"))

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  return (
    <Suspense fallback={<Loader/>}>
    <Home showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
    </Suspense>
  )
}

export default App
