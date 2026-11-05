import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

const teamMembers = [
  {
    name: 'Luis Vergara',
    role: 'Base y navegación',
    description: 'Preparó la estructura base del proyecto, la navegación y el pie de página.',
    initials: 'LV',
    photo: null,
  },
  {
    name: 'Santiago Cogollo',
    role: 'Portada y servicios',
    description: 'Desarrolló la portada y la presentación de los servicios.',
    initials: 'SC',
    photo: null,
  },
  {
    name: 'Juan Pablo Parra',
    role: 'Portafolio',
    description: 'Diseñó la sección que presenta los proyectos del equipo.',
    initials: 'JP',
    photo: null,
  },
  {
    name: 'Juan Pablo Padilla',
    role: 'Equipo, contacto y FAQ',
    description: 'Desarrolló la sección del equipo, las preguntas frecuentes y el contacto.',
    initials: 'JP',
    photo: null,
  },
  {
    name: 'Marcos Argel',
    role: 'Proceso y precios',
    description: 'Está a cargo de las secciones de proceso, precios y testimonios.',
    initials: 'MA',
    photo: null,
  },
]

function Team() {
  return (
    <section id="equipo" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Conoce al equipo"
          subtitle="Un equipo colaborativo que aporta su experiencia para construir esta propuesta digital."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group h-full text-center transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={`Fotografía de ${member.name}`}
                  className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-soft"
                />
              ) : (
                <div
                  aria-label={`Avatar provisional de ${member.name}`}
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-2xl font-bold text-white ring-4 ring-soft"
                >
                  {member.initials}
                </div>
              )}
              <h3 className="mt-5 text-xl font-bold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>
              <p className="mt-3 leading-7 text-gray-600">{member.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
