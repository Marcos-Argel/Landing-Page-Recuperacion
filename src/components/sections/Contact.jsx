import { useState } from 'react'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setStatusMessage('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Escribe tu nombre completo.'
    if (!form.email.trim()) {
      nextErrors.email = 'Escribe tu correo electrónico.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Escribe un correo electrónico válido.'
    }
    if (!form.subject.trim()) nextErrors.subject = 'Escribe el asunto de tu mensaje.'
    if (!form.message.trim()) nextErrors.message = 'Escribe el mensaje que quieres compartir.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage('Revisa los campos indicados antes de continuar.')
      return
    }

    setStatusMessage(
      'Los datos son válidos, pero no se enviaron: este formulario aún no está conectado a un servicio de contacto.',
    )
  }

  const fieldClassName =
    'mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20'

  return (
    <section id="contacto" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle
          title="Hablemos de tu proyecto"
          subtitle="Cuéntanos qué tienes en mente. Los campos se validan en tu navegador; el envío requiere conectar un servicio."
        />

        <Card className="p-5 shadow-md sm:p-8">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="contact-name" className="font-medium text-ink">
                  Nombre completo <span aria-hidden="true" className="text-violet-700">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={updateField}
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={fieldClassName}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-1 text-sm text-red-700">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-email" className="font-medium text-ink">
                  Correo electrónico <span aria-hidden="true" className="text-violet-700">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={updateField}
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={fieldClassName}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1 text-sm text-red-700">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-subject" className="font-medium text-ink">
                  Asunto <span aria-hidden="true" className="text-violet-700">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={updateField}
                  aria-required="true"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  className={fieldClassName}
                />
                {errors.subject && (
                  <p id="contact-subject-error" className="mt-1 text-sm text-red-700">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="font-medium text-ink">
                  Mensaje <span aria-hidden="true" className="text-violet-700">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={updateField}
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`${fieldClassName} resize-y`}
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-1 text-sm text-red-700">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-violet-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 focus-visible:ring-offset-2"
              >
                Validar formulario
              </button>
              {statusMessage && (
                <p
                  role={Object.keys(errors).length > 0 ? 'alert' : 'status'}
                  className="text-sm leading-6 text-gray-700"
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </Card>
      </div>
    </section>
  )
}

export default Contact
