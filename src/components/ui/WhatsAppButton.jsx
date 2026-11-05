import siteConfig from '../../data/siteConfig.js'

// El número se configura en src/data/siteConfig.js
const whatsappPhone = siteConfig.whatsapp
const whatsappText = encodeURIComponent(siteConfig.whatsappMessage)

function WhatsAppButton() {
  const className =
    'fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-200 hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-7 sm:right-7'

  const icon = (
    <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.48 15.01L2.5 22l5.12-1.34A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.18 8.18 0 1 1 12.04 20.1Zm4.49-6.13c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.17-.3.19-.56.06-.25-.12-1.07-.39-2.04-1.24-.75-.67-1.25-1.5-1.4-1.76-.15-.25-.02-.39.1-.52.11-.1.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.79-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.16 1.77 2.7 4.29 3.78.6.26 1.07.41 1.44.52.6.19 1.14.16 1.57.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  )

  if (!whatsappPhone) {
    return (
      <button
        type="button"
        disabled
        title="Configura el número de WhatsApp del equipo para activar este botón."
        aria-label="WhatsApp no disponible: configura el número del equipo"
        className={`${className} cursor-not-allowed opacity-70`}
      >
        {icon}
      </button>
    )
  }

  return (
    <a
      href={`https://wa.me/${whatsappPhone}?text=${whatsappText}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar al equipo por WhatsApp (abre una nueva pestaña)"
      className={className}
    >
      {icon}
    </a>
  )
}

export default WhatsAppButton
