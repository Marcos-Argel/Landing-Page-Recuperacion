// TODO: cambiar estos datos por los reales del proyecto
const contacto = {
  email: 'contacto@ejemplo.com',
  telefono: '+57 300 000 0000',
}

const redes = [
  { nombre: 'Instagram', url: 'https://instagram.com' },
  { nombre: 'Facebook', url: 'https://facebook.com' },
  { nombre: 'WhatsApp', url: 'https://wa.me/573000000000' },
]

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-ink text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="text-xl font-bold text-white">Marca</p>
          <p className="mt-2 text-sm">Texto corto que describe el proyecto.</p>
        </div>

        <div>
          <p className="font-semibold text-white">Contacto</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>{contacto.email}</li>
            <li>{contacto.telefono}</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Redes</p>
          <ul className="mt-2 space-y-1 text-sm">
            {redes.map((red) => (
              <li key={red.nombre}>
                <a href={red.url} target="_blank" rel="noreferrer" className="hover:text-white">
                  {red.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-xs">
        © {year} Marca. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
