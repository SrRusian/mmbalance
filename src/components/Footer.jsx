import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner container-fluid">
        <div className="footer-left">
          <div className="meta-small">Alimentacion y salud mental</div>
          <h2 className="footer-brand">Balance</h2>
          <div className="meta-small">Salud mental y fisica</div>

          <div className="socials">
            <a href="#" aria-label="facebook">f</a>
            <a href="#" aria-label="instagram">ig</a>
            <a href="#" aria-label="youtube">yt</a>
            <a href="#" aria-label="whatsapp">wa</a>
            <a href="#" aria-label="tiktok">tt</a>
          </div>

          <div className="copyright">© 2024. All rights reserved.<br/>by Marely Moctezuma</div>
        </div>

        <div className="footer-right">
          <div className="contact-info">
            <div>contactame</div>
            <div className="muted">contacto@mmbalance.com.mx</div>
          </div>
          <div className="newsletter">
            <label className="sr-only">Ingresa tu correo electronico</label>
            <input className="email-input" placeholder="Tu correo aqui por favor" />
            <button className="btn-send">Enviar Informacion</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
