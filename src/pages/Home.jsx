import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Portfolio from '../components/sections/Portfolio.jsx'
import Team from '../components/sections/Team.jsx'
import FAQ from '../components/sections/FAQ.jsx'
import Contact from '../components/sections/Contact.jsx'
import WhatsAppButton from '../components/ui/WhatsAppButton.jsx'
import navLinks from '../data/navLinks.js'

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {navLinks.map((link) => (
          link.id === 'portafolio' ? (
            <Portfolio key={link.id} />
          ) : link.id === 'equipo' ? (
            <Team key={link.id} />
          ) : link.id === 'faq' ? (
            <FAQ key={link.id} />
          ) : link.id === 'contacto' ? (
            <Contact key={link.id} />
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Home
