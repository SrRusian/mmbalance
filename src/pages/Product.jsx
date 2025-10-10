import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'

export default function Product() {
  const { id } = useParams()
  const product = products.find(p => String(p.id) === id)
  const { addItem } = useCart()

  if (!product) return <div className="container">Producto no encontrado</div>

  return (
    <div className="container">
      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <button onClick={() => addItem(product, 1)}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}
