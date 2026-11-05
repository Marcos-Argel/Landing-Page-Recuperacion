import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Portfolio from '../components/sections/Portfolio.jsx'
import navLinks from '../data/navLinks.js'
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";

// Mientras el equipo termina sus secciones, cada una se muestra como un bloque temporal.
// Cuando una sección real esté lista (components/sections/...), se reemplaza aquí.
function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {navLinks.map((link) => (
          link.id === 'portafolio' ? (
            <Portfolio key={link.id} />
          ) : (
          <section
            key={link.id}
            id={link.id}
            className="flex min-h-[60vh] items-center justify-center odd:bg-white even:bg-soft"
          >
            <h2 className="text-2xl font-bold">{link.label}</h2>
          </section>
          )
        ))}
        <Hero />
      <Services />
      </main>
      <Footer />
    </>
  )
}

export default Home
