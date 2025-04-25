import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './components/Registration'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Registration />} />
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
