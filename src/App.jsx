import { useState } from 'react'
import './App.css'
import Navber from './composnent/navbar'
import Home from './page/Home';
import Shop from './page/shop';
import About from './page/about';
import Blog from './page/blog';
import Contact from './page/contact';
import Login from './page/login';
import {Route, Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
