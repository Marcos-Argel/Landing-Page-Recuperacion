import Button from '../ui/Button.jsx'

// Sección principal: lo primero que ve el usuario
export default function Hero() {
  return (
    <section id="inicio" className="bg-soft px-6 py-24 text-center">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
          Impulsamos tu negocio con <span className="text-primary">soluciones digitales</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
          Diseñamos y desarrollamos productos tecnológicos a la medida para llevar tu presencia online al siguiente nivel.
        </p>
        <Button href="#contacto" className="px-8 py-3 text-lg shadow-sm">
          Cotiza ya
        </Button>
      </div>
    </section>
  )
}
