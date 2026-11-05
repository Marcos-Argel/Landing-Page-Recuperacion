import SectionTitle from '../ui/SectionTitle.jsx'
import steps from '../../data/process.js'

// Sección Proceso: los pasos de cómo trabajamos
function Process() {
  return (
    <section id="proceso" className="bg-soft px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Cómo trabajamos"
          subtitle="Un proceso claro, para que siempre sepas en qué va tu proyecto."
        />

        {/* 1 columna en celular, 2 en tablet, 4 en computador */}
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li key={item.step} className="relative rounded-xl bg-white p-6 shadow-sm">
              <span className="text-4xl font-extrabold text-primary/20">{item.step}</span>
              <h3 className="mt-2 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 leading-7 text-gray-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
