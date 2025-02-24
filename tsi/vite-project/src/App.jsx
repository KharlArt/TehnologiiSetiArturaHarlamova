import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Header from './components/Header'
import About from './pages/about'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-blue-500 text-4xl' ><Header/></div>
      <div className='bg-red-500 text-6xl'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        </BrowserRouter>
      </div>
      <div className='bg-yellow-500 text-4xl'><Footer/></div>
    </>
  )
}

export default App
