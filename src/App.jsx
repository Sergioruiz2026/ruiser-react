import './App.css'

function App() {
  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Volver al inicio">
          <span className="wordmark-mark">SR</span>
          <span>Perfil profesional</span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#experiencia">Experiencia</a>
          <a href="#formacion">Formación</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <button className="print-button" type="button" onClick={() => window.print()}>
          <span aria-hidden="true">↗</span> Imprimir CV
        </button>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Disponible para nuevos desafíos <span></span></p>
          <h1>Sergio Antonio<br /><em>Ruiz Espinoza</em></h1>
          <p className="hero-role">Administrador · Técnico en Mecánica de Combustión Interna</p>
          <p className="hero-intro">Experiencia, responsabilidad y una vocación constante por aprender. Convierto cada desafío en una oportunidad para aportar orden, compromiso y resultados.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:ruiz.2006@hotmail.com">Hablemos <span>→</span></a>
            <a className="button button-quiet" href="#experiencia">Conocer trayectoria <span>↓</span></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Información de contacto">
          <div className="portrait-placeholder">SR</div>
          <div className="hero-location"><span className="location-dot"></span> Villa Alemana, Chile</div>
          <div className="hero-index">01 <span>/</span> 04</div>
        </div>
      </section>

      <section className="statement-section">
        <p className="section-kicker">01 — Sobre mí</p>
        <div className="statement-content">
          <h2>Una forma de trabajar basada en la <span>confianza.</span></h2>
          <div className="statement-text">
            <p>Me considero una persona responsable y eficiente, capaz de adaptarme a diferentes entornos y cumplir con las tareas asignadas con puntualidad y calidad.</p>
            <p>Mi principal fortaleza es la disposición para aprender, la perseverancia y la capacidad de trabajar de manera organizada y enfocada en los resultados.</p>
          </div>
        </div>
      </section>

      <section className="experience-section content-section" id="experiencia">
        <div className="section-heading"><p className="section-kicker">02 — Experiencia</p><span>2011 — 2024</span></div>
        <article className="experience-card">
          <div className="experience-period">Nov 2011<br /><span>Jul 2024</span></div>
          <div className="experience-main">
            <p className="card-label">Julia y Tornero Limitada · Calzados Ferracini</p>
            <h2>Administrador <span>(Jefe de Local)</span></h2>
            <p>Comencé como part time y fui creciendo dentro de la organización hasta asumir la jefatura de local. Lideré la operación de tiendas en El Belloto, Calama, Puerto Montt y Viña del Mar.</p>
            <div className="experience-tags"><span>Gestión de equipos</span><span>Administración</span><span>Operaciones</span></div>
          </div>
          <div className="experience-arrow" aria-hidden="true">↗</div>
        </article>
      </section>

      <section className="education-section content-section" id="formacion">
        <div className="section-heading"><p className="section-kicker">03 — Formación</p><span>Aprendizaje continuo</span></div>
        <div className="education-grid">
          <article className="education-card featured-education"><p className="card-label">En curso · 2026 — Presente</p><h3>Ingeniería en Informática</h3><p>INACAP</p><span className="education-number">01</span></article>
          <article className="education-card"><p className="card-label">Titulado · 2000 — 2001</p><h3>Técnico Nivel Superior en Mecánica de Combustión Interna</h3><p>Academia Politécnica Naval</p><span className="education-number">02</span></article>
        </div>
        <div className="secondary-education"><div><p className="card-label">Enseñanza media y básica</p><p><strong>Escuela de Grumetes</strong> · 1997 — 1998</p><p><strong>Liceo Técnico Profesional Mannheim</strong> · 1993 — 1996</p><p><strong>Colegio Exequiel Puelma Silva</strong> · 1983 — 1992</p></div><div className="skills-block"><p className="card-label">Habilidades</p><p><strong>Inglés</strong> · Básico</p><p><strong>Microsoft Excel</strong> · Básico</p></div></div>
      </section>

      <footer className="contact-footer" id="contacto">
        <div><p className="section-kicker">04 — Contacto</p><h2>Construyamos el<br /><em>próximo capítulo.</em></h2></div>
        <div className="contact-details"><a href="mailto:ruiz.2006@hotmail.com">ruiz.2006@hotmail.com <span>↗</span></a><a href="tel:+56997131557">+56 9 9713 1557 <span>↗</span></a><p>Villa Alemana · V Región de Valparaíso, Chile</p></div>
      </footer>
      <div className="site-footer"><span>© 2026 Sergio Antonio Ruiz Espinoza</span><span>Técnico · Administrador · Estudiante</span></div>
    </main>
  )
}

export default App
