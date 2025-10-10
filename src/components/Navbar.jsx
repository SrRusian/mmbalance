import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner container-fluid">
        <div className="brand">
          <Link to="/" className="brand-link">
            <img src="/logo192.png" alt="logo" className="brand-logo" />
            <span className="brand-title">Balance</span>
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/">INICIO</Link>
          <Link to="/talleres">TALLERES</Link>
          <Link to="/asesorias">ASESORIAS</Link>
          <Link to="/productos">PRODUCTOS</Link>
          <Link to="/tienda">TIENDA</Link>
          <Link to="/unete">UNETE</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/chat">CHAT</Link>
        </nav>
        <div className="nav-actions">
          <Link to="/cart" className="cart-btn" aria-label="Carrito">🛒</Link>
        </div>
      </div>
    </header>
  )
}
