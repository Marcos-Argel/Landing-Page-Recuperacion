import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import projects from '../../data/projects.js'

function ProjectPreview({ accent, index }) {
  return (
    <div className={`relative h-52 overflow-hidden rounded-t-xl bg-gradient-to-br ${accent}`}>
      <div className="absolute inset-4 rounded-lg bg-white/95 shadow-xl">
        <div className="flex h-6 items-center gap-1.5 border-b border-gray-200 px-3">
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
        </div>
        <div className="grid grid-cols-[0.32fr_1fr] gap-3 p-3">
          <div className="flex h-36 flex-col gap-2 rounded-md bg-gray-100 p-2">
            <span className="h-2 w-3/4 rounded bg-gray-300" />
            <span className="h-2 w-full rounded bg-gray-200" />
            <span className="h-2 w-1/2 rounded bg-gray-200" />
          </div>
          <div className="flex flex-col gap-3">
            <div className={`h-16 rounded-md bg-gradient-to-r ${accent}`} />
            <div className="grid grid-cols-2 gap-2">
              {[0, 1].map((item) => (
                <div key={item} className="h-16 rounded-md border border-gray-100 bg-gray-50 p-2">
                  <span className="mb-2 block h-3 w-3 rounded-full bg-gray-200" />
                  <span className="block h-2 w-5/6 rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )
}

function Portfolio() {
  return (
    <section id="portafolio" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Nuestro portafolio"
          subtitle="Proyectos digitales creados para conectar marcas con las personas que importan."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="group">
              <Card className="h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <ProjectPreview accent={project.accent} index={index} />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{project.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{project.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.title}`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-gray-600">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
