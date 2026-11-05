// Planes de la sección Precios. "featured: true" resalta el plan recomendado.
const pricing = [
  {
    name: 'Básico',
    price: '$800.000',
    period: 'pago único',
    description: 'Para negocios que necesitan presencia en internet.',
    features: ['Landing page de una sola página', 'Diseño adaptable a celular', 'Botón de WhatsApp', 'Entrega en 1 semana'],
  },
  {
    name: 'Profesional',
    price: '$1.800.000',
    period: 'pago único',
    description: 'Para empresas que quieren mostrar todos sus servicios.',
    features: ['Sitio de hasta 5 páginas', 'Formulario de contacto', 'Optimización para Google (SEO)', 'Soporte por 1 mes'],
    featured: true,
  },
  {
    name: 'Empresarial',
    price: 'A convenir',
    period: 'según el proyecto',
    description: 'Para proyectos a la medida: tiendas, sistemas y aplicaciones.',
    features: ['Tienda en línea o sistema web', 'Panel de administración', 'Integración con pagos', 'Soporte por 3 meses'],
  },
]

export default pricing
