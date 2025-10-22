import React from 'react'
import products from '../data/products'
import { useState } from 'react'
import ProductModal from '../components/ProductModal'
import { useCart } from '../context/CartContext'

export default function Tienda(){
  const categories = ['Todos los productos','Accesorios de Reposteria','Accesorios Thermomix','Alimentos y suplementos orgánicos','Asesorías, Capacitaciones y Talleres','Recetarios']
  const [modalProduct, setModalProduct] = useState(null)
  const { addItem } = useCart()

  function openModal(p){ setModalProduct(p) }
  function closeModal(){ setModalProduct(null) }
  function handleAdd(p){ addItem(p,1); closeModal() }

  return (
    <div className="shop-page container-fluid">
      <aside className="shop-sidebar">
        <h3>Navegar por</h3>
        <ul>
          {categories.map((c,i) => <li key={i}><a href="#">{c}</a></li>)}
        </ul>
      </aside>

      <section className="shop-content">
        <div className="container">
          <h1>Tienda Balance</h1>
          <div className="shop-grid">
            {products.concat(products).map(p => (
              <div className="product-card" key={p.id+Math.random()}>
                <img src={p.image} alt={p.name} onClick={() => openModal(p)} style={{cursor:'pointer'}} />
                <h4>{p.name}</h4>
                <p className="price">MX${p.price.toFixed(2)}</p>
                <button className="btn" onClick={() => openModal(p)}>Ver</button>
              </div>
            ))}
          </div>
          <ProductModal product={modalProduct} onClose={closeModal} onAdd={handleAdd} />
        </div>
      </section>
    </div>
  )
}
