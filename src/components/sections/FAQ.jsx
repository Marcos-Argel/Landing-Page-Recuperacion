import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle.jsx'

const questions = [
  {
    question: '¿Qué servicios presenta esta landing page?',
    answer:
      'La página reúne la información del proyecto, sus servicios, el portafolio, el equipo y las formas de contacto.',
  },
  {
    question: '¿Cómo puedo iniciar una conversación con el equipo?',
    answer:
      'Puedes completar el formulario de contacto. Mientras no se conecte un servicio de envío, el formulario solo valida los datos y no los transmite.',
  },
  {
    question: '¿Puedo consultar por WhatsApp?',
    answer:
      'Sí. El botón flotante abrirá un chat cuando se configure el número de WhatsApp del equipo en el componente correspondiente.',
  },
  {
    question: '¿Cómo se pueden actualizar los integrantes?',
    answer:
      'Los nombres, roles, descripciones e imágenes están organizados en un arreglo dentro de la sección Equipo.',
  },
]

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null)

  return (
    <section id="faq" className="bg-soft py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle
          title="Preguntas frecuentes"
          subtitle="Resolvemos algunas dudas sobre el proyecto y las formas de contacto."
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
