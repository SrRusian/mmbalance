import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Talleres from './pages/Talleres'
import Recetarios from './pages/Recetarios'
import Tienda from './pages/Tienda'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/recetarios" element={<Recetarios />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
