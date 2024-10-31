import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Products'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './Error';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/single-product/:id' element={<SingleProduct />} />
        <Route path='*'  element={<Error />} />
      </Routes>
      <Footer />
    </Router>
     
    </>
  )
}

export default App
