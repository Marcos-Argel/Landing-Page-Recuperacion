import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle.jsx'

const questions = [
  {
    question: '¿Qué servicios ofrecen?',
    answer:
      'Diseño y desarrollo de páginas web, tiendas en línea y aplicaciones a la medida. Revisa la sección Servicios para ver el detalle.',
  },
  {
    question: '¿Cómo puedo iniciar una conversación con el equipo?',
    answer:
      'Completa el formulario de contacto o escríbenos por WhatsApp con el botón verde de la esquina.',
  },
  {
    question: '¿Puedo consultar por WhatsApp?',
    answer:
      'Sí. El botón flotante de la esquina abre un chat directo con el equipo.',
  },
  {
    question: '¿Cuánto cuesta un proyecto?',
    answer:
      'Depende del alcance. En la sección Precios tienes tres planes de referencia y para proyectos especiales hacemos una cotización a la medida.',
  },
]

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null)

  return (
    <section id="faq" className="bg-soft py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más comunes antes de empezar."
        />

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-5 shadow-sm sm:px-7">
          {questions.map((item, index) => {
            const isOpen = openQuestion === index
            const answerId = `faq-answer-${index}`

            return (
              <article key={item.question} className="py-2">
                <h3>
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-ink transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:text-lg"
                  >
                    {item.question}
                    <svg
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="pb-4 pr-8 leading-7 text-gray-600"
                  >
                    {item.answer}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
