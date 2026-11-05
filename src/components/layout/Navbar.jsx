import { useState } from 'react'
import navLinks from '../../data/navLinks.js'

function Navbar() {
  // Controla si el menú del celular está abierto o cerrado
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#inicio" className="text-xl font-bold text-primary">
          Marca
        </a>

        {/* Enlaces para pantallas medianas y grandes */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-sm font-medium hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa: solo se ve en celular */}
        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú desplegable del celular */}
      {open && (
        <ul className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={closeMenu}
                className="block py-3 text-base font-medium hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
