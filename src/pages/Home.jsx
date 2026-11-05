import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Hero from '../components/sections/Hero.jsx'
import Services from '../components/sections/Services.jsx'
import Portfolio from '../components/sections/Portfolio.jsx'
import Process from '../components/sections/Process.jsx'
import Pricing from '../components/sections/Pricing.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import Team from '../components/sections/Team.jsx'
import FAQ from '../components/sections/FAQ.jsx'
import Contact from '../components/sections/Contact.jsx'
import WhatsAppButton from '../components/ui/WhatsAppButton.jsx'
import navLinks from '../data/navLinks.js'

// Secciones terminadas: el id del menú (navLinks.js) -> su componente o componentes.
// Para agregar la tuya: impórtala arriba y añade una línea aquí con tu id.
// Las que no estén aquí se muestran como bloque temporal.
const secciones = {
  inicio: [Hero],
  servicios: [Services],
  portafolio: [Portfolio],
  proceso: [Process],
  precios: [Pricing, Testimonials],
  equipo: [Team],
  faq: [FAQ],
  contacto: [Contact],
}

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {navLinks.map((link) => {
          const componentes = secciones[link.id]
          if (componentes) {
            return componentes.map((Seccion, i) => <Seccion key={`${link.id}-${i}`} />)
          }

          return (
            <section
              key={link.id}
              id={link.id}
              className="flex min-h-[60vh] items-center justify-center odd:bg-white even:bg-soft"
            >
              <h2 className="text-2xl font-bold">{link.label}</h2>
            </section>
          )
        })}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Home
