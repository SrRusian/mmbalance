import React from 'react'

export default function Talleres(){
  const hero = '/talleres-hero-1920x980.jpg'
  const talleres = [
    {id:1,title:'Reposteria Creativa',desc:'Aprende a crear postres saludables',img:'/t1.jpg'},
    {id:2,title:'Proteinas Vegetales',desc:'Aprende técnicas con proteínas vegetales',img:'/t2.jpg'},
    {id:3,title:'Básicos con Thermomix',desc:'Conoce lo básico y facilita tu cocina',img:'/t3.jpg'}
  ]

  return (
    <div>
      <section className="talleres-hero" style={{backgroundImage:`url(${hero})`}} aria-label="Talleres hero"></section>

      <section className="talleres-list-section">
        <div className="talleres-inner container-fluid">
          <h1 className="talleres-title">Talleres de Alimentación Consciente</h1>
          <p className="talleres-sub">Descubre la conexión entre salud mental y alimentación consciente con nuestros talleres.</p>

          <div className="talleres-cards">
            {talleres.map(t => (
              <article className="taller-card" key={t.id}>
                <img src={t.img} alt="" />
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
                <button className="btn">Informacion</button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
