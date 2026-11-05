import Button from '../ui/Button.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import pricing from '../../data/pricing.js'

// Sección Precios: planes con lo que incluye cada uno
function Pricing() {
  return (
    <section id="precios" className="bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Planes y precios"
          subtitle="Elige el plan que se ajusta a tu negocio. Todos incluyen diseño adaptable a celular."
        />

        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {pricing.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${plan.featured ? 'border-2 border-primary shadow-lg md:-translate-y-2' : ''}`}
            >
              {plan.featured && (
                <span className="mb-3 self-start rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Recomendado
                </span>
              )}
              <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{plan.description}</p>

              <p className="mt-6">
                <span className="text-3xl font-extrabold text-ink">{plan.price}</span>
                <span className="ml-2 text-sm text-gray-500">{plan.period}</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-0.5 font-bold text-primary" aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contacto"
                variant={plan.featured ? 'primary' : 'outline'}
                className="mt-8 text-center"
              >
                Lo quiero
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
