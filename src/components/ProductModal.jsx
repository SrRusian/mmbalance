import React from 'react'

export default function ProductModal({ product, onClose, onAdd }){
  if(!product) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="product-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        <div className="modal-grid">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="modal-desc">{product.description}</p>
            <p className="modal-price">MX${product.price.toFixed(2)}</p>
            <div className="modal-actions">
              <button className="btn primary" onClick={() => { onAdd(product); }}>Agregar al carrito</button>
              <button className="btn" onClick={onClose}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
