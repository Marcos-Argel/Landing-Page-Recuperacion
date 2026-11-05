import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import testimonials from '../../data/testimonials.js'

// Sección Testimonios: opiniones de clientes (va justo después de Precios)
function Testimonials() {
  return (
    <section className="bg-soft px-4 py-20 sm:py-24" aria-labelledby="titulo-testimonios">
      <div className="mx-auto max-w-6xl">
        <div id="titulo-testimonios">
          <SectionTitle title="Lo que dicen nuestros clientes" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="flex flex-col">
              <span className="text-5xl leading-none text-primary/30" aria-hidden="true">“</span>
              <blockquote className="mt-2 flex-1 leading-7 text-gray-700">{item.quote}</blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
