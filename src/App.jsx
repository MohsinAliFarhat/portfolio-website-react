import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index'
import Home from './components/Home/index';
import About from './components/Home/About/index';
import Contact from './components/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
