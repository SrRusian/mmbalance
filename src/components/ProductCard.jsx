import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <div className="card-actions">
          <button onClick={() => addItem(product, 1)}>Agregar</button>
          <Link to={`/product/${product.id}`}>Ver</Link>
        </div>
      </div>
    </div>
  )
}
