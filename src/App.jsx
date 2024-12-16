import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from './components/ui/button'
import './App.css'
import {Home} from 'lucide-react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Outlet/>
    <Home size={32}  className='' />
    <button className='text-white'>Get Started</button>
  
    </>
  )
}

export default App
