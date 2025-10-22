import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const heroImage = '/hero-1920x980.jpg' // coloca tu imagen en public/hero-1920x980.jpg

  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-label="Hero"
      >
        <div className="hero-inner container-fluid">
          <div className="hero-text">
            <h1 className="hero-title">Balance</h1>
            <p className="hero-sub">by Psic. Marely Moctezuma</p>
          </div>
        </div>
      </section>
      

      {/* Quien Soy - full screen section */}
      <section className="about-screen">
        <div className="about-inner container-fluid">
          <div className="about-left">
            <img src="/about-photo.jpg" alt="Marely Moctezuma" className="about-photo" />
          </div>
          <div className="about-right">
            <h3 className="about-title">Quien Soy?</h3>
            <div className="about-text">
              <p>¡Hola! que gusto verte por aquí! Soy Marely Moctezuma, Psicóloga Clínica, con Especialidad en Educación Integral para la Salud, Educadora en diabetes, Tanatologa y por supuesto Chef de Corazón!</p>

              <p>Amo el tema de la alimentación saludable y la forma en que nuestras emociones intervienen en la elección de cada alimento que ingerimos, la alimentación consciente es la base de un hábito para mantenerse en Balance físico y mental.</p>

              <p>Desde 2021 formo parte de la familia Thermomix México como presentadora oficial y líder de equipo, pero usuaria desde el 2013, justo cuando mi hija mayor nació y llegó este increíble asistente a resolverme la vida en el tema de la cocina!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature two-column section */}
      <section className="feature-section">
        <div className="feature-inner container-fluid">
          <h2 className="feature-title">Balance a través de la alimentación consciente</h2>

          <div className="feature-cols">
            <div className="feature-col">
              <h4>Tu salud mental importa</h4>
              <p>"No hay salud, sin salud mental"; conocer tus emociones te permitirá hacer las pases con tu alimentación de forma consciente y mas amorosa, con hábitos de autocuidado en tu día a día.</p>
            </div>
            <div className="feature-col">
              <h4>Cocina saludable y consciente</h4>
              <p>Nuestras emociones intervienen en la elección de cada alimento, la alimentación consciente es la base de un hábito para mantenernos en balance físico y mental, y poder disfrutar cada alimento sin culpas.</p>
            </div>
          </div>

          <div className="feature-image-wrap">
            <img src="/feature-photo.jpg" alt="plato" className="feature-image" />
          </div>
        </div>
      </section>

    
      {/* Reviews / Testimonials - last section of home (moved here) */}
      <section className="reviews-section">
        <div className="reviews-inner container-fluid">
          <h2 className="reviews-title">Reseñas</h2>

          <div className="reviews-grid">
            {Array.from({length:6}).map((_,i) => (
              <div className="review-card" key={i}>
                <div className="stars">★★★★★</div>
                <p className="review-text">Los talleres de cocina saludable me transformaron, aprendí a cuidar mi alimentación y salud mental.</p>
                <img src="/avatar-placeholder.jpg" alt="avatar" className="review-avatar" />
                <div className="review-name">Persona {i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
