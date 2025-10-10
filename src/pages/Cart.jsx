import React from 'react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeItem, clear } = useCart()
  const total = items.reduce((s, it) => s + it.product.price * it.quantity, 0)

  return (
    <div className="container">
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {items.map(it => (
              <li key={it.product.id} className="cart-item">
                <img src={it.product.image} alt="" />
                <div>
                  <strong>{it.product.name}</strong>
                  <p>Cantidad: {it.quantity}</p>
                  <p>Subtotal: ${ (it.product.price * it.quantity).toFixed(2) }</p>
                  <button onClick={() => removeItem(it.product.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-actions">
            <strong>Total: ${total.toFixed(2)}</strong>
            <button onClick={() => clear()}>Vaciar carrito</button>
            <button onClick={() => alert('Simular checkout')}>Pagar</button>
          </div>
        </div>
      )}
    </div>
  )
}
