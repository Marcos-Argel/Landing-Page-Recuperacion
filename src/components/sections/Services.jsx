import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="servicios" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Nuestros servicios"
          subtitle="Ofrecemos un portafolio completo para cubrir todas tus necesidades tecnológicas."
        />

        {/* 1 columna en celular, 2 en tablet, 4 en computador */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:text-left"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
